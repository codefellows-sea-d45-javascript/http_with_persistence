var express = require('express');
var app = express();
var fs = require('fs');

app.get('/data/', function(req, res) {
	var readStream = fs.createReadStream(__dirname + '/data/post.json');
		res.writeHead(200, {'content-type':'application.json'});
		readStream.pipe(res);
});

app.post('/data/', function(req, res) {
	var writeStream = fs.createWriteStream(__dirname + '/data/post.json');
		req.pipe(writeStream);
		req.on('end', function() {
			res.json({'msg':'hello world'});
		});
});

app.listen(3000, function() {
	console.log('server up');
});
