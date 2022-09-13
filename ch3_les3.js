// 1 

// mutating

// function push(arr, elem) {
//   arr[arr.length] = elem;
//   return arr.length;
// }

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]


// 2

// function pop(arr) {
//   let elem = arr[arr.length - 1]
//   let originalLength = arr.length;
//   arr.length = originalLength - 1;
//   return elem;
// }

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]


//3 
// the issue i am running into here is mutating something that i am iterating over so i'll either have to like store a previous value that I am 
// function unshift(array, value) {
//   for (let index = array.length; index >= 0; index -= 1) {
//     if (index === 0) {
//       array[index] = value;
//     } else {
//       array[index] = array[index - 1];
//     }
//   }
//   return array.length;
// }

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]



// 4
/*
**Problem**
=>objective: given an array, mutatively remove the first value and return it

=>input: array

=>output: first value that is removed from the array

=>rules:

=>explicit	-	no methods, only loops , assignment and length to do this

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `value` to store the first value of the array
- 


*/


// function shift(array) {
//   let value = array[0]
//   for (let index = 0; index < array.length - 1; index += 1) {
//     array[index] = array[index + 1];
//   }
//   array.length = array.length - 1;
//   return value;
// }

// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]



// 