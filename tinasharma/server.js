'use strict';

var express = require('express');
var app = express();
var fs = require('fs');

var processData = function(req, res, next) {
  console.log('process data');
  var data ='';
  req.on('data', function(reqData) {
    data = data + reqData.toString();
  });
  req.on('end', function() {
    req.body = data;
    next();
  });
};

app.use(processData);

app.post('/:name', function(req, res) {
  var name = req.params.name;
  fs.writeFileSync(__dirname + '/data/' + name + '.json', req.body);
  res.send('hey there');
});

app.get('/:name', function(req, res) {
  var name = req.params.name;
  var read = fs.readFileSync(__dirname + '/data/' + name + '.json');
    res.send(read.toString());
});

app.listen(3000, function() {
  console.log('server up');
});

//for superagent - {msg: "'hello world'"}

