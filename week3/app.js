/*
* 1. text를 받아서 그 text로 alert을 띄우는 popup 함수를 만들기
* 2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup
* 3. Android 일 때는 '안드로이드'라는 문자열을 popup
* */

/* 나의 문제풀이 */
/*function text(){

    if(navigator.userAgent.match(/iPhone/)){
        return '아이폰';
    } else if(navigator.userAgent.match(/Android/)){
        return '안드로이드';
    }else{
        return '기타';
    }
};
function popup(){
    alert(text());
}

popup();*/

function getElementById(id){
    return document.getElementById(id);
}
/* 수호님의 문제풀이 */
getElementById('btn').addEventListener('click',app);
getElementById('input-color').addEventListener('change',function(e){
   //익명함수를 사용
    changeColor('content', e.target.value);//내가 입력한 input값 색상바꾸기
});
getElementById('input-color2').addEventListener('change',function(e){
   //익명함수를 사용
    changeColor('test', e.target.value);//내가 입력한 input값 색상바꾸기
});
getElementById('input-size').addEventListener('change',function(e){
    changeSize(e.target.value);
});
function changeSize(size){//폰트사이즈 바꾸는 함수
    getElementById('content').style.fontSize = size;
}
function changeColor(id, color){//색상 바꾸는 함수
    getElementById(id).style.color = color;
}
function popup(text) {
    alert(text);
}
function isIPhone(){
    return navigator.userAgent.match(/iPhone/);
}
function isAndroid(){
    return navigator.userAgent.match(/Android/);
}
function draw(deviceName){
    getElementById('content').innerText = deviceName;
}
function app(){
    if(isIPhone()){
        return draw('아이폰');
    }
    if(isAndroid()){
        return draw('안드로이드');
    }
    return draw('기타');
}
//app();


/*
function isIPhone(){
    return navigator.userAgent.match(/iPhone/);
}

function app(){
    if(isIPhone()){
        console.log('실행');
    } else{
        console.error('none');
    }
}
app();
*/

//navigator.userAgent ->현재 사용하고 있는 브라우저를 알려줌.
//개발자도구 network conditions userAgent에서 접속기기를 변경할 수 있다.

