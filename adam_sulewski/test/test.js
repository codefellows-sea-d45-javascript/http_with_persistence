'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var fs = require('fs');
var expect = chai.expect;
require(__dirname + '/../app.js');

chai.use(chaiHttp);

describe('POST request', function() {
  it('should send response', function(done) {
    chai.request('http://localhost:3999')
      .post('/file')
      .send({"hello": "test"})
      .end(function(err, res) {
        expect(res.text).to.eql('thanks for the data!');
        done();
      });
  });
});

describe('GET request', function() {
  before(function() {
    this.fileData = fs.readFileSync(__dirname + '/../data/file.json').toString();
  });

  it('should return data from data file', function(done) {
    chai.request('http://localhost:3999')
      .get('/file')
      .end(function(err, res) {
        expect(res.text).to.eql(this.fileData);
        done();
      }.bind(this));
  });
});
