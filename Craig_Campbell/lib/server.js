var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;

// app.get('/', function(req, res){

// });

// app.post('/', function(req, res){

// });

app.use(function(req, res){
res.status(404).send('not found');
});

app.listen(port, function(){
  console.log('the server is running on port: ' + port);
});
