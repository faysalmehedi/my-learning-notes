/**
 * Array.prototype.filter() is introduced in es5 edition
 * Array Filter allows us to conditionally return certain elements from our array into a brand new array
 * It's also commonly used to remove items from an array by simply excluding them from the result.
 * 
 * The key to understanding filter is to realize that our callbacks are in fact returning an
 * expression that evaluates to true or false. Array elements that evaluate to true are 
 * stored in the new array, and items that evaluate to false are simply excluded.
 */

// sytax
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const divideByThree = numbers.filter(value => value % 3 === 0);
console.log(divideByThree); // [ 3, 6, 9, 12, 15 ]

const filtered = [true, false, true, true, false].filter(Boolean);
console.log(filtered); // [ true, true, true ]

const drinks = [
    {id: 1001, name: 'Lime', price: 399},
    {id: 1002, name: 'Lemonade', price: 299},
    {id: 1003, name: 'Peach', price: 499},
    {id: 1004, name: 'Cola', price: 259},
    {id: 1005, name: 'Pepsi', price: 259},
    {id: 1006, name: 'Dew', price: 319},
];

const expensiveItems = drinks.filter(item => item.price > 300);
console.log(expensiveItems);
/*
[
  { id: 1001, name: 'Lime', price: 399 },
  { id: 1003, name: 'Peach', price: 499 },
  { id: 1006, name: 'Dew', price: 319 }
]
*/

/*************************************************** */

// traditioanl / imperative way
const cheaperItems = [];

for (let i=0; i < drinks.length; i++) {
    const item = drinks[i];

    if (item.price < 300) {
        cheaperItems.push(item);
    }
}

console.log(cheaperItems);
/*
[
  { id: 1002, name: 'Lemonade', price: 299 },
  { id: 1004, name: 'Cola', price: 259 },
  { id: 1005, name: 'Pepsi', price: 259 }
]
*/