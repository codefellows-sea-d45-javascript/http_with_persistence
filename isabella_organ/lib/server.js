var express = require('express');
var app = express();
var fs = require('fs');

var processData = function(req, res, next) {
	console.log('process data');
	var data = '';
	req.on('data', function(reqData) {
		data = data + reqData.toString();
	});

	req.on('end', function(endData) {
		req.body = data;
		next();
	});
};

app.get('/data/:name', function(req, res) {
	fs.readFile(__dirname + '/data/' + req.params.name + '.json', function(err, data) {
		res.json({msg: 'hello world' + req.params.name});
	});
	console.log('read data');
});

app.use(processData);

app.post('/data/:name', function(req, res) {
	fs.writeFile(__dirname + '/data/' + req.params.name + '.json', req.body, function(err) {
		if (err) console.log(err);
		res.send('data posted to new file');
	});
});

app.get('/*', function(req, res) {
	res.status(404).json({msg: 'not found'});
});

app.listen(3000, function() {
	console.log('server up');
});
