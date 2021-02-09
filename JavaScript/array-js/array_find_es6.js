/**
 * Array.prototype.find() is introduced in ES6 version
 * Array find searches our array and returns us the first matching element 
 * or it will return 'undefined' if it can't find one.
 * find() return value is dynamic, and this means that it could be of JavaScript type.
 */

 // syntax
 let returnValue = ['a', 'b', 'c', 'd', 'e'].find(value => value === 'd');
 console.log(returnValue); // d

 returnValue = ['a', 'b', 'c', 'd', 'e'].find(value => value === 'h');
 console.log(returnValue); // undefined

 /**************************************************************** */

const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

const found = items.find(item => item.id === '🍟');

if (found) {
    console.log(`${found.name} ${(found.price / 100).toFixed(2)}`);
    // Jumbo Fries 1.99
}

/********************************************************************** */

// traditioanl / imperative way

let food; // undefined
let id = '🥤';
let count = 0;

for (let i=0; i < items.length; i++) {
    const item = items[i];
    count++;
    if (item.id === id) {
        food = item;
        break;
    }
}

console.log(food, count); // { id: '🥤', name: 'Big Slurp', price: 299 } 3