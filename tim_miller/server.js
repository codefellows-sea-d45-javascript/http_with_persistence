var app = require('express')();
var fs = require('fs');
var bodyParser = require('body-parser');

//consulted stackoverflow to see this. http://stackoverflow.com/questions/5710358/how-to-get-post-a-query-in-express-js-node-js
app.use(bodyParser.json());


app.post('/database', function(req, res, next) {
    fs.appendFile(__dirname + '/data/database.json', JSON.stringify(req.body), function(err, data) {
      if(err) throw err;
      next();
    });
});

app.post('/database', function(req, res) {
  res.send('Thanks for the data.');
});

app.get('/database', function(req, res, next) {

  req.database = '';

  fs.readFile(__dirname + '/data/database.json', function(err, data) {
    if(err) throw err;
    req.database = data;
    req.database = req.database.toString();
    next();
  });

});

app.get('/database', function(req, res) {
  res.send(req.database);
});

app.listen(3000, function() {
  console.log('server up!');
});
