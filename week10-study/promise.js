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


/**********/

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
order({
    name : 'ice latte',
    money : 5000
}).then(drink) //지켜지면 먹고
  .then(shit)
  .catch(angry); //안지켜지면 화를 낸다

//drink(coffee);

