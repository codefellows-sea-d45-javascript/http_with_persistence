require(__dirname + '/lib/server.js');
// var express = require('express');
// var app = express();
// var fs = require('fs');

// var processData = function(req, res, next) {
//   var data = '';
//   req.on('data', function(newData) {
//     data += newData.toString();
//   });
//   req.on('end', function() {
//     req.body = data;
//     next();
//   });
// };

// app.get('/data/:name', function(req, res) {
//   fs.readFile(__dirname + '/data/' + req.params.name + '.json', function(err, data) {
//     res.send(data);
//   });
// });

// app.use(processData);

// app.post('/data/:name', function(req, res) {
//   fs.writeFile(__dirname + '/data/' + req.params.name + '.json', req.body, function(err){
//     if (err) console.log(err);
//     res.send(req.params.name + '.json has been written.');
//     });
// });

// app.listen(3000, function() {
//   console.log('server up at port 3000');
// });