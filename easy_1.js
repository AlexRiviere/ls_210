// Odd numbers 
// counter = 2;
// while (counter <= 99) {
//   console.log(counter);
//   counter += 2;
// }


//How Big is the Room

// let rlSync = require('readline-sync');
// let length = rlSync.question('What is the length of the room in meters?\n');
// let width = rlSync.question('What is the width of the room in meters?\n');
// let areaInMeters = (length * width).toFixed(2);
// let areaInFeet = (areaInMeters * 10.7639).toFixed(2);
// console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);

// Tip Calculator

// let rlSync = require('readline-sync');
// let billAmount = rlSync.question('What is the bill? ');
// let tipPercentage = rlSync.question('What is the tip percentage? ');
// let tip = billAmount * (tipPercentage / 100);
// let total = Number(billAmount) + tip
// console.log();
// console.log(`The tip is $${tip.toFixed(2)}.`);
// console.log(`The total is $${total.toFixed(2)}.`);


// Sum or Product of Consecutive Integers

// let rlSync = require('readline-sync');
// let integer = rlSync.question('Please enter an integer greater than 0: ');
// let operator = rlSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

// if (operator === 's') {
//   let sum = 0;
//   for (let i = 1; i <= integer; i += 1) {
//     sum += i; 
//   }
//   console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
// } else {
//   let product = 1;
//   for (let i = 1; i <= integer; i += 1) {
//     product *= i; 
//   }
//   console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
// }





// Short Long Short

/*
**Problem**
=>objective: write a function that, given two string arguments, returns the result of concatenating short long short 

=>input: 2 strings

=>output: 1 string, short long short

=>rules:

=>explicit	-	assume the given strings are of different lengths

=>implicit/edge cases - if one of the given strings is empty, return the other string alone


**Data Structure**


**Implementation Notes**
- can we use the destructuring assignment in this one
- like assign each to a string
- then test if a is > b, if so switch it to make sure that a is always the smallest one
- 

**Algorithm**
- declare variable `short`, assign to first arg
- declare variable `long`, assign to second arg
- if the length of `short` is > length of `long`, swap them
- return a string with interpolation of short long short

*/

// function shortLongShort(str1, str2) {
//   let short = str1
//   let long = str2
//   if (short.length > long.length) [short, long] = [long, short];
//   return `${short}${long}${short}`;
// }


// console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
// console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
// console.log(shortLongShort('', 'xyz') === "xyz");



// Leap Years Part 1

/*
**Problem**
=>objective: write a modifier function that given an integer, returns true or false as to whether the year is a leap year

=>input: integer

=>output: boolean

=>rules:

=>explicit	-	leap years are divisible by 4 and not 100
            - leap years are divisible by 4, 100 and 400

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- if `year` is divisible by 4 and not 100, return true
- if `year` is divisible by 4, 100 and 400, return true
- return false

*/

// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) return true;
//   if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) return true;
//   return false;
// }


// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true; 
//       }
//     } else {
//       return true;
//     }
//   }
  
//   return false;
// }


// console.log(isLeapYear(2016) === true);
// console.log(isLeapYear(2015) === false);
// console.log(isLeapYear(2100) === false);
// console.log(isLeapYear(2400) === true);
// console.log(isLeapYear(240000) === true);
// console.log(isLeapYear(240001) === false);
// console.log(isLeapYear(2000) === true);
// console.log(isLeapYear(1900) === false);
// console.log(isLeapYear(1752) === true);
// console.log(isLeapYear(1700) === false);
// console.log(isLeapYear(1) === false);
// console.log(isLeapYear(100) === false);
// console.log(isLeapYear(400) === true);



// function isLeapYear(year) {
//   if (year >= 1752) {
//     if (year % 400 === 0) {
//       return true;
//     } else if (year % 100 === 0) {
//       return false;
//     } else {
//       return year % 4 === 0;
//     }
//   } else {
//   return year % 4 === 0; 
//   }
// }

// console.log(isLeapYear(2016) === true);
// console.log(isLeapYear(2015) === false);
// console.log(isLeapYear(2100) === false);
// console.log(isLeapYear(2400) === true);
// console.log(isLeapYear(240000) === true);
// console.log(isLeapYear(240001) === false);
// console.log(isLeapYear(2000) === true);
// console.log(isLeapYear(1900) === false);
// console.log(isLeapYear(1752) === true);
// console.log(isLeapYear(1700) === true);
// console.log(isLeapYear(1) === false);
// console.log(isLeapYear(100) === true);
// console.log(isLeapYear(400) === true);






// Multiples of 3 and 5

/*
**Problem**
=>objective: given a number, compute the sum of all numbers between 1 and the given number (inclusive) that are multiples of 3 or 5

=>input: integer

=>output: integer

=>rules:

=>explicit	-	find the multiples, inclusive of the number that was passed in
            - number passed in is an integer greater than 1

=>implicit/edge cases -


**Data Structure**
- loop

**Implementation Notes**


**Algorithm**
- declare variable `sum`
- for loop starting at 1 going until given number, increment by 1
  - if the given number is divisible by 3 OR 5, add it to `sum`
- return `sum`

*/

// function multisum(integer) {
//   let sum = 0;
//   for (let i = 1; i <= integer; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   return sum;
// }

// console.log(multisum(3) === 3);
// console.log(multisum(5) === 8);
// console.log(multisum(10) === 33);
// console.log(multisum(1000) === 234168);



// UTF-16 String Value



function utf16Value(str) {
  let sum = 0;
  for (let char of str) {
    sum += char.charCodeAt(0); 
  }
  return sum;
}

console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);