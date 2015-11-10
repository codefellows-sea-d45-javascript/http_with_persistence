var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var fs = require('fs');
require(__dirname + '/../index.js');

//Using a timestamp so that every test sends a unique string to the JSON object
var date = new Date().toString();
var jsonString = "";

describe('a post request to /notes', function(){
  it('should add to an existing json file', function(done){
    chai.request('http://localhost:3000')
      .post('/notes')
      .send({note: 'A mighty fine note ' + date})
      .end(function(res){
        expect(res.text).to.equal('{"note":"A mighty fine note ' + date + '"}');
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe('a post request to /notes', function(){
  it('should write to a json file', function(done){
    fs.readFile(__dirname + '/../data/notes.json', function(err, data){
      jsonString = data.toString();
       expect(jsonString).to.include(date);
      done();
    });
  });
});
describe('a get request to /notes', function(){
  it('should return a json object', function(done){
    chai.request('http://localhost:3000')
      .get('/notes')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.include(date);
        done();
      });
  });
});


