// 구구단함수 만들기(리턴값이 아닌 콘솔에 출력)
// 반복문을 모른다면
// console.log('2 * 1 = 2');
// console.log('2 * 2 = 4');
// console.log('2 * 3 = 6');

//반복문을 쓰자
//공통되는 값, 변하는 값을 찾아서 수정한다.
function gugudan(n, max){
    for(var i = 1 ; i <= max; i++){
        console.log(n + ' * ' + i + ' = ' + (n * i));
    }
}
//gugudan(2, 15);

/*max값이 생기면서 이전에 9까지만 바뀌도록 작성한 코드는 사용할 수 없게 된다
* 나중에 개선해서 배포를 하게 될 떄에는 기존에 사용한 코드도 돌아갈 수 있도록 나둬야한다.
* 9까지 쓴걸 max로 무책임하게 바꾸면 안된다.
* */

function gugudan(n, max){
    if(!max){//max가 없다면 max를 기존에 있던 9로 할당.
        max = 9;//이러한 방어코드를 넣어줘야한다.
    }
    for(var i = 1 ; i <= max; i++){
        console.log(n + ' * ' + i + ' = ' + (n * i));
    }
}

gugudan(7, 4);
