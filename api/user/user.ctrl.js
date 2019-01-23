//api 로직
var users = [
    {id:1, name: 'alice'},
    {id:2, name: 'bek'},
    {id:3, name: 'chris'}
];

//여기서의 req와 res는 http의 req와 res가 아닌
//http의 req와 res를 한번 래핑한 express의 req와 res객체
const index = function(req, res){
    //이 결과 값은 문자열
    req.query.limit = req.query.limit || 10;//limit이 있으면 그 값을 쓰고 아니면 10
    const limit = parseInt(req.query.limit, 10); 
    if(Number.isNaN(limit)){
      return res.status(400).end();
    }
    res.json(users.slice(0, limit));
}

const show = function(req, res){
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    const user = users.filter((user) => user.id === id)[0];
    if(!user) return res.status(404).end();
    //users의 filter는 array가 닮겨서 인덱스 명시
    res.json(user);
}

const destroy = function(req, res){
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    users = users.filter(user=> user.id !== id);
    //삭제 할 아이디와 같지 않은 아이디만 필터링해서 users에 넣어줌
    res.status(204);
    res.end();
  
}

const create = (req, res)=>{
    const name = req.body.name;
    if(!name) return res.status(400).end();
    const isConflic = users.filter(user => user.name===name).length;
    if(isConflic) return res.status(409).end();
    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
}

const update = (req, res)=>{
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
  
    const name = req.body.name;
    
    if(!name) return res.status(400).end();
    const user = users.filter(user=> user.id === id)[0];
    
    const isConflic = users.filter(user => user.name === name).length;
    if(isConflic) return res.status(409).end();
  
    if(!user) return res.status(404).end();
    user.name = name;
    res.json(user);
}

/*
    index : index,
    show : show,
    destroy : destroy,
    create : create,
    update : update
    이건 이전의 문법
*/
//요건 ES6문법
module.exports = { index, show, destroy, create, update };