"use strict";
var http = require('http');
var app = require('express')();
var fs= require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post("/unicorns", function(req, res, next){
  var data = JSON.stringify(req.body);
  fs.writeFile(__dirname + "/data/unicorns_one.json", data, function(err){
    if (err) throw err;
    console.log("Json written to unicorns_one.json!");
    res.send("Json was posted!");
  });
});

app.get("/unicorns", function(req, res, next){
  console.log("Client getting unicorn json data!");

  fs.readFile(__dirname +"/data/unicorns_one.json", function(err, data){
    if (err) throw err;
    var unicornJSON = data.toString();
    res.header("Content-Type", "application/json");
    res.send(unicornJSON);
  });
});

app.listen(3000, function(){
  console.log("Server up and running.");
});
