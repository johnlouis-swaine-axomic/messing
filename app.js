var express = require('express');
var app = express();
var chars = require('./routes/chars');

app.get('/ello.txt', function(req, res) {
    var body = 'What the hell';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

app.get('/pie.txt', function(req, res){
  res.send('pie time');
});

app.get('/chars', chars.chars);

app.get('/chars/:id', chars.char);

app.listen(3000);
console.log('awake and listening on port 3000');
