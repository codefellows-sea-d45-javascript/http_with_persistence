'use strict';

var fs = require('fs');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

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

app.get('/data/:id', function(req, res) {
  fs.readFile(__dirname + '/data/' + req.params.id + '.json', function(err, data) {
    res.send(data.toString());
  });
});

app.post('/data/:id', processData, function(req, res) {
  fs.appendFile(__dirname + '/data/' + req.params.id + '.json', req.body, function(err) {
    if (err) throw err;

    res.send('file created');
  });
});

app.listen(app.get('port'), function() {
  console.log('Server listening at ' + app.get('port') + '.');
});
