// Destructuring

const priceList = [ [ 'Mango', 140 ], [ 'Lichi', 120 ], [ 'Apple', 90 ] ];

// destructure and assign variable
const [ mango, lichi, apple ] = priceList;

console.log(mango, lichi, apple); // [ 'Mango', 140 ] [ 'Lichi', 120 ] [ 'Apple', 90 ]

// we can skip element
const [ fruit1, , fruit2 ] = priceList;

console.log(fruit1, fruit2); // [ 'Mango', 140 ] [ 'Apple', 90 ]

// destructure multi-dimentioanl array

const [fruit3, [fruit4, fruit4Price], fruit5] = priceList;

console.log(fruit3, fruit4, fruit4Price, fruit5); 
// [ 'Mango', 140 ] Lichi 120 [ 'Apple', 90 ]

// uning rest operator

const [fruit6, ...rest] = priceList;

console.log(rest); // [ [ 'Lichi', 120 ], [ 'Apple', 90 ] ]