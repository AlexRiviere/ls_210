// Odd Numbers
/*
**Problem**
=>objective: write a function that, given a positive integer, logs the odd numbers from 1 to the passed in number (inclusive of itself). All nums logged on separate lines

=>input: positive integer

=>output: logged odd numbers from 1 to the number passed in

=>rules:

=>explicit	-	only log odd numbers, inclusive of the number passed in

=>implicit/edge cases - 1 should only log 1
                  - can we get 0? 


**Data Structure**
- no storage
- loop?

**Implementation Notes**
- number % 2 === 1, will return true if the number is odd. 

**Algorithm**
- lets go for a for loop
- for loop each number starting with 1, until the number is greater than the argument, increment by 1
  - in the block
  - test to see if the argument is odd, 
    - if true, print it
    - if not, next




- for each number starting from 1, until the number is greater than the argument passed in, increment by 2 ---this would work but to be thorough and do it closer to how they are doing it, i will do it another way
*/

// function logOddNumbers(number) {
//   for (let i = 1; i <= number; i += 2) {
//     if (i % 2 === 0) continue;
//     console.log(i);
//   }
  
// }

// logOddNumbers(19);






// Multiples of 3 and 5
/*
**Problem**
=>objective: write a function that logs the integers from 1 - 100 (including 100) that are multiples of 3 or 5. if its divisible by both, append '!' to the number 

=>input: no input, this is just a function invocation

=>output: logging multiples of 3 and 5 to the console, nums that are multiples of both are logged with a '!' appended 

=>rules:

=>explicit	-	log all multiples of 3 and 5 to the console, between 1 and 100, ones that are a multiple of both need to be appended to the console. print everything as strings

=>implicit/edge cases - multiples of both


**Data Structure**
- numbers need to be coerced to strings, no matter what

**Implementation Notes**


**Algorithm**
- for loop
- if its a multiple of 3 and 5, 
  - convert to a a string, log with '!' appended
- if its a multiple of 3 or 5
  - log it as a string
- else 
  - next 

*/

// function multiplesOfThreeAndFive(start, end) {
//   for (let currNum = start; currNum <= end; currNum += 1) {
//     if (currNum % 3 === 0 && currNum % 5 === 0) {
//       console.log(currNum + '!'); 
//     } else if (currNum % 3 === 0 || currNum % 5 === 0) {
//       console.log(String(currNum)); 
//     }
//   }
// }

// multiplesOfThreeAndFive(5, 25);



//print multiples
/*
**Problem**
=>objective: given a number, log the mutlples of that number that are odd and between 0 and 100 (inclusive)

=>input: an integer between 1 and 100

=>output: logging to the console the numbers between 1 and 100 that are multiples of the given number and also odd

=>rules:

=>explicit	-	log in descending order

=>implicit/edge cases - log nums as numbers


**Data Structure**


**Implementation Notes**


**Algorithm**
- for loop starting from 100 , while i > 0, decrement by 1
- print all nums that are odd and multiples of given number

*/

// function logMultiples(number) {
//   let largestMultiple = Math.floor(100 / number) * number; 
//   for (let currNum = largestMultiple; currNum >= number; currNum -= number) {
//     if (currNum % 2 === 1) console.log(currNum);
//   }
// }

// logMultiples(17);
// logMultiples(21);



//Fizz Buzz

/*
**Problem**
=>objective: iterate over the numbers between 1- 100(inclusive) print out something for every number. If its a multiple of 3, print fizz, 5 : buzz, otherwise just prnit the number as a number

=>input:no input 

=>output: logs

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- iterate over the integers between 1-100
- if its a multiple of 3 && 5 - log FizzBuzz
- just 3, fizz
- just 5 buzz
- else number

*/

// function fizzbuzz() {
//   for (let currNum = 1; currNum <= 100; currNum += 1) {
//     if (currNum % 3 === 0 && currNum % 5 === 0) {
//       console.log('FizzBuzz'); 
//     } else if (currNum % 3 === 0) {
//       console.log('Fizz'); 
//     } else if (currNum % 5 === 0) {
//       console.log('Buzz'); 
//     } else {
//       console.log(currNum); 
//     }
//   }
// }

// fizzbuzz();


// Prime Check

