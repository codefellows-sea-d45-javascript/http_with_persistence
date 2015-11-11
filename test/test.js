var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../server');

describe('this little server of mine', function() {
  it('should handle a POST request', function(done) {
    chai.request('localhost:3000')
    .post('/note_one')
    .send({'hey': 'itsMeJSON'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
      });
    });
  it('should handle a GET request', function() {
    chai.request('localhost:3000')
    .get('/note_one')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
    });
  });
});
