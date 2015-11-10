var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);
var fs = require('fs');

require(__dirname + '/../server');

describe('the server', function() {
  // before(function(done) {
  //   logBefore = fs.readFileStream(__dirname + '/../data/');
  //   done();
  // });
  it('should respond to a POST request', function(done) {
    chai.request('localhost:3000')
    .post('/data/hi')
    .send('{"msg":"hi you"}')
    .end(function(res, req) {
      // logAfter = fs.readFileStream(__dirname + '/../data/');
      expect(req.text).to.eql('{"msg":"hi you"}');
      // expect(logBefore.length).to.not.eql(logAfter.length);
      done();
    });
  });
});
