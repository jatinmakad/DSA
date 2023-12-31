// Array.prototype.mapFunc = function (callback) {
//   let temp = [];
//   for (i = 0; i < this.length; i++) {
//     temp.push(callback(this[i], i, this));
//   }
//   return temp;
// };

// Array.prototype.myReduce = function (callback, val) {
//   let value = val;
//   for (i = 0; i < this.length; i++) {
//     value += this[i];
//   }
//   return value;
// };
// let arr = [2, 6, 3, 6, 3, 677, 7, 6];
// console.log(arr.myReduce((r, i) => r + i, 0));
// console.log(arr.mapFunc((r, i) => Math.round(r / 2)));

// new Promise((res,req) => {
//     console.log(res,req)
// })

// shallow copy vs deep copy

// hoisting
// access value before inistiallization
// x = 4
// console.log(x)
// var x

// function

// let x = 1
// a()
// b()
// console.log(x)
// function a(){
//     // const x = 20
//     x= 20
//     console.log(x)
// }
// function b(){
//     // const x = 200
//     console.log(x)
// }

// console.log(((true + false) > 2) + false)
// let obj = { a :2}
// let obj2 = {a:2}
// console.log(undefined == null)
// var x = 3
// var foo = {
//     x : 2,
//     baz : {
//         x : 1,
//         bar: function(){
//             return this.x
//         }
//     }
// }
// var go = foo.baz.bar()
// console.log(foo.baz.bar())

//     var bc = 2
//     b()
//     function b(){
// console.log(bc)
//     }

// let age = 50;
// function printAge() {
//   console.log(age);
//   let age = 30;
// }
// printAge(); // Error

// function print() {
//   function log() {
//     console.log(age);
//   }
//   const age = 20;
//   log();
// }
// print();

// clousers - function along with its lexical scope forms clouser
// function a(){
//     let x = 2
//     function b(){
//         console.log(x)
//     }
//     b()
// }
// a()

// shallow copy -----`
// It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.
// let obj = {age:21,name:"jatin"}
// let obj2 = obj
// obj2.age = 40
// console.log(obj2)

// deep copy -------
// It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory.
// let obj = {age:21,name:"jatin"}
// let obj2 ={...obj}
// obj2.age = 40
// console.log(obj)

// let obj = {age:21,name:"jatin"}
// let obj2 = Object.assign({},obj)
// obj2.age = 40
// console.log(obj2)

// data hidding in clouser (data enculaptions)
// As long as closures are active, this memory cannot be garbage collected.

// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function. The diagram below outlines the supposed hierarchy that the lexical scope maintains in JavaScript.
// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 20;
// a();

//So, if the let and const are also hoisted, why is it that they cannot be accessed before their declaration? The answer to this lies within the concept of the Temporal Dead Zone (TDZ).
//Variables declared using let and the constants declared using const are hoisted but are in a TDZ. This prevents them from being accessed before their declaration has actually been executed during the step-by-step execution of the code.

// callback ----
// A callback is a function passed as an argument to another function.
// function register(data, cb) {
//   setTimeout(() => {
//     cb(data);
//   }, 3000);
// }
// function sendEmail(data, cb) {
//   setTimeout(() => {
//     cb(data);
//   }, 1000);
// }
// register("uesr Register", (mes) {
//   console.log(mes);
//   sendEmail("email send", (mes2) => {
//     console.log(mes2);
//   });
// });

// A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.

// Curring --  transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
// function temp(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(temp(2)(2)(2))

// function add(a, b) {
//   this.a = a;
//   this.b = b;
//   console.log(this.a + this.b);
// }
// add.prototype.assignA = function (a){
//     this.a = a
//     console.log(this.a +this.b)
// }
// add.prototype.assignB = function (b){
//     this.b = b
//     console.log(this.a +this.b)
// }
// let pop = new add(10, 20);
// pop.assignA(20)
// pop.assignB(30)
// console.log(pop)

// let  nums = [1,2,3]
// function permute(nums) {
//  let result = []
//   const dfs = (i,nums) => {
//    if(i === nums.length){
//      result.push(nums.slice())
//      return
//    }
//     for(j=i;j<nums.length;j++){
//       [nums[i],nums[j]] = [nums[j],nums[i]]
//       dfs(i+1,nums)
//       [nums[i],nums[j]] = [nums[j],nums[i]]
//     }
//   }
//   dfs(0,nums)
//   return result
// }
// console.log(permute(nums))

// pascel triangle

