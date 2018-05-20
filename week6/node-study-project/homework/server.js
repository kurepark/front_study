const http = require('http');
const fs = require('fs');

http.createServer((request, response) =>{
    console.log(request.url);
    var userAgent = request.headers['user-agent'];
    console.log("userAgent", userAgent);

    response.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    //
    if(request.url === '/'){
        fs.appendFile('user_agent.txt',`${userAgent}\n`,(err) => {
            if(err){console.log('에러인가?')}//(err)은 에러일 경우 표시해주는게 맞는건가요?
            console.log('들어갔다');//노드공식문서에 appendFile은 if문(err)과 콘솔로 적어주길래 비슷하게 적었는데 맞는지 모르겠네요;
        });
        fs.readFile('index.html','utf8',(err, file) => {
            response.end(file);
        })
     }


}).listen('8081',() =>{
    console.log('server on!!!!!!!');
});