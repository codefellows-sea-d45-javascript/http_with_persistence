var app = require('express')();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/:fileName", function(req, res) {
  fs.access(__dirname + '/data/' + req.params.fileName + ".json", fs.F_OK && fs.R_OK, function(err) {
    if(err) return console.log("Error, can't find file!\n" + err);
    fs.readFile(__dirname + "/data/" + req.params.fileName + ".json", "utf8", function(err, data) {
      if(err) return console.log("Error - can't read file!\n" + err);
      res.body = data;
      console.log(res.body);
      res.send(data);
    });
  });
});

app.post("/:fileName", function(req, res) {
  writeFile(JSON.stringify(req.body), req.params.fileName);
  res.end();
});

function writeFile(data, name) {
  fs.access(__dirname + "/data/", fs.F_OK && fs.W_OK, function(err) {
    if(err) {
      fs.mkdirSync(__dirname + "/data/");
      fs.writeFile(__dirname + "/data/" + name + ".json", data, function(err) {
        err ? console.log("Error - can't write file!\n" + err) : console.log('file saved!');
      });
    } else { 
      fs.writeFile(__dirname + "/data/" + name + ".json", data, function(err) {
        err ? console.log("Error - can't write file!\n" + err) : console.log('file saved!');
      });
    }
  });
}

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});