var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../server');

describe('The server file', function() {
  it('should respond to a post request', function(done) {
    chai.request('localhost:3000')
      .post('/note_one')
      .send('{noteBody: \'hello world\'}')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{noteBody: \'hello world\'}');
        done();
      });
  });
  it('should be able to recieve and send json file to screen', function(done) {
    chai.request('localhost:3000')
      //assumes there is a sample.json file in the data directory with {"msg": "hello Felix"}
      .get('/sample')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('{"msg": \"hello Felix\"}\n');
        done();
      });
  });
});
