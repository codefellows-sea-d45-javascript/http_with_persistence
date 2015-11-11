var http = require('http');
var fs = require('fs');
var app = require('express')();
var express = require('express');
var bodyParser = require('body-parser');

// create read stream?
app.get('/*', function(req, res) {
  var data = JSON.parse(fs.readFileSync(__dirname + '/data' + req.url + '.json'));
  res.json(data);
});

app.use(bodyParser.json());

// create write stream - req.pipe?? res.pipe ...?
app.post('/*', function(req, res) {
  fs.writeFileSync(__dirname + '/data' + req.url + '.json', JSON.stringify(req.body));
  res.send('done!');

});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
