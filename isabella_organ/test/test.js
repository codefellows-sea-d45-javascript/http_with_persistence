var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var fs = require('fs');

chai.use(chaihttp);

require(__dirname + '/../lib/server.js');

describe('the http server', () => {
	it('should respond to a GET request', (done) => {
		chai.request('localhost:3000')
		.get('/data/')
		.end((err, res) => {
			expect(err).to.eql(null);
			expect(res.body).to.eql('{ "msg": "get data "}');
			done();
		});
	});
	it('should POST to a new file', (done) => {
		chai.request('localhost:3000')
			.post('/data/post.json')
			.send('{ "msg": "hello world" }')
			.end((err, res) => {
				expect(err).to.eql(null);
				expect(res.body).to.eql('{ "msg": "hello world"}');
				done();
			});
	});

});
