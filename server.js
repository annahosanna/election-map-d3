const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./build'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(3000, function() {
  console.log('App spinning up on port ' + this.address().port + ' ( ͡° ͜ʖ ͡°)');
});