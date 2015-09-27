var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/hosted_payments/:amount', function (req, res) {
  res.render('index', {amount: req.params.amount});
});

var server = app.listen(8002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});