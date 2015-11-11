var chai = require('chai');
var chaihttp = require('chai-http');
require(__dirname + '/../app.js');
var fs = require('fs');
chai.use(chaihttp);
var expect = chai.expect;
var host = 'localhost:3000';


describe('our server', function(){

  it('should be able to repsond with a status and not an error', function(done) {
    chai.request(host)
      .get('/:msg')
      .end(function (err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.header("content-type","application/json; charset=utf-8");
        expect(res.body.msg).to.not.eql(null);
        done();
      });
  });
});
