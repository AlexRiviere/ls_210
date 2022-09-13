// Array Copy Part 1

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray; // at this point, pointing to the same array

// myArray.pop();
// console.log(myArray); // [1, 2, 3]
// console.log(myOtherArray); // [1, 2, 3]

// myArray = [1, 2]; // reassigned myArray to another array, myOtherArray still pointing to other array
// console.log(myArray); // [1, 2]
// console.log(myOtherArray); // [1, 2, 3]



// Array Copy Part 2

// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice(0);

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// - const myOtherArray = myArray.slice(0);
// - 



// Array Concat Part 1

/*
**Problem**
=>objective: given an array and some other argument, return a new array made up of the values of the two arguments

=>input: an array and another arg

=>output: a new array

=>rules:

=>explicit	-	same order as they appear in the args
            - if the second arg is an object, we copy the reference to that object, not the values because if the obj is updated, it should be reflected in our result

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- if the `subject` is a value, just concatenate it onto the last position of the `resultsArray`
- if the `subject` is an array, we need to extract the values from the array and concat to the `resultsArray`
- if its an  object, same treatment as primitive value

**Algorithm**
- declare variable `resultsArray`, assign to copy of the first arg (which will always be an array)
-  

*/

// function concat(array, subject) {
//   let resultsArray = array.slice();
//   if (Array.isArray(subject)) {
//     for (let elem of subject) {
//       resultsArray.push(elem); 
//     }
//   } else {
//     resultsArray[resultsArray.length] = subject; 
//   }
//   return resultsArray;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }




//Array concat 2

// function concat(array1, secondArgument) {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     newArray[i] = array1[i];
//   }
  
//   for (let index in arguments) {
//     if (index === '0') continue;
//     if (Array.isArray(arguments[index])) {
//       for (let i = 0; i < arguments[index].length; i += 1) {
//         newArray[newArray.length] = arguments[index][i];
//       }
//     } else {
//       newArray[newArray.length] = arguments[index];
//     }
//   }

//   return newArray;
// }


// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]



// Array Pop and Push

// function pop(array) {
//   if (array.length === 0) return undefined;
//   let value = array[array.length - 1];
//   array.length = array.length - 1;
//   return value;
// // }
// function pop(array) {
//   const poppedElement = array[array.length - 1];
//   array.splice[array.length];

//   return poppedElement;
// }

// // pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


// // function push(array, ...theArgs) {
// //   for (let arg of theArgs) {
// //     array[array.length] = arg; 
// //   }
// //   return array.length;
// // }


// function push(array, ...args) {
//   const length = args.length;

//   for (let i = 0; i < length; i += 1) {
//     array[array.length] = args[i];
//   }

//   return array.length;
// }



// // push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0



// Array and String Reverse

// function reverse(inputForReversal) {
//   let returnString = '';
//   let returnArray = [];
//   for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
//     if (typeof inputForReversal === 'string') {
//       returnString += inputForReversal[i]; 
//     } else {
//       returnArray.push(inputForReversal[i]);
//     }
//   }

//   if (typeof inputForReversal === 'string') return returnString;
//   return returnArray;
// }


// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }

// function reverseArray(inputForReversal) {
//   const reversed = [];
//   const length = inputForReversal.length;

//   for (let i = 0; i < length; i += 1) {
//     reversed[length - i] = inputForReversal[i];
//   }

//   return reversed;
// }

// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split(' ');
//   return reverseArray(stringArray).join(' ');
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]




// Array Shift and Unshift


// function shift(array) {
//   let value = array[0];
//   array.splice(0, 1);
//   return value;
// }

// function unshift(array, ...args) {
//   let tempArray = args;
//   tempArray = tempArray.concat(array);
//   for (let index in tempArray) {
//     array[index] = tempArray[index]; 
//   }
//   return array.length;
// }



// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// const testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]



// Array slice and splice




