var express = require('express'),
    http = require('http');

var app = express(); 
var server = http.createServer(app);

app.use("/", express.static(__dirname + '/../'));
app.use("/dist", express.static(__dirname + '/../dist'));

app.get('/', function(req, res){
    //res.send('hello world');
    res.sendFile('index.html');
});

app.listen(8080);