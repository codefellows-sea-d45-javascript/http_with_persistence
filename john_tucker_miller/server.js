var express = require('express');
var app = module.exports = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/:name', function(req, res){
  res.json(JSON.parse(fs.readFileSync(__dirname + '/data/' + req.params.name + '.json')));
});

app.post('/:name', function (req, res) {
  fs.writeFileSync(__dirname + '/data/' + req.params.name + '.json', JSON.stringify(req.body));
  res.send('success');
  res.end();
});

app.listen(3000);
