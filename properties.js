var shoppingCart ={
    books : 4,
    sunglass : 2,
    keyboard : 2,
    mouse : 3,
    pen : 20
}
// var penCount = shoppingCart.pen
// console.log(penCount);
var properties = (shoppingCart);
// console.log(properties)
// var properties = Object.values(shoppingCart);
console.log(properties)

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);