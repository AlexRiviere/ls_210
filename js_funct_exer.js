// Local vs Global Part 1

// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
// }

// someFunction();
// console.log(myVar); // 'This is global' because we are referencing the object from the global scope therefore, we will use the `myVar` that JS finds in the global scope. 

// Local vs Global Part 2

// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
//   console.log(myVar);
// }

// someFunction(); // this is local. Because JS uses lexical scope it checks for variables first in the local context then the calling context

// Local vs Global Part 3

// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();
// console.log(myVar); // this is local will be printed because when we run the `someFunction` function, we reassign the global variable to th string 'this is local'

// Variable Lookup

// var myVar = 'This is global';

// function someFunction() {
//   console.log(myVar);
// }

// someFunction(); // 'This is global' will print> What happens is JS will look for the `myVar` variable in the local scope, not find it, then look for and find it in the global scope. 


//Variable Scope

// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar); // 'this is global' because when a variable is initialized without being declared, it is given global scope. 

// Arguments Part 1
// let a = 7;

// function myValue(b) {
//   b += 10;
// }

// myValue(a);
// console.log(a); // Logs 7. When we pass `a` in as an argument to `myValue`, a local variable b is created and assigned to 7. Then that local variable is reassigned to 17 without affecting the variable `a` in the outer scope. 


// Arguments Part 2

// let a = 7;

// function myValue(a) {
//   a += 10;
// }

// myValue(a);
// console.log(a); // Logs 7. When we pass `a` in as an argument to `myValue`, we declare a new variable `a` to the local scope and assign it the number 7. Then we reassign the local variable to 17 which does not affect the global variable `a` in the outer scope. 

// Arguments Part 3

// let a = [1, 2, 3];

// function myValue(b) {
//   b[2] += 7;
// }

// myValue(a);
// console.log(a); // Logs [1, 2, 10]. When we call the `myValue` function an pass in a as an argument, a local variable is created and points to the same object that `a` points to. Then we select the element in the 2 position, and increment it by 7 then reassign it to the result (10) which mutates the object in place. At this point, both `a` in the outer scope and `b` in the inner scope both point to the same object. The function terminates and `b` disappears but `a` still reflects the changes that were made by `b`. 


//Variable Declarations

// console.log(a); // Logs undefined, because of hoisting, `a` is declared and assigned to undefined. At this point in the execution, `a` still references undefined because it has not been reassigned yet.  

// var a = 1;

// Function Declarations
// logValue(); // 'Hello World' Because of hoisting, this function is actually already declared at this point in the execution. Function declaration are actually accessible from anywhere in the code. 

// function logValue() {
//   console.log('Hello, world!');
// }

//further explanation
// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// let a = typeof logValue;
// console.log(a);

// // ## post hoisting
// function logValue() {
//   console.log('Hello, world!');
// }
// var logValue = 'foo';

// console.log(typeof logValue); //'string' because it hoists functions first, here our function variable is reassigned to a string 

// function logValue() {
//   console.log('Hello, world!');
// }

// var logValue; // Hoisted variable declaration but actually ignored because the function declaration is hoisted above this, and therefore there already exists a variable with this name

// logValue = 'foo' // Re-assignment of the variable logValue, overwrites the previously held function value with a new string value of 'foo'

// console.log(typeof logValue); // string




// quiz #6
// function foo() {}
// function bar() {
//   var foo = 2;
//   var qux = 5;
//   return qux;
// }
// var foo;

// foo = 1;

// bar();
function foo() { console.log('tits'); }
function foo() { console.log('ass'); }
foo();