//일반 함수로 호출
function a(){
    console.log(this);// a를 가리킨다
    //console.log(arguments);//arguments 마치 배열처럼 사용 가능함. arguments[i] 가능
    for(var i =0; i<arguments.length; i++){
        var obj = arguments[i];
    }
    return this;
}
//a(1,2,3,4,5,7,8,97,8,4,5,6,4);
a(); // 그냥 호출할땐 window.a

//메소드로 호출
var obj = {
   b: function(){
       console.log(this);
   }//객체에 소속된 함수
};
// obj.b();//this는 나를 호출한 객체를 가르킨다

var obj2 = {
    c: a // 맨 위에 있는 함수 a
};

obj2.c(); //똑같은 a함수지만 보여주는 내용이 다르다


//생성자로 호출
a() === a() //true

new a(); //똑같은 a함수를 실행하지만 new를 붙이면 a라는 이름의 전혀다른 객체가 만들어진다.
new a() === new a(); // false 둘은 같지 않다. new를 사용하면 매번 새로운 객체가 생성된다.

//call, apply 호출

// a.call({name: 123456},1,2,3);//this는 name:123456이된다.
// //call은 내가 원하는걸 this로 집어넣을 수 있다.
// a.apply({name: '가나다라'},[1,2,3]);// apply역시 내가 주입한것이 this가 된다

//둘의 차이점 : 인자를 넣을때 apply는 배열로, call은 하나하나씩

a = a.bind({name: 'bind'});//우리가 만든 a함수를 bind로 덮어씀
a();//this가 name:'bind'