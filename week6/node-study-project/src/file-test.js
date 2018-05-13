const fs = require('fs');//fs모듈(npm에 기본으로 들어있는 모듈, nodejs 공식홈페이지를 확인하자) :  파일을 생성하는 모듈
//파일생성
/*fs.writeFile('abc123.txt','hihihihi',() =>{
    console.log('success');
});*/
//첫번째 파라미터, 파일명, 두번째 파라미터,  파일내용

//파일 읽기
fs.readFile('abc.txt','utf8',(err, file)=>{
   console.log(file);
});

