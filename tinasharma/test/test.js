'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
var server = require(__dirname + '/../server.js');

describe("Post request", function() {
  it("should send data into the new file", function(done) {
    chai.request("localhost:3000")
    .post('/name')
    .send({'hello':'world'})
    .end(function(err, res) {
      //var read = fs.readFile(__dirname + '/../data/name.json').toString();
      expect(res.text).to.eql('hey there');
      //expect(read).to.eql({"hello":"world"});
      done();
    });
  });
});
