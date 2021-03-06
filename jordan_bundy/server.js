var http = require('http');
var app = require('express')();
var fs = require('fs');

app.get('/data/:name', function(req, res) {
  var readStream = fs.createReadStream(__dirname + '/data/' + req.params.name + '.json');
  res.writeHead(200, {'content-type':'application/json'});
  readStream.pipe(res);
});

app.post('/data/:name', function(req, res) {
  var writeStream = fs.createWriteStream(__dirname + '/data/' + req.params.name + '.json');

  req.pipe(writeStream);
  req.on('end', function() {
    res.json({msg:'all done'});
  });
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('Up up and away');
});