/*
**Problem**
=>objective: given a number, return true if its prime and false if its not

=>input: integer

=>output: boolean

=>rules:

=>explicit	-	input will always be a non-negative integer

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- prime means that it is only divisible by itself and 1, nothing else will be able to be divided into that number and have a remainder of 0

**Algorithm**
- from 1 up to the given number / 2 rounded up
  - if number % currNum === 0, then return false
  - otherwise return true
*/

// function isPrime(number) {
//   if (number === 1 || number === 0) return false;
//   for (let currNum = 2; currNum <= Math.ceil(number / 2); currNum += 1) {
//     if (number % currNum === 0) {
//       return false; 
//     }
//   }
//   return true;
// }

// console.log(isPrime(1) === false);
// console.log(isPrime(2) === true);
// console.log(isPrime(3) === true);
// console.log(isPrime(43) === true);
// console.log(isPrime(55) === false);
// console.log(isPrime(0) === false);



// XOR

/*
**Problem**
=>objective: write a function that takes two arguments and returns true if exactly one of the arguments is truthy, false if anything else

=>input: two values

=>output: boolean

=>rules:

=>explicit	-	based on truthy-ness, not actual value, return true if exaclty one of the arguments are truthy

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- if the arguments' truthyness is equal to each other, return true, other wise false
*/

// function isXor(first, second) {
//   return !!first !== !!second; 
// }

// console.log(isXor(false, true) === true);
// console.log(isXor(true, false) === true);
// console.log(isXor(false, false) === false);
// console.log(isXor(true, true) === false);
// console.log(isXor(false, 3) === true);
// console.log(isXor('a', undefined) === true);
// console.log(isXor(null, '') === false);
// console.log(isXor('2', 23) === false);



// Guessing the Password

/*
**Problem**
=>objective: write a program that prints a prompt for the user (Wha tis the password) then verifies the password. If the password is correct, log a success message, terminate the program. If the password is wrong, let them try again. If they fail three times, log a message, terminate the program.  

=>input: string (password try) and number of attempts

=>output: either prompt again, failure message and terminate, success message and terminate

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- honestly doing this with a while loop or do while loop
- create the library object for the prompt
- create a function that displays prompts the user for a password
- create a function that, given the password and number of attemtps, does what the program is supposed to do
  - if the password is correct, log the success message and terminate the program
  - if the password is wrong and the attempts number is 3, log the failure message and terminate the program
  - if the password is wrong and the attempts number is less than 3, let them try again 
- while attempts is < 3
  - prompt for a password
  - check result 
    - if its correct, log the success message, break out of the loop
    - if its wrong, 
    
- declare attempt variable to 0
- while loop condition (attempt < 4)
  - prompt
  - test result
    - if correct, log success, break
    - if incorrect
      - increment attempts
      
    - if attempts === 3
      - log failure and break
*/

// let rlSync = require('readline-sync');
// let attempts = 0;
// const PASSWORD = 'password';

// while (attempts < 3) {
//   let answer = rlSync.question('What is the password: ');
//   if (PASSWORD === answer) {
//     console.log('You have successfully logged in.'); 
//     break;
//   } else {
//     attempts += 1; 
//   }
  
//   if (attempts === 3) console.log('You have been denied access.');
// }




// Student Grade

/*
**Problem**
=>objective: write a program that prmopts the user for 3 test scores (all valid) in three different prompts. Then log a message to teh console with the letter grade based off the average of the 3 scores. 

=>input: 3 scores

=>output: a grade interpolated into a string that gets logged to the console. 

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- create a library object that can retrieve answers to questions
- declare three variables, each assigned to the return value of a prompt from the user
- calculate the average 
- use a switch statement to determine the message sent back
*/

// let rlSync = require('readline-sync');
// let score1 = rlSync.question('Enter score 1: ');
// let score2 = rlSync.question('Enter score 2: ');
// let score3 = rlSync.question('Enter score 3: ');
// let average = (Number(score1) + Number(score2) + Number(score3)) / 3
// let grade = null;

// switch (true) {
//   case (average < 50):
//     grade = 'F';
//     break;
//   case (average >= 50 && average < 70):
//     grade = 'C';
//     break;
//   case (average >= 70 && average < 90):
//     grade = 'B';
//     break;
//   default:
//     grade = 'A';
// }

// console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`);

// Greatest Common Divisor

