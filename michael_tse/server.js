var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');



// It should respond to GET/POST requests for a single route
// and the data coming in from a post request should be saved to a json file in
// a data folder in your repository.

var processData = function(req, res, next) {
  console.log('process data');
  var data = '';
  req.on('data', function(reqData) {
    data = data + reqData.toString();
  });
  req.on('end', function(endData) {
    req.body = data;
    next();
  });
};

app.use(processData);

app.post('/:name', function(req, res) {
  console.log('post me!')
  fs.writeFile(__dirname + '/data/' + req.params.name + '.json', function(err) {
    if(err) throw err;
    res.send(req.body);
    console.log('sucess post!');
  });
  res.send('data recieved');
});



// app.get('/:name', function(req, res, next) {
//   // var data = {}
//   var data = fs.readFileSync(__dirname + '/data/' + req.params.name + '.json')
//   res.send(JSON.parse(data));

//   // fs.readFile(__dirname + '/data/' + req.params.name + '.json', function(err, data) {
//   //   if(err) throw err;
//   //   data = ;
//   // });
//   next();
// });







// app.post('/:name', function(req, res) {
//   console.log('store that data!');
//   res.send()
// })


// if a request is sent to "/note_one" with a body of {noteBody: 'hello world'}
// the json data in the body should be stored in it's own json file `data/note_one.json`.




// A get request to the same route should return the data contained in the json file.
app.get('/:name', function(req, res) {
  fs.readFile(__dirname + '/data/' + req.params.name + '.json', function(err, data) {
    if(err) throw err;
    res.send(data.toString());
  });
});

app.listen(3000, function() {
  console.log('server up!!');
});
