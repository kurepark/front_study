function order(request, callback) {
    console.log(request.name + '을 주문 받음');
    return createCoffee(request, callback);
}
function createCoffee(request, callback) {
    console.log(request.name + '를 만드는 중');

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
        callback(coffee);
    },2000)
}


/**********/

function drink(beverage){
    console.log(beverage.name + '를 마신다');
}

order({
   name : 'ice latte',
   money : 5000
}, drink);

//drink(coffee);

