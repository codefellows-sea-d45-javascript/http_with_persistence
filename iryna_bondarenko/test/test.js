'use strict'

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var fs = require('fs');
require(__dirname + '/../server.js');


describe("Checking if post request works", function () {
	it ("Should send information into the file", function (done) {
		chai.request("localhost:3000")
		.post('/note')
		.send({"'Have a nice day'"})
		.end(function(err, res) {
			var data = fs.readFile(__dirname + '/../data/note.json').toString();
			expect(data).to.eql({"'Have a nice day'"});
			done();
		});
	});
});

describe('Checking if GET request works', function() {
	var data;
	before(function() {
    data = fs.readFileSync(__dirname + '/../data/note.json').toString();
  });

  it('should read a data from a file', function(done) {
    chai.request('http://localhost:3000')
      .get('/note')
      .end(function(err, res) {
        expect(res.text).to.eql(data);
        done();
      });
  });
});