// How old is Teddy?
// let min = 20;
// let max = 200;
// let age = Math.floor(Math.random() * (max - min) + min);
// console.log(`Teddy is ${age} years old!`);

// Searching 101

// let rlSync = require('readline-sync');
// let num1 = rlSync.question('Enter the 1st number: ');
// let num2 = rlSync.question('Enter the 2nd number: ');
// let num3 = rlSync.question('Enter the 3rd number: ');
// let num4 = rlSync.question('Enter the 4th number: ');
// let num5 = rlSync.question('Enter the 5th number: ');
// let last = rlSync.question('Enter the last number: ');

// let array = [num1, num2, num3, num4, num5];
// let insert = '';
// if (array.includes(last)) {
//   console.log(`The number ${last} appears in ${array}.`)   
// } else {
//   console.log(`The number ${last} does not appear in ${array}.`)
// }



// WHen Will I Retire

// let rlSync = require('readline-sync');
// let age = rlSync.question('What is your age? ');
// let retirementAge = rlSync.question('At what age would you like to retire? ');
// let today = new Date();
// let currentYear = today.getFullYear();
// let yearsLeft = (retirementAge - age)
// let retirementYear = yearsLeft + currentYear;
// console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
// console.log(`You only have ${yearsLeft} years of work to go!`);



// Palindromic Strings Part 1

// function isPalindrome(string) {
//   let forwards = string.split('');
//   let backwards = forwards.slice().reverse();
//   return forwards.join('') === backwards.join('');
// }

// // console.log(isPalindrome('madam')         === true);
// // console.log(isPalindrome('Madam')         === false); // (case matters)
// // console.log(isPalindrome("madam i'm adam")=== false); // (all characters matter)
// // console.log(isPalindrome('356653')        === true);



// // Palindromic Strings Part 2

// function isRealPalindrome(string) {
//   let lettersOnly = string.split('').filter(char => /[A-Za-z0-9]/.test(char));
//   return isPalindrome(lettersOnly.join('').toLowerCase());
// }

// // console.log(isRealPalindrome('madam')          === true);//
// // console.log(isRealPalindrome('Madam')          === true);// (case does not matter)
// // console.log(isRealPalindrome("Madam, I'm Adam")=== true);// (only alphanumerics matter)
// // console.log(isRealPalindrome('356653')         === true);//
// // console.log(isRealPalindrome('356a653')        === true);//
// // console.log(isRealPalindrome('123ab321')       === false);//

// // Palindromic Number

// function isPalindromicNumber(int) {
//   return isRealPalindrome(String(int));
// }

// console.log(isPalindromicNumber(34543) === true);
// console.log(isPalindromicNumber(123210)=== false);
// console.log(isPalindromicNumber(22)    === true);
// console.log(isPalindromicNumber(5)     === true);


// Running Totals

// function runningTotal(array) {
//   if (array.length === 0) return [];
//   let result = [];
//   for (let index in array) {
//     if (index === '0') {
//       result.push(array[index]);
//     } else {
//       result.push(array[index] + result[index - 1]); 
//     }
//   }
//   return result;
// }



// console.log(runningTotal([2, 5, 13]))//         === [2, 7, 20]);
// console.log(runningTotal([14, 11, 7, 15, 20]))//=== [14, 25, 32, 47, 67]);
// console.log(runningTotal([3]))//                === [3]);
// console.log(runningTotal([]))//                 === []);




// Letter Swap

/*
**Problem**
=>objective: given a string of words, return the string with each word having its first and last letters swapped

=>input: string

=>output: string

=>rules:

=>explicit	-	every word has at least one letter
            - each string has at least one word
            - no weird spaces 

=>implicit/edge cases - only one word
                      - words with only one letter
                      - capitalization stays with the letter, not the spot


**Data Structure**
- array

**Implementation Notes**
- 

**Algorithm**
- split the words at the spaces
- iterate over the words
  - guard clause for 1 letter words
  - store the first letter
  - store the last letter
  - slice the word
  - make the new word
- join the new array with spaces

*/

// function swap(string) {
//   let arrayOfWords = string.split(' ')
//   let arrayOfSwappedWords = arrayOfWords.map(function (word) {
//     if (word.length === 1) return word;
//     let firstLetter = word[0];
//     let lastLetter = word.slice(-1);
//     let middleOfWord = word.slice(1, -1)
//     return lastLetter + middleOfWord + firstLetter;
//   });
//   return arrayOfSwappedWords.join(' ');
// }




// console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
// console.log(swap('Abcde') === "ebcdA");
// console.log(swap('a') ==="a");


// Letter Counter Part 1



/*
**Problem**
=>objective: given a string, return an object where the keys are lengths of words and the values are counts

=>input: 

=>output:

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `result`, assign to empty object literal
- split the string into words and iterate over the words
  - if the length of this word is already a key in the `result` object, 
    - add 1
  - otherwise, create a new key and assign the value to 1
- return `result`

*/

function countLetters(string) {
  let sum = 0;
  for (let char of string) {
    if (/[A-Za-z]/.test(char)){
      sum += 1; 
    }
  }
  return sum;
}

function wordSizes(string) {
  if (string.length === 0) return {};
  let result = {};
  string.split(' ').forEach(function (word) {
    let count = countLetters(word);
    if (result[count]) {
      result[count] += 1;
    } else {
      result[count] = 1;
    }
  });
  return result;
}


// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}