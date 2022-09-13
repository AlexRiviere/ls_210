// 1

// function firstElementOf(arr) {
//   return arr[0]; 
// }

// console.log(firstElementOf(['U', 'S', 'A']));


//3 

// function nthElementOf(arr, index) {
//   return arr[index];  
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // undefined
// console.log(nthElementOf(digits, -1));  // error



//5

// function lastNOf(arr, count) {
//   let start = count > arr.length ? 0 : count
//   return arr.slice(start);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 9));    // returns [16, 23, 42]




// 8 

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1] ]
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]