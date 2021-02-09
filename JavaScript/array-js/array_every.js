/**
 * Array.prototype.every()
 * It checks whether every element of array passes a particular test. If every test got passed it gives true in return.
 * Another point is if one of these tests finds a false result, 
 * it then short circuits the loop and will continue no more with the 'false' result.
 */

// syntax
let greaterThan = [1, 2, 3, 4, 5].every(value => value >= 1); 
console.log(greaterThan); // true

greaterThan = [1, 2, 3, 4, 5].every(value => value > 3);
// main idea is it will loop over full array like forEach instead when every() found a false it stop iterating
console.log(greaterThan); // false

/******************************************************************** */

const items = [
    { id: '🍔', name: 'Super Burger', price: 399, stock: true },
    { id: '🍟', name: 'Jumbo Fries', price: 199, stock: false },
    { id: '🥤', name: 'Big Slurp', price: 299, stock: true }
];

let isInStock = items.every(item => item.stock);

if (!isInStock) {
    console.log(`Sorry! ${items.find(item => !item.stock).name} is not at stock.`);
    // Sorry! Jumbo Fries is not at stock.
}


/********************************************************************** */

// traditioanl / imperative way
isInStock = true;
let count = 0;

for (let i=0; i < items.length; i++) {
    const item = items[i];
    count++;
    if (!item.stock) {
        isInStock = false;
        break;
    }
}

console.log(isInStock, count); // false 2