/*
**Problem**
=>objective:create a function that, given two positive integers, returns the greatest common divisor

=>input: two positive integers

=>output: one integer representing the GCD

=>rules:

=>explicit	-	

=>implicit/edge cases - if they don't have a gcd, return 1


**Data Structure**


**Implementation Notes**
- method 1: get divisors of ecah number, get common divisors, get max
- method 2: determine the larger/smaller, see if the smaller can fit into the larger, if it doesn't, keep going down until 1 

**Algorithm**
- declare function `getAllDivisors` which takes a number and returns an array of the numbers divisors
- declare an empty array `firstNumberDivisors`, assign to the return value from calling the `getAllDivisors` function passing the first argument as a arguemnt
- declare an empty array `secondNumberDivisors`, assign to the return value from calling the `getAllDivisors` function passing the first argument as a arguemnt
- declare variable `commonDenoms` assign to the result of calling `filter` on `firstNumberDivisors`
  - callback function returns true if that number is included in the `secondNumberDivisors` array
- return the max number from `commonDenoms`

- the `getAllDivisors` function
  - given an integer, return an array of all its divisors
  - declare a variable `divisors`, assign to an empty array
  - for loop starting from 1 up to given number
    - if it divides evenly into the given number, add it to the `divisors` array 
  - return `divisors` array


*/

// function getAllDivisors(number) {
//   let divisors = [];
//   for (let i = 1; i <= number; i += 1) {
//     if (number % i === 0) { 
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }

// function gcd(first, second) {
//   let firstNumberDivisors = getAllDivisors(first);
//   let secondNumberDivisors = getAllDivisors(second);
//   let commonDenoms = firstNumberDivisors.filter(number => {
//     return secondNumberDivisors.includes(number)
//     });
//   console.log(Math.max(...commonDenoms));
// }
// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1






// Goldback Numbers

/*
**Problem**
=>objective: write a function named checkGoldbach that, given an integer (expectedSum), logs all combinations of two prime numbers that, when added, equal expectedSum. When logging, log the smaller number first. 

=>input: integer

=>output: logging pairs of numbers with a space in between

=>rules:

=>explicit	-	given an integer, can use isPrime
            - log ALL combinations of two prime numbers that add up to the expected number

=>implicit/edge cases - given a number less than 4 -- log null
                      - passed an odd number - log null
                      - also, you can repeat numbers, so 4's primes are only 2, but 2 + 2 is 4 so that works


**Data Structure**


**Implementation Notes**
- if its odd or < 4, log null
- i wish i could get all the prime numbers in one array
- save the array to a variable
- iterate over a copy, for each element, iterate over the OG, testing whether the current element and the element from the original add up to the expectedSum, if so log them. 
- 

**Algorithm**
- guard clause for numbers that are odd or less than 4

- declare helper function getAllPrimes, arg `number`
  - given an even number, returns an array of all prime numbers less than (number / 2 - 1)
  - declare variable `largestPossPrime` assign to `number` / 2 - 1
  - declare variable `result` assign to empty array
  - for loop starting at let num =  1, condition: <= largestPossPrime, increment by 1
    - if the `num` is prime, add it to the results array
  - return the results array

- declare main function `checkGoldbach`
  - guard clause: if the `expectedNumber` is odd or less than 4, log null
  
  - declare variable `primes` = return value from passing `expectedNumber` to `getAllPrimes`
  - declare variable `primesCopy` = copy of `primes` -- use slice(0)
  - iterate over `primes` with `forEach` (with element and index params)
    - for loop from the current index to the last index
      - add this number, with the number at the other index
      - if it adds up, print it 
    
    
  
    - on each iteration, iterate over the elements `primesCopy` 
    - if, the current element from `primes` and the current element from `primesCopy` when added together, equal `expectedSum`
      - log the pair to the console, smaller number first
      - put them in an array together, then call min and max in the interpolation 
*/

// function isPrime(number) {
//   if (number === 1 || number === 0) return false;
//   for (let currNum = 2; currNum <= Math.ceil(number / 2); currNum += 1) {
//     if (number % currNum === 0) {
//       return false; 
//     }
//   }
//   return true;
// }

// function getAllPrimes(number) {
//   let largestPossiblePrime = number
//   let results = [];
//   for (let i = 1; i <= largestPossiblePrime; i += 1) {
//     if (isPrime(i)) {
//       results.push(i); 
//     }
//   }
//   return results; 
// }

