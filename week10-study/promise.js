
//각 객체가 하는 역할을 묶음
/*const baristar = {
    order(request) {
        console.log(request.name + '을 주문 받음');
        return this.createCoffee(request);
    },
    createCoffee(request) {
        console.log(request.name + '를 만드는 중');

        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                const coffee = {
                    name: request.name,
                    contents : [{
                        name: 'espresso',
                        cnt : 2
                    },{
                        name: 'milk',
                        cnt : 1
                    }]
                };
                console.log(request.name + '를 만들었다');
                resolve(coffee);
            },2000)
        });
    }
}*/

function order(request) {
    console.log(request.name + '을 주문 받음');
    return createCoffee(request);
}
function createCoffee(request) {
    console.log(request.name + '를 만드는 중');

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const coffee = {
                name: request.name,
                contents : [{
                    name: 'espresso',
                    cnt : 2
                },{
                    name: 'milk',
                    cnt : 1
                }]
            };
            console.log(request.name + '를 만들었다');
            resolve(coffee);
        },2000)
    });
}

/* 은닉화, createCoffee는 숨긴다. return 으로 order만 반환하면 사용자는 order만 볼 수 있음*/
const baristar = (function(){
    function order(request) {
        console.log(request.name + '을 주문 받음');
        return createCoffee(request);
    }
    function createCoffee(request) {
        console.log(request.name + '를 만드는 중');

        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                const coffee = {
                    name: request.name,
                    contents : [{
                        name: 'espresso',
                        cnt : 2
                    },{
                        name: 'milk',
                        cnt : 1
                    }]
                };
                console.log(request.name + '를 만들었다');
                resolve(coffee);
            },2000)
        });
    }
    return {
        order : order
    }
})();
/**********/
//각 객체가 하는 역할을 묶음
const Iwill = {
    drink(beverage){
        console.log(beverage.name + '를 마신다');
        return beverage;
    },
    shit(food) {
        console.log(food.contents[1].name + '먹고 배탈남.');
    },
    angry(reason) {
        console.error(reason + '????미쳤냐 내커피');
    }
};

function drink(beverage){
    console.log(beverage.name + '를 마신다');
    return beverage;
}

function shit(food) {
    console.log(food.contents[1].name + '먹고 배탈남.');
}
function angry(reason) {
    console.error(reason + '????미쳤냐 내커피');
}
baristar.order({
    name : 'ice latte',
    money : 5000
}).then(Iwill.drink) //지켜지면 먹고
  .then(Iwill.shit)
  .catch(Iwill.angry); //안지켜지면 화를 낸다

//drink(coffee);

