/**
 * Array.prototype.map() is introduced in es5 version
 * array.map() allows us loops over in a array and access indivisual item like forEach().
 * The map() method creates a new array populated with the results of calling 
 * a provided function on every element in the calling array.
 */

// syntax
const mapped = [1, 2, 3, 4, 5].map(x => x * 2);
console.log(mapped);


const drinks = [
    {id: 1001, name: 'Lime', price: 399},
    {id: 1002, name: 'Lemonade', price: 299},
    {id: 1003, name: 'Peach', price: 499},
];

const halfOfPrice = drinks.map( (item) => {
    if (item.name === 'Lemonade') {
        return {
            ...item,
            price: item.price / 2,
            name: 'Lemon',
        }
    }

    return item;
} )

console.log(halfOfPrice);

/*
[
  { id: 1001, name: 'Lime', price: 399 },
  { id: 1002, name: 'Lemon', price: 149.5 },
  { id: 1003, name: 'Peach', price: 499 }
]
*/


/********************************************************************** */
// traditioanl / imperative way

const changedDrinks = [];

for (let i=0; i < drinks.length; i++) {
    const item = drinks[i];

    if (item.name.toLowerCase() === 'lemonade') {
        changedDrinks.push({
            ...item,
            name: 'Lemon',
            price: item.price / 2,
        });
    } else {
        changedDrinks.push(item);
    }
}

console.log(changedDrinks);

/*
[
  { id: 1001, name: 'Lime', price: 399 },
  { id: 1002, name: 'Lemon', price: 149.5 },
  { id: 1003, name: 'Peach', price: 499 }
]
*/