var hello;
hello = 'hello';
var person = {
    name: 'Jack',
    age: 32
};
var fruits = ['apple', 'banana', 'grape'];
var fruit = fruits[0];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.haha = 'haha';
var unionType = [10, 20, '30'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
cloth.size = 'small';
console.log(typeof (apple));