// function slice(array, begin, end) {
//   if (begin > array.length) begin = array.length;
//   if (end > array.length) end = array.length;
//   let portion = [];
//   for (let i = begin; i < end; i += 1) {
//     portion.push(array[i]); 
//   }
//   return portion;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]




/*
**Problem**
=>objective: given an array, a start index, a delete count and optionally more elements to be added, remove the `deleteCount` number of elements starting from `start` and insert any optional additions at `start`

=>input: 

=>output: returns new array with deleted elements, or empty array if no elements are deleted, mutates the original array

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**
- delete the elements, store the deleted
- then insert

**Algorithm**
- declare variable `deletedElems` assign to empty array;
- for loop, starting at start, as long as index < start + deleteCount, + 1
  - push elem to `deletedElems`
  - reassign this elem to this index + deleteCount
- set array length to array length - deleteCount

// inserting
- for loop starting at start, until start + deleteCount, +1
  - reassign array[index + length of `args`] = this value
  - reassign array[index] = args.shift()
  
- return removed elements

*/



// function splice(array, start, deleteCount, ...elementsToAdd) {
//   if (start > array.length) start = array.length;
//   if (deleteCount > array.length - start) deleteCount = array.length - start;
//   let deletedElems = [];
  
//   for (let i = start; i < start + deleteCount; i += 1) {
//     deletedElems.push(array[i]);
//     array[i] = array[i + deleteCount];
//   }
//   array.length = array.length - deleteCount;
  
//   for (let i = start; i < start + deleteCount; i += 1) {
//     array[i + elementsToAdd.length] = array[i];
//     array[i] = elementsToAdd.shift();
//   }
//   return deletedElems;
// }


/*
**Problem**
=>objective: at this point in the function, we have an array that has removed items, its just an array. Now, we have an starting index and an indefinite number of values to be inserted, starting from the start index

=>input: array, start index, indefinite number of values to be inserted

=>output: insert into the index mutatively

=>rules:

=>explicit	-	

=>implicit/edge cases - we are adding in the middle of two elements 
                      - we are adding at the end of the array


**Data Structure**


**Implementation Notes**
- if there are no extras, do nothing
- at the starting index
  - if this is the end of the array, just insert
  - otherwise
    - make the value at this index the value at this index + args array length 
    - make this index the first elem of the `args` array
    
**Algorithm**


*/




// function splice(array, start, deleteCount, ...elementsToAdd) {
//   if (start > array.length) start = array.length;
//   if (deleteCount > array.length - start) deleteCount = array.length - start;
//   let deletedElems = [];
  
//   for (let i = start; i < start + deleteCount; i += 1) {
//     deletedElems.push(array[i]);
//     array[i] = array[i + deleteCount];
//   }
//   array.length = array.length - deleteCount;
//   let counter = 0;
//   for (let j = start; j < start + elementsToAdd.length; j += 1) {
//     if (j > array.length - 1) {
//       array[j] = elementsToAdd[counter];
//     } else {
//       array[j + elementsToAdd.length] = array[j];
//       array[j] = elementsToAdd[counter];
//     }
//     counter += 1
//   }
  
//   return deletedElems;
// }


// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

// console.log("TESTING OUTPUT");

// const arr3 = [1, 2, 3];
// console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]






// Array Comparison

/*
**Problem**
=>objective: given two arrays, return true if they contain the same values

=>input: 2 arrays

=>output: boolean

=>rules:

=>explicit	-	different order but same contents are true

=>implicit/edge cases - if they have different sizes, its false


**Data Structure**


**Implementation Notes**
- can we just sort them then go index by index?

**Algorithm**


*/

function areArraysEqual(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) return false; 
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])            === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])            === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])=== true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3])          === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])      === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])      === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])      === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])            === false);
console.log(areArraysEqual([1, 1, 1], [1, 1])               === false);
console.log(areArraysEqual([1, 1], [1, 1])                  === true);