var fs = require('fs');
var chai = require('chai');
var expect = chai.exepct;
var chaiHttp = require('chai-http');
var express = require('express');
chai.use(chaiHttp);

var server = require(__dirname + '/../server.js');

describe('The server.js file', function (){
  it('should write a json file in the /data folder', function(done){
    expect(fs.readFileSync('./data/data.json'));
  });
});
