// Hello Friends!

// On line 11, just use the `slice` method on `args` since it is already an array. 
// probably shouldn't use ++
// line 15, `greeting` will be assigned to a function object since we forgot the parentheses
// no return keyword for `randomGreeting`

// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//               'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   return words[idx];
// }

// function greet(...args) {
//   const names = Array.prototype.slice.call(args);

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const greeting = randomGreeting();

//     console.log(`${greeting}, ${name}!`);
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');



// Includes False

// function includesFalse(list) {
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element === false) {
//       console.log(true);
//       return;
//     }
//   }

//   console.log(false);
// }
//                                                                   // returns:
// includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
// includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
// includesFalse([9422, 'lambda', true, 0, '54', null]);             // true


// Place a bet

// function placeABet(guess) {
//   function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   };

//   const winningNumber = generateRandomInt();

//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }
// let rlSync = require('readline-sync');
// const userGuess = parseInt(rlSync.question('Input a guess between 1-25: '), 10);
// console.log(placeABet(userGuess));

// The issue here is `generateRandomInt` is defined as a named function expression and its name is therefore only accessible within its own scope. When we call it on line 6, JS will throw a reference error. 


// Picky Museum Filter

// function wantToVisit(museum, city) {
//   return museum.includes('Computer')
//       || museum.includes('Science')
//       && !(
//         museum.includes('Modern')
//         && museum.includes('Art')
//         && (museum.includes('Andy Warhol') || city === 'Amsterdam')
//       );
// }


// function wantToVisit(museum, city) {
//   if (museum.includes('Computer') || museum.includes('Science')) {
//     return true; 
//   } else if (museum.includes('Modern') && museum.includes('Art')) {
//     return museum.includes('Andy Warhol') || city === 'Amsterdam';
//   }
//   return false;
// }




// // Tests (should all print 'true')
// // if its modern art, has to be warhol or amsterdam
// // false || true && false
// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam'), 'ass')// === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);




// Shop Transactions
// let rlSync = require('readline-sync');
// const transactionLog = [];

// function processInput(input) {
//   const numericalData = parseFloat(input);

//   if (Number.isNaN(numericalData)) {
//     throw (new Error('Data could not be converted to numerical amount.'));
//   }

//   return numericalData;
// }

// function logTransaction() {
//   let data = rlSync.question('Please enter the transaction amount: ');

//   try {
//     data = processInput(data);
//     transactionLog.push(data);

//     console.log('Thank you. Data accepted.');
//   } catch(error) {
//     console.log(error.message);
//   }
// }

// function transactionTotal() {
//   let total = 0;

//   for (let i = 0; i < transactionLog.length; i++) {
//     total += transactionLog[i];
//   }

//   return total;
// }

// logTransaction();
// logTransaction();
// logTransaction();

// console.log(transactionTotal());



// Full Moon

// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   var newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

// Because we are declaring `newSpecies` with `var`, we are giving `newSpecies` function scope, or since it is not inside of a function, global scope. This means that on each iteration of the for loop, `newSpecies` is not being reassigned to `undefined`, it is continuing to reference the value it was assigned on the previous iteration. This makes the last if condition true and the program to log the warning twice. 





// Space Design

// Roles (salary still to be determined)

// const ceo = {
//   tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
//   salary: 0,
// };

// const developer = {
//   tasks: ['turn product vision into code'],
//   salary: 0,
// };

// const scrumMaster = {
//   tasks: ['organize scrum process', 'manage scrum teams'],
//   salary: 0,
// };

// // Team -- we're hiring!

// const team = {};

// team[ceo] = 'Kim';
// team[scrumMaster] = 'Alice';
// team[developer] = undefined;

// const company = {
//   name: 'Space Design',
//   team,
//   projectedRevenue: 500000,
// };

// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team[ceo]}`);
// console.log(`Scrum master: ${company.team[scrumMaster]}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// we have three objects, ceo, developer, scrumMaster (each have tasks and salary properties)
// team object, 
  // use bracket notation to create and assign properties
    // but the bracket notation doesn't use quotes, it uses what is essentially a variable like ceo, so the object is now the key
// copmany object, name, team is 'team' key as a string and value the 'team' object, revenue

// The issue here is on line 22 - 24. Keys in an object need to be valid strings. In our case, we are using variables that are referencing objects which will not create properties. If we use strings instead, we can reference the values later. 




// // Expensive Study Preparation

// // The shopping cart is a list of items, where each item
// // is an object { name: <string>, amount: <number> }.
// let shoppingCart = [];

// // Currently available products with prices.
// const prices = {
//   'notebook': 9.99,
//   'pencil': 1.70,
//   'coffee': 3.00,
//   'smoothie': 2.10,
// };

// function price({name}) {
//   return prices[name];
// }

// // Adding an item to the shopping cart.
// // The amount is optional and defaults to 1.
// // If the item is already in the cart, its amount is updated.
// function updateCart(name, amount) {
//   amount = amount || 1; 

//   let alreadyInCart = false;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];

//     if (item.name === name) {
//       item.amount = amount;
//       alreadyInCart = true;
//       break;
//     }
//   }

//   if (!alreadyInCart) {
//     shoppingCart.push({ name, amount });
//   }
// }

// // Calculating the price for the whole shopping cart.
// function total() {
//   let total = 0;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];

//     total += (item.amount * price(item));
//   }

//   return total.toFixed(2);
// }

// function pay() {
//   // omitted

//   console.log(`You have been charged $${total()}.`);
// }

// function checkout() {
//   pay();
//   shoppingCart = [];
// }

// // Example purchase.

// updateCart('notebook');
// updateCart('pencil', 2);
// updateCart('coffee', 1);
// // "Oh, wait, I do have pencils..."
// updateCart('pencil', 0);

// checkout();
// You have been charged $14.69.

// The issue here was with the assignment of amount. Since the number 0 is a falsy value, when we get rid of our pencils, the first part of the logical comparison fails which means `amount` is assigned to 1. Instead, we can use an if statement to implement some control flow around that assignemnt. 





// Stuck on Page 18

// const totalPages = 364;
// let energy = 100;
// let currentPage = 1;

// function read() {
  

//   while (energy > 0 && currentPage < totalPages) {
//     currentPage += 1;
//     energy -= (5 + currentPage * 0.1);
//   }

//   console.log(`Made it to page ${String(currentPage)}.`);

//   // Drink a cup of coffee.
//   energy = 100;

//   // Continue reading.
//   if (currentPage < totalPages) {
//     read();
//   } else {
//     console.log('Done!');
//   }
// }

// read();

// // The issue is when we call `read()` again, `currentPage` is assigned to 1 instead of starting where we left off. We should make `currentPage` a global variable. 


// function add(first, second) {
//   return first + second; 
// }

// function makeAdder(number) {
// 	return function(second) {
// 		return add(number, second);
// 	}
// }
// let addFive = makeAdder(5);
// console.log(addFive(10));






// function close() {
//   let i = 0;
  
//   return function() {
//     console.log(i);
//     i += 1;
//   }
// }

// let ass = close();
// ass();
// ass();
// ass();

// "use strict";

// var speak = undefined;

// function speak() {
//   console.log('Howdy!');
// }

// console.log(typeof speak);


// "use strict";


// function a(ass, ass) {
// console.log(hello); 
// }

// a();





// var speak;

// function speak() {
//   console.log('Howdy!');
// }

// console.log(typeof speak);





// const myArr = ['A', 'B', 'C'];

// function logElem(myArr) {
//   console.log(myArr[3]);
// }

// logElem();


// const myArr = ['A', 'B', 'C'];

// function logElem(myArr) {
//   console.log(myArr[2]);
// }

// // logElem(['A', 'B']);
// logElem(myArr);


// let a;

// function go() {
//   a = 1;
// }

// go();
// console.log(a);

// let a;

// function go() {
//   let a = 1;
// }

// go();
// console.log(a);


// let car = {
// 	make: 'Toyota',
// 	model: 'Prius C',
// 	year: 2016,
// 	canRun: true,
// };

// console.log(car);

// function objectHasProperty(object, property) {
//   if (object[property] !== undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let obj = { enabled: false };
// console.log(objectHasProperty(obj, 'active'));   // returns false
// console.log(objectHasProperty(obj, 'enabled'));  // returns false, should be true


//explicitly check that an array is empty

// function isEmpty(value) {
//   let type = typeof value;
//   if (type === 'string') {
//     return value.length === 0;
//   } else if (Array.isArray(value)) {
// 		return value.length === 0;
// 	} else if	(type === 'object') {
//     return Object.keys(value).length === 0;
//   }
// }

// // new test cases
// let a = [];
// a.nonElementProperty = 10;
// console.log(isEmpty(a));                  // true

// a[0] = 1;
// console.log(isEmpty(a));          // false




// // current test cases
// console.log(isEmpty({}));                  // true
// console.log(isEmpty({ name: 'Janice' }));  // false

// console.log(isEmpty(''));                  // true
// console.log(isEmpty('Janice'));            // false

// console.log(isEmpty([]));                  // true
// console.log(isEmpty(['Janice']));          // false


// "use strict";

// var speak = undefined;

// function speak() {
//   console.log('Howdy!');
// }

// console.log(typeof speak);

// "use strict";

// var speak;

// function speak() {
//   console.log('Howdy!');
// }

// console.log(typeof speak);

// const myArr = ['A', 'B', 'C'];

// function logElem(myArr) {
//   console.log(myArr[3]);
// }

// logElem();

// let a;

// function go() {
//   a = 1;
// }
// console.log(a);
// go();
// console.log(a);

// let a;

// function go() {
//   let a = 1;
// }

// go();
// console.log(a);


// function objectHasProperty(object, property) {
//   if (object[property] !== undefined) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let obj = { enabled: false };
// console.log(objectHasProperty(obj, 'active'));   // returns false
// console.log(objectHasProperty(obj, 'enabled'));  // returns false, should be true



function isEmpty(value) {
  let type = typeof value;
  if (type === 'string' || Array.isArray(value)) {
    return value.length === 0;
  } else if	(type === 'object') {
    return Object.keys(value).length === 0;
  }
}

// new test cases
let a = [];
a.nonElementProperty = 10;
console.log(isEmpty(a));                  // true

a[0] = 1;
console.log(isEmpty(a));          // false