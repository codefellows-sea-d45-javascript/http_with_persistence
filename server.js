var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');

app.post('/note_one', function(req, res, next) {
  req.on('data', function(data) {
   var currentData = data.toString();
   fs.writeFile(__dirname + '/data/note_one.json', currentData, function() {
   });
  res.send('file saved!');
    });
  });

app.get('/note_one', function(req, res) {
  fs.readFile(__dirname + '/data/note_one.json', function(err, data) {
    if (err) return console.log(err);
    res.send(data.toString());
  });
});

app.listen(port, function() {
  console.log('server up on port ' + port);
});
