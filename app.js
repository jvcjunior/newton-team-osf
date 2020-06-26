var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('aeee');
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log('aeee POST');
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});