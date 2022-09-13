//1 

// function radiansToDegrees(radians) {
//   return radians * 180 / Math.PI;
// }

// // 2

// let a = -180;
// console.log(Math.abs(a));

// // 3

// console.log(Math.sqrt(16777216));

// 4

// console.log(Math.pow(16, 6));

// 6

function randInt(min, max) {
  if (min > max) [min, max] = [max, min];
  if (min === max) return min;
  let distance = max - min;
  return Math.floor(min + (distance * Math.random()));
}

console.log(randInt(5, 10));