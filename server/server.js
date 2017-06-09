var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 8888;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  if (process.env.NODE_ENV === 'prod') {    
    res.sendFile(path.resolve('./public/dist/index.html'));
  } else {
    res.sendFile(path.resolve('./public/index-dev.html'));
  }
});

app.listen(port, function() {
  console.log('Started listening on port', port);
});