// 1

// function slice(array, start, end) {
//   let resultArray = [];
//   for (let i = start; i < end; i += 1) {
//     resultArray.push(array[i]);
//   }
//   return resultArray;
// }

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]



//2 
/*
**Problem**
=>objective: given an array, start index, and num values to remove, mutatively remove those values and return them from teh function 

=>input: array, start index, num values to remove

=>output: mutating the array and returning the removed values in an array of their own

=>rules:

=>explicit	-	can use slice, push, pop, shift, unshift but no array methods

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `removedValues` and save the slice that is being removed
- declare variable `resultArray`, assign to empty array
- iterate over the elements of the array with a for loop
  - if you are not in the splice, push to `resultArray`
- reassign array to result array
- return `removedValues`

*/

// function splice(array, start, numValues) {
//   let removedValues = array.slice(start, start + numValues)
//   let resultArray = [];
//   let lastIndex = start + numValues - 1
//   for (let index = 0; index < array.length; index += 1) {
//     if (index >= start && index <= lastIndex) continue;
//     resultArray.push(array[index]);
//   }
//   array = resultArray;
//   return removedValues;
// }


// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]



// 3
// const push = (array, value) => {
//   array[array.length] = value;
//   return array.length;
// };

// function concat(arr1, arr2) {
//   let resultArray = [];
//   for (let index = 0; index < arr1.length; index += 1) {
//     push(resultArray, arr1[index]);
//   }
//   for (let index = 0; index < arr2.length; index += 1) {
//     push(resultArray, arr2[index]);
//   }
//   return resultArray;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]





//4

function join(array, string) {
  let resultString = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index !== array.length - 1) {
      resultString += array[index] + string;
    } else {
      resultString += array[index]; 
    }
  }
  return resultString;
}



console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'