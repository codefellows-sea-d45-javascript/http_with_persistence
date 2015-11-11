var bodyParser = require('body-parser');
var fs = require('fs');
var express = require('express');
var app = express();
var routename = '';

app.use(bodyParser.json());

app.post('/:name', function(req, res) {
  fs.writeFileSync((__dirname + '/data/' + req.params.name +'.json'), JSON.stringify(req.body));
  routename = req.params.name;
  console.log(req.body);
  res.send(req.body);
});

app.get('/' + routename, function (req, res) {
      res.send(JSON.parse(fs.readFileSync(__dirname + '/data/' +routename + '.json')));
      console.log(routename + '.json read');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('server up');
});

