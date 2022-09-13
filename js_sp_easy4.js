// Cute Angles

/*
**Problem**
=>objective: given an angle in degrees, return a string repping the angle in degrees, minutes and seconds. 

=>input: integer or decimal

=>output: string with degree integer, degree symbol ˚, minutes, ', seconds, "

=>rules:

=>explicit	-	

=>implicit/edge cases - given 0, given 360, with or without decimals


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `degsMinsSecs`, assign to empty array
- declare counter variable, assign to 1
- declare variable `currentDegrees`, assign to given `number`
- while counter <= 3
  - `degsMinsSecs` push currentDegrees rounded down
  - reassign currentDegrees to itself - `degsMinsSecs` first elem * 60
- create the string using interpolation

// */
// function formatDegsMinsSecs(number) {
//   let string = String(number);
//   if (string.length === 1) {
//     string = '0' + string; 
//   }
//   return string;
// }

// function dms(number) {
//   let degsMinsSecs = [];
//   let currentDegrees = number;
//   let counter = 1;
//   while (counter <= 3) {
//     let rounded = Math.floor(currentDegrees);
//     degsMinsSecs.push(rounded)
//     currentDegrees = (currentDegrees - rounded) * 60; 
//     counter += 1;
//   }
//   console.log(`${formatDegsMinsSecs(degsMinsSecs[0])}˚${formatDegsMinsSecs(degsMinsSecs[1])}'${formatDegsMinsSecs(degsMinsSecs[2])}"`);
// }


// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"





// Combining Arrays

/*
**Problem**
=>objective: given two arrays, return an array containing all values from the two, no duplication of values

=>input: two arrays

=>output: one array

=>rules:

=>explicit	-	no duplicates, even if there are duplicates in the original

=>implicit/edge cases - duplicates in one array


**Data Structure**
- arrays

**Implementation Notes**


**Algorithm**
- create a new array with all values
- filter out the dupes
  
- declare variable `allElems`, containing all elements from both of the given `array` args  
- declare variable `result`, assign to empty array  
  - iterate over the elements of `allElems`
    - if the element is in `result`, continue
    - otherwise, push the element to `result`
- sort and return `result`

*/

// function union(array1, array2) {
//   let allElems = array1.concat(array2);
//   let result = [];
//   for (let i = 0; i < allElems.length; i += 1) {
//     if (result.includes(allElems[i])) continue;
//     result.push(allElems[i]);
//   }
//   console.log(result)
// }

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
// union([1, 3, 5, 3], [3, 6, 9]);    // [1, 3, 5, 6, 9]



// Halvsies

/*
**Problem**
=>objective: given an array, return an array that contains two arrays. First half of the elems of the OG array in the first elem of the return value, second half in second elem. middle goes to first 

=>input: one array of values

=>output: oen array of two arrays

=>rules:

=>explicit	-	

=>implicit/edge cases - an array with one or no elements


**Data Structure**


**Implementation Notes**
- if its an array of 4 elements, elems 0-1 go to first, 2,3 go to second
  - halfway in indexes is length / 2 - 1
- if its an array of 5 elements
  - 0, 1, 2 go to first, 3,4 go to second
  - halfway is length / 2 rounded up
- if you can maybe just establish the halfway, you can keep other things clean

**Algorithm**
- declare helper function `getHalfway`
  - given a `length`
  - if the `length` is 1, return 0
  - if the `length` is even, return length / 2 - 1
  - if the `length` is odd, return length / 2 rounded up

- declare function `halvsies`
  - guard clause for empty input
  - declare `halfway`, assign to return value of passing the length of the given `array` to `getHalfway`
  - declare `result`, assign an an array of nested arrays
  - iterate over the given `array` elements
    - if its <= `halfway`, send it to the first elem of the `result` array
    - other wise, the second
  - return the result array

*/
// function getHalfway(length) {
//   if (length === 1) return 0;
//   if (length % 2 === 0) return length / 2 - 1;
//   if (length % 2 === 1) return Math.floor(length / 2);
// }

// function halvsies(array) {
//   let halfway = getHalfway(array.length);
//   let result = [[], []];
//   if (array.length === 0) console.log(result);
//   for (let i = 0; i < array.length; i += 1) {
//     if (i <= halfway) {
//       result[0].push(array[i]);
//     } else {
//       result[1].push(array[i]);
//     }
//   }
//   console.log(result);
// }

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]




// Find the Duplicate

/*
**Problem**
=>objective: given an unordered array with one element that occurs twice, return the duplciate value

=>input: array

=>output: duplicate value

=>rules:

=>explicit	-	

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**
- iterate over the values of the given `array`
  - if this value exists in the slice starting from 1+this index to the rest of the array, return the value
  

*/

// function findDup(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.slice(i + 1).includes(array[i])) console.log(array[i]); 
//   }
// }

// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73



// Combine Two Lists

/*
**Problem**
=>objective: given two arrays, return a new array that contains all elems from each array alternating, startign with the first from the first array

=>input: 

=>output: 

=>rules:

=>explicit	-	

=>implicit/edge cases - 


**Data Structure**


**Implementation Notes**


**Algorithm**


*/

// function interleave(array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     result.push(array1[i]);
//     result.push(array2[i]);
//   }
//   console.log(result);
// }

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]



// Multiplicative Average

// return the average rounded to 3 decimal places, as a string

// function showMultiplicativeAverage(array) {
//   let product = array.reduce((acc, curr) => acc * curr, 1); 
//   let average = (product / array.length).toFixed(3);
//   console.log(String(average));
// }

// showMultiplicativeAverage([3, 5]);                   // "7.500"
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"





// Multiply lists

// function multiplyList(arr1, arr2) {
// let result = arr1.map(function(elem, index){
//     return arr1[index] *  arr2[index];       
//   }); 
//   console.log(result);
// }

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]



// Digits List


// function digitList(number) {
//   let stringsArr = String(number).split('');
//   let numsArr = stringsArr.map(str => Number(str));
//   console.log(numsArr);
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]



// How Many

// function countOccurrences(array) {
//   let count = {};
//   for (let elem of array) {
//     if (count[elem]) {
//       count[elem] += 1;
//     } else {
//       count[elem] = 1;
//     }
//   }
//   let countKeys = Object.keys(count);
//   countKeys.forEach(key => console.log(`${key} => ${count[key]}`));
// }


// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2



// Array Average

function average(array) {
  let sum = array.reduce((sum, int) => sum + int, 0); 
  console.log(Math.floor(sum / array.length));
}
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40