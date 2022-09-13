// Welcome Stranger

// function greetings(array, obj) {
// let name = array.join(' ');
// let job = `${obj.title} ${obj.occupation}`
// console.log(`Hello, ${name}! Nice to have a ${job} around.`); 
// }

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });


// Repeated Characters
function repeatedCharacters(string) {
  let result = {};
  string = string.toLowerCase();
  for (let char of string) {
    if (char in result) {
      result[char] += 1 
    } else {
      result[char] = 1
    }
  }
  
  for (let letter in result) {
    if (result[letter] < 2) delete result[letter]; 
  }
 
 console.log(result); 
}


repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }