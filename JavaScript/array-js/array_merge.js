// Merging two arrays

const drinks = [['Lemonade', 90], ['Cola', 70]];
const newDrinks = [['Lime', 60]];

// using concat() method, but it will not mutate any array 

const merged = drinks.concat(newDrinks);

console.log(merged); // [ [ 'Lemonade', 90 ], [ 'Cola', 70 ], [ 'Lime', 60 ] ]
console.log(drinks); // [ [ 'Lemonade', 90 ], [ 'Cola', 70 ] ]

// using spread operator

const mergedSpread = [...drinks, ...newDrinks]; 

console.log(mergedSpread);

// adding single array to an array, rearrange is also OKAY
const singleArray = ['Peach', 105];

const mergedSingle = [...newDrinks, singleArray, ...drinks];

console.log(mergedSingle); 
/*[
    [ 'Lime', 60 ],
    [ 'Peach', 105 ],
    [ 'Lemonade', 90 ],
    [ 'Cola', 70 ]
  ] */