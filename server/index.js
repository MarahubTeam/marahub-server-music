require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const lowdb = require('lowdb');
const lowdbFileSync = require('lowdb/adapters/FileSync');

const getYoutubeData = require('./youtube-search');

/*************** CONFIGURATIONS ***************/
const opts = {
  maxResults: 5,
  type: 'video',
  key: process.env.YOUTUBE_KEY,
  metadata: {
    duration: true,
    statistics: true
  }
};

/*************** GLOBAL VARIABLES ***************/

let videos = [];
let trendingVideos = {
  createdTime: '',
  items: []
};
let hostVol = 50;

/*************** LOWDB (JSON DB) ***************/

const dbFile = './frequent-songs.json';
let isExistingFile = true;

try {
  if (!fs.existsSync(dbFile)) {
    isExistingFile = false;
    fs.writeFileSync(dbFile, '{}', 'utf8');
  }
} catch (err) {
  console.error(err);
}

const lowdbAdapter = new lowdbFileSync(dbFile);
const db = lowdb(lowdbAdapter);

// Set some defaults (required if your JSON file is empty)
if (!isExistingFile) {
  db.defaults({ songs: [] })
  .write();
}

/*************** SERVER ***************/

const express = require('express');
const port = process.env.PORT;

const cors = require('cors');
const app = require('express')();
const http = require('http').createServer(app);
let io;
io = require('socket.io')(http);

// parse application/json
app.use(bodyParser.json());

app.use(cors());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

/***************APIs ***************/

app.get('/api/search', (req, res) => {
  const queryParams = {
    q: req.query.q,
    part: opts.part || 'snippet',
    maxResults: opts.maxResults || 30
  };

  getYoutubeData(opts, 'search', queryParams, function(err, results) {
    if (err) return console.log(err);
    res.send(results);
  });
});

app.get('/api/trending', (req, res) => {
  const today = new Date();
  const currentDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  // Get cache trending result on current date
  if (trendingVideos.createdTime === currentDate && trendingVideos.items.length > 0) {
    return res.send(trendingVideos.items);
  }

  const queryParams = {
    chart: 'mostPopular',
    regionCode: 'VN',         // The parameter value is an ISO 3166-1 alpha-2 country code (https://www.iban.com/country-codes)
    part: opts.part || 'snippet',
    maxResults: 100
  };

  getYoutubeData(opts, 'trending', queryParams, function(err, results) {
    if (err) return console.log(err);

    // Save trending cache
    trendingVideos.createdTime = currentDate;
    trendingVideos.items = [...results];

    res.send(results);
  });
});

app.get('/api/list', (req, res) => {
  res.send(videos);
});

app.post('/api/frequent-songs', (req, res) => {
  let song = req.body || null;

  if (song && song.id) {
    try {
      const isExistingSong = db.get('songs')
                              .find({ id: song.id })
                              .value();

      if (isExistingSong) {
        // Update existing song in db
        db.get('songs')
          .find({ id: song.id })
          .assign({
            addFrequentSongTime: new Date()
          })
          .update('playCount', count => count + 1)
          .write();
      } else {
        // Add new song into db
        song.playCount = 1;
        song.addFrequentSongTime = new Date();

        db.get('songs')
          .push(song)
          .write();
      }

      res.send({ isSuccess: true });
    } catch (err) {
      throw new Error(err);
    }
  } else {
    res.status(400).send({ isSuccess: false });
  }
});

app.get('/api/frequent-songs', (req, res) => {
  try {
    const songs = db.get('songs')
                    .orderBy(['playCount', 'addFrequentSongTime'], ['desc', 'desc'])
                    .take(20)
                    .value();

    res.send(songs);
  } catch (err) {
    throw new Error(err);
  }
});
app.post('/api/add-music', (req, res) => {
  let music = req.body;
  if (!music) {
      return res.status(400).send({ message: 'No music data provided.' });
  }
  videos.push(music);
  io.emit('add-music', videos);
  res.send({ message: 'Music added successfully.' });
});

app.post('/api/add-music-youtube-link', (req, res) => {
  const youtubeLink = req.body.youtubeLink;
  // console.log(youtubeLink)

  // Extract videoId from youtubeLink
  const videoId = youtubeLink.split('v=')[1];

  // Define YouTube API options
  const opts = {
    maxResults: 1,
    type: 'video',
    key: process.env.YOUTUBE_KEY,
    metadata: {
      duration: true,
      statistics: true
    }
  };

  // Define query parameters
  const params = {
    id: videoId,
    part: opts.part || 'snippet',
    maxResults: opts.maxResults || 1
  };

  // Fetch YouTube video data
  getYoutubeData(opts, 'video', params, function(err, results) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Server error' });
    } else {
      // If no results are returned, the video does not exist
      if (results.length === 0) {
        res.status(404).send({ message: 'Video does not exist' });
      } else {
        // If results are returned, the video exists
        // Add the video data to the 'videos' array
        videos.push(results[0]);
        io.emit('add-music', videos)
        res.send({ message: 'Video added successfully', video: results[0] });
        
      }
    }
  });
});


/*************** WEB SOCKETS ***************/

io.on('connection', function(socket){
  socket.on('add-music', function(music) {
    videos.push(music);
    io.emit('add-music', videos);
  });

  socket.on('next-music', function() {
    videos.shift();
    io.emit('next-music', videos);
  });

  socket.on('remove-music', function(index) {
    videos.splice(index, 1);
    io.emit('remove-music', videos);
  });

  socket.on('clear-music', function() {
    videos = [];
    io.emit('clear-music', videos);
  });

  socket.on('host-vol', function(vol) {
    hostVol = parseInt(vol);
    io.emit('host-vol', hostVol);
  });

  socket.on('get-host-vol', function() {
    io.emit('host-vol', hostVol);
  });

  socket.on('change-vol', function(vol) {
    hostVol = parseInt(vol);
    io.emit('change-vol', vol);
  });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));
