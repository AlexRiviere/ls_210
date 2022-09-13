// 1

// function indexOf(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) return i; 
//   }
//   return -1; 
// }


// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1




// 2

function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index -= 1){
    if (array[index] === value) return index; 
  }
  return -1; 
}


console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1