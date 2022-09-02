function getNewCode(asciiCode) {
  let max;
  
  if (asciiCode >= 65 && asciiCode <= 90) {
    max = 90;
  } else if (asciiCode >= 97 && asciiCode <= 122) {
    max = 122;
  }
  
  asciiCode + 13 > max ? asciiCode -= 13 : asciiCode += 13
  return asciiCode;
}


function rot13(string) {
  let newString = '';
  
  for (let char of string) {
    let asciiCode = char.charCodeAt(0);
    let newCode = /[A-Za-z]/.test(char) ? getNewCode(asciiCode) : asciiCode;
    newString += String.fromCharCode(newCode);
  }
  
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');




// below this is pedac and my initial attempt at the problem


/*
JS pedac
**Problem**
=>objective: write a function that, given a string, returns the string with each of the characters rotated 13 places

=>input: string

=>output: string rotated

=>rules:

=>explicit	-	preserve case, A becomes N
            - if you pass the end of the alphabet, return to the beginning, o becomes b
            - don't modify chars that are not letters. 

=>implicit/edge cases - 


**Data Structure**
- iterate over strings to keep with the theme of this lesson

**Implementation Notes**
- if its not a letter, do nothing
- if it is a lowercase letter, get ascii code, + 13
  - if the code is over 122, reassign code to subtract 26
  - use code to get new letter
- if it is an uppercase letter, get ascii , + 13
  - if the code is over 90, subtract 26
  - use code to get new letter

- essentially use the if statements to determine the code, then we can use the last statement to do what we need with the code

**Algorithm**
- declare variable `newString`;
- iterate over the chars of the given `string`
  - declare variable `code`, assign to ascii code of current `char`
  - if the ascii code is between 65 - 90 (uppercase)
    - reassign the code to + 13
    - if the code is > 122, reassign to - 26, otherwise, keep it as is
  - else if the ascii code is between 97 - 122 (lowercase)
    - reassign code to + 13
    - if the code is > 90, subtract 26
  - concatenate char to the `newString` using whatever the code was set to 
- return `newString`

*/

// function rot13(string) {
//   let newString = '';
  
//   for (let char of string) {
//     let code = char.charCodeAt(0);
    
//     if (code >= 65 && code <= 90) {
//       code + 13 > 90 ? code -= 13 : code += 13
//     } else if (code >= 97 && code <= 122) {
//       code + 13 > 122 ? code -= 13 : code += 13
//     }
    
//     newString += String.fromCharCode(code);
//   }
  
//   return newString;
// }


// console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');

