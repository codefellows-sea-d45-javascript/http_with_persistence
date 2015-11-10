var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/route', function(req, res){
  res.json(JSON.parse(fs.readFileSync('./data/data.json')));
});

app.post('/route', function (req, res) {
  fs.writeFileSync('./data/data.json', JSON.stringify(req.body));
});

app.listen(3000);
