let getNumber = function (prompt) {
  let readlineSync = require('readline-sync');
  return Number(readlineSync.question(prompt));
}

let multiply = (first, second) => first * second;

let firstNumber = getNumber("Enter the first number: ");

let secondNumber = getNumber("Enter the second number: ");

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)