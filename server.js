var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res){
  res.json(JSON.parse(fs.readFileSync('Hello cruel world')));
});

app.post('/', function (req, res){
  fs.writeFileSync('./data/data.json', JSON.stringify(req.body));
});

app.listen(3000);
