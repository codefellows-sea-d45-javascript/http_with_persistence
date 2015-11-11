var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
chai.use(chaihttp);

describe('test server REST capabilities', function() {
  before(function() {
    this.data = {"drink":"cool refreshing"}
  });

  it('should save JSON data to file', function(done) {
    chai.request('http://localhost:8080')
      .post('/kombucha')
      .send(this.data)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.eql('It worked!');
        done();
      });
  });

  it('should return the JSON data', function(done) {
    chai.request('http://localhost:8080')
      .get('/kombucha')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.not.eql(null);
        done();
      }.bind(this));
  });
});
