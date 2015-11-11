var chai = require('chai');
var expect = chai.expect;
var app = require('express')();
var chaiHttp = require('chai-http');
var fs = require('fs');
chai.use(chaiHttp);

describe('the server.js module', function() {
  it('should write a JSON file');
  it('should respond with a 200 status to a GET request', function(unicorns) {
    chai.request('localhost:3000')
      .get('/something/test')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        unicorns();
      });
  });

  // it('should respond with JSON content to a GET request', function() {
  //   chai.request(app)
  //     .get('/something/:name')
  //     .then(function(res) {
  //       expect(res).to.be.json;
  //     }, function(err) {
  //       throw err;
  //     });
  //   });

  // it('should respond with a 200 status to a POST request', function() {
  //   chai.request(app)
  //     .post('/something/:name')
  //     .then(function(res) {
  //       expect(res).to.have.status(200);
  //     }, function(err) {
  //       throw err;
  //     });
  // });

  it('should respond with a connectino end to a POST request');
});
