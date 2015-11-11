var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../app');

describe('the express server', function() {
  it('should respond to POST requests and return values', function(done) {
    chai.request('localhost:3000')
      .post('/note_one')
      .send('{noteBody: \'hello world\'}')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('Thank you for your request');
      done();
  });
});
});
