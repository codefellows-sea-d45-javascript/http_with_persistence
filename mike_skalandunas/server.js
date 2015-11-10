'use strict';

var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.post('/data', function(req, res) {
  res.send('got a response.');
})

app.post('/data', function(req, res, next) {
  fs.appendFile(__dirname + 'data', JSON.stringify(req.body), function(err, data) {
    next();
  })
})

app.get('data', function(req, res, next) {
  req.data = '';

  fs.readFile(__dirname + '/data', function(err, data) {
    req.data = data.toString();
    next();
  }
})

app.listen(app.get('port'), function() {
  console.log('Server listening at ' + app.get('port') + '.');
})
