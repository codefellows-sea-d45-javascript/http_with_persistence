var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + "/../server.js");

describe('the express server', function() {
  before(function() {
    this.timestamp = Date.now();
  });

  after(function() {
    fs.unlink(__dirname + '/../data/' + this.timestamp + '.json', function(err) {
      if (err) throw err;
    }.bind(this));
  });

  it('should write a file to the data directory', function(done) {
    var directoryBefore = fs.readdirSync(__dirname + '/../data').length;
    chai.request('localhost:3000')
      .post('/' + this.timestamp)
      .send({note: 'test note'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(fs.readdirSync(__dirname + '/../data').length).to.eql(directoryBefore + 1);
        expect(JSON.parse(fs.readFileSync(__dirname + '/../data/' + this.timestamp + '.json'))).to.eql({note: 'test note'});
        done();
      }.bind(this));
  });

  it('should read a file from the data directory', function(done) {
    chai.request('localhost:3000')
      .get('/' + this.timestamp)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('{"note":"test note"}');
        done();
      }.bind(this));
  });

  });