// function checkGoldbach(expectedNumber) {
//   if (expectedNumber < 4 || expectedNumber % 2 === 1) {
//     console.log(null); 
//   }
  
//   let primes = getAllPrimes(expectedNumber);
//   let primesCopy = primes.slice(0);
  
//   primes.forEach(function (prime, index, primesArray) {
//     for (let secondIndex = index; secondIndex < primesArray.length; secondIndex += 1) {
//       if (prime + primesArray[secondIndex] === expectedNumber) {
//         let result = [prime, primesArray[secondIndex]];
//         console.log(`${Math.min(...result)} ${Math.max(...result)}`);   
//       }
//     }
//   });
// }


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
- guard clause
- declare variable `allPairs` assign to an empty array
- for loop (num is 1, <= expectedNum / 2, increment by 1)
  - push an array to `allPairs` with the current num and expectedNum - current num
- declare a variable `primePairs` assign it to the `allPairs` array filtered for pairs whose elements are both prime
- iterate over `primePairs`
  - tbh this should already be in order
  - so just print it


*/

// function isPrime(number) {
//   if (number === 1 || number === 0) return false;
//   for (let currNum = 2; currNum <= Math.ceil(number / 2); currNum += 1) {
//     if (number % currNum === 0) {
//       return false; 
//     }
//   }
//   return true;
// }

// function checkGoldbach(expectedNumber) {
//   if (expectedNumber < 4 || expectedNumber % 2 === 1) {
//     console.log(null); 
//   }
  
//   let allPairs = [];
//   for (let num = 1; num <= expectedNumber / 2; num += 1) {
//     allPairs.push([num, expectedNumber - num]);
//   }
  
//   allPairs.filter(pair => {
//     if (isPrime(pair[0]) && isPrime(pair[1])) {
//       console.log(`${pair[0]} ${pair[1]}`); 
//     }
//   });
// }




// checkGoldbach(3);
// console.log('');
// checkGoldbach(4);
// console.log('');
// checkGoldbach(12);
// console.log('');
// checkGoldbach(100);



// Pattern Generation

/*
**Problem**
=>objective: given a number of rows, log that number of rows with inversely correlated number of numbers and stars. So if the given row is 7, the first row has a 1 and 6 stars, the last row has 1-7 and no stars

=>input: integer

=>output: square of numbers and stars printed to the console

=>rules:

=>explicit	-	input will be greater than 1 and less than 10

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- first row has always 1, second always 12 then number of stars is total - current row

**Algorithm**
- declare function `generatePattern`
  - for loop (let row = 1; <= nstars; increment by 1)
    - declare variable `numbers` assign to empty array
    - assign the length of `numbers` to be `nStars`
    - fill `numbers` with 0s
    - reassign numbers to the result of iterating over numbers, setting each element to its own index + 1, then joining the resulting array
    - declare variable `rowStars` assign it to `nStars` minus current row number
    - log interpolate numbers with row stars


*/

// function generatePattern(nStars) {
//   for (let row = 1; row <= nStars; row += 1) {
//     let numbers = [];
//     numbers.length = row;
//     numbers.fill(0);
//     numbers = numbers.map((elem, index) => index + 1).join('');
//     let rowStars = nStars - row;
//     console.log(`${numbers}${'*'.repeat(rowStars)}`);
//   }
// }

// generatePattern(20);


//Index of Substring

/*
**Problem**
=>objective: write a function that takes two arguments, and returns the index of the beginning of where the secondString has a match in the first string. 

=>input: two strings 

=>output: index or -1 if no match

=>rules:

=>explicit	-	

=>implicit/edge cases - case sensitive 's' != 'S', has to be a perfect match
                      - can't use built in functions except square brackets and length


**Data Structure**


**Implementation Notes**
- find where the first letter of the second string is found in the second string
- if there is no match then 
- or find all instances in the first string where we can find the first letter of the second string in the firstString.length - secondString.length

- 

**Algorithm**
- declare function `indexOf`: two args (firstString, secondString)
  - iterate over the letters of the `firstString`
    - if the letter matches the first letter of the `secondString`
      - check if that slice (from the current letter for the next secondString.length indexes) matches the second string
      - if it matches, return the current index
      - otherwise, continue to the next letter

*/

// function indexOf(firstStr, secondString) {
//   for (let index in firstStr) {
//     index = Number(index);
//     if (firstStr[index] === secondString[0]) {
//       if (firstStr.slice(index, index + secondString.length) === secondString) {
//         console.log(index);
//         return;
//       }
//     }
//   }
//   console.log(-1);
// }