// function Pascel(n) {
//   let arr = [[1]];
//   let temp = [];
//   let inner = [];
//   if (n == 0) {
//     return [];
//   } else if (n == 1) {
//     return arr;
//   } else {
//     for (i = 0; i < n - 1; i++) {
//       for (let k = 0; k < temp.length - 1; k++) {
//         let sum = temp[k] + temp[k + 1];
//         inner.push(sum);
//       }
//       inner.push(1);
//       inner.unshift(1);
//       arr.push(inner);
//       inner = [];
//       temp = arr[i + 1];
//     }
//     return arr;
//   }
// }
// console.log(Pascel(3));

// sort color
// let nums = [2, 0, 2, 1, 1, 0];
// function SortColor(arr) {
//   let first = 0;
//   let last = arr.length - 1;
//   for (var i = 0; i <= last;) {
//     if (arr[i] === 0) {
//       [arr[i], arr[first]] = [arr[first], arr[i]];
//       i++;
//       first++;
//     } else if (arr[i] == 2) {
//       [arr[i], arr[last]] = [arr[last], arr[i]];
//       last--;
//     } else {
//       i++;
//     }
//   }
//   return arr;

//   // return arr
//   // let obj = {}
//   // for(i=0;i<arr.length;i++){
//   //  obj[arr[i]] = (obj[arr[i]] || 0) + 1
//   // }
//   // arr = [...Array(obj[0]).fill(0),...Array(obj[1]).fill(1),...Array(obj[2]).fill(2)]
//   // return arr
// }
// console.log(SortColor(nums));

// merge overlaping intervals
// let intervals = [
//   [1, 4],
//   [5, 6],
// ];
// function Intervals(arr) {
// arr.sort((a, b) => a[0] - b[0]);
// let result = [arr[0]];
// for (let item of arr) {
//   let e1 = result[result.length - 1][1];
//   let s2 = item[0];
//   let e2 = item[1];
//   if (e1 >= s2) {
//     result[result.length - 1][1] = Math.max(e1, e2);
//   } else {
//     result.push(item);
//   }
// }
// return result;

// if(arr.length == 1){
//   return arr
// }
// let mainArr = [];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   let e1 = arr[i - 1][1];
//   let s2 = arr[i][0];
//   if (e1 >= s2) {
//     mainArr.push([arr[i - 1][0], arr[i][1]]);
//   } else {
//     mainArr.push(arr[i]);
//   }
//   i++;
// }
// return mainArr;
// }
// console.log(Intervals(intervals));

// merge sorted array
// function MergerSorted(nums1, m, nums2, n) {
//   let first = m - 1;
//   let second = n - 1;
//   let i = m + n - 1;
//   while (second >= 0) {
//     if (nums1[first] > nums2[second]) {
//       nums1[i] = nums1[first];
//       i--;
//       first--;
//     } else {
//       nums1[i] = nums2[second];
//       i--;
//       second--;
//     }
//   }
//   return nums1;
// }
// console.log(MergerSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// find duplicate number
// let nums = [3, 1, 3, 4, 2];
// function findDuplicate(arr) {
//   let obj = {};
//   for (i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] > 1) {
//       return arr[i];
//     } else {
//       obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//     }
//   }
// }
// console.log(findDuplicate(nums));

// rotate 2d array
// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// function RotateArray(arr){
//   for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//       arr[i][j]
//     }
//   }
// }
// console.log(RotateArray(matrix))

// majorty element
// function Test(arr) {
//   let temp = 0;
//   let pop = 0
//   let obj = {};
//   for (i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1
//     if(obj[arr[i]] > temp){
//       temp = obj[arr[i]]
//       pop = arr[i]
//     }
//   }
//   return pop
// }
// console.log(Test([2,2,1,1,1,2,2]));

// majorty element 2
// function Majorty2(arr) {
//   let size = Math.floor(arr.length / 3);
//   let temp = [];
//   let obj = {};
//   for (i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//     if(obj[arr[i]] > size && !temp.includes(arr[i])){
//       temp.push(arr[i])
//     }
//   }
//   return temp
// }
// console.log(Majorty2([2,2]));

// search in 2d array
// function array(arr,num){
//    for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//       if(arr[i][j] == num){
//         return true
//       }
//     }
//    }
//    return false
// }
// console.log(array([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))

// outer most parenthese
// function OuterMost(S) {
//   let parenthesCount = 0;
//   let result = "";
//   for (const letter of S) {
//     if (letter === "(") {
//       if (parenthesCount) {
//         result += letter;
//       }
//       parenthesCount++;
//     } else {
//       parenthesCount--;
//       if (parenthesCount) {
//         result += letter;
//       }
//     }
//   }

