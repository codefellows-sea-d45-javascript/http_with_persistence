var express = require('express');
var app = express();
var http = require('http');
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

app.get('/dataroute', function(req, res) {
	console.log('get data route');
	next();
});

app.use(processData);

app.get('/*', function(req, res) {
	res.status(404).json({msg: 'not found'});
});

app.listen(3000, function() {
	console.log('server up');
});