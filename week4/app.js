/*
* 0부터 시작하여 숫자를 1씨기 증가시키는 up함수와
* 1씩 감소시키는 down 함수를 작성
* */
// 사례1
// function up(){
//     var num = 0;//함수가 실행될떄마다 num을 0으로 초기화하고 실행한다.
//     return ++num;
//     //결과만 보면
//     //return 1; 과 같다.
// }
// function down(){
//     var num = 0;
//     return --num;
// }

//사례2
// function up(){
//     return ++num;//이럴경우 함수를 실행한다면 num을 찾을 수 없다.
//     //함수 안에 num이 정의되어있지 않다면 함수 바깥으로 나가서 num을 찾게된다.
//     //지금은 함수 바깥에도 num이 없기 때문에 함수를 실행했을 때 오류가 난다.
// }
// function down(){
//     return --num;
// }



//사례3
// var num = 0;//변수를 바깥에 꺼내놓으면 전역 컨텍스트에 변수가 가게 된다. 다른 script에서도 사용할 수 있다.
//사이드이펙트가 발생할 수 있다
// function up(){
//     return ++num;//up실행시 함수 안에서 num을 찾음. 없으니 바깥으로 나갔는데 num이있다.
//     //바깥에 있는 num에 1을 더하고 그 값을 return.
// }
// function down(){
//     return --num;
// }

//사례4
function up(){
    var num = 0;//따라서 변수 선언은 함수 안으로 들어가야한다.
    return ++num;
}
function down(){
    var num = 0;
    return --num;
}


//사례5
//객체화 시키기

function counter(){//외부에 공개되는 함수는 counter만. up과 down은 객체안으로 숨겨진다.

    var num = 0;
    function up(){
        return ++num;
    }
    function down(){//클로저.
        return --num;
    }
    return {//객체를 리턴하자
        up: up,
        down : down
    }
}

var result = counter();
console.log(result.up());
console.log(result.down());
