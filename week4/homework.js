var numbers = [1, 2, 3, 4, 5];
var m = map(numbers, function(v){
    return v + 10;
});
console.log(m); // [11, 12, 13, 14, 15]

var m2 = map(numbers, function(v){
    return v * 2;
});
console.log(m2); // [2, 4, 6, 8, 10]

/*

* 1. 배열 생성
2. 배열에 값 할당 및 값 가져오기(set, get)
3. 반복문
4. 함수 선언 및 호출
5. 함수 값 반환
6. 값으로써의 함수

* */
//map(배열, 콜백함수);

function map(array, callbackFn){
    for(var i = 0; i < array.length; i++){
        return callbackFn(array[i]);
    }
    //return result;
}