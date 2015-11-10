'use strict';

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  var path = req.url.split('/');

    function resWriteHead(status, contentType) {
    response.writeHead(status, {
    'Content-Type': contentType
    });
  };

  var items = fs.readdirSync('./json_data');
  var item_file = [];



});

server.listen(3000, function() {
  console.log('server is running on localhost:8000');
})
