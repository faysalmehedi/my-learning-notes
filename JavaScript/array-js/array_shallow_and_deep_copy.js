// shallow and deep array cloning

const drinks = [['Lemonade', 90], ['Cola', 70], ['Lime', 60]];

// using spread operator
const drinksClone = [...drinks];
console.log(drinksClone);

// but modifying 'drinksClone' also modify 'drinks' array
drinksClone[0][1] = 95;
drinksClone[1][1] = 75;
drinks[2][1] = 65;

console.log(drinksClone); // [ [ 'Lemonade', 95 ], [ 'Cola', 75 ], [ 'Lime', 65 ] ]
console.log(drinks); // [ [ 'Lemonade', 95 ], [ 'Cola', 75 ], [ 'Lime', 65 ] ]

// another two to shallow copy, they behave same as spread operator
const drinksCloneSlice = drinks.slice();
console.log(drinksCloneSlice);

const drinksCloneFrom = Array.from(drinks); // introduced in es6 
console.log(drinksCloneFrom);

/*************************************************************** */

// Deep copy

const drinksCloneDeep = JSON.parse(JSON.stringify(drinks));

drinksCloneDeep[0][1] = 'Price Invalid';

console.log(drinksCloneDeep); // [ [ 'Lemonade', 'Price Invalid' ], [ 'Cola', 75 ], [ 'Lime', 65 ] ]
console.log(drinks); // [ [ 'Lemonade', 95 ], [ 'Cola', 75 ], [ 'Lime', 65 ] ]
