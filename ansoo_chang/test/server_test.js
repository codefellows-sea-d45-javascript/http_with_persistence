'use strict';

var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

require(__dirname + '/../lib/server');

describe('our server get request', function() {
  before(function() {
    this.indexFileString = fs.readFileSync(__dirname + '/../data/file.txt').toString();
  });

  it('should be able to find a file.txt', function(done) {
    chai.request('localhost:3000/data')
      .get('/data')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql(this.indexFileString);
        done();
      }.bind(this));
  });
});
