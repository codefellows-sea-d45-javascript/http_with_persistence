'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

var process = function(req, res, next) {
  var data = '';

  req.on('data', function(chunk) {
    data += chunk.toString();
  });
  req.on('end', function() {
    req.body = data;
    next();
  });
  req.on('error', function(err) {
    console.log(err.stack);
  });
};

app.post('/file', process, function(req, res) {

  fs.appendFile(__dirname + '/data/file.json', req.body + ',',
    function(err) {
        if (err) throw err;

        res.send('thanks for the data!');
    });
});

app.get('/file', function(req, res) {

  fs.readFile(__dirname + '/data/file.json', function(err, data) {
    res.send(data.toString());
  });
});

app.listen(3999, function() {
  console.log('server up');
});
