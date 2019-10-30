var search = require('youtube-search');
var bodyParser = require('body-parser');
var path = require('path');

var opts = {
  maxResults: 10,
  type: 'video',
  key: 'AIzaSyDaCfgczoORQA1jH6z1WU-vFcFvp52CRz8',
  metadata: {
    duration: true,
    statistics: true
  }
};

const express = require('express');
const port = 4444;

var cors = require('cors');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let videos = [];

app.use(express.static(path.join(__dirname, '/dist')));

// parse application/json
app.use(bodyParser.json());

app.use(cors())
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

app.get('/api/search', (req, res) => {
    search(req.query.q, opts, function(err, results) {
      if(err) return console.log(err);
      res.send(results);
    });
})

app.get('/api/list', (req, res) => {
    res.send(videos);
})

io.on('connection', function(socket){
    socket.on('add-music', function(music) {
        videos.push(music);
        io.emit('add-music', videos);
    });

    socket.on('remove-music', function(music) {
        videos.shift();
        io.emit('remove-music', videos);
    });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`))