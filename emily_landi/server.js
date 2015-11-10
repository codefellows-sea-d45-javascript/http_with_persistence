var express = require('express');
var app = express();
var fs = require('fs');

//process data function to handle client-side input
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

//return msg from json file in data directory
app.get('/data/:name', function(req, res) {
  console.log('get request hit');
  var contents = fs.readFileSync(__dirname + '/data/' + req.params.name + '.json');
  var JSONcontent = JSON.parse(contents);
  res.send(JSONcontent);
  console.log('returned contents of file');
});

//saves incoming msg to json file in data directory
app.post('/data/:name', function(req, res) {
  console.log('post request hit');
  fs.writeFileSync(__dirname + '/data/' + req.params.name + '.json', req.body);
  res.send(req.body);
  console.log('posted to new file');
});

//set up server to listen on port 3000
app.listen(3000, function() {
  console.log('server up');
});


