var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  if (process.env.NODE_ENV === 'production') {    
    res.sendFile(path.resolve('./public/indices/index.html'));
  } else {
    res.sendFile(path.resolve('./public/indices/index-dev.html'));
  }
});

app.listen(port, function() {
  console.log('Started listening on port', port);
});