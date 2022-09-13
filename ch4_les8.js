// Comparing Arrays


/*
**Problem**
=>objective: given two arrays, return true if they contain the same values, false if not

=>input: two arrays

=>output: boolean

=>rules:

=>explicit	-	

=>implicit/edge cases - order matters


**Data Structure**


**Implementation Notes**


**Algorithm**


*/

function arraysEqual(arr1, arr2) {
  let length = Math.max(arr1.length, arr2.length)
  for (let i = 0; i < length; i += 1) {
    if (arr1[i] !== arr2[i]) return false; 
  }
  
  return true;
}


console.log(arraysEqual([1], [1])                           === true);
console.log(arraysEqual([1], [2])                           === false);
console.log(arraysEqual([1, 2], [1, 2, 3])                  === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true])   === true);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false])  === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true])=== false);
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true])   === false);