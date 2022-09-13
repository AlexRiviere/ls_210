// Literal

// Second to last line will throw an error because it will look to evaluate the variable `a`. You should have put `'a'` between quotes

// Literal Method

// This will just return the function object instead of calling the actual function

// Mutation

// first for loop pushes all  names to array2, both arrays have the same values at this point
// second for loop capitalizes Curly and Chico in array1
// last line logs array2 to show that no names in array 2 have been capitalized because array1 and array2 are not pointing to the same array. 

// const array1 = ['Moe', 'Larry', ['Curly'], 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// const array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// // for (let i = 0; i < array1.length; i += 1) {
// //   if (array1[i].startsWith('C')) {
// //     array1[i] = array1[i].toUpperCase();
// //   }
// // }

// array1[2][0] = 'CURLY';
// console.log(array2);



// Dynamic 

// line 7 declares `prop2` to an initializer '456'
// line 8 mutates the `prop2` key by reassigning it to '456'
// line 9 references `prop2` which from this scope is assigned to the string '456'
  // so then it creates a new key '456' and assigns its value to '678'
// line 11 logs '678' since we are referencing the `prop2` from the outer scope declared on line 7. Because we use bracket notation, `prop2` is evaluated and returns '456'
// line 12 logs '456' since we mutated it on line 8. This is dot notation so it uses the key name as it is entered, it doesnt tryu to evaluate it.

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);

// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);


// Array Object Part 1

// line 3 logs 'a'
// line 4 logs undefined
// after line 8, `myArray` looks like : 
// ['a', 'b', 'c', 'f', '-1':'d', 'e':5]
// line 10 logs 'd'
// line 11 logs 5
// ['a', 'b', 'c', 'f', '-1':'d', 'e':5]

// When bracket notation is used with a non-integer or an integer less than 0, instead of adding an element to the array, JS will create a property on the array object. 

// const myArray = ['a', 'b', 'c'];

// console.log(myArray[0]);
// console.log(myArray[-1]);

// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f';

// console.log(myArray[-1]);
// console.log(myArray['e']);
// console.log(myArray);



//Array Object Part 2

// after line 3, the array: [5, 5, '-1':5, '2':5]
// when the function runs the sum will be 20 and the length 2
// The misunderstanding here revolves around the fact that non-element properties are not included in the return value of `length` we have two elements and two properties that are being included in the `sum`. The function will return 10 instaed of 5

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / Object.keys(array).length;
// }

// console.log(average(myArray));


// What's my Bonus

// function calculateBonus() {
//   return arguments[1] ? arguments[0] / 2 : 0;
// }

// console.log(calculateBonus(2800, true));               // 1400
// console.log(calculateBonus(1000, false));              // 0
// console.log(calculateBonus(50000, true));              // 25000



//THe end is near but not here
//This will return undefined each time because we are using a negative integer to retrieve the second to last element which won't work, it will return the value associated with the property name '-2'. For our array, it doesn't have a value associated with the property name '-2' so it will return undefined. 


// function penultimate(string) {
//   let wordsArray = string.split(' ')
//   return wordsArray[wordsArray.length - 2]
// }

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"




// After Midnight Part 1

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }
/*
**Problem**
=>objective: 

=>input: 

=>output:

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `date` , create a new date with time midnight
- convert the minutes to milliseconds
  - declare variable 'milliseconds', expression `deltaMinutes` * `MILLISECONDS_PER_MINUTE`
- declare variable `millisecondsAfter1970` get the time of the `date`, add `milliseconds`,
- declare variable `newDate`, assign to new Date with `millisecondsAfter1970` as argument
- get the hours
- get the minutes


*/


// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
// const MILLISECONDS_PER_MINUTE = 60000

// function timeOfDay(deltaMinutes) {
//   let date = new Date('January 1, 2022 00:00:00');
//   let milliseconds = deltaMinutes * MILLISECONDS_PER_MINUTE;
//   let millisecondsAfter1970 = date.getTime() + milliseconds;
//   let newDate = new Date(millisecondsAfter1970);
//   let hours = newDate.getHours();
//   let minutes = newDate.getMinutes();
//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }




// console.log(timeOfDay(0)    === "00:00");
// console.log(timeOfDay(-3)   === "23:57");
// console.log(timeOfDay(35)   === "00:35");
// console.log(timeOfDay(-1437)=== "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800)  === "13:20");
// console.log(timeOfDay(-4231)=== "01:29");



// After Midnight Part 2


// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

/*
**Problem**
=>objective: 

=>input: 

=>output:

=>rules:

=>explicit	-	

=>implicit/edge cases -


**Data Structure**


**Implementation Notes**


**Algorithm**
- declare variable `dateAtMidnight`, assign to a new date with a midnight time
- declare variable `newDate`, assign to new date using the time string
- declare variable `difference`, `newDate` getTime() - dateAtMidnight.getTime()
  - convert the milliseconds to minutes

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILLISECONDS_PER_MINUTE = 60000;

function afterMidnight(timeStr) {
  let date = new Date('January 1, 2022 00:00:00');
  let newDate = new Date(`January 1, 2022 ${timeStr}:00`);
  return (newDate.getTime() - date.getTime()) / MILLISECONDS_PER_MINUTE;
}

console.log(afterMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);










function beforeMidnight(timeStr) {
  let date = new Date('January 1, 2022 00:00:00');
  let newDate = new Date(`January 1, 2022 ${timeStr}:00`);
  return (date.getTime() - newDate.getTime()) / MILLISECONDS_PER_MINUTE * -1;  
  
}




console.log(beforeMidnight('12:34'))=== 686);
console.log(beforeMidnight('00:00')=== 0);