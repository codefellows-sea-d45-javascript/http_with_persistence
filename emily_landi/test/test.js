var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var fs = require('fs');

require(__dirname + '/../server');

describe('the server', function() {
  it('should respond to a POST request', function(done) {
    chai.request('localhost:3000')
    .post('/data/hi')
    .send('{"msg":"hi you"}')
    .end(function(res, req) {
      expect(req.text).to.eql('{"msg":"hi you"}');
      done();
    });
  });
  it('should write POST request to new file', function(done) {
    chai.request('localhost:3000')
    .post('/data/hi')
    .send('{"msg":"hi you"}')
    .end(function(res, req) {
      expect(__dirname + '/../data/hi.json').to.exist;
      done();
    });
  });
  it('should respond to a GET request', function(done) {
    chai.request('localhost:3000')
    .get('/data/hi')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('{"msg":"hi you"}');
      done();
    });
  });
});
