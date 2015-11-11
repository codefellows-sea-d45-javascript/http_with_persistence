var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

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

app.use(processData);

//takes in a post request and stores newly made json file in data directory.
app.post('/:name', function(req, res) {
  fs.writeFileSync(__dirname + '/data/' + req.params.name + '.json', req.body);
    res.send(req.body);
    //console log confirms to server file was posted
    console.log('posted new file: ' + req.params.name + '.json');
});

// A get request to the same route should return the data contained in the json file.
app.get('/:name', function(req, res) {
  fs.readFile(__dirname + '/data/' + req.params.name + '.json', function(err, data) {
    if(err) throw err;
    res.send(data.toString());
  });
});

app.listen(3000, function() {
  console.log('server up!!');
});
