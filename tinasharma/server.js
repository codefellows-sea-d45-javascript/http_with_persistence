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

app.post('/name', function(req, res) {
  fs.writeFileSync(__dirname + '/data/name.json', req.body);
});

app.get('/name', function(req, res) {
  var read = fs.readFileSync(__dirname + '/data/name.json');
    res.send(read.toString());
});

app.listen(3000, function() {
  console.log('server up');
});
