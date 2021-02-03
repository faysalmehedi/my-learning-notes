// finding elements in a array

const drinks = ['Lime', 'Peach', 'Lemonade', 'Cola'];

// using indexOf() method. it will returns index of element
// returns -1 if not found

console.log(drinks.indexOf('Peach')); // 1
console.log(drinks.indexOf('Pepsi')); // -1
console.log(drinks.indexOf('cola')); // -1 --> because of case sensitive


// using .includes(); returns boolean value 

console.log(drinks.includes('Lime')); // true
console.log(drinks.includes('cola')); // false; case sensitivity issue
console.log(drinks.includes('pepsi')); // false

// finding objects element in array
// using .findIndex() method, takes a callback and returns index number
const drinksWithId = [
    { id: 1, name: 'Lime' },
    { id: 2, name: 'Peach' },
    { id: 3, name: 'Cola' },
];

console.log(drinksWithId.findIndex( value => value.name === 'Cola' ));
// 2
console.log(drinksWithId.findIndex( value => value.id === 1 ));
// 0
console.log(drinksWithId.findIndex( value => value.name === 'Lemonade' ));
// -1

// find the element with .find() method it returns elements itself
console.log(drinksWithId.find( value => value.name === 'Cola' ));
// { id: 3, name: 'Cola' }
console.log(drinksWithId.findIndex( value => value.name === 'Water' ));
// -1

console.log(drinks.find(value => value === 'Peach'));
// Peach
console.log(drinks.find(value => value === 'water'));
// undefined

// with callback and destructuring
console.log(drinksWithId.find( ({ name }) => name === 'Cola' ) );


