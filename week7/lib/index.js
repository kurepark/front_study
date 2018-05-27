'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM = {
    app: '#app'
};

$(DOM.app).append('<div id="count">0</div>');
$(DOM.app).append('<button id="btn-up">up</button>');
$(DOM.app).append('<button id="btn-down">down</button>');

var sum = function sum(a, b) {
    return a + b;
};
var aaa = 1;

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this.hp = 100;
        this.space = [];
    }

    _createClass(Person, [{
        key: 'eat',
        value: function eat(food) {
            this.space.push(food);
            this.hp++;
        }
    }]);

    return Person;
}();
//
// const p1 = new Person('eunhye');
// const p2 = new Person('kure')
// p1.eat({name:'사과'});
// p2.eat({name:'똥똥'});
// p2.eat({name:'똥똥'});
// console.log(p1);
// console.log(p2);


var Studnet = function (_Person) {
    _inherits(Studnet, _Person);

    // 자바의 상속과 같다
    function Studnet(name) {
        _classCallCheck(this, Studnet);

        return _possibleConstructorReturn(this, (Studnet.__proto__ || Object.getPrototypeOf(Studnet)).call(this, name));
    }

    _createClass(Studnet, [{
        key: 'study',
        value: function study() {
            this.hp--;
        }
    }, {
        key: 'eat',
        value: function eat(food) {
            //자바의 오버라이드와 비슷
            console.log('눈치보며 먹는다'); //학생의 eat은 이곳을 먼저 실행하고
            _get(Studnet.prototype.__proto__ || Object.getPrototypeOf(Studnet.prototype), 'eat', this).call(this, food); //super 상속받았기 때문에 여기도 실행한다
        }
    }]);

    return Studnet;
}(Person);

var s1 = new Studnet('eunhye');
s1.study();
s1.study();
s1.study();
s1.study();
s1.study();
s1.eat({ name: 'pizza' });
s1.eat({ name: 'pizza' });
s1.eat({ name: 'pizza' });
console.log(s1);

var Father = function (_Person2) {
    _inherits(Father, _Person2);

    function Father(name) {
        _classCallCheck(this, Father);

        return _possibleConstructorReturn(this, (Father.__proto__ || Object.getPrototypeOf(Father)).call(this, name));
    }

    _createClass(Father, [{
        key: 'work',
        value: function work() {
            this.hp--;
        }
    }, {
        key: 'eat',
        value: function eat(food) {
            console.log('몰래몰래 술을 마신다');
            _get(Father.prototype.__proto__ || Object.getPrototypeOf(Father.prototype), 'eat', this).call(this, food);
        }
    }]);

    return Father;
}(Person);

var f1 = new Father('papa');
f1.work();
f1.work();
f1.work();
f1.eat({ name: 'pizza' });
console.log(f1);

var Mother = function (_Person3) {
    _inherits(Mother, _Person3);

    function Mother(name) {
        _classCallCheck(this, Mother);

        return _possibleConstructorReturn(this, (Mother.__proto__ || Object.getPrototypeOf(Mother)).call(this, name));
    }

    _createClass(Mother, [{
        key: 'work',
        value: function work() {}
    }]);

    return Mother;
}(Person);

var m1 = new Mother('mama');
console.log(m1);

// //제이쿼리를 사용해서 사용한다면.
// $("#btn").on('click',function(){
//    $("#app").addClass('danger');
// });