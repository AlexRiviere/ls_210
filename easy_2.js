// daily double

// function crunch(str) {
//   let newString = '';
//   for (let char of str) {
//     if (char !== newString[newString.length - 1]) {
//       newString += char;
//     }
//   }
//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
// console.log(crunch('4444abcabccba') === "4abcabcba");
// console.log(crunch('ggggggggggggggg')=== "g");
// console.log(crunch('a') === "a");
// console.log(crunch('') === "");



// Bannerizer

/*
**Problem**
=>objective: given a string, print a box

=>input: 

=>output:

=>rules:

=>explicit	-	

=>implicit/edge cases - always three on the outside, one extra space on the outside 


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `dashes`  assign to string length + 2
- print 5 lines
  - + dashes +
  - | dashes + 2 * spaces |
  - | string padded with spaces |
  - | dashes + 2 * spaces |
  - + dashes +
*/

// function logInBox(str) {
//   let dashes = str.length + 2
//   console.log(`+${'-'.repeat(dashes)}+`);
//   console.log(`|${' '.repeat(dashes)}|`);
//   console.log(`| ${str} |`);
//   console.log(`|${' '.repeat(dashes)}|`);
//   console.log(`+${'-'.repeat(dashes)}+`);
// }



// logInBox('To boldly go where no one has gone before.');
// logInBox('');





// Stringy Strings

// function stringy(int) {
//   let newString = '';
//   for (let i = 1; i <= int; i += 1) {
//     if (newString.length === 0) {
//       newString += '1';
//     } else if (newString[newString.length - 1] === '0') {
//       newString += '1'; 
//     } else {
//       newString += '0'; 
//     }
//   }
//   return newString;
// }
// console.log(stringy(6) === "101010");
// console.log(stringy(9) === "101010101");
// console.log(stringy(4) === "1010");
// console.log(stringy(7) === "1010101");




// Fibonacci Number Location by Length

/*
**Problem**
=>objective: given a number of digits, return the number that represents sequence number of the first fibonacci number to have that many digits

=>input: integer (number of digits)  

=>output: the sequence number of the fibonacci number that has the given number of digits

=>rules:

=>explicit	-	argument is always integer greater than or equal to 2

=>implicit/edge cases -


**Data Structure**
- while loop, array would also work but then we would have to store all that shit

**Implementation Notes**


**Algorithm**
- declare counter variable , assign to 3
- declare prevNum variable, assign to 1
- decalure prevPrevNum variable, assign to 1
- declare currNum variable, assign to 2
- while (digits of the currNum are < given `digits`)
  - reassign `prevPrevNumber` to `prevNumber`
  - reassign `prevNumber` to `currNumber`
  - reassign `currNumber` to `prevPrevNumber` + `prevNumber`
  - increment `counter`
- return the counter variable
*/
// function findFibonacciIndexByLength(digits) {
//   let counter = 3;
//   let prevNum = 1;
//   let prevPrevNum = 1;
//   let currNum = 2;
//   let currNumDigits = 1;
  
//   while (currNumDigits < digits) {
//     prevPrevNum = prevNum;
//     prevNum = currNum;
//     currNum = prevPrevNum + prevNum;
//     counter += 1;
//     currNumDigits = String(currNum).length;
//   }
//   return BigInt(counter);
// }


// console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.






// Right Triangles

/*
**Problem**
=>objective: write a function that takes a positive integer and logs a right triandle out of stars that all its sides have nStars

=>input: integer pos

=>output: right triangle printed and made out of stars

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- each row is the row number of stars, then fill with spaces

**Algorithm**
- argument `nStars`
- declare variable `rowNum`, assign to 1
- while (rowNum <= `nStars`)
  - declare variable spaces, assign to `nStars` - `rowNum`
  - log the spaces repeated and then `rowNum` of stars

*/


// function triangle(nStars) {
//   let rowNum = 1;
//   while (rowNum <= nStars) {
//     let spaces = nStars - rowNum;
//     console.log(`${' '.repeat(spaces)}${'*'.repeat(rowNum)}`);
//     rowNum += 1;
//   }
// }

// triangle(4);
// console.log("five");
// triangle(9);
// console.log("nine");



// Madlibs

