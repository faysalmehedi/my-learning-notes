/**
 * Array.prototype.some()
 * It checks whether any element of array passes a particular test. If any test got passed it gives true in return.
 * Another point is if the test finds a true result, it then short circuits the loop and will continue no more.
 */

// syntax
let greaterThan = [1, 2, 3, 4, 5].some(value => value > 1); 
// main idea is it will loop over full array like forEach instead when some() found a true it stop iterating
console.log(greaterThan); // true

greaterThan = [1, 2, 3, 4, 5].some(value => value > 5);
console.log(greaterThan); // false

/*************************************************************************** */

const items = [
    { id: '🍔', name: 'Super Burger', price: 399, promo: false },
    { id: '🍟', name: 'Jumbo Fries', price: 199, promo: false },
    { id: '🥤', name: 'Big Slurp', price: 299, promo: true }
];

let isInPromo = items.some( item => item.promo );

const totalPrice = isInPromo ? 600 : items.reduce( (prev, next) => prev + next.price, 0 );

console.log(totalPrice); // 600 if there is any promo otherwise 897 if no promo

/********************************************************************** */

// traditioanl / imperative way

isInPromo = false;
let count = 0; 

for (let i=0; i < items.length; i++) {
    const item = items[i];
    count++;
    if (item.promo) {
        isInPromo = true;
        break;
    }
}

console.log(isInPromo, count); // true 3