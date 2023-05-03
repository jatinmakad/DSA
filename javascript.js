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

// AJAX and fetch

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
