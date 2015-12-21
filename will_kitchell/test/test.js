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

describe('post req', function() {
  it('should respond to file creation', function(done) {
    chai.request('http://localhost:5000')
      .post('/data/test')
      .send({'hello':'world'})
      .end(function(err, res) {
        expect(res.text).to.eql('file created');
        done();
      });
  });
});

describe('get req', function() {
  it('should read test file', function(done) {
    chai.request('http://localhost:5000')
      .get('/data/testfile')
      .end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{"hello":"world"}\n');
        done();
      });
  });
});
