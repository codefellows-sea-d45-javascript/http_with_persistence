var express = require('express');
var app = express();
var fs = require('fs');
var bodyparser = require('body-parser');
var jsonParser = bodyparser.json();

app.get('/:filename', function(req, res) {
  fs.readFile(__dirname + '/data/' + req.params.filename + '.json', function(err, data){
    var myObj = JSON.parse(data.toString());
    res.json(myObj);
  });
});

app.post('/:filename',jsonParser, function(req, res){
  var postString = JSON.stringify(req.body);
  fs.writeFile(__dirname + '/data/' + req.params.filename + '.json', postString, function(err){
      if (err) throw err;
      res.send(req.body);
    });
});

app.listen(3000, function(){
  console.log('Server up and running at PORT 3000');
});
