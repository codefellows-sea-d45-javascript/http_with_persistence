var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var bodyparser = require('body-parser');

//data coming in from a post request should be saved to a json file
//in "data" directory. Do not commit your data file to git.
// '/*' means any URL
app.post('/*', function(req, res) {
  var filepath = req.url.slice(1) + '.json'; //slice removes char(0)
  console.log(filepath);
  fs.writeFile(filepath, 'utf8', function(err, data) {
    if(err) return console.log('error thrown');
    console.log(data);
  });
})

//pipe ondata tostring
//take json data and directly pipe it (req.pipe)

//A get request to the same url should return the data contained in
//the json file
app.get('/', function(req, res) {
  res.send('Get request received!');
});

/*app.get('/*', function(req, res) {
  var route = req.url;
  console.log(route);
  fs.readFile('data' + route + '.json'); //
})*/

app.listen(3000, function () {
  console.log('server up');
});