//   return result;
// }
// console.log(OuterMost("(()())(())"));

// set martix
// function Martix(arr) {
//   let obj = [];
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 0) {
//         obj.push([i, j]);
//       }
//     }
//   }
//   for (let letter of obj) {
//     let row = letter[0];
//     let col = letter[1];
//     for (i = 0; i < arr.length; i++) {
//       arr[i][col] = 0;
//     }
//     for (i = 0; i < arr[0].length; i++) {
//       arr[row][i] = 0;
//     }
//   }
//   return arr;
// }
// console.log(Martix([[0, 1]]));

// rotate image
// function RotateImage(arr) {
//     console.log(arr)
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr[i].length;j++){
//             console.log(arr[i][j])
//         }
//     }
// }
// console.log(
//   RotateImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.root = null;
//     this.size = 0;
//     this.tail = null;
//   }
//   append(value) {
//     let newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//       this.tail = newNode;
//       this.size++;
//     } else {
//       let curr = this.root;
//       while (curr.next !== null) {
//         curr = curr.next;
//       }
//       curr.next = newNode;
//       this.size++;
//       this.tail = newNode;
//     }
//   }
//   reverse() {
//     let temp = this.root
//     let prev = null;
//     let curr = this.root;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.root = prev;
//     this.tail = temp
//   }
//   middleLinkedList(){
//     let curr = this.root;
//     let mid = Math.floor(this.size / 2)
//     let count = 0
//     while (count !== mid){
//       curr = curr.next
//       count++
//     }
//     console.log(curr.value,"middle of linked list")
//   }
//   isEmpty() {
//     return this.size == 0;
//   }
// }
// let temp = new LinkedList();
// temp.append(20);
// temp.append(30);
// temp.append(50);
// temp.append(60);
// // temp.reverse();
// temp.middleLinkedList()
// console.log(temp);

// let nums = [3,1,2]
// function Subsequence(arr){
//   let n = arr.length
//   function fun(index,temp = []){
//     if(index >= n){
//       return
//     }
//     temp.push(arr[index])
//     fun(index+1,temp)
//     temp.pop(arr[index])
//     fun(index + 1,temp)
//   }
//   console.log(fun(0,[]))
// }
// console.log(Subsequence(nums))

// Var / Let / Const

// console.log(a)
// var a = 20

// Sum of number in string
// function str(str){
//   let count = 0;
//   for(let i = 0;i<str.length;i++){
//      if(!isNaN(str[i])){
//         count = Number(count) + Number(str[i])
//      }
//   }
//   console.log(count)
// }
// console.log(str('ljashdl4sad544asdas44asd878asdsd454asdsdsd1122'))

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// output  [[1,2],[3,4],[5,6],[7,8],[9]]
// let result = []
// function fun(arr, size, start, end) {
//   if (arr.length <= size) {
//     console.log(result)
//     result.push(arr);
//     return;
//   } else {
//     result.push(arr.slice(start, end));
//     fun(arr.slice(end, arr.length), size, start, end);
//   }
// }
// console.log(fun(arr, 4, 0, 4));

// Pending ----
// const sort = arr => {
//   if (arr.length < 2) return arr;
//   let first = arr[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < first)
// 		left.push(arr[i]);
//     else
// 		right.push(arr[i]);
//   };
//   return [
//     ...sort(left),
//     first,
//     ...sort(right)
//   ];
// };
// let out = sort([14,15,17,16,18,19,20,9,10,11,12,13,0,1,2,3,4,5,6,7,8]);
// console.log(out)

// shift an array 500 times
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < 500 % arr.length; i++) {
//   let once = arr.splice(0, 1);
//   arr = [...arr, ...once];
// }
// console.log(arr);

//Missing Number
// function MissingNumber(arr){
//  let num= arr.reduce((pop,val) => {
//    return pop += val
//   },0)
//   let n = arr.length
//   var expected = n*(n+1)/2;
//   return expected - num
// }
// console.log(MissingNumber([3,0,1]))

// function SortColors(arr){
//   let first = 0
//   let last = arr.length - 1
//     for(let i =0 ; i <= last;){
//     if(arr[i] == 2){
//      [arr[i],arr[last]] = [arr[last],arr[i]]
//       last--
//     } else if (arr[i] == 0){
//      [arr[i],arr[first]] = [arr[first],arr[i]]
//       i++
//       first++
//     } else {
//       i++
//     }
//   }
//   return arr
// }
// console.log(SortColors([2,0,2,1,1,0]))

// Find First and Last Position of Element in Sorted Array
// let nums = [5, 7, 7, 8, 8, 10], target = 8
// function SearchFirstandLast(nums, target) {
//    let left = 0
//    let right = nums.length
//    while(left !== right){
//     if(nums[left] !== target){
//       left++
//     } else if(nums[right] !== target) {
//       right--
//     } else if (nums[left] == target && nums[right] == target){
//       return [left,right]
//     }
//    }
// }
// console.log(SearchFirstandLast(nums,target))

// function SortByFrequency(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1;
//   }
//   let temp = Object.entries(obj).sort((a, b) => {
//     return b[1] - a[1];
//   });
//   let result = "";
//   for (let i = 0; i < temp.length; i++) {
//     let count = 0;
//     while (count !== temp[i][1]) {
//       result += temp[i][0];
//       count++;
//     }
//     count = 0;
//   }
//   return result;
// }
// console.log(SortByFrequency("treee"));

// 1. hollow square

// *****
// *   *
// *   *
// *   *
// *****

// let n = 5;
// let str = "";
// for (let i = 0; i < n; i++) {
//   if (i == 0 || i == n - 1) {
//     for (let j = 0; j < n; j++) {
//       str += "*";
//     }
//   } else {
//     for (let j = 0; j < n; j++) {
//       if(j == 0){
//         str += '*'
//       } else if (j == n - 1){
//         str += '*'
//       } else {
//         str += ' '
//       }
//     }
//   }
//   str += '\n'
// }
// console.log(str);

// let array = ['a','b']
// let newArray = [1,2,3]
// array.push.apply(array,newArray)
// console.log(array)

// find min and max
// let num = [1,2,34,5,6,7,3,4,23]
// console.log(Math.max.apply(null,num))

// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 0, "a", "b", "c");
// splice(start, deleteCount, item1, item2)

// Global execution context GEC
// every thing happens in js in execution context
// JIT just in time

// memory creation phase and then code execution phase
// at frist js scims through the code and allocate memory to the variable and function
// code execution phase
// every function has its own execution context and two phases
// call stack maintain the order of execution of execution context
// memory - this is a variable component where variable and function stored ass a key value pair
//  Memory   |   Code  (thread of execution)
// js is losially type langauage
// temporal dead zone
// let and const declaration are alse hoisted but they behave very differently than var
// block scope is a compound statement and group multiple statements

// In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.
// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

// A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

// A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

// Pure function is a function where the return value is only determined by its arguments without any side effects.

// The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

// JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

// The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur

// The stopPropagation method is used to stop the event from bubbling up the event chain

// Class is a blueprint of a real-life entity. It describes how the object will look alike, what characteristics it holds and what kind of actions we can perform on it.

// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// Call: The call() method invokes a function with a given this value and arguments provided one by one

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

//invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
//invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
// bind: returns a new function, allowing you to pass any number of arguments

// The slice() method returns the selected elements in an array as a new array object.

// Splice method modifies the original array and returns the deleted array.
// The splice() method is used either adds/removes items to/from an array, and then returns the removed item.
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

// lambda or arrow functions - An arrow function is a shorter syntax for a function expression and does not have its own this

// first class function - In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

// first order function - A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

// higher order function - A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

// Curring - Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// Pure function is a function where the return value is only determined by its arguments without any side effects.

// let is Hoisted but not initialized

// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.
// The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.
// Remember that JavaScript only hoists declarations, not initialisation.

// In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.

// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

// Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope.

// A closure is the combination of a function and the lexical environment within which that function was declared.
// i.e, It is an inner function that has access to the outer or enclosing function’s variables.

// Promise -- Promise is a Javascript object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
// It allows you to handle async operations in a more elegant way and avoid callback hell problem.

// Asyn & Await --- Async/await is a more recent addition to JavaScript, and it’s built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code,
// using the keywords “async” and “await”. The “async” keyword is used to define an async function, and the “await” keyword is used to pause the execution of an async function until a promise is resolved.

// The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events

// In summary, promises, callbacks, and async/await are all ways to handle asynchronous operations in JavaScript, with promises providing a more elegant way of handling async operations, callbacks being a more traditional way, and async/await providing a more convenient and readable way of handling async operations.

// In JavaScript, null is a special value that represents an empty or unknown value.

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// “This” keyword refers to an object that is executing the current piece of code.

// Promise  - asyn and await

// let p = new Promise((res, rej) => {
//   setTimeout(() => {
//   res("promis 1");
//   },5000)
// });
// let p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//   rej("promis 2");
//   },10000)
// });
// async function getData(){
//     console.log('working')
//     let res = p
//     res.then((res) => console.log(res,'ress'))
//     console.log('last')

//     console.log('working')
//     const val2 = await p2
//     console.log(val2,'val')
//     const val = await p
//     console.log(val,'val')
// }
// getData()

// Promie All

// let p = new Promise((res, rej) => {
//     setTimeout(() => {
//     res("promis 1");
//     },1000)
//   });
//   let p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//     res("promis 2");
//     },5000)
//   });
// Promise.all([p, p2]).then((res) => console.log(res,"res")).catch((err) => console.log(err, "err"));
// Promise.allSettled([p,p2]).then((res) => console.log(res,'res')).catch((err) => console.log(err,'err'))

// Promise PolyFill
// function PromisPolyFill(executer) {
//   let onResolve,
//     onReject,
//     isFullfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve == "function") {
//       onResolve(val);
//       isCalled = true;
//     }
//   }
//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onReject == "function") {
//       onReject(val);
//       isCalled = true;
//     }
//   }
//   this.then = function (callback) {
//     onResolve = callback;
//     if (isFullfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value);
//     }
//     return this;
//   };
//   this.catch = function (callback) {
//     onReject = callback;
//     if (isRejected && !isCalled) {
//       isCalled = true;
//       onReject(value);
//     }
//     return this;
//   };
//   executer(resolve, reject);
// }
// new PromisPolyFill((resolve, reject) => {
//   reject("hello");
// })
//   .then((res) => console.log(res, "res"))
//   .catch((err) => console.log(err, "err"));

// Memoization -- Memoization is a powerful optimization technique used in computer programming to speed up the execution of functions by caching their results.
// function add(n) {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     result = result + i;
//   }
//   return result;
// }
// function memoization(func) {
//   let cahce = {};
//   return function (...args) {
//     let n = args[0];
//     if (n in cahce) {
//       console.log('cahce')
//       return cahce[n];
//     } else {
//       let result = func(n);
//       cahce[n] = result;
//       console.log('func')
//       return result;
//     }
//   };
// }
// let result = memoization(add);
// result(10);
// result(12);
// result(10);

// Debounce ---- Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.
// function getData(event) {
//   console.log(event, "event");
// }
// function useDebounce(call, d) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       call(args[0]);
//     }, d);
//   };
// }
// const Debounce = useDebounce(getData, 1000);

// Throttling ---- Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)

// event bubling - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// event capture - an event propagates from the outermost element to the target element

// clouser - A closure consists of references to the surrounding
// state (the lexical environment) and a function that
// has been wrapped (contained). In other words, a
// closure enables inner functions to access the scope
// of an outside function. Closures are formed whenever
// a function is created in JavaScript, during function
// creation time.

// synthetic event - SyntheticEvent is a wrapper based on the browser’s native events.
// It provides an unified API, prevents browser inconsistencies, and ensures that the event works across multiple platforms.

//  Controlled components refer to the components where the state and behaviors are controlled by Parent components while
//  Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves

// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions.

// JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

// Data type determines type of varibale

// primitive and non - primitive data type
//  hold single value , hold multiple value
//  immutable means value once assign cannot be changed , mutable and their values can be changes

// spread operator is used to expand or spread elements from an iterable array , object and string into individual elements
// rest operator is used in function parameter to collect all remanning elements

// Pure function is a function which return same output for same input

// Event handling is proccess of responding to user action in web page
// Events are signals fired inside the browser window that notify of changes in the browser or operating system environment.
// Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change.

// pending -- fetch

// React ----

// Lack of Proper Documentation
// Development Speed
// JSX Complexity
// Problems With SEO
// we have to import library to perform some specific actions

// A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default
//  method of a web browser loading entire new pages

// In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle.
// These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.
// The Mounting Phase begins when a component is first created and inserted into the DOM. The Updating Phase occurs when a component's state or props change.
// And the Unmounting Phase occurs when a component is removed from the DOM

// If you try to update the state directly then it won't re-render the component.

// SyntheticEvent is a wrapper based on the browser’s native events.
// It provides an unified API, prevents browser inconsistencies, and ensures that the event works across multiple platforms.
// Synthetic Events allows events in React to easily adapt to different browsers, solving an issue that has caused unnecessary frustration for developers.

// The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

// React Fiber

// Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation,
// layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives

// React 18+
// useTransition - Marking a state update as a non-blocking transition
// Concurrency - It allows React to work on multiple tasks at once, without blocking the main thread
// State batching groups together multiple state updates into a single re-render for better performance.
// Suspense - a new way of building React apps using the concurrent rendering engine introduced in React 18. It's also a specific React API, <Suspense /> , a component that lets you display a fallback until its children have finished loading.
// Transitions let you keep the user interface updates responsive even on slow devices.
// The useDeferredValue hook allows us to fix this slow render problem by implementing a delay before some information is calculated.

// React Reconciliation is the process through which React updates the Browser DOM. It makes the DOM updates faster in React.
// It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM

// Profiler - lets you measure rendering performance of a React tree programmatically.

// Suspense -  lets you display a fallback until its children have finished loading.

// memo - lets you skip re-rendering a component when its props are unchanged.

// Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers

// Controlled components refer to the components where the state and behaviors are controlled by Parent components while
// Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.
// The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it.

// Redux is an open-source JavaScript library used to manage application state.
// Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model

// Redux Principle ---
// Single source of truth​ The global state of your application is stored in an object tree within a single store. ...
// State is read-only​ The only way to change the state is to emit an action, an object describing what happened. ...
// Changes are made with pure functions​

// Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.
// So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

// In Redux, reducers are pure functions that handle state logic,
// accepting the initial state and action type to update and return the state, facilitating changes in React view components

// Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
// People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more

// Redux Thunk is middleware that allows you to return functions,
// rather than just actions, within Redux. This allows for delayed actions, including working with promises

// Redux Thunk middleware allows you to write action creators that return a function instead of an action

// constructors are mainly used for two purposes: It used for initializing the local state of the component by assigning an object to this

// Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components.
// In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component

// A component's lifecycle has three main phases: the Mounting Phase, the Updating Phase, and the Unmounting Phase.

// React Router - it enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

// React 18 features imp.
// HOC

// var a = 10
// {
//     var a = -10
// }
// let b = a
// {
//     let b = -20
// }
// console.log(b,'aaa')

// b = 20
// let b
// console.log(b,'bbb')

// a = 20
// var a;
// console.log(a)

// debounce function

// function getData(value) {
//   console.log(value);
// }
// function debounce(func, d) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(args[0]);
//     }, d);
//   };
// }
// const Debounce = debounce(getData, 2000);
// Debounce();

// throtlling
// document.getElementById('button1').addEventListener('click',(e) => {
//     dobunceFunc(10)
// })
// function getData(value) {
//   console.log("data", value);
// }
// function debounce(func, d) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(args[0]);
//     }, d);
//   };
// }
// const dobunceFunc = debounce(getData, 2000);
// dobunceFunc(10);

// memoization

// function getData(n){
//     let result = 0
//     for(let i =0;i<n;i++){
//         result++
//     }
//     return result
// }
// function memoization(call){
//     let cahces = {}
//    return function(...args){
//     let n = args[0]
//     if(n in cahces){
//         console.log('cache')
//         return cahces[n]
//     } else {
//         console.log('new')
//         let result = call(n)
//         cahces[n] = result
//         return result
//     }
//    }
// }
// let memo = memoization(getData)
// memo(10)
// memo(20)
// memo(10)

// Array.prototype.myReduce = function (call, i) {
//   let result = i;
//   for (let i = 0; i < this.length; i++) {
//     if (result !== undefined) {
//       result = call(result, this[i], i, this);
//     } else {
//       result = this[i];
//     }
//   }
//   return result;
// };

// let result = [1, 2, 3].myReduce((acc, inc) => {
//   return acc * inc;
// }, 1);
// console.log(
//   result,
//   [1, 2, 3].reduce((acc, inc) => {
//     return acc * inc;
//   }, 1)
// );

// var a = 10;
// if (true) {
//   let a = 20;
//   console.log(a, "inner");
// }
// console.log(a, "outer");

// my name is jatin makad and I have completed my bachelor of engineering in computer science from LPU and I have spent 2.3 years working as a software developer
// and I have had the opportunity to work on various projects and with different technologies, from developing web applications leading a front end of the project
// in my previous role at octal It solution. I am known for my problem-solving skills and ability to work collaboratively with cross-functional teams.

// we have not used SSR in this cause the only object is to make SEO frienldy and that's it
//  Next. js provides a custom head component for setting up head metadata

// I worked with 6 personal teams (4 developers, 1BA, 1PM) on the Mada properties website, and the main objective of this website is to list properties for customers
// published by agents or companies that basically worked in UAE and Saudi region my main role was to manage and work on front end using a library like next js and
// react js, in this our main objective to make site SEO friendly that's why we have chosen to work on Next the best part about this project is that I got to learn
// a lot about Next js, which I was really curious about, we have deployed the first version in 2 months and then continue to improve with feedback by our client
// and QA team.

// I worked with 6 person teams (4 developers, 1BA, 1 PM) on the "Mada properties" website, and the main objective of this website is to list properties for customers
// published by agents or companies that worked in the UAE and Saudi region and many other features, my main role was to manage and work on the front end using a library like Next JS,
// React JS, Google Map APIs, and i18next for translation between English and Saudi, our main objective is to make the site SEO friendly which's why we have chosen to work on it Next JS the best part about this project is that I got to learn
// a lot about Next js, which I was really curious about, we have deployed the first version in 2 months and then continue to improve with feedback from our client
// and QA team.

// completed my notice period and immediately available

// Fancy betting app In this we have a 4 personal team (3 developers and 1 PM), so basically this project consists of full fledge online gaming platform that has casino
// , multiple sports games, and many other features like listing matches according to their sports type, league and then the user can place a bet on multiple markets
// for a single match like fancy, Betfair , bookmaker and user can also watch live matches and scoreboard my role in this project is to manage front end for mobile
// and web responive we have used React js library for front end and worked on new features like working with socket IO for getting odds of matches in real-time
// constanly updating odds in our site for all markets

// HTML stands for HyperText Markup Language. It is a standard text formatting language used for developing web pages

// !<!DOCTYPE> - this line tells the browser that this piece of coded is HTML5

// Attributes - HTML Elements contain a starting tag, content, and an ending tag

// Tags - HTML tags contain only starting and closing tag

// the elements tell the browser what to display, the attributes define how they will behave.
// The tags mark the beginning and the end of an element. They may not be necessary for some elements, especially the closing tags

// Voided tags - HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.

// React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM.
//  Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed.
//   This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updates those objects only, on real DOM.

// React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any
// update for a single change in the state of a component.

// We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM
//  receives batch updates to re-render the UI. This entire process of transforming changes to the real DOM is called Reconciliation.

// Hello, I'm Jatin Makad, a computer science graduate from LPU with a Bachelor's in Engineering. Over the past 2.3 years, I've polished my skills as a software developer,
// working on diverse projects and technologies. Notably, I led the front-end development at Octal IT Solution, showcasing my problem-solving abilities and collaborative
// spirit. I'm excited to use what I've learned and my skills to help out in cool projects and work well with teams.

// 1. class-based components are state-full components and function components are stateless components
// 2. class-based components don't need any extra function to manage their component state or to perform any kind of side effect to its component and on the other hand
//    function-based component it's just a plane js function and if we have to perform some kind of side effect or manage state we need hooks for it which are offered by React itself
// 3. after the introduction of hooks in React V16 function components are as powerful as class-based components and it's easier to read, write or manage code in function rather than class-based components cause it's more complex to read and write

// Kth smallest element in Array

// let nums = [1,2,6,4,5,3] , K = 3
// function solution(arr,k){
//   console.log(arr,k)
//   let temp = nums[0]
//   for(let i =1;i<arr.length;i++){
//     if(temp < nums[i]){
//         temp = nums[i]
//     }
//   }
//   console.log(temp)
// }
// solution(nums,K)

// let nums = [3, 5, 2, 8, 11],
//   target = 10;
// function solution(nums, target) {
//     let hash = {}
//     for (var i = 0; i < nums.length; i++) {
//     let diff = target - nums[i]
//     if (hash[diff] !== undefined) {
//         return [hash[diff], i];
//       }
//       hash[nums[i]] = i;
//     }
// }
// console.log(solution(nums, target))

// Next js -----

// The React Framework for Production

// React

// Not quite possible to build a full feature rich application ready to be deployed for production
// React is a library for building user interfaces
// You have to make decisions on other features of the app like routing, styling, authentication etc.

// Next.js
// A package that uses React for building user interfaces
// Loaded with a lot more features that enable you to build full fledged production ready applications.
// Features exactly like routing, styling, authentication, bundle optimization etc.
// There's no need to install additional packages. Next.js provides everything for you
// Opinions and conventions need to be followed to implement the above said features

// .next folder for deployment

// in Nextjs index file is generated while rendering but it's not present in public folder

// react hydration

// React vs Next JS
// By default, Next JS pre-renders every page in the application
// What does pre-render mean?
// Next JS generates HTML for each page in advance instead of having it all done by client-side

// Why pre-render?
// 1. Pre-rendering improves performance
// • In a React app, you need to wait for the JavaScript to be executed
// Perhaps fetch data from an external API and then render the UI
// There is a wait time for the user
// • With a pre-rendered page, the HTML is already generated and loads faster

// 2. Pre-rendering helps with SEO

// If you're building a blog or an e-commerce site, SEO is a concern
// With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
// • If search engine hits a pre-rendered page though, all the content is present in the source code which
// will help index that page If SEO is of concern for your app, pre-rendering is what you want

// Pre-rendering Summary
// Pre-rendering refers to the process of generating HTML with the necessary data for a page in our
// application.
// Pre-rendering can result in better performance and SEO.

// Static Generation - How?
// Next JS, by default will pre-render every page in our app
// The HTML for every page will automatically be statically generated when we build our application
// "Throughout this video, you've been mentioning that pages are generated at build time. But there
// is no build for application yet, is there? Aren't we running the application in development mode?"
// Prod Server - An optimized build is created once and you deploy that build. You don't make code
// changes on the go once it is deployed
// Dev Server - We should be able to make changes in our code and we want that code to immediately
// reflect in the browser

// Next.js is a React-based open-source framework that helps developers build server-side rendered React applications.

// Next.js offers several advantages over React, including server-side rendering, automatic
// code splitting, static site generation, dynamic imports, optimized performance, and easy
// deployment. Additionally, Next.js supports built-in SEO and analytics, making it easier to
//  optimize your application for search engines and track user engagement.

// Server-side rendering (SSR) is the process of rendering a web page on the server before sending it to the client's browser. SSR is important because it allows search engines to crawl and index your website's content, which can improve your website's SEO. Additionally, SSR can improve the initial page load time and improve the user experience for users with slow internet connections or devices.

// The getStaticProps function is used to fetch data at build time for static site generation

// compose ---
// Function composition is a way of chaining multiple functions to create a new function. It is a way of solving a problem by reducing it into smaller solutions. As we see function composition happens from right to left.

// const multiplyby2 = (n) => {
//   return n * 2;
// };
// const positiveNumber = (n) => {
//   return Math.abs(n);
// };
// const compose = (fn1, fn2) => (data) => {
//   return fn1(fn2(data));
// };
// const result = compose(multiplyby2, positiveNumber);
// console.log(result(-20));

// Implement Retry API with n number of ----

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Failed");
//   }, 2000);
// });
// const wait = ms => new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// const retry = (func, retries, delay, finalError) => {
//   return func
//     .then()
//     .catch((res) => {
//       if (retries > 0) {
//         return wait(delay).then(retry(promise, retries - 1, delay, finalError));
//       }
//     });
// };
// retry(promise, (retries = 3), (delay = 50), (finalError = "Failed"));

// Prototype Inheritance ----
// The answer is that these methods come built-in within each type of data structure thanks to something called prototype inheritance.
// In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype.
//  In short, objects can inherit properties from other objects — the prototypes

// let arr = ['first','second']
// console.log(arr.__proto__)

// infinite curring in js

// function sum(param1) {
//    return function (param2) {
//      if (param2 == null) {
//        console.log(param1);
//      } else {
//        return sum(param1 + param2);
//      }
//    };
//  }
//  sum(6)(4)(6)();

// let obj = {
//    name:'hello',
//    getName:() => {
//       console.log(this.name,'====')
//    },
//    getNameFunc:function(){
//       console.log(this.name,'name')
//    }
// }
// obj.getName()
// obj.getNameFunc()
// obj.getName.call(obj)



// let obj = {
//   name: "hello",
// };
// let obj2 = {
//   name: "hello 2",
//   getName: function (temp) {
//     console.log(this.name, temp, "name");
//   },
// };
// obj2.getName.apply(obj,['first','seocnd'])


// PollyFill for Call , Apply , Bind

// Function.prototype.myCall = function (context, ...args) {
//   context.myFn = this;
//   context.myFn(...args);
// };

// Function.prototype.myApply = function (context, args) {
//   context.myFn = this;
//   context.myFn(...args);
// };

// Function.prototype.myApply = function (context, ...args) {
//   context.myFn = this;
//   return function () {
//     return context.myFn(...args);
//   };
// };

// obj2.getName.apply(obj, ["first", "seocnd"]);
