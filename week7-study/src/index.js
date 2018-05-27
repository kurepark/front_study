class Person {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.space = [];
    }
    eat(food) {
        this.space.push(food);
        this.hp ++;
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
    }
    study() {
        this.hp --;
    }
    eat(food) {
        console.log('선생님 몰래 먹는다');
        super.eat(food);
    }
}
const s1 = new Student('eunhye');
s1.study();
s1.study();
s1.study();
s1.eat({name:'pizza'});
s1.eat({name:'milk'});
console.log(s1);

class Father extends Person {
    constructor(name) {
        super(name);
    }
    work() {
        this.hp--;
    }
    eat(food) {
        console.log('구내식당에서 먹는다');
        super.eat(food);
    }
}

const f1 = new Father('fafa');
f1.work();
f1.work();
f1.eat('coffee');
f1.eat('coffee');
f1.eat('coffee');
f1.eat('coffee');
f1.eat('coffee');
f1.work();
f1.work();
f1.work();
f1.work();
f1.work();
f1.work();
f1.work();
console.log(f1);