var express = require('express');
var app = express();

app.get('/ello.txt', function(req, res) {
    var body = 'What the hell';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

app.get('/pie.txt', function(req, res){
  res.send('pie time');
});

app.listen(3000);
console.log('awake and listening on port 3000');