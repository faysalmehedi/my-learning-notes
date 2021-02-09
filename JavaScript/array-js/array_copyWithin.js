/**
 * Array.prototype.copyWithin() is introduced in ES6 version
 * The .copyWithin() method copies part of an array to the same array and returns it, 
 * without modifying its size i.e, copies array element of an array within the same array.
 * 
 * This array method recieves 3 parameter, array.copyWithin(target[required], start[optional], end[optional])
 * start parameter defaults to 0 and end parameter defaults to array.length
 * whatever happened it doesn't change array size or length.
 * It overwrites original array and also returns modified array 
 */

let arr = ['one', 'two', 'three', 'four', 'five', 'six'];

// with three parameter
arr.copyWithin(2, 3, 4); 
console.log(arr); // [ 'one', 'two', 'four', 'four', 'five', 'six' ]

// with target and start parameter
arr = ['one', 'two', 'three', 'four', 'five', 'six'];

arr.copyWithin(2, 3);
console.log(arr); // [ 'one', 'two', 'four', 'five', 'six', 'six' ]

// without start and end parameter
arr = ['one', 'two', 'three', 'four', 'five', 'six'];

arr.copyWithin(2);
console.log(arr); // [ 'one', 'two', 'one', 'two', 'three', 'four' ]

// with negative index parameter
arr = ['one', 'two', 'three', 'four', 'five', 'six'];

arr.copyWithin(-4, -3, -2);
console.log(arr); // [ 'one', 'two', 'four', 'four', 'five', 'six' ]

/****************************************************** */

// nothing will changed if start and end index isn't properly given
arr = ['one', 'two', 'three', 'four', 'five', 'six'];

arr.copyWithin(2, 3, 2); // // --> start and end parameter couldn't select any
console.log(arr); // [ 'one', 'two', 'three', 'four', 'five', 'six' ]

arr.copyWithin(-4, -2, -3); // --> start and end parameter couldn't select any
console.log(arr); // [ 'one', 'two', 'three', 'four', 'five', 'six' ]

// if target is out of index nothing will changed

arr.copyWithin(6, 3, 4); // --> 6 is out of index
console.log(arr); // [ 'one', 'two', 'three', 'four', 'five', 'six' ]

console.log(arr.entries());

