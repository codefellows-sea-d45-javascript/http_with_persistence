var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');

app.get('/ok/:whatever', function(req, res){
  fs.readFile(__dirname + '/../data/' + req.params.whatever + '.json', function(err, data){
    if (err) return console.log(err);
    res.send(data.toString());
  });
});

app.post('/ok/:whatever', function(req, res){
  req.on('data', function(data){
    var mydata = data.toString();
    fs.writeFile(__dirname + '/../data/' + req.params.whatever + '.json', mydata,  function(){
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
