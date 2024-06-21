
let hello: string;
hello = 'hello';

const person = {
    name: 'Jack',
    age: 32
}

const fruits: string[] = ['apple', 'banana', 'grape']
const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false];
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.haha = 'haha';
let unionType: (number | string)[] = [10, 20, '30'];
const apple = 'apple';

let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}
cloth.size = 'small'
console.log(typeof(apple))