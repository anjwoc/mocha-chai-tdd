<<<<<<< HEAD
const utils = require('./utils');
//const assert = require('assert');
const should = require('should');

describe('utils.js모듈의 capitalize() 함수는 ', ()=>{
  it('문자열의 첫 번째 문자를 대문자로 반환한다.', ()=>{
      // 여기에 실제 테스트 해야 할 테스트 코드를 작성
      const result = utils.capitalize('hello');
      //assert.equal(result, 'Hello')
      result.should.be.equal('Hello');
  })  
})

=======
const utils = require('./utils');
//const assert = require('assert');
const should = require('should');

describe('utils.js모듈의 capitalize() 함수는 ', ()=>{
  it('문자열의 첫 번째 문자를 대문자로 반환한다.', ()=>{
      // 여기에 실제 테스트 해야 할 테스트 코드를 작성
      const result = utils.capitalize('hello');
      //assert.equal(result, 'Hello')
      result.should.be.equal('Hello');
  })  
})

>>>>>>> 891d7f0da2d9f93476e0006ec2cbfc2677728501
