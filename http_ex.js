const http = require('http')

http.createServer((req, res) =>{
    const {headers, method, url} = request;
    let body = [];

    request.on('error', (err) =>{
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();

        res.on('error', (err) =>{
            console.error(err);
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        //위의 두 줄은 한 줄로 대체될 수 있다.
        //response.writeHead(200, {'Content-Type' : 'application/json'})

        const responseBody = {header, method, url, body};

        res.write(JSON.stringify(responseBody));
        res.end();
        //위의 두 줄도 res.end(JSON.stringify(responseBody))로 대체 가능
        
    });
}).listen(8080);