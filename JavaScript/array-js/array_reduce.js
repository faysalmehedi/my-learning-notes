/**
 * Array.prototype.reduce() is introduced in es5 version.
 * Array reduce is commonly used for performing things such as math expressions and equations.
 */

// syntax

const reduced = [1, 2, 3, 4, 5].reduce( (prev, next) => prev + next );

console.log(reduced); // 15

const reducedWithInitialValue = [1, 2, 3, 4, 5].reduce( (prev, next) => {
    console.log(prev, next);
    return prev + next;
}, 10 ); // here initial value 10 will be the prev value

console.log(reducedWithInitialValue); 
/*
10 1
11 2
13 3
16 4
20 5
25
*/

/******************************************************************* */
const drinks = [
    {id: 1001, name: 'Lime', price: 399},
    {id: 1002, name: 'Lemonade', price: 299},
    {id: 1003, name: 'Peach', price: 499},
    {id: 1004, name: 'Cola', price: 259},
    {id: 1005, name: 'Pepsi', price: 259},
    {id: 1006, name: 'Dew', price: 319},
];

// using map and reduce method
const drinksTotalMap = drinks.map( (item) => item.price ).reduce( (prev, next) => prev + next );
console.log(drinksTotalMap); // 2034

// using reduce method, where initial value is needed
const drinksTotalReduce = drinks.reduce( (prev, next) => prev + next.price, 0 );
console.log(drinksTotalReduce); // 2034

/**************************************************** */
// traditioanl / imperative way

let drinksTotalPrice;
let prev = 0;

for (let i=0; i < drinks.length; i++) {
    const next = drinks[i];
    prev = prev + next.price;
}

drinksTotalPrice = prev;
console.log(drinksTotalPrice); // 2034