'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
var express = require('express');
var app = express();
require(__dirname + '/../server.js');

chai.use(chaiHTTP);

describe('post req', function() {
  it('should respond to file creation', function(done) {
    chai.request('http://localhost:5000')
      .post('/data/test')
      .send({'hello':'world'})
      .end(function(err, res) {
        expect(res.text).to.eql('file created');
        done();
      })
  })
})

describe('get req', function() {
  it('should read test file', function(done) {
    chai.request('http://localhost:5000')
      .get('/data/testfile')
      .end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{"hello":"world"}\n');
        done();
      })
  })
})
