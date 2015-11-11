'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/json_data', function(req, res) {
  var fileNames = fs.readdirSync(__dirname + '/json_data/');
  res.send(fileNames);
  res.end();
  console.log('reading directory');
});

app.post('/json_data/:num', bodyParser.json(), function(req, res) {
  fs.writeFileSync(__dirname + '/json_data/' + req.params.num + '.json', req.body + ',');
  res.send(req.body);
  console.log('posting to file');
});

app.listen(3000, function() {
  console.log('server up');
});
