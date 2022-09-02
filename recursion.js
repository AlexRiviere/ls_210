// function doubler(number) {
//   console.log(number)
  
//   if (number <= 50) {
//     doubler(number * 2); 
//   }
// }

// doubler(5);

function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(7));