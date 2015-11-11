"use strict";

var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
require(__dirname + '/../index');

describe("persistent http server", function(){

  it('a post to root/unicorns should write /data/unicorns_one.json', function(done){
    chai.request('localhost:3000')
    .post('/unicorns')
    .send({'name' : 'Uni'})
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(err).to.be.null;
      expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
      done();
    });

  });

  it('a GET to root/unicorns should return  content from /data/unicorns_one.json', function(done){
    chai.request('localhost:3000')
    .get('/unicorns')
    .end(function(err, res){
      expect(res).to.have.status(200);
      expect(err).to.be.null;
      expect(res).to.have.header('content-type', 'application/json; charset=utf-8');

      done();
    });
  });



});
