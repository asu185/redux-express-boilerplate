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
  var userAgent = req.headers['user-agent'];
  
  if (isMobile(userAgent)) {
    if (process.env.NODE_ENV === 'production') {
      res.sendFile(path.resolve('./public/indices/index-mobile.html'));
    } else {
      res.sendFile(path.resolve('./public/indices/index-mobile-dev.html'));
    }
  } else {
    if (process.env.NODE_ENV === 'production') {
      res.sendFile(path.resolve('./public/indices/index-web.html'));
    } else {
      res.sendFile(path.resolve('./public/indices/index-web-dev.html'));
    }
  }
});

app.listen(port, function() {
  console.log('Started listening on port', port);
});

function isMobile(userAgent) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}
