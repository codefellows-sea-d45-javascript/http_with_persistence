'use strict';

var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

var processData = function(request, response, next) {
  // console.log('process data');
  var data = '';
  request.on('data', function(reqData) {
    data = data + reqData.toString();
  });

  request.on('end', function(endData) {
    request.body = data;
    next();
  });
};

app.use(processData);

// post data
app.post('/data/', function(request, response) {
  var folder = '/data/';
  var dataComingIn = fs.writeFileSync(folder, processData);
  response.send(dataComingIn);
})

// get data
app.get('/data/', function(request, response) {
  var getData = fs.readFileSync(processData)
  response.send(getData);
})

app.listen(3000, function() {
  console.log('Server started on port 3000')
})
