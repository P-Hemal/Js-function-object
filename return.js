function add(num1, num2){
    // console.log(num1, num2);
    var sum = num1 + num2;
    return(sum)
}

// add(10, 37);

var total = add(80, 20);
// console.log('total', total)
function bringBall(money){
    var ballPrice = 10;
    var quantity = money / ballPrice;
    return quantity;
}

var ball = bringBall(150);
console.log('Bringing ball:', ball)