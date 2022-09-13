// Defaults

// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   if (!quantity) {
//     quantity = 1;
//   }

//   if (!discount) {
//     discount = 0;
//   }

//   if (!serviceCharge) {
//     serviceCharge = 0.1;
//   }

//   if (!tax) {
//     tax = 0.15;
//   }

//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

// console.log(processOrder(100, 1, 0, 0));      // 126.5



// Equal

// const person = { name: 'Victor' };
// const otherPerson = person;

// console.log(person === otherPerson);    // false -- expected: true


// Amount Payable

// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 41

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 46

// `startingBalance` is initialized to 1 but then reassigned before each of the `totalPayable` invocations. 



// Caller
// partial function application. We need to pass in one argument to doubler

// function makeDoubler(caller) {
//   return function(number) {
//     console.log(`This function was called by ${caller}.`);
//     return number + number; 
//   }
// }

// const doubler = makeDoubler('Victor');
// console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.

// What's my Value?

// const array = ['Apples', 'Peaches', 'Grapes'];

// array[3.4] = 'Oranges';
// console.log(array.length); // 3 because 3 elements
// console.log(Object.keys(array).length); // 4 because 4 property names

// array[-2] = 'Watermelon';
// console.log(array.length); // 3 
// console.log(Object.keys(array).length); // 5


// Length

// const languages = ['JavaScript', 'Ruby', 'Python'];
// console.log(languages); // ['JavaScript', 'Ruby', 'Python']
// console.log(languages.length); // 3

// languages.length = 4;
// console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty slot]
// console.log(languages.length); // 4

// languages.length = 1;
// console.log(languages); // ['JavaScript']
// console.log(languages.length); // 1

// languages.length = 3;
// console.log(languages); // ['JavaScript', empty slot <2>]
// console.log(languages.length); // 3

// languages.length = 1; // ['JavaScript']
// languages[2] = 'Python'; 
// console.log(languages);// ['JavaScript', empty slot, 'Python']
// console.log(languages[1]); // undefined
// console.log(languages.length); // 3


// The Red Pill

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// first logs 'welcome'
// second logs 'to'
// third logs 'the'
// fourth logs 'Matrix!'
// ^^ This is 