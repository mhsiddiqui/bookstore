var express = require('express');
var path = require('path')
var app = express();


app.get('/get',function(req, res){
	console.log(req.query)
	res.send("GET Request :User added Sussessfully");
});
app.post('/post',function(req, res){
	
	res.send("POST Request :User added Sussessfully");
});

// get homepage
app.get('/index.html',function(req, res){
	res.sendFile(__dirname+req.url )
});
app.get('/text.txt',function(req, res){
	res.sendFile(__dirname+req.url )
});



app.set('static', __dirname)
// set static resource directory
app.use('/res', express.static(path.join(__dirname+"/res")))
app.listen(3000);
console.log('Server listening on localhost:3000 ...')