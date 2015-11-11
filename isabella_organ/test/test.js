var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var fs = require('fs');

chai.use(chaihttp);

require(__dirname + '/../lib/server.js');

describe('the http server', function() {
	it('should respond to a GET request', function(done) {
		chai.request('localhost:3000')
		.get('/data/')
		.end(function(err, res) {
			expect(err).to.eql(null);
			// expect(res).to.have.status(200);
			expect(res.text).to.eql('{"msg":"not found"}');
			done();
		});
	});
	it('should POST to a new file', function(done) {
		chai.request('localhost:3000')
			.post('/data/post')
			.send('{"msg":"hello world"}')
			.end(function(err, res) {
				expect(err).to.eql(null);
				// expect(res).to.have.status(200);
				expect(res.text).to.eql("data posted to new file");
				done();
			});
	});

});

