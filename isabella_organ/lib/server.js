var express = require('express');
var app = express();
var fs = require('fs');

app.get('/data/', (req, res) => {
	var readStream = fs.createReadStream(__dirname + '/data/post.json');
		res.writeHead(200, { 'Content-Type': 'application/json' });
		readStream.pipe(res);
});

app.post('/data/', (req, res) => {
	var writeStream = fs.createWriteStream(__dirname + '/data/post.json');
		req.pipe(writeStream);
		req.on('end', () => {
			res.json({ 'msg': 'hello world' });
		});
});

app.listen(3000, () => {
	console.log('server up');
});
