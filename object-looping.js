var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge ={
    asif : 12,
    romio : 45,
    joy : 78,
    tushar :12,
    ananto : 32,
    emon : 14
}

var shoppingCart ={
    books : 4,
    sunglass : 2,
    keyboard : 2,
    mouse : 3,
    pen : 20,
    shoes : 2,
    
}

var keys = Object.keys(shoppingCart);
// console.log(keys)


for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// For in loop

for(var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}