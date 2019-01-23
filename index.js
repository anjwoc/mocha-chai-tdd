var express = require('express');
//express 모듈을 가져옴
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var user = require('./api/user/index.js');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;