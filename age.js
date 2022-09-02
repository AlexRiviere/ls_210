// let readlineSync = require('readline-sync');
// let age = readlineSync.question('How old are you? ');
// age = parseInt(age);
// console.log(`You are ${age} years old.`);
// // console.log(`In 10 years, you will be ${age + 10} years old.`);
// // console.log(`In 20 years, you will be ${age + 20} years old.`);
// // console.log(`In 30 years, you will be ${age + 30} years old.`);
// // console.log(`In 40 years, you will be ${age + 40} years old.`);

// for (let a = 10; a <= 40; a += 10 ) {
//   console.log(`In ${a} years, you will be ${age + a} years old.`);
// }

// function factorial (number) {
//   let product = 1;
//   for (let n = number; n > 0; n -= 1) {
//     product *= n;
//   }
//   return product;
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320


// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }





// let tries = 0;
// let result
// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);


// // let result = randomNumberBetween(1, 6);
// // tries += 1;

// // while (result <= 2) {
// //   result = randomNumberBetween(1, 6);
  
// // }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// break condition is the number being 0 or 1 because 1 * anuthing is itself
// recursion is to call the factorial function again
// doing something is minus 1 but where do we put the current total and where

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   }
//     return number * factorial(number - 1)
// }

// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320



// function findIntegers(array) {
//   return array.filter(element => Number.isInteger(element)); 
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
 
// function oddLengths(array) {
//   let lengths = array.map(element => element.length);
//   return lengths.filter(length => length % 2 !== 0);
// }


// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


 
// function oddLengths(array) {
//   return array.filter((element, index, arr) => {
//     arr[index] = 5;
//     return element;
//   });
// }


// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

// const modifiedWords = words.filter((word, index, arr) => {
//   arr[index] = ' extra';
//   console.log(arr[index]);
//   return word.length < 6;
// });

// console.log(modifiedWords);

// function sumOfSquares(array) {
//   return array.reduce((previousValue, currentValue) => { 
//     return previousValue + currentValue**2
//   }, 0);
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83


// function oddLengths(array) {
//   return array.reduce((acc, currentWord) => {
//     if (currentWord.length % 2 !== 0) {
//       acc.push(currentWord.length);
//     }
//     return acc;
//   }, []);  
// } 

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers3.includes(3));


// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// arr[1][3] = 606;
// console.log(arr);


// let myArray = { 0: 'alex', 1: 'lori', 2: 'zach', length: 3 };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let result = []

// for (let key in obj) {  
//   result.push(key.toUpperCase());
// }

// console.log(result);
// console.log(obj);




// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);
// myObj["qux"] = 3;

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// // foo, bar, qux

// for (let key in myObj) {
//   console.log(key);
// }

// // foo, bar, quz


// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// function copyObj(obj, keysArray) {
//   let newObj = {};
//   let newKeysArray = keysArray || Object.keys(obj);
//   newKeysArray.forEach(key => newObj[key] = obj[key]);
//   return newObj
// }

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);
// // foo {a: "hi", b: "world"}

// console.log(foo.a); // hi
// console.log(qux); // hello

// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj["bar"][3]["xyz"] = 606;
// console.log(obj);



// let names = ['bob', 'joe', 'steve', undefined, 'frank'];
// names.forEach(name => { 
//   try {  
//     console.log(`${name}'s name has ${name.length} letters in it.`);
//   } catch (exception) {
//     console.log('Soemthing went wrong.'); 
//   }
// });



// function allMatches(arr, regex) {
//   return arr.filter(word => regex.test(word));
// }

// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']



// function isNotANumber(value) {
//   return value !== value;
// }


// function isNegZero(value) {
//   return 1/value === -Infinity;
// }

// console.log(isNegZero(-0) === true);
// console.log(isNegZero(0) === false);


// let x = '13';
// let y = 9;

// console.log(x * y);

// let npa = String(212);
// let nxx = String(555);
// let num = String(1212);

// console.log(npa + nxx + num);



// let bool = true;
// let arr = [1, 2, 3];

// console.log(bool.toString());
// console.log(arr.toString());

// let apples = 3;
// let bananas = 1;
// let eitherOr = bananas || apples; 
// console.log(eitherOr);

// let areEqual = apples === bananas;
// console.log(areEqual);

// if (apples === bananas) {
//   console.log("true");  
// } else {
//     if (apples == bananas) {
//     console.log("same number different types");
//     } else {
//     console.log("totes not equal");  
//     }
// }


let lastName = 'rivier';
let familyMessage = lastName === 'riviere' ? "You're part of the family" : "You're not family";
console.log(familyMessage);