var express = require('express');
var app = express();
var fs = require('fs');
var bodyparser = require('body-parser');
var jsonParser = bodyparser.json();

app.get('/notes', function(req, res) {
  fs.readFile(__dirname + '/data/notes.json', function(err, data){
    var myObj = JSON.parse(data.toString());
    res.json(myObj);
  });
});

app.post('/notes',jsonParser, function(req, res){
  var postString = JSON.stringify(req.body);
    fs.readFile(__dirname + '/data/notes.json', function(err, data){
      var returnjson;
      if(!err && data.toString().length > 0){
        var fileString = JSON.parse(data.toString());
        var myArray = fileString.notes;
        for (var i = 0; i < myArray.length; i++){
          myArray[i] = JSON.stringify(myArray[i]);
        }
        myArray.push(postString);
        var myString = myArray.join(', ');
          returnjson = '{"notes":[' + myString + ']}';
        } else {
          returnjson = '{"notes":[' + postString + ']}';
        }
      fs.writeFile(__dirname + '/data/notes.json', returnjson, function(err){
        if (err) throw err;
        res.send(req.body);
    });
  });
});

app.listen(3000, function(){
  console.log('Server up and running at PORT 3000');
});
