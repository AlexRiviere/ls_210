let rlSync = require('readline-sync');

let getName = (prompt) => rlSync.question(prompt);

console.log(`Hello you son of a bitch, ${getName("What is your first name? ")} ${getName("What is your last name? ")}`);