const app = require('./index');
const request = require('supertest');
const should = require('should')

describe('GET /users는', ()=>{
    describe('성공시', ()=>{
        it('유저 객체를 담은 배열로 응답한다.', (done)=>{
            request(app)
                .get('/users')
                .end((err, res)=>{
                    res.body.should.be.instanceOf(Array)
                    done();
                });
        });

        it('최대 limit 갯수만큼 응답한다.', (done)=>{
            request(app)
                .get('/users?limit=2')
                .end((err, res)=>{
                    res.body.should.have.length(2)
                    done();
                });
        });
    });
    describe('실패시', ()=>{
        it('limit이 숫자형이 아니면 400을 응답한다.', (done)=>{
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done);
        })
    });
});
//사용자 조회 api 성공시
describe('GET /users/:id는', ()=>{
    describe('성공시', ()=>{
        it('id가 1인 유저 객체를 반환한다.', (done)=>{
            request(app)
              .get('/users/1')
              .end((err, res) =>{
                  res.body.should.have.property('id', 1)
                  done();
              });
        });
    });
    describe('실패시', ()=>{
        it('id가 숫자가 아닐경우 400으로 응답한다.', (done)=>{
            request(app)
              .get('/users/one')
              .expect(400)
              .end(done);
        });
        it('id로 유저를 찾을 수 없을 경우 400으로 응답한다.', (done)=>{
            request(app)
              .get('/users/999')
              .expect(404)
              .end(done)
        });
    });
});
//사용자 삭제 api 성공시
describe('DELETE /users/1는', ()=>{
    describe('성공시', ()=>{
        it('204를 응답한다.', (done)=>{
            request(app)
              .delete('/users/1')
              .expect(204)
              .end(done);
        });
    });
    describe('실패시', ()=>{
        it('id가 숫자가 아닐 경우', (done)=>{
            request(app)
              .delete('/users/one')
              .expect(400)
              .end(done)
        });

    });
});
//비동기 상태 코드일때 done을 적음
describe('POST /users', ()=>{
    describe('성공시', ()=>{
        let name = 'daniel', body;
        //before는 바로 밑의 테스트케이스가 동작하기전에 미리 실행하는함수
        before(done=>{
            request(app)
                .post('/users')
                .send({name})
                .expect(201)
                .end((err, res) =>{
                    body = res.body;
                    done();
                });
        });
        it('생성된 유저 객체를 반환한다.',()=>{
            body.should.have.property('id');

        });
        it('입력한 name을 반환한다.', ()=>{
            body.should.have.property('name', name);
        });
    });
    describe('실패시', ()=>{
        it('name 파라미터 누락시 400을 반환한다.', (done)=>{
            request(app)
                .post('/users')
                .send({})
                .expect(400)
                .end(done)
        });
        it('name이 중복일 경우 409를 반환한다', done=>{
            request(app)
                .post('/users')
                .send({name: 'daniel'})
                .expect(409)
                .end(done)
        });

    });
});

describe('PUT /users/:id', ()=>{
    describe('성공시', ()=>{
        it('변경된 정보를 응답한다.', (done)=>{
            const name = 'chally';
            request(app)
                .put('/users/3')
                .send({name})
                .expect(200)
                .end((err, res) =>{
                    res.body.should.have.property('name', name);
                    done();
                });
        });
    });
    describe('실패시', (done)=>{
        it('정수가 아닌 id일 경우 400응답', (done)=>{
            request(app)
                .put('/users/one')
                .expect(400)
                .end(done);
        });
        it('name이 없을 경우 400응답', (done)=>{
            request(app)
                .put('/users/1')
                .send({})
                .expect(400)
                .end(done)
        });
        it('없는 유저 일 경우 404응답', (done)=>{
            request(app)
            .put('/users/999')
            .send({name: 'foo'})
            .expect(404)
            .end(done);
        });

        it('이름이 중복일 경우 409응답',(done)=>{
            request(app)
                .put('/users/3')
                .send({name: 'bek'})
                .expect(409)
                .end(done);
        });
    });
    
});