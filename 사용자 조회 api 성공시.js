//사용자 조회 api 성공시
const request = require('supertest')
const should = require('should');
const app = require('./index');

describe('GET /users는', ()=>{
});

describe('GET /users/1는', ()=>{
    describe('성공시', ()=>{
        it('id가 1인 유저 객체를 반환한다.', (done)=>{
            request(app)
              .get('/users/1')
              .end((err, res)=>{
                  res.body.should.have.property('id', 1)
                  done();
              });
        });
    })
});