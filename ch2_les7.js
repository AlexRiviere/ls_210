// var bar = 42;
// console.log(global.bar);
// bar += 1;
// console.log(global.bar);

// let foo = 86;
// console.log(global.foo);

// bar();             // logs "world"
// var bar = 'hello';

// function bar() {
//   console.log('world');
// }

// let foo = "hello";

// function foo() {
//   console.log("hello");
// }

// console.log(typeof (function sayHello() {
//     console.log("hello!");
// }) );

// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a);
// testScope();
// console.log(a);

// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping();

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again';
//   }
// }

// hello();

// console.log(a);

// var a = 'hello';
// var a = 'a';

// for (var index = 0; index < 5; index += 1) {
//   // var a = index;
// }

// console.log(a);



// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }



// console.log(foo());
// console.log(a);

// // let a = 1;

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());
// console.log(a);

// let a = 'outer';
// let b = 'outer';

// console.log(a);
// console.log(b);
// setScope(a);
// console.log(a);
// console.log(b);

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// let total = 50;
// let increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total);
// incrementBy(10);
// console.log(total);
// console.log(increment);

// let a = 'outer';

// console.log(a);
// setScope();
// console.log(a);

// var setScope = function () {
//   a = 'inner';
// };

// function foo() {
//   let name = "Pete";
//   return function() {
//     console.log(name);
//   };
// }

// let printPete = foo();
// printPete(); // Pete

// function add(first, second) {
//   return first + second;
// }

// function makeAdder(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive(3, 10));  // 8
// console.log(addFive(55)); // 60
// console.log(addTen(3));   // 13
// console.log(addTen(55));  // 65

