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
      if (err) throw err;
      var fileObj;
      var returnjson;
      if(data.toString().length > 0){
        fileObj = JSON.parse(data.toString());
        postObj = JSON.parse(postString);
        var output = [data.toString().slice()]
        //Some help http://stackoverflow.com/questions/33623299/javascript-appending-a-post-request-json-string-to-existing-json-file
        for (var key in postObj){
          fileObj[key] = postObj[key];
        }
        returnjson = JSON.stringify(fileObj);
        } else {
          returnjson = postString;
        }
      fs.writeFile(__dirname + '/data/notes.json', returnjson, function(err){
        if (err) throw err;
        res.send(req.body);
    });
  });
});

app.listen(3000, function(){
  console.log('Server up and running at PORT 3000')
});
