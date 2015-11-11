var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var fs = require('fs');


app.post('/:msg', function(req, res, next){
  next(write({note: req.params.msg}));
});

app.get('/:msg', function(req, res) {
  res.json({msg: 'hello, ' + req.params.msg});
  res.end();
});

app.listen(3000, function(){
  console.log('server up');
});


function write(txt) {
  fs.writeFile('data/' + txt.note + '.json', JSON.stringify(txt), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + '/data/' + txt.note + '.json');
      }
  });
}
