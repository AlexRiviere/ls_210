// 1



// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// function objectHasProperty(obj, str) {
//   return obj.hasOwnProperty(str); 
// }

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true









// 2


// function incrementProperty(obj, str) {
//   let objKeys = Object.keys(obj);
//   if (objKeys.indexOf(str) !== -1) {
//     obj[str] += 1; 
//   } else {
//     obj[str] = 1;
//   }
  
//   return obj[str]; 
// }


// let wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }







// 3

// function copyProperties(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1);
//   for (let prop in obj1) {
//     obj2[prop] = obj1[prop]; 
//   }
//   return obj1Keys.length;
// }



// let hal = {
//   model: 9000,
//   enabled: true,
// };

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }




//4 

function wordCount(str) {
  let result = {};
  let wordArray = str.split(' ');
  for (let word of wordArray) {
    if (result[word]) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }
  return result;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }