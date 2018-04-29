var numbers = [1, 2, 3, 4, 5];
var m = map(numbers, function(v){
    return v + 10;
});
console.log(m); // [11, 12, 13, 14, 15]

var m2 = map(numbers, function(v){
    return v * 2;
});
console.log(m2); // [2, 4, 6, 8, 10]




var ff = filter(numbers, function(v){
    return v > 3;
});
console.log(ff);
var ff2 = filter(numbers, function(v){
    return v > 2;
});
console.log(ff2);


/*

* 1. 배열 생성
2. 배열에 값 할당 및 값 가져오기(set, get)
3. 반복문
4. 함수 선언 및 호출
5. 함수 값 반환
6. 값으로써의 함수

* */
//map함수 파라미터로 (배열, 콜백함수)를 받음;

function map(array, callbackFn){
    var numbers = [];// 배열을 for문 바깥에 선언
    //새로운 배열 이름이어야 하는지, 아니면 number 그냥 써도되는지, 결과는 같음.
    console.log('numbers배열', numbers);
    for(var i = 0; i < array.length; i++) {
        console.log('배열' + array[i]);
        numbers[i] = callbackFn(array[i]);//배열을 콜백함수의 인자로
        //console.log('for문 확인',callbackFn(array[i]));//콘솔까지 제대로 찍힘
    }
        return numbers;
}


/* 과제풀이 */
//app.js 과제로 나온 사용자관점의 코드 작성
//map.js 실제 풀어낸 map함수가 있는 코드


/*
function map(list, callbackFn){
    //console.log(list);//잘 들어오는지 콘솔로 확인
    //console.log(callbackFn); 함수가 들어온다는건 내부에서 callbackFn() 이렇게 실행도 가능
    /!*callbackFn(list[0]);
    callbackFn(list[1]);
    callbackFn(list[2]);
    callbackFn(list[3]);
    callbackFn(list[4]);
    만약 for문을 사용하지 않으면 이런식으로 배열의 0번부터 순차적으로 실행.*!/
    var result = [];
    for(var i = 0; i < list.length; i ++) {
        result[i] = callbackFn(list[i]);
    }
    return result;
}
// 변수 네이밍 이런식으로 생각해서 만들기
*/
