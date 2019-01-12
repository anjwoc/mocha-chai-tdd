const express = require('express');
const morgan = require('morgan');
const app = express();
//익스프레스 인스턴스를 어플리케이션이라 함
//서버에 필요한 기능인 미들웨어를 어플리케이션에 추가함

//미들웨어 만들어보기
function logger(req, res, next){
    console.log('I am logger');
    next();
    //next를 호출하지 않으면 logger2가 호출되지 않아서 동작하지 않는다.
    //미들웨어에서 기능을 수행한 후에 반드시 next를 호출해야 한다.
}

function logger2(req, res, next){
    console.log('I am logger2');
    next();
}

//미들웨어를 추가할 때는 use를 사용
app.use(logger);
app.use(logger2);
app.use(morgan('combined'));

app.get('/', function(req, res){
    res.send('Hello world');
});


app.listen(3000, function(){
    console.log('Server is running');
});

