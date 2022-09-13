// 1

// function oddElementsOf(arr) {
//   let resultArray = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     resultArray.push(arr[i]);
//   }
//   return resultArray;
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]


//2

// function forwardsBackwards(arr) {
//   let resultArray = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     resultArray.push(arr[index]); 
//   }
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     resultArray.push(arr[i]); 
//   }
//   return resultArray;
// }

// let array = [23, 4, 16, 42, 8, 15];
// console.log(forwardsBackwards(array));



//3 

// function sortDescending(arr) {
//   let resultArr = arr.slice(0).sort((a, b) => b - a);
//   return resultArr;
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]


// 4

// function matrixSums(arr) {
//   return arr.map(array => {
//     return array.reduce((acc, elem) => acc + elem, 0);
//   });
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]



// a = [2, 8, 5];
// console.log(a.reduce((acc, elem) => acc + elem, 0));


// 5

// function uniqueElements(arr) {
//   let uniqueElem = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (uniqueElem.indexOf(arr[index]) === -1) {
//       uniqueElem.push(arr[index]);
//     }
//   }
//   return uniqueElem;
// }

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]



// ch 11

// Practice Problems: Find Missing Numbers


/*
**Problem**
=>objective: given an array of sorted integers, return an array with all the missing integers between the first and last elements of the argument

=>input: sorted array

=>output: array with missing elements in order

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**


*/

function missing(array) {
  let missingElems = [];
  let start = array[0];
  let end = array[array.length - 1]
  for (let num = start + 1; num < end; num += 1) {
    if (array.indexOf(num) === -1) {
      missingElems.push(num); 
    }
  }
  return missingElems;
}

console.log(missing([-3, -2, 1, 5])); //=== [-1, 0, 2, 3, 4]);
console.log(missing([1, 2, 3, 4])); // === []);
console.log(missing([1, 5])); //       === [2, 3, 4]);
console.log(missing([6]));  //         === []);