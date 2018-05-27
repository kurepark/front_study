const DOM = {
    app : '#app'
}

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

const sum = (a, b) => a+ b;
let aaa = 1;
class Person {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.space = [];
    }
    eat(food) {
        this.space.push(food);
        this.hp++;
    }

}
//
// const p1 = new Person('eunhye');
// const p2 = new Person('kure')
// p1.eat({name:'사과'});
// p2.eat({name:'똥똥'});
// p2.eat({name:'똥똥'});
// console.log(p1);
// console.log(p2);


class Studnet extends Person {// 자바의 상속과 같다
    constructor(name) {
        super(name);
    }
    study() {
        this.hp--;
    }
    eat(food) { //자바의 오버라이드와 비슷
        console.log('눈치보며 먹는다');//학생의 eat은 이곳을 먼저 실행하고
        super.eat(food);//super 상속받았기 때문에 여기도 실행한다
    }
}

const s1 = new Studnet('eunhye');
s1.study();
s1.study();
s1.study();
s1.study();
s1.study();
s1.eat({name:'pizza'});
s1.eat({name:'pizza'});
s1.eat({name:'pizza'});
console.log(s1);

class Father extends Person {
    constructor(name) {
        super(name);
    }
    work() {
        this.hp--;
    }

    eat(food) {
        console.log('몰래몰래 술을 마신다');
        super.eat(food);
    }
}

const f1 = new Father('papa');
f1.work();
f1.work();
f1.work();
f1.eat({name:'pizza'});
console.log(f1);

class Mother extends Person {
    constructor(name) {
        super(name);
    }
    work() {

    }
}
const m1 = new Mother('mama');
console.log(m1);


// //제이쿼리를 사용해서 사용한다면.
// $("#btn").on('click',function(){
//    $("#app").addClass('danger');
// });