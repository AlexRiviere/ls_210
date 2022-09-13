// # 1

// function lastInArray(arr) {
//   return arr[arr.length - 1]; 
// }

// a = [1, 2, 3]
// b = [4, 5, 6]
// console.log(lastInArray(a));
// console.log(lastInArray(b));






// #2 

// function rollCall(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]); 
//   }
// }


// a = [1, 2, 3, 4, 5, 6]

// rollCall(a);





// #3 

// function reverseArray(arr) {
//   let reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i -= 1){
//     reversedArr.push(arr[i]); 
//   }
//   return reversedArr;
// }


// a = [1, 2, 3, 4, 5, 6]
// console.log(reverseArray(a));



// #4

function arrToString(arr) {
  let resultString = '';
  for (let index = 0; index < arr.length; index += 1) {
    resultString += String(arr[index]); 
  }
  
  return resultString;
}




a = [1, 'a', 4];
console.log(arrToString(a));