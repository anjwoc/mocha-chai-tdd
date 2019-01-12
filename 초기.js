<<<<<<< HEAD
/*
const http = require('http');
//http라는 모듈을 사용
//노드에는 http라는 기본 모듈이 있는데 그걸 불러오기 위해서는 require를 사용한다.
http.createServer();

const math = require('./math.js');
const result = math.sum(1, 2);
console.log(result);
*/
const fs = require('fs');
//const data = fs.readFileSync('./data.txt', encoding='utf8');
fs.readFile('./data.txt', 'utf8', function(err, data){
    console.log(data);
});
/*
절차적 언어처럼 한라인 끝나고 다음라인 실행이 아닌 readFile함수가 실행되고
파일이 다읽혀서 console.log(data);가 실행이 끝날 때 까지 기다리는게 아니고
바로 다음라인을 실행하면서 파일을 다읽고 나면 그제서야 콜백함수를 실행해서
console.log(data);가 실행되서 출력되고 만약에 잘못 읽히게 되면 err로 에러출력
*/


=======
/*
const http = require('http');
//http라는 모듈을 사용
//노드에는 http라는 기본 모듈이 있는데 그걸 불러오기 위해서는 require를 사용한다.
http.createServer();

const math = require('./math.js');
const result = math.sum(1, 2);
console.log(result);
*/
const fs = require('fs');
//const data = fs.readFileSync('./data.txt', encoding='utf8');
fs.readFile('./data.txt', 'utf8', function(err, data){
    console.log(data);
});
/*
절차적 언어처럼 한라인 끝나고 다음라인 실행이 아닌 readFile함수가 실행되고
파일이 다읽혀서 console.log(data);가 실행이 끝날 때 까지 기다리는게 아니고
바로 다음라인을 실행하면서 파일을 다읽고 나면 그제서야 콜백함수를 실행해서
console.log(data);가 실행되서 출력되고 만약에 잘못 읽히게 되면 err로 에러출력
*/


>>>>>>> 891d7f0da2d9f93476e0006ec2cbfc2677728501
