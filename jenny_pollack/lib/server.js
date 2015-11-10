var app = require('express')();  
var bodyParser = require('body-parser');
var fs = require('fs'); 

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'hell0 ' + req.params.name});
});

app.post('/greet', function(req, res){

}); 

app.listen(3000, function() {
  console.log('server up');
});