// accessing array elements
const drinks = ['Cola', 'Pepsi', '7up'];

console.log(drinks[0]); // cola ---> first item
console.log(drinks[drinks.length - 1]); // 7up --> last item

drinks[0] = 'Lime';
console.log(drinks[0]); // lime

// clearing array

// drinks = [] // --> it will not work if we assign array with const; not recommended

// drinks.splice(0, drinks.length) // it's a way to clear elements

drinks.length = 0; // it is comfortable and easy way. Most preferable

console.log(drinks);

/***************************************************************** */

// Multi-Dimentional Array: Which means an array within array inside it

const drinksPrice = [ ['Lemonade', 100], ['Lime', [['small', 60], ['big', 90]]] ];

// accessing multi-dimentional array

console.log(`Drinks: ${drinksPrice[0][0]} Price: ${drinksPrice[0][1]}`);  // Drinks: Lemonade Price: 100

// a bit complex
console.log(drinksPrice[1]); // [ 'Lime', [ [ 'small', 60 ], [ 'big', 90 ] ] ]
console.log(`Small Lime Price: ${drinksPrice[1][1][0][1]}`); // 60
console.log(`Big Lime Price: ${drinksPrice[1][1][1][1]}`); // 90