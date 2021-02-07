// array iteration

const drinks = ['Cola', 'Pepsi', 'Lime', 'Peach'];

// Imperative array iteration using for loop

for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    if (drink === 'Lime') {
      console.log('Pour me a glass!');
    }
}

/************************************************************** */

// 'break' keyword stop the iteration and exit from the loop

for (let i = 0; i < drinks.length; i++) {
  const drink = drinks[i];
  if (drink === 'Lime') {
    console.log('found lime, gonna stop.');
    break;
  }
  console.log(drink);
}

/*
Cola
Pepsi
found lime, gonna stop.
*/

/************************************************************** */

// 'continue' keyword skip the current iteration and jump to the next iteration

for (let i = 0; i < drinks.length; i++) {
  const drink = drinks[i];
  if (drink === 'Lime') {
    console.log('found lime, will skip');
    continue;
  }
  console.log(drink);
}

/*
Cola
Pepsi
found lime, will skip
Peach
*/

/**************************************************************** */

// using for..of iteration method, which is introduced in es6

for (let drink of drinks) {
  console.log(`drink: ${drink}`);
}
