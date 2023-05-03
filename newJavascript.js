// javascript is sync & single threaded language
// js is weeakly typed language it does'nt attachs its vairalbe to specific data type, it means later on the program i can assing obj , boolen or array to vairables in it.

//  1. Global Execution Context

// js scims throungh the program
//  Memory creation in first phase it allocate memory to vairables and functions and then execute.
//  allocate special memory as undefined

//  when you execute or run a function a new GEC is created

//  Memory                               |   Code
//  - varivble enviourment                   - thread of execution
//  - in this values stored in key value
//    pair and functions

// 2. Call Stack

// call stack maintains the order of execution of execution contexts
// used to manage GEC whenever we execute function a new GEC created and and pop into call stack and whenever it completed its execution it will pop off from call stack.

// 3. Hoisting
// js process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// window is global object created by javascript engine at global context.

// 4. scope
// let and const store value in seprate memory space then var.
// temporal dead zone -  time when let and const varible from hosted to assign value.
// the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// Lexical in general means in hierarchy or in a sequence.Whenever a new execution context(EC) is created a new lexical environment is created and it is referenced in local EC in memory space.
// Lexical Environment: Local Memory + Lexical Environment of its Parent
// So in short, a lexical environment is a place where variables and functions live or physically present during the program execution.
// let and const are block scope.

// Closure --
// A closure is a function that has access to its outer function scope even after the function has returned. Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.
// Advantages of closure ---
// Module Design Pattern
// Currying
// Memoize
// Data hiding and encapsulation
// setTimeouts etc.

// Example ------------
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function temp(j) {
//       setTimeout(function () {
//         console.log(j);
//       }, j * 1000);
//     }
//     temp(i);
//   }

//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();
