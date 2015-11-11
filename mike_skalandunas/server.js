'use strict';

var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var processData = function(req, res, next) {
  console.log('process data');
  var data = '';
  req.on('data', function(reqData) {

    data = data + reqData.toString();
  });
  req.on('end', function(endData) {
    req.body = data;
    next();
  });
};

app.listen(app.get('port'), function() {
  console.log('Server listening at ' + app.get('port') + '.');
})
