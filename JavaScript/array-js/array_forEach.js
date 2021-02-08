/**
 * Array.prototype.forEach() was introduced in es5.
 * It is used to iterate all the items on the array, it takes a callback function as argument
 * we can't use break or continue statement inside forEach, in that case we need to use for...in or for...of
 */

['a', 'b', 'c', 'd'].forEach( (item, index, array) => {
    console.log(item, index, array);
} );

/* output
a 0 [ 'a', 'b', 'c', 'd' ]
b 1 [ 'a', 'b', 'c', 'd' ]
c 2 [ 'a', 'b', 'c', 'd' ]
d 3 [ 'a', 'b', 'c', 'd' ]
*/

const drinks = [
    {id: 1001, name: 'Lime', price: 399},
    {id: 1002, name: 'Lemonade', price: 299},
    {id: 1003, name: 'Peach', price: 499},
];

drinks.forEach( (drink) => {
    console.log(`${drink.id} ${drink.name}, ${(drink.price / 100).toFixed(2)}`);
} );

/* output:
1001 Lime, 3.99
1002 Lemonade, 2.99
1003 Peach, 4.99
*/