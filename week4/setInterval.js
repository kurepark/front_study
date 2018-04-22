var number = 0;

// setInterval(function(){
//     console.log(number++);
// },1000);//인자를 두개 받는다. 함수와 시간

//위의 함수는 아래와 같다.
// function up(){
//     console.log(number++);
// }
// setInterval(up,1000);


//looper함수는 전달받은 함수를 전달받은 횟수만큼 실행
//1. looper함수를 만든다
//2. 두개의 파라미터를 선언한다
//3. 반복문을 작성한다
//4. 잘 반복되는지 확인하기 위해 console.log(i)같은 것을 해본다
//5. 지정된 횟수만큼 반복하도록 바꾼다
//6. 반복문 내에 로직을 채운다.


function looper(callbackFn, count){
    for(var i = 0; i < count ; i++){
        //console.log(i);
        callbackFn();
    }
}
function up(){
    console.log(number);//이러면 오류
}
function up(number){
    console.log(number);//undefined
}
looper(up, 5);//사용자 관점
looper(function(number){
    console.log(number)
}, 5);//이런식으로 up함수를 사용하지않고 익명함수를 써서 넘길 수 도 있다.