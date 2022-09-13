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

// function stringToInteger(string) {
//   return string * 1;  
// }

// console.log(stringToInteger('4321') === 4321);      // 4321
// stringToInteger('570');       // 570


// Convert a String to a Number

/*
**Problem**
=>objective: without using built in conversion methods, convert a string to an integer

=>input: string

=>output: integer form of the given `string`

=>rules:

=>explicit	-	no + or - signs, no invalid chars

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare helper function `stringDigtoNum`, accepts one argument a string, returns the number value
  - switch statement with each string number returning a number
- main function
  - declare variable `mulitplier` initialized to 1
  - declare variable `result` initialized to 0
  - iterate over the chars in the given string BACKWARDS
    - for each char, convert to a number using the `stringDigToNum` helper function then multiply by `mulitplier` then add to `result`
    - increment `multiplier` by MULTIPLYING by 10
  - return result

*/

// function stringDigToNum(str) {
//   switch (str) {
//     case '0':
//       return 0;
//       break;
//     case '1':
//       return 1;
//       break;
//     case '2':
//       return 2;
//       break;
//     case '3':
//       return 3;
//       break;
//     case '4':
//       return 4;
//       break;
//     case '5':
//       return 5;
//       break;
//     case '6':
//       return 6;
//       break;
//     case '7':
//       return 7;
//       break;
//     case '8':
//       return 8;
//       break;
//     case '9':
//       return 9;
//       break;
//   }
// }

// function stringToInteger(str) {
//   let multiplier = 1;
//   let result = 0;
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     let number = stringDigToNum(str[i]);
//     result += number * multiplier;
//     multiplier *= 10;
//   }
//   return result;
// }

// console.log(stringDigToNum('7'));
// console.log(stringToInteger('4321')=== 4321);
// console.log(stringToInteger('570') === 570);


// Convert a String to a Signed Number

/*
**Problem**
=>objective: given a string that may or may not have a sign in its first index, return the string as a properly signed number type

=>input: string with or without sign

=>output: number (pos or neg depending on the sign)

=>rules:

=>explicit	-	string will always be a valid number

=>implicit/edge cases - first index can be number, + or -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `sign`, no initializer
- if the first index of the number is a '-'
  - reassign `sign` to -1
  - reassign the local variable that is referencing the string to string.slice(1)
- else if first index of the number is a '+'
  - reassign the local variable that is referencing the string to string.slice(1)
- then send the `string` to `stringToInteger`

*/
// const DIGITS = {
//   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//   '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// };

// function stringToInteger(string) {
//   let value = 0;
//   const numbers = stringToNumbers(string);

//   for (let i = 0; i < numbers.length; i += 1) {
//     value = 10 * value + numbers[i];
//   }

//   return value;
// }

// function stringToNumbers(string) {
//   const result = [];

//   for (let i = 0; i < string.length; i += 1) {
//     result.push(DIGITS[string[i]]);
//   }

//   return result;
// }

// function stringToSignedInteger(string) {
//   let sign;
//   if (string[0] === '-') {
//     sign = -1;
//     string = string.slice(1);
//   } else if (string[0] === '+') {
//     string = string.slice(1);
//     sign = 1;
//   } else {
//     sign = 1; 
//   }
//   let number = stringToInteger(string);
//   return number * sign;
// }

// console.log(stringToSignedInteger('4321') === 4321);
// console.log(stringToSignedInteger('-570') === -570);
// console.log(stringToSignedInteger('+100') === 100);




// Convert a number to a string

/*
**Problem**
=>objective: given a positive integer, convert it to a string using no built in functions

=>input: integer

=>output: string

=>rules:

=>explicit	-	no built in functions can be used

=>implicit/edge cases - 0 or many 0s in the number


**Data Structure**


**Implementation Notes**
- number % 10, 100, 1000 will give us the digits but how do we know when to stop
- the initial problem was number % 10 will give me the last digit but number % 100 will not give me the second to last digit 
- so i need to find a way to get rid of the last digit, 
  - ok we can divide by 10 rounded down
  - in this situation, the divisor does not need to be incremented
  - but now our stopping condition is tougher to calc
  - ok but now we can just say stop when the `tempNum` === 0
- stop when number % divisor === the original number





**Algorithm**
- declare a constant variable `numConv` that points to an object literal holding number keys paired with string representation values
- function `integerToString`
  - declare variable `result`, assign to empty string
  - declare variable `divisor` assign to 10
  - declare variable `remainder`
  - while the remainder does not equal the given `number`
    - reassign `remainder` to `number` % divisor
    - concatenate (from the front) the string representation of the `remainder` to the `result` string
    - reassign divisor to divisor * 10
  - return `result`
  
  
  
  
  
  
  
  
  
  
  
- declare a constant variable `numConv` that points to an object literal holding number keys paired with string representation values
- function `integerToString`
  - declare variable `result`, assign to empty string
  - declare variable `divisor`, assign to 10
  - declare variable `tempNum`, assign to given `num`
  - while `tempNum` !== 0
    - declare variable `remainder`, assign to `tempNum` % 10
    - front concat the string version of `remainder` to `result`
    - reassign `tempNum` to `tempNum` / 10 rounded down 
  - return `result`
*/
// const numConv = {
//   0: '0',
//   1: '1',
//   2: '2',
//   3: '3',
//   4: '4',
//   5: '5',
//   6: '6',
//   7: '7',
//   8: '8',
//   9: '9',
// }



// function integerToString(number) {
//   let result = '';
//   let divisor = 10;
//   let tempNum = number;
//   if (tempNum === 0) return '0';
//   while (tempNum !== 0) {
//     let remainder = tempNum % 10;
//     result = numConv[remainder] + result;
//     tempNum = Math.floor(tempNum / 10);
//   }
//   return result;
// }



// console.log(integerToString(4321) === "4321");
// console.log(integerToString(0)   === "0");
// console.log(integerToString(5000)=== "5000");





// Convert a Signed Number to a String

/*
**Problem**
=>objective: given a signed number, turn it into a string

=>input: signed number

=>output: string with a sign or nothing if the number is 0

=>rules:

=>explicit	-	if its 0, no sign, otherwise include a sign in the result

=>implicit/edge cases - 0, no sign


**Data Structure**


**Implementation Notes**


**Algorithm**


*/


// const numConv = {
//   0: '0',
//   1: '1',
//   2: '2',
//   3: '3',
//   4: '4',
//   5: '5',
//   6: '6',
//   7: '7',
//   8: '8',
//   9: '9',
// }

// function signedIntegerToString(number) {
//   let result = '';
//   let divisor = 10;
//   let tempNum = Math.abs(number);
//   if (tempNum === 0) return '0';
//   while (tempNum !== 0) {
//     let remainder = tempNum % 10;
//     result = numConv[remainder] + result;
//     tempNum = Math.floor(tempNum / 10);
//   }
//   if (number != 0) {
//     let sign;
//     number < 0 ? sign = '-' : sign = '+'
//     result = sign + result;
//   }
//   return result;
// }

// console.log(signedIntegerToString(4321)=== "+4321");
// console.log(signedIntegerToString(-123)===  "-123");
// console.log(signedIntegerToString(0)   ===     "0");





