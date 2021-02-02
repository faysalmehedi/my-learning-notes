const drinks = [ 'peach', 'water', 'lime', 'lemonade', 'cola', 'pepsi' ];

// mutable way


// Removing array elements from beginning
let removed = drinks.shift(); // we can also store removed element
console.log(drinks); // [ 'water', 'lime', 'lemonade', 'cola', 'pepsi' ]
console.log(removed); // peach

// from the end 

removed = drinks.pop(); // mutable way

console.log(drinks); // [ 'water', 'lime', 'lemonade', 'cola' ]
console.log(removed); // pepsi

/************************************************************************* */

// drinks --> [ 'water', 'lime', 'lemonade', 'cola' ]
// immutable way to remove 

let index = 0;
// from the beginning
console.log([...drinks.slice(0, index), ...drinks.slice(index + 1)]); // [ 'lime', 'lemonade', 'cola' ]

// from the end
index = drinks.length - 1;
console.log([...drinks.slice(0, index), ...drinks.slice(index + 1)]); // [ 'water', 'lime', 'lemonade' ]

// from anywhere
index = 1; // index of which element to remove
console.log([...drinks.slice(0, index), ...drinks.slice(index + 1)]); // [ 'water', 'lemonade', 'cola' ]

console.log(drinks); // [ 'water', 'lime', 'lemonade', 'cola' ]

