var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var fs = require('fs');
chai.use(chaiHttp);
require(__dirname + '/../lib/server.js');


describe('the server', function(){

  it('should 404 for requests to an invalid route for GET', function(done){
    chai.request('localhost:3000')
    .get('/invalid_route')
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('not found');
      done();
    });
  });

  it('should 404 for requests to an invalid route for POST', function(done){
    chai.request('localhost:3000')
    .post('/invalid_route')
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('not found');
      done();
    });
  });
});

describe('the server', function(){
  it('should respond to to POST requests to a valid route by saving the data to a file', function(done){
    var json = {"key": "value"};
    chai.request('localhost:3000')
    .post('/ok/something')
    .send(json)
    .end(function(err, res){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('We got your request');
        var filebuffer = fs.readFileSync(__dirname + '/../data/something.json');
        expect(filebuffer.toString()).to.eql(JSON.stringify(json));
      done();
    });
  });
});

describe('the server', function(){
  var json = {"key": "value"};
  it('should respond to a GET requests to a valid route by sending any data put there perviously by a POST request', function(done){
    chai.request('localhost:3000')
    .get('/ok/something')
    .end(function(err, res){
      fs.readFile(__dirname + '../data/something.json', function(){
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.text).to.eql(JSON.stringify(json));
        done();
      });
    });
  });
});


