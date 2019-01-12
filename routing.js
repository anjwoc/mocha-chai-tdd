const http = require('http');
//http 모듈을 가져와서 http라는 변수에 할당
const hostname = '127.0.0.1';
//hostname을 localhost로 할당
const port = 3000;
//port는 3000으로 할당

const server = http.createServer((req, res) => {
  if(req.url ==='/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }
  else if(req.url === '/users'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list');
  }
  else{
    res.statusCode == 404;
    res.end('Not Fount');
  }
});
//위의 코드가 라우팅을 사용안했을때 방법
//위와 같은 코드를 작성하지 않기 위해서 express js 를 사용

//listen은 서버를 요청 대기상태로 만들어주는 함수
//파라미터는 총 3개로 port번호, hostname, callback함수
server.listen(port, hostname, () => {
    //listen이 완료되면 아래의 코드 실행
    console.log(`Server running at http://${hostname}:${port}/`);
    //템플릿 문자열 ``을 사용해야 ${}을 사용가능
});

