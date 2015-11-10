var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var server = require(__dirname + '/../server.js');
var fs = require('fs');


describe('our express app', function() {

  describe('receiveing a post request', function() {

    var fileContents = '';

    before(function(done) {
      fs.readFile(__dirname + '/../data/database.json', function(err, data) {
        fileContents += data;
        done();
      });
    });

    it('should save data sent through a post request to the file and respond with a thank you message', function(done) {
      chai.request('localhost:3000')
        .post('/database')
        .send({"test": "test"})
        .end(function(err, res) {
          fs.readFile(__dirname + '/../data/database.json', function(err, data) {
            var newFileContents = '';
            newFileContents += data;
            expect(res).to.have.status(200);
            expect(res.text).to.eql('Thanks for the data.');
            expect(fileContents + '{"test":"test"}').to.eql(newFileContents);
            expect(fileContents.length + 15).to.eql(newFileContents.length);
            done();
          });
        });
    });
  });

  describe('receiving a get request', function() {

    var fileContents = '';

    before(function(done) {
      fs.readFile(__dirname + '/../data/database.json', function(err, data) {
        fileContents += data;
        done();
      });
    });

    it('should respond to a get request with the contents of the database', function(done) {
      chai.request('localhost:3000')
        .get('/database')
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.text).to.eql(fileContents);
          done();
        });
    });
  });
});