// indexOf('Some strings', 's')            // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1




/*
**Problem**
=>objective: create a function that, given two strings, searches for the last instance of a substring in the `firstString` that matches the `secondString` and returns the index of the character where that substring begins

=>input: two strings 

=>output: index of the last match or -1 if no match

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- declare a variable `indexes`, assign to empty array
- iterate over the letters in the `firstString` by using their index numbers
  - if the letter matches the first letter in the `secondString`
    - if the slice of this letter's index to this index + length of second string matches the second string
      - push the current index to the `indexes` array
- return the max from the indexes array or -1

**Algorithm**


*/





// function lastIndexOf(firstString, secondString) {
//   let indexes = [-1];
//   for (let index in firstString) {
//     index = Number(index);
//     if (firstString.slice(index, index + secondString.length) === secondString) {
//       indexes.push(index)
//     }
//   }
//   console.log(Math.max(...indexes));
// }

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1





// Trimming Spaces

/*
**Problem**
=>objective: given a string, trim the spaces from the most left or most right positions

=>input: string

=>output: string

=>rules:

=>explicit	-	can only use brackets and and length 
            - empty string returns empty string
=>implicit/edge cases - string of spaces returns empty string


**Data Structure**


**Implementation Notes**
- declare variable `firstLetter`
- declare variable `lastLetter`
- declare variable `tempWord`
- declare variable `finalWord`
- iterate over the characters in the given string
  - if the current char is not a space, concat to tempWord
  - if the current char is a space, concat tempWord to finalWord
- concat tempWord to `finalWord`
- log `finalWord`


- how do i know if this space is before the letters start, in the middle of the letter, or after the letters end
- 

- declare variable `firstLetterIndex`
- declare variable `lastLetterIndex`
- for loop ( i; i <= length of string; increment by 1)
  - if character is a letter, 
    - save it to `firstLetterIndex`
    - break out of loop
- for loop (i = string length - 1; i < 0; decrement by 1)
  - if character is a letter
    - save it to `lastLetterIndex`
    - break out of loop
- declare variable `finalWord`
- loop over indexes of letters
  - if the index is between `firstLetterIndex` and `lastLetterIndex`, concatenate it to `finalWord`
- return final word

**Algorithm**
- 

*/