// let rlSync = require('readline-sync');
// let noun = rlSync.question('Enter a noun: ');
// let verb = rlSync.question('Enter a verb: ');
// let adjective = rlSync.question('Enter a adjective: ');
// let adverb = rlSync.question('Enter a adverb: ');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious! `);




// Double Doubles

/*
**Problem**
=>objective: given an integer, double it unless it is a double number

=>input: integer

=>output: integer

=>rules:

=>explicit	-	double number is a number that, when cut in half, makes the same number twice

=>implicit/edge cases - by definition, a number with an odd number of digits cannot be a double number


**Data Structure**


**Implementation Notes**
- helper function to test if its a double number 

**Algorithm**
- declare function `isDoubleNumber`
  - declare variable numAsString, assign to the `number` coerced to a string
  - declare variable length, assign to length of `numAsString`
  - if the length is odd, return false
  - otherwise, 
    - compare the first slice of the `numAsString` to the second slice
      - .slice(0, length / 2);
      - .slice(length / 2)
- declare a function `twice` that takes one argument `number`
  - if the number is a double number
    - return the number as-is
  - otherwise
    - return it doubled
*/

// function isDoubleNumber(number) {
//   let numAsString = String(number);
//   let length = numAsString.length
//   if (length % 2 !== 0) return false;
//   return numAsString.slice(0, length / 2) === numAsString.slice(length / 2);
// }

// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2; 
//   }
// }



// console.log(twice(37)    === 74);
// console.log(twice(44)    === 44);
// console.log(twice(334433)=== 668866);
// console.log(twice(444)   === 888);
// console.log(twice(107)   === 214);
// console.log(twice(103103)=== 103103);
// console.log(twice(3333)  === 3333);
// console.log(twice(7676)  === 7676);



// Grade book

/*
**Problem**
=>objective: 

=>input: 

=>output:

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**


*/

// function getGrade(grd1, grd2, grd3) {
//   let average = (grd1 + grd2 + grd3) / 3
//   if (average >= 90) {
//     return 'A'
//   } else if (average >= 80 && average < 90) {
//     return 'B';
//   } else if (average >= 70 && average < 80) {
//     return 'C';
//   } else if (average >= 60 && average < 70) {
//     return 'D';
//   } else {
//     return 'F' 
//   }
// }

// console.log(getGrade(95, 90, 93) === "A");
// console.log(getGrade(50, 50, 95) === "D");


// Clean up the Words

/*
**Problem**
=>objective: given a string, remove all non letters adn return the string with no consecutive spaces

=>input: string 

=>output: cleaned string

=>rules:

=>explicit	-	remove all non-alphabetic characters
            - in the returned string, no consecutive spaces

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `cleanedString`, assign to empty string
- iterate over the chars in the given `str`
  - if its an alphabetic char
    - concatenate it on `cleanedString`
  - else
    - if the last char in `cleanedString` is not a space, 
      - concatenate a space to `cleanedString`
- return `cleanedString`

*/
// function cleanUp(str) {
//   let cleanStr = '';
//   for (let char of str) {
//     if (/[A-Za-z]/.test(char)) {
//       cleanStr += char; 
//     } else {
//       if (cleanStr[cleanStr.length - 1] !== ' ') cleanStr += ' ';
//     }
//   }
//   return cleanStr;
// }

// console.log(cleanUp("---what's my +*& line?") === " what s my line ");





// What Century is That

/*
**Problem**
=>objective: given a year, return the century as a string with cardinal ending

=>input: integer representing a year

=>output: string with century number and ordinal ending

=>rules:

=>explicit	-	return string with proper suffix

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `century` , assign to century number coerced to string
- switch statement for last digit of `century`
  - 1, return century with 'st'
  - 2, return century with 'nd'
  - 3, return century with 'rd'
  - default, 'th'
*/

function century(year) {
  let number = String(Math.ceil(year / 100));
  let lastTwoDigits = number.slice(-2);
  let suffix;
  if (lastTwoDigits !== '11' && lastTwoDigits !== '12' && lastTwoDigits !== '13') {
    switch (String(number)[String(number).length - 1]) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
    }
  } else {
    suffix = 'th';
  }
  return number + suffix;
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256)  === "3rd");
console.log(century(5)    === "1st");
console.log(century(10103)=== "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201)=== "113th");