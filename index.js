var express = require('express');
//express 모듈을 가져옴
var app = express();
var morgan = require('morgan');
//express모듈을 가져와서 application 변수에 할당
var users = [
    {id:1, name: 'alice'},
    {id:2, name: 'bek'},
    {id:3, name: 'chris'}
];
app.use(morgan('dev'));

app.get('/', function (req, res) {
    //여기서의 req와 res는 http의 req와 res가 아닌
    //http의 req와 res를 한번 래핑한 express의 req와 res객체
  res.send('Hello World!');
});
//변경됬나?ㄴㅇ
app.get('/users', function(req, res){
    res.json(users);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
