/**
 * Array: An array is a data structure that contains a group of elements. 
 * Arrays are commonly used in computer programs to organize data so that 
 * a related set of values can be easily sorted or searched.
 * 
 * square bracket []--> is called Array literal syntax.
 * 
 */

// array's are passed by reference(not primitive) which means if we mutate drinksReference, it will mutate drinks array

const drinks = ['Cola', 'Pepsi'];
const drinksReference = drinks;

console.log(drinks === drinksReference); // true

drinksReference.push('7up');
console.log(drinks); // [ 'Cola', 'Pepsi', '7up' ]

console.log([] === []) // false : beacuse two array's are not same until they passed by reference

// others way to assign array

const greeting = new Array('Hey', 'Hello', 'Hi'); // by using constructor
console.log(greeting); // [ 'Hey', 'Hello', 'Hi' ]

const ages = Array(18, 23, 27, 21); // without new keyword it will work also, JS will add new under the hood
console.log(ages); // [ 18, 23, 27, 21 ]






