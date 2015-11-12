var fs = require('fs');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
chai.use(chaihttp);

require(__dirname + '/../index');

describe('The HTTP express server', function() {

  it('should POST a file to the server', function(done) {
    var data = {msg: "test data"};
    chai.request('localhost:3000')
      .post("/somefile")
      .send(data)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(fs.accessSync(__dirname + "/../data/somefile.json", fs.F_OK)).to.eql(undefined);
        done();
      });
  });

  it('should retreive data on a GET request', function(done) {
    chai.request('localhost:3000')
      .get('/somefile')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.text).to.eql('{"msg":"test data"}');
        done();
      });
  });

  after(function(done) {
    fs.unlinkSync(__dirname + "/../data/somefile.json");
    done();
  });
});
