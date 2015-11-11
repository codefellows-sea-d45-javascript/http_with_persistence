//what do i want my tests to do? 
var fs = require('fs');
var chai = require('chai');
var chaiHttp = require('chai-http');
var express = require('express');
var expect = chai.expect;

chai.use(chaiHttp);


require(__dirname + '/../lib/server');

describe('The server.js file', function (){
  it('should respond to a post request by overwriting a file', function(done){
  	chai.request('localhost:3000')
  		.post('/greet')
  		.send({test: 'jello'})
  		.end(function(err, res){
  			expect(err).to.eql(null);
  			expect(res).to.have.status(200);
        expect(res.text).to.eql('written');
        done(); 
  		});
  });
});


