var app = require('express')();  
var fs = require('fs'); 

app.get('/greet', function(req, res) {
	fs.readFile(__dirname + '/../data/greet.json', function(err, data){
		res.send(JSON.parse(data.toString())); 
	});

});

app.post('/greet', function(req, res){
	var info = fs.createWriteStream(__dirname + '/../data/greet.json');
	req.pipe(info);  
	res.send('written'); 
}); 

app.listen(3000, function() {
  console.log('server up');
});
