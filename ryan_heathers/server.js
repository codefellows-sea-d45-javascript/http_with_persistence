var app = require('express')();
var fs = require('fs');

app.use(function(req, res, next) {
  var data = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function(){
    req.body = data;
    next();
  });
});

app.post('/data/:filename', function(req, res) {
  var data = JSON.stringify(req.body);
  fs.writeFile(__dirname + '/data/' + req.params.filename, data, function(err) {
    if (err) throw err;

    console.log('File saved successfully');
    res.send('It worked!');
  });
});

app.get('/data/:filename', function(req, res) {
  fs.readFile(__dirname + '/data/' + req.params.filename, 'utf8', function(err, data) {
    if (err) throw err;

    var json = JSON.parse(data);
    res.send(json);
  });
});

app.listen(3000, function() {
  console.log('Server running');
});
