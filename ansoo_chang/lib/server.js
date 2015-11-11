'use strict';

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

var processData = function(request, response, next) {
  console.log('process data');
  var data = '';

  request.on('data', function(requestData) {
    data = data + requestData.toString();
  });

  request.on('end', function(endData) {
    request.body = data;
    next();
  });
};

app.use(processData);

app.get('/data/:file', function(request, response) {
  var fileContent = fs.readFileSync(__dirname + '/../data/' + request.params.file).toString();
  response.json(fileContent);
});

app.post('/data/:file', function(request, response) {
  fs.writeFileSync(__dirname + '/../data/' + request.params.file + '.txt', request.body);
  response.json(request.body);
});

app.use(function(request, response) {
  response.status(404).send('Resource not found!');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
