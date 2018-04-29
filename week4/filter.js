function filter(list, callbackFn){
    var result = [];
    for(var i = 0; i < list.length; i++) {
        console.log(callbackFn(list[i]));//callback함수에 배열을 넣어 값을 확인하기
        if(callbackFn(list[i])){//반환값이 true면
            result.push(list[i]);
        }
    }
    return result;
}