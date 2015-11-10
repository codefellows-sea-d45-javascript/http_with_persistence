'use strict';

var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Server listening at ' + app.get('port') + '.');
})
