var express = require('express');
var app = express();
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

//should return msg from json file in data directory
//currently read file but returns 'undefined'
app.get('/data/:name', function(req, res) {
  console.log('get request hit');
  fs.readFile(__dirname + '/data/' + req.params.name + '.json', req.body);
  console.log(req.body);
  console.log('returned contents of file: /data/' + req.params.name + '.json');
});

//should save incoming msg to json file in data directory (functionality works but has a timeout error client-side)
app.post('/data/:name', function(req, res) {
  console.log('post request hit');
  fs.writeFile(__dirname + '/data/' + req.params.name + '.json', req.body);
  console.log(req.body);
  console.log('post to new file: /data/' + req.params.name + '.json');
});

app.listen(3000, function() {
  console.log('server up');
});
