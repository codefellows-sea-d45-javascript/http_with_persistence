
'use strict';

var express = require('express'),
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');

//with thanks to Treehouse for tutorial on bodyParser
//(https://teamtreehouse.com/library/express-basics)
app.use(bodyParser.json());

app.get('/answers', function(req, res, next){
  fs.readFile(__dirname + '/../data/answers.json', function(err, data){
    if(err) throw err;
    next();
  })
  res.send(answers.toString());
});

app.post('/answers', function(req, res, next) {
  req.on('data', function(data) {
    var dataLogged = data.toString();
    fs.writeFile(__dirname + '/../data/answers.json', dataLogged, function() {
    if(err) throw err;
    next();
    });
  });
  res.send('POST request to the homepage');
});

var server = app.listen(3000, function(){
  console.log("The server is running on port 3000!")
});
