// array reversing

const drinks = [
    { name: 'Lemonade', price: 79 },
    { name: 'Peach', price: 99 },
    { name: 'Lime', price: 89 },
  ];

console.log(drinks);
/*
[
    { name: 'Lemonade', price: 79 },
    { name: 'Peach', price: 99 },
    { name: 'Lime', price: 89 }
] */

console.log(drinks.reverse());
/*
[
    { name: 'Lime', price: 89 },
    { name: 'Peach', price: 99 },
    { name: 'Lemonade', price: 79 }
] */

/***************************************************** */

// sorting drinks array by price

console.log(drinks.sort( (a, b) => a.price - b.price )); 
/* sorted low to high
[
  { name: 'Lemonade', price: 79 },
  { name: 'Lime', price: 89 },
  { name: 'Peach', price: 99 }
]
*/

console.log(drinks.sort( (a, b) => b.price - a.price ));

/* sorted high to low
[
  { name: 'Peach', price: 99 },
  { name: 'Lime', price: 89 },
  { name: 'Lemonade', price: 79 }
]
*/