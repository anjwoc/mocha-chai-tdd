var express = require('express');
//express 모듈을 가져옴
var app = express();
//express모듈을 가져와서 application 변수에 할당

app.get('/', function (req, res) {
    //여기서의 req와 res는 http의 req와 res가 아닌
    //http의 req와 res를 한번 래핑한 express의 req와 res객체
  res.send('Hello World!');
});

app.get('/users', function(req, res){

});

app.post('/users', function(req, res){

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

