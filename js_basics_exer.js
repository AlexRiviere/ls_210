// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
// ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
// dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
// ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
// diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
// hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);


// Conditionals Part 1

// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';

// if (myBoolean) {
//   console.log('Hello'); // hello
// }

// if (!myString) {
//   console.log('World');
// }

// if (!!myArray) {
//   console.log('Worlds'); // world
// }

// if (myOtherString || myArray) {
//   console.log('!'); // !
// }



// Conditionals Part 2

// if (condition1) {
//   // ...
//   if (condition2) {
//     // ...
//   } else {
//     // ...
//   }
// } else {
//   // ...
//   if (condition4) {
//     // ...
//     if (condition5) {
//     // ...
//     }
//   }
// }


// String Assignment

// let name = 'Bob';
// const saveName = name;
// name = 'Alice';
// console.log(name, saveName); // Alice Bob

// const name = 'Bob';
// const saveName = name;
// name.toUpperCase();
// console.log(name, saveName); // Bob, Bob because strings are immutable and the third line just returns a new string but does not mutate the string that name and saveName are pointing to



// Arithmetic Integer

// let firstNum = Number(prompt("First number?"));
// let secondNum = Number(prompt("Second number?"));
// console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
// console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
// console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
// console.log(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
// console.log(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);


// Counting the Number of Characters

// let rlSync = require('readline-sync');
// let phrase = rlSync.question("Please enter a phrase: ");
// let phaseWithoutSpaces = phrase.replaceAll(' ', '');
// console.log(`There are ${phaseWithoutSpaces.length} characters in ${phrase}.`);



// const readlineSync = require("readline-sync");

// console.log("Enter the first number:");
// let firstNumber = Number(readlineSync.prompt());
// console.log("Enter the second number:");
// let secondNumber = Number(readlineSync.prompt());

// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(
//   `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
// );


// function average(array) {
  
//   return sum(array) / array.length;
// }

// console.log(average([10, 12, 14, 12, 10, 14]));

// function sum(array) {
//   let total = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     total += array[index]
//   }
//   return total;
// }

// let temperatures = [98, 100, 96, 94, 91, 21]
// console.log(average(temperatures));


// function circumference(radius) {
//   function double(number) {      // nested function declaration
//     return 2 * number;
//   }

//   return 3.14 * double(radius);  // call the nested function
// }

// console.log(double(12));


// convert a string to a number

function stringToInteger(string) {
  return string * 1;  
}

console.log(stringToInteger('4321') === 4321);      // 4321
stringToInteger('570');       // 570