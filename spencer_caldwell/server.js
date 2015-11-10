var app = require('express')();
var http = require('http');
var parser = require('body-parser');
var fs = require('fs');

app.use(parser.json());

app.get('/something/:name', function(req, res) {
  var jsonData = fs.readFileSync(__dirname + '/data/' + req.params.name + '.json', 'utf-8')
  res.json(jsonData);
});

app.post('/something/:name', function(req, res) {
  console.log(req.body);
  var stringData = JSON.stringify(req.body);
  console.log(req.params.name);
  fs.writeFileSync(__dirname + '/data/' + req.params.name + '.json', stringData);
  res.end();
});

var server = http.createServer(app)
server.listen(3000, function() {
  console.log('server is up and listening on port 3000')
});
