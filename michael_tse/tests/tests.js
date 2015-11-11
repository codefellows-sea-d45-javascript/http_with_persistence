var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../server');

describe('The server file', function() {
//   before(function() {
//     this.indexFileString = fs.readFileSync(__dirname + '/../data/sampleJSON').toString();
//   });

  it('should be able to recieve and send json file to screen', function(done) {
    chai.request('localhost:3000')
      .get('/note_one')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.be.json;
        done();
      }.bind(this));
  });

  it('should be able to recieve and send json file to screen', function(done) {
    chai.request('localhost:3000')
      .get('/sample')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.be.json;
        done();
      }.bind(this));
  });

});
