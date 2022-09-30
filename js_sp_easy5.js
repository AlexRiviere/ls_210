// Double Char Part 1

// function repeater(string) {
//   let result = '';
//   for (let char of string) {
//     result += char.repeat(2); 
//   }
//   console.log(result);
// }

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""



// Double Char Part 2

/*
**Problem**
=>objective: given a string, return a new string with all consonants doubled

=>input: string 

=>output: string new

=>rules:

=>explicit	-	double only consonants

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**
- check for consonants
  - the lowercase ASCII value i between 97 and 122 inclusive
  - AND that it isnt included in a vowel array (its value)

**Algorithm**
- helper function `isConsonant`
  - given a letter, return true if its a consonant
  - declare variable `vowels`, assign to array literal with string vowels as elements
  - its lowercase ASCII value is between 97 and 122 inclusive
  - AND its not in the `vowels` array
  
  
- declare variable `result`
- iterate over chars in given `string`
  - concat `char` to `result`
  - if its a consonant?
    - concat again to `result`
- return `result`
*/

// function isConsonant(char) {
//   let vowels = ['a','e','i','o','u'];
//   let ascii = char.toLowerCase().charCodeAt(0);
//   return ascii >= 97 && ascii <= 122 && !vowels.includes(char);
// }

// function doubleConsonants(string) {
//   let result = '';
//   for (let char of string) {
//     result += char;
//     if (isConsonant(char)) result += char; 
//   }
//   return result;
// }


// console.log(doubleConsonants('String')      === "SSttrrinngg");
// console.log(doubleConsonants('Hello-World!')=== "HHellllo-WWorrlldd!");
// console.log(doubleConsonants('July 4th')    === "JJullyy 4tthh");
// console.log(doubleConsonants('')            === "");





// Reverse Number

// function reverseNumber(number) {
//   return Number(String(number).split('').reverse().join('')); 
// }

// console.log(reverseNumber(12345) === 54321);
// console.log(reverseNumber(12213) === 31221);
// console.log(reverseNumber(456)  === 654);
// console.log(reverseNumber(12000)=== 21);// -- Note that zeros get dropped!
// console.log(reverseNumber(1)    === 1);





// Get the Middle Character

// function centerOf(string) {
//   if (string.length % 2 === 0) {
//     return string.slice(string.length / 2 - 1 , string.length / 2 + 1); 
//   } else {
//     return string.slice(Math.floor(string.length / 2), Math.floor(string.length / 2) + 1);
//   }
// }


// console.log(centerOf('I Love JavaScript')=== "a");
// console.log(centerOf('Launch School')    === " ");
// console.log(centerOf('Launch')           === "un");
// console.log(centerOf('Launchschool')     === "hs");
// console.log(centerOf('x')                === "x");


//Always return negative

// function negative(num) {
//   return num < 0 ? num : -num; 
// }

// console.log(negative(5) === -5);
// console.log(negative(-3)=== -3);
// console.log(negative(0) === -0);




// Counting Up

// function sequence(num) {
//   let result = [];
//   for (let i = 1; i <= num; i += 1) {
//     result.push(i);
//   }
//   console.log(result);
// }


// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]






// Name Swapping
// function swapName(string) {
//   return string.split(' ').reverse().join(', '); 
// }

// console.log(swapName('Joe Roberts') === "Roberts, Joe")




// Sequence Count

// function sequence(count, start) {
//   let result = [];
//   for (let i = 1; i <= count; i += 1) {
//     result.push(i * start);
//   }
//   console.log(result);
// }


// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []




// Reverse It Part 1

// function reverseSentence(sentence) {
//   return sentence.split(' ').reverse().join(' '); 
// }

// function reverseSentence(string) {
//   return string.split('').reverse.join('');
// }

// console.log(reverseSentence('')                   === "");
// console.log(reverseSentence('Hello World')        === "World Hello");
// console.log(reverseSentence('Reverse these words'))//=== "words these Reverse");


// Reverse It Part 2

function reverseWords(string) {
  let arrayOfWords = string.split(' ');
  let reversed5Plus = arrayOfWords.map(function(word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });
  return reversed5Plus.join(' ');
}

console.log(reverseWords('Professional')          === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School')         === "hcnuaL loohcS");