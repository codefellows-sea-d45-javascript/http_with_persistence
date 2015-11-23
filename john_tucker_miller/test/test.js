var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
var server = require(__dirname + '/../server');

describe('post request to /test with a json body', function() {

  it('should create test.json file in /data containing the body of the request', function(done) {
    chai.request(server)
      .post('/test')
      .send({"test": "success"})
      .end(function(err, res) {

        expect(fs.existsSync(__dirname + '/../data/test.json')).to.eql(true);

        var testJson = JSON.parse(fs.readFileSync(__dirname + '/../data/test.json'));
        expect(testJson).to.eql({test: 'success'});

        done();
      });
  });
});

describe('get request to /test', function() {

  it('should receive the contents of test.json as a response', function(done) {
    chai.request(server)
      .get('/test')
      .end(function(err, res) {

        expect(JSON.parse(res.text)).to.eql(JSON.parse(fs.readFileSync(__dirname + '/../data/test.json')));

        done();
      });
  });
});
