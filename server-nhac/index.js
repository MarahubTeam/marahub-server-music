var bodyParser = require('body-parser');
var path = require('path');
var getYoutubeData = require('./youtube-search');

/*************** CONFIGURATIONS ***************/
var opts = {
  maxResults: 12,
  type: 'video',
  key: 'AIzaSyDHH0fQzsUxIiZlpFOQyFaT2s3zBdP2UeA',
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

/*************** SERVER ***************/

const express = require('express');
const port = 4444;

var cors = require('cors');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/dist')));

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
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));
