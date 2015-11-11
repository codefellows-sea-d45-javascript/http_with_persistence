'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

var process = function(req, res, next) {
  var info = '';
  req.on('info', function(reqData) {
    info += reqData.toString();
  });
  req.on('end', function() {
    req.body = info;
    next();
  });
};

app.post('/note', process, function(req, res) {
  fs.writeFile(__dirname + '/data/note.json', req.body)
});

app.get('/note', function(req, res) {
  fs.readFile(__dirname + '/data/note.json', function(err, data) {
    res.send(data.toString());
  });
});

app.listen(3000, function() {
  console.log('server up');
});