var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

describe('A simple get/post server', function() {
  it('should accept a post request', function(done) {
    chai.request('localhost:3000')
      .post('/data')
      .send({foo:'bar'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('all done');
        done();
      });
  });

  it('should return our original post object', function(done) {
    chai.request('localhost:3000')
      .get('/data')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.eql({foo:'bar'});
        done();
      });
  });
});
