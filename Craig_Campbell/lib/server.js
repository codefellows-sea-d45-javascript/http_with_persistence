var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');

app.get('/ok_route', function(req, res){
  fs.readFile(__dirname + '/../data/ok_route.json', function(err, data){
    if (err) return console.log(err);
    res.send(data.toString());
  });
});

app.post('/ok_route', function(req, res){
  req.on('data', function(data){
    var mydata = data.toString();
    fs.writeFile(__dirname + '/../data/ok_route.json', mydata,  function(){
  });
    res.send('We got your request');
  });
});

app.use("/*", function(req, res){
res.status(404).send('not found');
});

app.listen(port, function(){
  console.log('the server is running on port: ' + port);
});
