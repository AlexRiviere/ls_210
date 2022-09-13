// Logical Operation

// console.log((false && undefined) === false);
// console.log((false || undefined) === undefined);
// console.log(((false && undefined) || (false || undefined)) === undefined);
// console.log(((false || undefined) || (false && undefined)) === false);
// console.log(((false && undefined) && (false || undefined)) === false);
// console.log(((false || undefined) && (false && undefined)) === undefined);
// console.log(('a' || (false && undefined) || '') === 'a');
// console.log(((false && undefined) || 'a' || '') === 'a');
// console.log(('a' && (false || undefined) && '') === undefined);
// console.log(((false || undefined) && 'a' && '') === undefined);


// Conditional Loop

// let i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// this will increment i until it reaches 3, when i reaches 3, this becomes an infinite loop because if i is 3, the first if condition will pass, then3 will be logged, then it will go to the next iteration without incrementing i. 




// Multiplication Table

// function padLeft(number) {
//   const stringNumber = String(number);
//   switch (stringNumber.length) {
//     case 1:  return `  ${stringNumber}`;
//     case 2:  return ` ${stringNumber}`;
//     default: return stringNumber;
//   }
// }

// for (let i = 1; i < 10; i += 1) {
//   let row = '';
//   for (let j = 1; j <= 10; j += 1) {
//     row += `${padLeft(i * j)} `; // passes 1, 2, 3, 4, 5, 6 ... to padLeft
//   }

//   console.log(row);
// }

// all number take up 3 spaces 
// i guess the real issue is that for the first loop, we are only going to 9



// Selected Columns



// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0, length = numbers.length; i < length; i += 1) {
//     for (var j = 0, length = cols.length; j < length; j += 1) {
//       if (!result[j]) { // if there is nothing at result[j], put an empty bracket there
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]]; //in the same array as ^^ , in the i index, put the element from the ith array in the j index
//     }
//   }

//   return result;
// }

// // given the following arrays of number arrays
// const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]






// Counter 

// function counter(count) {
//   // ...
// }
// var counter;
// var rate;
// counter = 5;
// rate = 3;
// console.log('The total value is ' + String(counter * rate));

// 'This value is 15' because we reassign the counter variable . 




// 
// function counter(count) {
//   // ...
// }
// var counter;
// var rate;

// console.log('The total value is ' + String(counter * rate));

// counter = 5;
// rate = 3;
// 'The total value is NaN.' will print. `counter` is assigned to a function then reassigned to undefined when it is declared with `var` and hoisted. Line 4 will execute before `counter` is reassigned to 5 and before rate is reassigned to 3. In the expression that is printed `String(counter * rate)` is really String(undefined * undefined). Since `*` will coerce its operands to numbers, both undefined values will be coerced to NaN, then multiplied which results in NaN. Then 'NaN' is coerced to a string because it is an operand of `+`. 


// function counter(count) {
//   // ...
// }
// var counter;
// var rate;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + String(counter * rate));

// 

// function counter(count) {
//   // ...
// }

// let counter;
// let rate;
// counter = 5;
// rate = 3;



// console.log('The total value is ' + String(counter * rate));




// Logger

// This code will log `'debugging'` because the `logger` function prints the value that the `status` variable is pointing to. In this case, it is part of the closure of the `logger` function.  



// Invoice

// function invoiceTotal(...amounts) {
//   let result = 0;
//   amounts.forEach(amount => result += amount);
//   return result;
// }

// console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?


// Product of Sums

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}
let array1 = [1, 2, 3]; // 6
let array2 = [2, 3, 4]; // 9

console.log(productOfSums(array1, array2)); // 54