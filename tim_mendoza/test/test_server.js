var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var fs = require('fs');
require(__dirname + '/../server');

chai.use(chaihttp);

describe('the /jsonpost/ POST route', function() {
  it('should write a JSON file when data is sent', function(done) {
    chai.request('localhost:3000')
      .post('/jsonpost/testfile')
      .send('{"test":"testdata"}')
      .end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res.text).to.equal("testfile.json has been written.");
        done();
      });
  });
  it('should write the data sent in the POST request to a file', function() {
    var data = fs.readFileSync(__dirname + '/../data/testfile.json').toString();
    expect(data).to.eql('{"test":"testdata"}');
  });
});
describe('the /jsonpost GET route', function() {
  it('should read a JSON file and send the contents in the response', function(done) {
    chai.request('localhost:3000')
      .get('/jsonpost/testfile')
      .end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res.text).to.equal('{"test":"testdata"}');
        done();
      });
  });
});
