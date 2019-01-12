const http = require('http');
//http 모듈을 가져와서 http라는 변수에 할당
const hostname = '127.0.0.1';
//hostname을 localhost로 할당
const port = 3000;
//port는 3000으로 할당

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

/*
=>는 arrow function이라는 ES6의 문법인데 아래가 ES6문법을 쓰지 않았을 때 코드
const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
*/

//listen은 서버를 요청 대기상태로 만들어주는 함수
//파라미터는 총 3개로 port번호, hostname, callback함수
server.listen(port, hostname, () => {
    //listen이 완료되면 아래의 코드 실행
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Server running at http://${hostname}:${port}/');
    //템플릿 문자열 ``을 사용해야 ${}을 사용가능
});

