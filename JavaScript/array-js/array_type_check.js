// type checking for array

console.log(typeof []); // object
/* This is actually correct. Arrays are type of object. */

console.log([] instanceof Array); // true
console.log(new Array() instanceof Array); // true


console.log(Array.isArray([1, 2,3])); // true --> this is preferred way to check type
console.log(Array.isArray({"Key": 123})); // false


console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]