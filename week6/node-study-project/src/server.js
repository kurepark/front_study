const http = require('http');//http모듈을 사용해 서버를 만든다
const fs = require('fs');

http.createServer((request, response) =>{
    console.log(request.url);
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    if(request.url === '/'){
        //const date = 'hihi';
        fs.readFile('index.html','utf8',(err, file)=>{
            response.end(file);//누군가 접속했을때마다 실행되는 함수, 응답이 끝날때 띄워줌
        })
        //response.end(`<div>${date}</div>`);//누군가 접속했을때마다 실행되는 함수, 응답이 끝날때 띄워줌
    } else if (request.url === '/111'){
        fs.readFile('111.html','utf8',(err, file)=>{
            response.end(file);
        })
    } else{
        fs.readFile('404.html','utf8',(err, file)=>{
            response.end(file);
        })
    }

}).listen('8080',()=>{
    console.log('server on!');
});
//8080은 포트번호, 브라우저에서 localhost:8080 실행한다. 단순히 이렇게만 하면 응답할게 없어서 계속 로딩만..
//response.end('hihi!!'); 이 부분을 적어줘야 서버를 띄우고 서버에서 응답을 받을 수 있기 떄문에 브라우저에 내용이 뜬다.
// 이게 없으면 계속 응답을 기다리며 로딩