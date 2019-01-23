var express = require('express');
//express 모듈을 가져옴
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var user = require('./api/user/index.js');

if(process.env.NODE_ENV !== 'test'){
  //package.json에서 NODE_ENV=test를 설정해뒀는데
  //test는 process객체 안으로 들어가서 test라는 환경이 아닐때만 로그가 찍히도록
  //morgan설정
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', user);


module.exports = app;