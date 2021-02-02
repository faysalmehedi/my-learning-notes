const drinks = ['lime', 'lemonade'];

// adding element at the beginning
drinks.unshift('water');
console.log(drinks); // [ 'water', 'lime', 'lemonade' ]

// adding element at the end
drinks.push('cola');
console.log(drinks); // [ 'water', 'lime', 'lemonade', 'cola' ]

// above two are mutable way to add element

// an immutable approach

const newDrinks = ['peach', ...drinks, 'pepsi'];
console.log(newDrinks); // [ 'peach', 'water', 'lime', 'lemonade', 'cola', 'pepsi' ]

/****************************************************** */
// adding elemnt at the middle
const index = 1;
const deletedElements = 0;
// drinks --> [ 'water', 'lime', 'lemonade', 'cola' ]
drinks.splice(index, deletedElements, 'peach'); // mu[ 'water', 'peach', 'lime', 'lemonade', 'cola' ]table way
console.log(drinks); // [ 'water', 'peach', 'lime', 'lemonade', 'cola' ]

// immutable way
console.log('add element at the middle in immutable way!')
console.log([
    ...drinks.splice(0, index),
    'mojito',
    ...drinks.splice(index - 1)
]); // [ 'water', 'mojito', 'peach', 'lime', 'lemonade', 'cola' ]



