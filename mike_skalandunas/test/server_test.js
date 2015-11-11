'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
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
