'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

var processData = function(req, res, next) {
  var data = '';
  req.on('data', function(reqData) {
    data = data + reqData.toString();
  });
  req.on('end', function(endData) {
    req.body = data;
    next();
  });
};

app.post('/:note', processData, function(req, res) {
  fs.writeFile(__dirname + '/data/'+req.params.note + '.json', req.body + ',');
  res.send("Post received");
});

app.get('/:note', function(req, res){
  fs.readFile(__dirname + '/data/'+ req.params.note + '.json', function(err, data){
    if (err) throw err;
    res.send(data.toString());
  });
});

app.listen(3000, function() {
  console.log('server up');
});