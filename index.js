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

app.get('/users', function(req, res){
    //이 결과 값은 문자열
    req.query.limit = req.query.limit || 10;//limit이 있으면 그 값을 쓰고 아니면 10
    const limit = parseInt(req.query.limit, 10); 
    if(Number.isNaN(limit)){
      return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});
app.get('/users/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  if(Number.isNaN(id)) return res.status(400).end();
  
  
  const user = users.filter((user) => user.id === id)[0];
  if(!user) return res.status(404).end();
  //users의 filter는 array가 닮겨서 인덱스 명시
  res.json(user);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;