// function trim(string) {
//   let firstLetterIndex;
//   let lastLetterIndex;
  
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] !== ' ') {
//       firstLetterIndex = i;
//       break;
//     }
//   }
  
//   for (let i = string.length - 1; i > 0; i -= 1) {
//     if (string[i] !== ' ') {
//       lastLetterIndex = i;
//       break;
//     }
//   }
  
//   let finalWord = '';
//   for (let index in string) {
//     if (index >= firstLetterIndex && index <= lastLetterIndex){
//       finalWord += string[index]
//     }
//   }
//   return finalWord;
// }

// using LS algorithm

// function trimLeft(string) {
//   let copyMode = false;
//   let newString = '';
//   for (let char of string) {
//     if (char === ' ' && copyMode === false) {
//       continue; 
//     } else {
//       copyMode = true;
//       newString += char
//     }
//   }
//   return newString;
// }

// function trimRight(string) {
//   let copyMode = false;
//   let newString = '';
//   for (let i = string.length - 1; i >= 0; i -= 1) {
//     if (string[i] === ' ' && copyMode === false) {
//       continue;
//     } else {
//       copyMode = true;
//       newString = string[i] + newString; 
//     }
//   }
//   return newString;
// }

// function trim(string) {
//   let leftTrimmed = trimLeft(string);
//   return trimRight(leftTrimmed);
// }

// console.log(trim('  abc  ') === "abc");
// console.log(trim('abc   ') === "abc");
// console.log(trim(' ab c') === "ab c");
// console.log(trim(' a b  c') === "a b  c");
// console.log(trim('      ') === "");
// console.log(trim('') === "");




//Splitting a String

/*
**Problem**
=>objective: given two arguments, a string and a delimiter, print the delimited words of the split string 

=>input: string, delimiter

=>output: logging delimited words

=>rules:

=>explicit	-	log the words that the delimiter splits

=>implicit/edge cases - no delimiter provided? throw an error
                      - do not print delimiter, only the chars between them
                      - if the delimiter is an empty string, log every char separately
                      - if the delimiter is not found, just log the whole given string
                      - if the delimiter is the first char, log a blank line


**Data Structure**
- string, another stirng to hold the current word

**Implementation Notes**
- 

**Algorithm**
- guard clause for unprovided delimiter
- declare variable 'currentWord', assign to empty string 
- iterate over the characters in the given string
  - if the delimiter is an empty string
    - log the current char
  - if the char matches the delimiter
    - log the `currentWord`
    - assign an empty string to `currentWord`
  - if the char is not the delimiter
    - concatenate it to the `currentWord`



*/

// function splitString(string, delimiter) {
//   if (delimiter === undefined) throw new SyntaxError('No delimiter provided.'); 
  
//   let currentWord = '';
//   for (let index in string) {
//     if (delimiter === '') {
//       console.log(string[index]);
//     } else if (string[index] === delimiter) {
//       console.log(currentWord);
//       currentWord = '';
//     } else {
//       currentWord += string[index];
//       if (Number(index) === string.length - 1) {
//         console.log(currentWord);
//       }
//     }
//   }
// }


// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// // splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

// splitString('hello', ';');
// // logs:
// // hello

// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello








// Repeating Strings

/*
**Problem**
=>objective: given a string and a number, return the string repeated that many number of times

=>input: string, number 

=>output: string or undefined or empty string

=>rules:

=>explicit	-	if `times` is not a number or negative, return undefined
            - if `times` is 0, return an empty string

=>implicit/edge cases -


**Data Structure**
- two strings, 

**Implementation Notes**


**Algorithm**
- guard clause for those two / three situations
- declare counter variable, assign to 1
- declare variable `newString`;
- while counter is less than or equla to times
  - concat the given `word` to `newString`
- return `newString`

*/

// function repeat(string, times) {
//   if (typeof times !== 'number' || times < 0) {
//     return undefined; 
//   }
  
//   let newString = '';
//   let counter = 1;
//   while (counter <= times) {
//     newString += string;
//     counter += 1;
//   }
//   return newString;
// }


// console.log(repeat('abc', 1) === "abc");
// console.log(repeat('abc', 2) === "abcabc");
// console.log(repeat('abc', -1) === undefined);
// console.log(repeat('abc', 0) === "");
// console.log(repeat('abc', 'a') === undefined);
// console.log(repeat('abc', false) === undefined);
// console.log(repeat('abc', null) === undefined);
// console.log(repeat('abc', '  ') === undefined);




// String StartsWith

/*
**Problem**
=>objective: given two strings, return true if the first, starts with the second

=>input: two strings

=>output: boolean

=>rules:

=>explicit	-	return true, if the first string begins with the second string

=>implicit/edge cases - if the second string is empty, return true
                      - if the second string is longer than the first, return false


**Data Structure**
- strings

**Implementation Notes**


**Algorithm**
- loop over indexes of second string
  - if it matches the char at the same index of the first string, do nothing/continue 
  - otherwise, return false
  
- return true;

*/

// function startsWith(string, searchString) {
//   for (let idx in searchString) {
//     if (searchString[idx] !== string[idx]) return false; 
//   }
//   return true;
// }



// let str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We') === true);
// console.log(startsWith(str, 'We put') === true);
// console.log(startsWith(str, '') === true);
// console.log(startsWith(str, 'put') === false);

// let longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString) === false);




// Converting Strings to Lower Case

/*
**Problem**
=>objective: given a string, convert the characters that are uppercase letters to lowercase letters

=>input: string

=>output: string

=>rules:

=>explicit	-	convert the uppercase letters to lowercase
            - leave the lowercase letters lowercae
            - leave the numbers as they are 
            - so pretty much, take the string and convert only the uppercase letters to lowercase
            - then return the string

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- uppercase letter ASCII codes are >= 65 and <= 90

**Algorithm**
- declare variable `lowercaseString`
- iterate over the chars in the given `string`
  - if the ascii code is between 65 and 90
    - add 32, get new char, add char to `lowercaseString`
  - otherwise, add the char to the lowercaseString

*/

// function toLowerCase(string) {
//   let lowercaseString = '';
//   for (let char of string) {
//     let code = char.charCodeAt(0) ;
//     if ( code >= 65 && code <= 90 ) {
//       let lowercaseLetter = String.fromCharCode(code + 32);
//       lowercaseString += lowercaseLetter;
//     } else {
//       lowercaseString += char; 
//     }
//   }
//   return lowercaseString;
// }



// console.log(toLowerCase('ALPHABET') === "alphabet");
// console.log(toLowerCase('123') === "123");
// console.log(toLowerCase('abcDEF') === "abcdef");



// Substring(1)

/*
**Problem**
=>objective: given a string, a starting index and a length, return a substring of the string

=>input: string, starting index, length of substring

=>output: substring

=>rules:

=>explicit	-	if all is normal, two pos integers that don't exceed the length of the string, then return that substring
            - if the`start` arg is negative, start as `strLength` + `start`
            - if the length argument is negative, return an empty string
            - if the length exceeds the number of characters available, return what is available

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- if start is negative
  - reassign it to strLength + start
- declare variable `end`, assign to `start` + `length`
- if `start` + given `length` > whole word length
  - reassign `end` to the length of the given `word` - 1
- declare variable `newString`
- iterate over the string's index (use for loop to control teh indexes)
  - start at start, while i <= end, increment by 1
  - concatenate the char to the `newString`
- return newString

*/

// function substr(string, start, length) {
//   if (start < 0) {
//     start = string.length + start; 
//   }
  
//   let end = start + length - 1
//   if (end > string.length) {
//     end = string.length - 1; 
//   }
  
//   let newString = '';
//   for (let i = start; i <= end; i += 1) {
//     newString += string[i]; 
//   }
  
//   return newString;
  
// }


// let string = 'hello world';

// console.log(substr(string, 2, 4) === "llo ");
// console.log(substr(string, -3, 2) === "rl");
// console.log(substr(string, 8, 20) === "rld");
// console.log(substr(string, 0, -20) === "");
// console.log(substr(string, 0, 0) === "");




// Substring (2)

/*
**Problem**
=>objective: given a string, a starting index and an ending index, return the substring

=>input: string, start index, end index

=>output: substring

=>rules:

=>explicit	-	both positive, start < end and both within boundary of the string, return substring (start inclusive, end exclusive)
            - if start > end, swap them then return the substring like above
            - if start === end, return empty string
            - if end is left out, return the substring from start to the end of the string including the last letter
            - if start or end is < 0 or NaN, treat it as 0
            - if start or end is > str.length, make them equal to string length

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- i may make a validator helper function that accepts an index and string length
  - end
    - if > start, needs to be swapped
    - if undefined, needs to be strLength
    - if < 0 or NaN, needs to be 0
    - if > str.length, needs to be strLength
  - start
    - if < end, needs to be swapped
    - if nan or < 0 needs to be 0
    - if > str.length, needs to be strLength

**Algorithm**
- helper function `validateStartEnd`, receives strLength, start, end
  - if either is nan or < 0
    - make them 0
  - if either is > strLength
    - make them strLength
  - if end === undefined
    - make it str.length
  - now they should both be numbers, get the max and make it the end
  - get the min and assign to the start
  - return array of the two
- main function
  - declare variable `startEndArray`, invokes `validateStartEnd` 
  - reassign start and end to appropriate elements of the returned array
  - declare variable `newString`
  - for loop start, < end, increment by 1
    - concatenate to `newString`
  - return `newString`
*/

// function validateStartEnd(stringLength, start, end) {
//   if (typeof start !== 'number' || start < 0) start = 0;
//   if (end === undefined) end = stringLength;
//   if (typeof end !== 'number' || end < 0) end = 0;
//   if (start > stringLength) start = stringLength;
//   if (end > stringLength) end = stringLength;
  
//   return [Math.min(start, end),Math.max(start, end)];
// }

// function substring(string, start, end) {
//   let startEndArray = validateStartEnd(string.length, start, end);
//   start = startEndArray[0];
//   end = startEndArray[1];
//   let newString = '';
//   for (let i = start; i < end; i += 1) {
//     newString += string[i]; 
//   }
//   return newString;
// }

// let string = 'hello world';
// console.log(substring(string, 2, 4) === "ll");
// console.log(substring(string, 4, 2) === "ll");
// console.log(substring(string, 0, -1)=== "");
// console.log(substring(string, 2)    === "llo world");
// console.log(substring(string, 'a')  === "hello world");
// console.log(substring(string, 8, 20)=== "rld");



