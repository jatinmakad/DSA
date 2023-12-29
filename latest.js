// let mainArr = []
// function Test(arr, count) {
//   let temp = []
//   for (i = 0; i < count; i++) {
//     if (arr[i]) {
//       temp.push(arr[i])
//     }
//   }
//   mainArr.push(temp)
//   let main = arr.slice(count, arr.length)
//   if (main.length) {
//     Test(main, count)
//   }
// }
// Test(["a", "b", "c", "d", "e", "f", "i"], 2)
// console.log(mainArr)

// let temp = []
// function Test(arr){
//   for(let i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//       Test(arr[i])
//     } else {
//        temp.push(arr[i])
//     }
//   }
// }
// Test([[["a","b"]],[["c","d"]],["e","f"]])
// console.log(temp)

// function merge(arr){
//   if(arr.length < 2){
//     return arr
//   } 
//   let mid = Math.floor(arr.length/2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid)
//   return mergeSort(merge(left),merge(right))
// }
// function mergeSort(leftArr,rightArr){
//   const temp = []
//   while(leftArr.length && rightArr.length){
//       if(leftArr[0] <= rightArr[0]){
//         temp.push(leftArr.shift())
//       } else {
//          temp.push(rightArr.shift())
//       }
//   }
//   return [...temp,...leftArr,...rightArr]
// }
// console.log(merge([-6,23,5,2,56,-2,1]))

// let temp = [1,2,3,4,5,6,7,8]
// function Test(arr){
//    let left = 0
//   let right = arr.length - 1
//   while(right > left){
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     left++
//     right--
//   }
//   console.log(arr)
// }
// Test(temp)

// function Currying(a){
//    return function (b){
//     if(b) return Currying(a+b)
//      return a
//    }
// }
// console.log(Currying(1)(2)(3))

// Array.prototype.myforEach = function(cb){
// for(i=0;i<this.length;i++){
//   cb(this[i],i,this)
// }
// }
// [0,2,3,4,5,5].myforEach((i) => console.log(i * 2))

// synthetic events
// callback hell
// promise 
// bind

// function Test(message){
//   setTimeout(() => {
//      return `helllo ${message}`
//   },1000)
// }
// const temp = Test("jatin")
// console.log(temp())

// function promise() {
//   return new Promise((res, rej) => {
//     rej("hello")
//   })
// }

// let obj = promise()

// obj.then((r) => console.log("success 1")).then((r) => console.log("success 2")).catch((r) => console.log("error 1")).then((r) => console.log("success 3"))

// check string anagram 
// let a = "hello"
// let b= "leeho"
// function isAnagram(str1,str2) {
//   if(str1.length !== str2.length){
//     return
//   }
//   let map1 = {}
//   for(let item of str1){
//     map1[item] = (map1[item] || 0) +1
//   }
//   for(let item of str2){
//     if(!map1[item]){
//     return false
//     } 
//     map1[item] -= 1
//   }
//   return true
// }
// console.log(isAnagram(a,b))

// coutning uniquer numbers 
// let array = [1,1,1,2,3,3,5,5,7,7,9,9,9]
// function isUnique (arr){
//   let map = new Map()
//   for(let item of arr){
//     if(!map.has(item)){
//       map.set(item,1)
//     }
//   }
// console.log(map.size)
// }
// isUnique(array)

// highest consicutive 
// let array = [1,2,3,4,5,6,7,8,9,10,11,12] 
// let target = 5
// function  Pair(arr,count) {
//   let temp = Math.round(arr.length + 1 - count)
//   let temp2 = count
//   let counter = 0
//   for(let i=0;i< temp ;i++){
//     let counterInner = arr[i]
//     for(let j=i+1; j < temp2 + i;j++){
//      counterInner += arr[j]
//     }
//     if(counterInner > counter){
//       counter = counterInner
//     }
//   }
// }
// Pair(array,target)
// function MergeInterval(arr) {
//   arr.sort((a, b) => a[0] - b[0])
//   let result = [arr[0]]
//   for (let item of arr) {
//     let e1 = result[result.length - 1][1]
//     let s2 = item[0]
//     let e2 = item[1]
//     if(e1 >= s2){
//       result[result.length - 1][1] = Math.max(e1,e2)
//     } else {
//       result.push(item)
//     }
//     // console.log(e1, "|", s2, "|", e2)
//   }
//   return result
// }

// function MergeTwo(arr){
//    let result = [arr[0]]
//     for(i=0;i<arr.length;i++){
//       let e1 = result[result.length - 1][1]
//       let s2 = arr[i][0]
//         let e2 = arr[i][1]
//       if(e1 >= s2){
//         result[result.length - 1][1] = Math.max(e1,e2)
//       } else {
//         result.push(arr[i])
//       }
//     }
//   console.log(result)
// }
// console.log(MergeTwo([[1, 3], [2, 6], [8, 10], [15, 18]]))


// let nums = [5,7,7,8,8,10], target = 8
// function FirstandLast(arr,tar){
//   if(arr.length == 0){
//     return [-1,-1]
//   }
//   let left = 0
//   let right = arr.length - 1
//   let mid = Math.floor((left + right) / 2)
//   let leftIndex = null
//   let rightIndex = null
//   while(left <= arr.length - 1){
//     if(arr[left] === tar){
//       leftIndex = left
//       break
//     }
//     left++
//   }
//   while(right >= 0){
//     if(arr[right] === tar){
//       rightIndex = right
//       break;
//     }
//     right--
//   }
//   if(leftIndex == null && rightIndex == null){
//     return [-1,-1]
//   } else {
//      return [leftIndex,rightIndex]
//   }
// }
// console.log(FirstandLast(nums,target))


// intersection of two array 
// let num1 = [1,2,2,1,3], num2 = [2,2,3,4,6,7,7]
// function Test(arr1,arr2){
//   let obj = {}
//   let arr = []
//   for(let item of arr2){
//     obj[item] = 0
//   }
//   for(let item of arr1){
//     if(obj[item] !== undefined){
//       arr.push(item)
//       obj[item]  = undefined
//     }
//   }
//    console.log(arr)
// }
// Test(num1,num2)

// nums = [1,2,1,3,5,6,4]
// function Peek(arr){
//   let start = 0
//   let count = 0
//   while(start !== nums.length){
//     if(arr[start] > arr[count]){
//     count = start}
//      start++
//   }
//  console.log(count)

// }
// Peek(nums)


// let nums = [2,2,1,1,1,2,2]
// function Majorty(arr){
//   let obj = {}
//   let highest = 0
//   let temp  = 0
//   for(let item of arr){
//     obj[item] = (obj[item] || 0) + 1
//   }
//   for(let item in obj){
//       if(obj[item] > highest){
//         highest = obj[item]
//         temp = item
//       }
//   }
//  return temp
// }
// console.log(Majorty(nums))

// let nums = [4,1,2,1,2]
// function Majorty(arr){
//   let obj = {}
//   let highest = 0
//   let temp  = 0
//   for(let item of arr){
//     obj[item] = (obj[item] || 0) + 1
//   }
//   for(let item in obj){
//       if(obj[item] == 1){
//         highest = item
//       }
//   }
//  return highest
// }
// console.log(Majorty(nums))

// function Time12to24(clock) {
//   let [time, mode] = clock.split(" ")
//   let [hour, min] = time.split(":")

//   if (hour === "12") return hour = "00"
//   if (mode === "PM") return hour = parseInt(hour) + 12
//   return `${hour}:${min}`;
// }
// console.log(Time12to24("05:21 PM"))


// let nums = [2,0,2,1,1,0]
// function SortColor(arr){
//   let first = []
//   let last = []
//   let start = 0
//   while(start !== nums.length){
//     if(nums[start] == 0){
//        first.unshift(nums[start])
//     } else if (nums[start] == 1){
//       first.push(nums[start])
//     } else (
//       last.push(nums[start])
//     )
//     start++
//   }
//   arr =[...first,...last]
//   return arr
// }
// console.log(SortColor(nums))


// sliding window approach
// let s = "abcabcbb"
// function LongestSubstring(str){
//   let start =0 
//   let end = 0
//   let maxLength = 0
//   let unique = new Set()
//   while(end < str.length){
//     if(!unique.has(str[end])){
//       unique.add(str[end])
//       end++
//       maxLength = Math.max(maxLength,unique.size)
//     } else {
//       unique.delete(str[start])
//       start++
//     }
//   }
//   return maxLength
// }
// console.log(LongestSubstring(s))


// function MergeSort(arr){
//   if(arr.length < 2){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid)
//   return merge(MergeSort(left),MergeSort(right))
// }
// function merge(leftArr,rightArr){
//   const sortedArr = []
//   while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArr.push(leftArr.shift())
//     } else {
//        sortedArr.push(rightArr.shift())
//     }
//   }
//   const result = [...sortedArr,...leftArr,...rightArr]
//   return result
// }
// console.log(MergeSort([-8,33,-2,23,-2,5,8,3,1]))

// function mergesort(arr) {
//   if (arr.length < 2) {
//     return arr
//   }
//   const mid = Math.floor(arr.length / 2)
//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid)
//   return merge(mergesort(leftArr), mergesort(rightArr))
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = []
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//     } else {
//       sortedArr.push(rightArr.shift())
//     }
//   }
//   const resultArr = [...sortedArr, ...leftArr, ...rightArr]
//   return resultArr
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]

// First-class functions are JavaScript functions that can behave like variables.
// They can also be parsed as arguments to higher-order functions.
// Higher-order functions are functions that return a function or take in a function as an argument



// linked list 
// class LinkeList {
//   constructor(data) {
//     this.value = data,
//       this.next = null
//   }
// }
// class Node {
//   constructor() {
//     this.head = null,
//       this.size = 0
//     this.tail = null
//   }
//   isEmpty() {
//     return this.head === null
//   }
//   append(value) {
//     let newNode = new LinkeList(value)
//     if (this.isEmpty()) {
//       this.head = newNode
//       this.tail = newNode
//       this.size++
//     } else {
//       let prev = this.head
//       while (prev.next) {
//         prev = prev.next
//       }
//       prev.next = newNode
//       this.tail = newNode
//       this.size++
//     }
//   }
//   prepend(value) {
//     let newNode = new LinkeList(value)
//     if (this.isEmpty()) {
//       this.head = newNode
//       this.tail = newNode
//       this.size++
//     } else {
//       let prev = this.head
//       newNode.next = prev
//       this.head = newNode
//       this.size++
//     }
//   }
//   deleteNode(value) {
//     let prev = this.head
//     let mainPrev = prev
//     while (prev.value) {
//       if (prev.value == value) {
//         mainPrev.next = mainPrev.next.next
//         this.size--
//         break
//       }
//       mainPrev = prev
//       prev = prev.next
//     }
//   }

// }
// let node = new Node()
// node.append(2)
// node.append(3)
// node.append(5)
// node.append(12)
// node.append(8)
// node.append(9)
// node.prepend(11)
// node.deleteNode(12)
// console.log(node)



// fetch
// settimeout setInterval
// promise
// HTMl
// CSS

// let arr = [1,2,44,5,56]
// console.log({...arr})

// function a(nums){
//   let map = {}
//   for(i=0;i<nums.length;i++){
//       map[nums[i]] = (map[nums[i]] || 0) + 1
//   }
//   return map
// }
// console.log(a([1,2,2,3,4,5,5]))


// const arr = [15, 23, 19, 20, 7];

// function findKthMaxElement(arr, k) {
//   let maxe;
//   for (let i = 0; i < k; i++) {
//     maxe = Math.max.apply(null, arr);
//     console.log(maxe)
//     arr[arr.length] = 
//     arr.splice(arr.indexOf(maxe), 1);
//   }
//   return maxe;
// }

// let element = findKthMaxElement(arr, 4);
// console.log(element)




// async 
// defer 
// event bubbling and capturing 
// event delegation 

// event bubbling -  a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy

// debounce 
// function getData() {
//   console.log("count...")
// }
// function useDebounce(fn, delay) {
//   let timmer;
//   return function(...args) {
//     if (timmer) clearTimeout()
//     setTimeout(() => {
//       fn()
//     }, delay)
//   }
// }
// let debounce = useDebounce(getData, 300)
// debounce()

// throttling 
// function getFunc() {
//   console.log("count")
// }
// function useThrottle(func, delay) {
//   return function(...args) {
//     setTimeout(() => {
//       func()
//     }, delay)
//   }
// }
// let throttle = useThrottle(getFunc, 2000)

// cors - Cross Origin Resource Sharing
// URL - Uniform Resource Locator

// memoization 
// let result = 0
// function sum(value) {
//   for (i = 0; i < value; i++) {
//     result += value
//   }
//   return result
// }
// function memoization(func) {
//   let cache = {}
//   return function(...arg) {
//     let n = arg[0]
//     if (n in cache) {
//       console.log(cache,"cache")
//       return cache[n]
//     } else {
//       let result = func(n)
//       cache[n] = result
//       console.log(result,"result")
//       return result
//     }
//   }

// }
// let fun = memoization(sum)
// fun(10)
// fun(20)
// fun(10)
// fun(20)

// let arr = [1,2,3,4,5,6,2,4,6,7] 
// let nums = 3
// function test(arr,nums){
//   let max = 0
//   let temp = 0
//   for(i=0;i<arr.length - nums + 1;i++){
//     for(j=0;j<nums;j++){
//        temp += arr[i + j]
//     }
//     if(temp > max){
//       max = temp 
//       temp = 0
//     } else {
//       temp = 0
//     }
//   }
//   return max
// }
// console.log(test(arr,nums))


// function slidingWindow(arr1,nums1){
//    let max = 0
//   let sum = 0
//   let i=0
//   while(i < nums1){
//     sum = sum + arr1[i]
//     i++
//   }
//   max = sum
//   i = nums1
//   while(i < arr1.length){
//     // console.log(i-nums1,i)
//     sum += arr1[i] - arr1[i-nums1]
//     if(sum > max){
//       max = sum
//     }
//     i++
//   }
//   return max
// }
// console.log(slidingWindow(arr,nums))



// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [list, setList] = useState([]);
//   const [value, setValue] = useState();
//   const [count, setCount] = useState({});

//   const hadleClick = () => {
//     let arr = [...list, value];
//     if (value.trim()) setList(arr);

//     if (count[value]) {
//       count[value] = count[value] + 1;
//       setCount(count);
//     } else {
//       count[value] = 1;
//       setCount(count);
//     }

//     let out = {};
//     arr.forEach((item) => {
//       if (out[item]) {
//         out[item] = out[item] + 1;
//       } else {
//         out[item] = 1;
//       }
//     });
//     setCount(out);
//     setValue("");
//   };

//   return (
//     <div className="App">
//       {JSON.stringify(list)}
//       <br />
//       <br />
//       {JSON.stringify(count)}
//       <br />

//       <br />
//       <br />
//       <input
//         type="text"
//         name="value"
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//       />
//       <button
//         type="button"
//         onClick={() => {
//           hadleClick();
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }


// Start , Stop Watch--------------

// import { useEffect, useState } from "react";
// import "./styles.css";
// let adjustInterval = undefined;
// function App() {
//   const [watch, setWatch] = useState(0);
//   const [started, setStarted] = useState(false);
//   // const [currentTime, setCurrentTime] = useState(Date());

//   const startWatch = () => {
//     adjustInterval = setInterval(() => {
//       setWatch((x) => x + 1);
//     }, 1000);
//     setStarted(true);
//   };
//   const stopWatch = () => {
//     clearInterval(adjustInterval);
//     setStarted(false);
//   };
//   const resetWatch = () => {
//     setStarted(false);
//     setWatch(0);
//   };

//   useEffect(() => {
//     setInterval(() => {
//       setCurrentTime(Date());
//     }, 1000);
//   }, [currentTime]);

//   return (
//     <div className="App">
//       <h1>Start stop watch</h1>
//       <h1>{watch}</h1>
//       {/ <h1>{currentTime}</h1> /}

//       <button disabled={started} onClick={startWatch}>
//         start
//       </button>
//       <button onClick={stopWatch}>stop</button>
//       <button onClick={resetWatch}>reset</button>
//     </div>
//   );
// }
// export default App;




// Sum of number from given alpha numeric strings  
// function sumNumber(str)
//     {
//         var sum = 0;
// 		var num = ""
//         for (var i = 0; i < str.length; i++)
//         {       
//             while (!isNaN(str[i]))
//             {
//                 console.log("num",num,str[i])
//                 num = num + str[i];
//                 i++;
//             }
//             if (num.length > 0)
// 				sum+= parseInt(num)
//             num = "";
//         }
//         console.log("sum",sum)
//     }
// sumNumber("ljashdl4sad544asdas44asd878asdsd454asdsdsd1122")



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// out put  [[1,2],[3,4],[5,6],[7,8],[9]]
// function chunks(arr, num) {
//   var temp = [];
//   for (let i = 0; i < arr.length; i) {
//     var chunk = [];
//     do {
//       chunk.push(arr[i]);
//       i++;
//     } while (i % num !== 0 && i < arr.length);
//     temp.push(chunk);
//   }
//   return temp;
// }
// let output = chunks(arr, 2);
// console.log(output);



// let str =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";


// let count = {};
// let max = 0;
// let maxUsedChar = "";
// //str.forEach((val, i) => {
// for(var i = 0; i < str.length; i ++)
// {
//   let val = str[i].toLowerCase();
//   let rgx = /^[^a-z]+$/;
//   if (!rgx.test(val)) {
//     count[val] = count[val] || 0
//     count[val]++
//     if(max < count[val])
//     {
//       max = count[val]
//       maxUsedChar = val
//     }
//   }
// };
// console.log(max, maxUsedChar, count);






const sort = arr => {
  if (arr.length < 2) return arr;
  let first = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < first) 
		left.push(arr[i]);
    else 
		right.push(arr[i]);
  };
  return [
    ...sort(left),
    first,
    ...sort(right)
  ];
};
let out = sort([14,15,17,16,18,19,20,9,10,11,12,13,0,1,2,3,4,5,6,7,8]);
console.log(out)








// Check ip is valid or not
//241.78.54.65
// function checkIp(ip) {
//   let arr = ip.split(".");
//   if (arr.length !== 4) return false;
//   let out = false;
//   for (let i = 0; i < arr.length; i++) {
//     let val = Number(arr[i]);
//     if (!isNaN(val)) {
//       out = val <= 255 && val >= 0 ? true : false;
//     } else {
//       out = false;
//     }
//   }
//   return out;
// }

// let ip = "241.78.54.65";
// console.log(checkIp(ip));








// Advacnec code Check ip is valid or not
//241.78.54.65
// function checkIp(ip) {
//   let arr = ip.split(".");
//   if (arr.length !== 4) return false;
//   let out = true;
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (isNaN(arr[i][j])) {
//         out = false;
//         break;
//       }
//     }
//     if (val > 255 || val < 0) {
//       out = false;
//       break;
//     }
//   }
//   return out;
// }
// let ip = "241.78.54.65";
// console.log(checkIp(ip));





// shift an array 500 times
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < 500 % arr.length; i++) {
//   let once = arr.splice(0, 1);
//   arr = [...arr, ...once];
// }
// console.log(arr);




// COunt of sum 2 values equal to 9
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let count = 0;
// for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//   if (arr[i] + arr[j] === 9) count++;
// }
// console.log(count);




// function isPrime(num) {
//   if (num < 2) return false;

//   for (let k = 2; k < num; k++) {
//     if (num % k === 0) {
//       return false;
//     }
//   }
//   return true;
// }



// function List(input) {
//   let main = [];
//   for (let i = 2; i < 100; i++) {
//     if (isPrime(i)) {
//       //console.log(i);
//       main.push(i);
//     }

//     if (main.length === input) return false;
//   }
//   console.log(main);
// }
// List(5);





// let str = "this is a very important question";
// let count = 3;
// function capital(str, index) {
//   let out = "";
//   let subString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       out += " " + subString;
//       subString = "";
//       continue;
//     }
//     if (subString.length === index) subString += str[i].toUpperCase();
//     else subString += str[i];
//   }
//   out += " " + subString;
//   return out;
// }
// console.log(capital(str, count - 1));

// / -----------Alternat Solution ------- /

// let str2 = "this is a very important question";
// let count2 = 3;
// let strarr = str2.split(" ");

// function capital2(str, count) {
//   let out = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].length <= count) continue;
//     let temp = "";
//     for (let j = 0; j < str[i].length; j++) {
//       if (j === count) temp += str[i][j].toUpperCase();
//       else temp += str[i][j];
//     }
//     out.push(temp);
//   }
//   return out.join(" ");
// }
// console.log(capital2(strarr, count2 - 1));







// var arr = [2, 3, 1, 4, 5];
// let count = 0;
// function minimumSwaps(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) continue;
//     let j = i;
//     let currentValue = arr[i];
//     while (j > 0) {
//       j--;
//       console.log(currentValue, arr[j]);
//       if (currentValue < arr[j]) {
//         console.log(currentValue, arr[j], j, i);
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         //arr[j] = currentValue;
//         i = j;
//         //currentValue = arr[j];
//         count++;
//       }
//       console.log(arr.join("-"));
//     }
//   }
//   return count;
// }
// console.log(minimumSwaps(arr));








// var x = "ab ghff fdf dfdf fdfd fdfddjjh hggh"
// let arr = x.replace(/\s/g, '').split('')
// let temp = []
// let mainAr = []
// function ArrayTemp(arr, num) {
//    for(i=0;i<num;i++){
//      temp.push(arr[i])
//    }
//   mainAr.push(temp)
//   temp = []
//  let demo = arr.slice(num,arr.length)
//   if(demo.length > 0){
//     ArrayTemp(demo,num)
//   }
// }
// ArrayTemp(arr, 2)
// console.log(mainAr)


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function chunks(arr, num) {
//   var temp = [];
//   for (let i = 0; i < arr.length; i) {
//     var chunk = [];
//     do {
//       chunk.push(arr[i]);
//       i++;
//     } while (i % num !== 0 && i < arr.length);
//     temp.push(chunk);
//   }
//   return temp;
// }
// let output = chunks(arr, 2);
// console.log(output);

// var chunck = []
// var i = 0
// while (i < x.length) {
//   var temp = []
//   do {
//     if (x[i] != " ") {
//       temp.push(x[i])
//     }
//     i++
//   } while (temp.length < 2 && i < x.length)
//   chunck.push(temp)
//   temp = []
// }
// console.log(chunck)








//  var x = "aaaaabbbbbbbccdddeff"
// var count =0 
// var i = 0
// var previous = ""
// while(i < x.length)
//     {
//       if(x[i] == x[i+1] && previous != x[i])
//         count++
//       previous = x[i]
//       i++
//     }
//     console.log(count)




// find largest sum of consegutive numbers 
// let arr = [-2,1,3,4,-1,2,3,-5]
// let temp = 0
// let per = 0
// for(i=0;i<arr.length;i++){
//   temp += arr[i]
//   if(temp > per){
//     per = temp
//   }
//   if(temp < 0){
//     temp = 0
//   }
// }
// console.log(per)




// let array = [14, 15, 17, 16, 18, 19, 20, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6, 7, 8]
// function Sort(arr) {
//   if (arr.length < 2) return arr;
//   let first = arr[0]
//   let left = []
//   let right = []
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] < first) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   console.log(left,right)
//   return [...Sort(left), first, ...Sort(right)]
// }
// let out = Sort(array)
// console.log(out)



// merge sort 
// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr
//   }
//   const mid = Math.floor(arr.length / 2)
//   const arrleft = arr.slice(0, mid)
//   const arrRight = arr.slice(mid)
//   return merge(mergeSort(arrleft), mergeSort(arrRight))
// }
// function merge(leftarr, rightarr) {
//   const sortedArr = []
//   while (leftarr.length && rightarr.length) {
//     if (leftarr[0] <= rightarr[0]) {
//       sortedArr.push(leftarr.shift())
//     } else {
//       sortedArr.push(rightarr.shift())
//     }
//   }
//   return [...sortedArr,...leftarr,...rightarr]
// }
// console.log(mergeSort([5, 4, 7, 8, -2, -7, 0]))



// let str2 = "this is a very important question";
// let count2 = 1
// function capitalCount(str,count){
//   let strMain = str.split(' ')
//   let outer = []
//   for(i=0;i<strMain.length;i++){
//     let temp = []
//     let first = strMain[i].split('')
//     for(j=0;j<first.length;j++){
//       if(j == count - 1){
//         temp.push(first[j].toUpperCase())
//       } else {
//         temp.push(first[j])
//       }
//     }
//     outer.push(temp.join(''))
//   }
//   return outer.join(' ')

// }
// console.log(capitalCount(str2,count2))



// let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

// function test(str){
//   let main = str.replace(/[^A-Z0-9]+/ig,'').split('')
//   let obj = {}
//   for(i=0;i<main.length;i++){
//     let lower = main[i].toLowerCase()
//     obj[lower] = (obj[lower] || 0) + 1
//   }
//   console.log(obj)
// }
// test(str)


// leetecode ------
// let nums = [4,5,6,7,0,1,2], target = 0 
// let temp = []
// let count = 0
// function test(nums,target){
//   while(count !== nums.length){
//     if(nums[count] == target){
//       break;
//     }
//     count++
//   }
//   if(count == 0 && nums[0] == target){
//     return 0
//   } else {
//     return -1
//   }
// }
// console.log(test(nums,target))


// leetecode permutations of array------
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


// first approach ----
// let nums = [1, 2, 3]
// function Permutation(arr, premutation = [], answer = []) {
//   if (arr.length == 0) {
//     answer.push([...premutation])
//   console.log(arr,premutation,"if")
//   }
//   for (let i = 0; i < arr.length; i++) {
//      console.log(arr,premutation)
//     premutation.push(arr[i])
//     const choice = arr.filter((res, index) => index !== i)
//     Permutation(choice, premutation, answer)
//     premutation.pop()
//   }
//   return answer
// }
// Permutation(nums)

// second approach ----
// let nums = [1, 2, 3]
// function Permutation(nums) {
//   const result = []
//   const dfs = (i, nums) => {
//     if (i === nums.length) {
//       result.push(nums.slice())
//       return
//     }
//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       dfs(i + 1, nums)
//     }
//   }
//   dfs(0, nums)
//   return result
// }
// console.log(Permutation(nums))


// subset leetecode -- 
// let nums = [1, 2, 3]
// function Subset(arr) {
//   let result = [[]]
//   for (i = 0; i < arr.length; i++) {
//     result.push([arr[i]])
//     // arr.unshift()
//     // result.push([...left])
//   }
//   return result
// }
// console.log(Subset(nums))

// let nums = [1, 2, 3]
// var permute = function (nums, output = [], answer = []) {
//   if (!nums.length) {
//     answer.push([...output]);
//     return;
//   }
//   console.log(nums,output)
//   for (let i = 0; i < nums.length; i++) {
//     const newNums = nums.filter((n, index) => index !== i);
//     output.push(nums[i]);
//     permute(newNums, output, answer);
//     output.pop();
//   }
//   return answer;
// };
// console.log(permute(nums))



// function LongestSubstring(str) {
//   let s = str.split("");
//   let left = 0;
//   let right = 0;
//   let max = 0;
//   let obj = new Set();
//   while (right !== s.length) {
//     console.log(obj)
//     if (!obj.has(s[right])) {
//       obj.add(s[right]);
//       max = Math.max(max, obj.size);
//       right++;
//     } else {
//       obj.delete(s[left]);
//       left++;
//     }
//   }
//   return max;
// }
// console.log(LongestSubstring("abcbbcbb"));

// function generate(n) {
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
// };
// console.log(generate(5))

// let nums = [1, 2, 3]
// let temp = []
// function Test(nums,j){
//   for (i = 0; i < nums.length; i++) {
//   let newNum = nums.filter((res, index) => index !== i)
//   temp.push([nums[i], ...newNum])
//     Test(nums,i+1)
//   // Swap([nums[i], ...newNum])
//   // temp.push([nums[i], ...swap])
// }
// }

// function Swap(arr) {
//   for(i=1;i<arr.length;i++){
//     [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
//     temp.push(arr)
//   }
// }
// console.log(temp)





// let nums = [1, 2, 3]
// function Test(nums){
//   let temp = []
// for (i = 0; i < nums.length; i++) {
//   let newNum = nums.filter((res, index) => index !== i)
//   let pop = [nums[i], ...newNum]
//   temp.push(pop)
// }
//   return temp
// }
// console.log(Test(nums))

// function Swap(arr) {
// let mainArr = []
// for(i=1;i<arr.length;i++){
//   [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
//   console.log(arr,"all")
// mainArr.push(arr)
// [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
// }
// return mainArr
// }
// console.log(temp)





// let arr = [1,2,3]
// function Permutation(nums){
//   let result = []
//   const walk = (temp,rest) => {
//     if(rest.length === 0){
//       result.push(temp)
//       return
//     }
//     for(i=0;i<rest.length;i++){
//       const newRest = rest.slice(0)
//       newRest.splice(i,1)
//       walk(temp.concat(rest[i]),newRest)
//     }
//   }
//   walk([],nums)
//   return result
// }
// console.log(Permutation(arr))



// nums1 = [1, 5, 6, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// let left = m - 1
// let right = n - 1
// let end = (m + n) - 1
// while (right >= 0) {
// console.log(nums1[left] , nums2[right])
//   if (nums1[left] > nums2[right]) {
//     nums1[end] = nums1[left]
//     left--
//     end--
//   } else {
//     nums1[end] = nums2[right]
//     right--
//     end--
//   }
// }
// console.log(nums1)


// function Test(str){
//   let temp = str.toString().split('')
//   let right = temp.length-1;
//   let left = 0;
//   while(right !== Math.floor(temp.length/2)){
//     [temp[left],temp[right]] = [temp[right],temp[left]]
//     left++
//     right--
//   }
//   return temp
//   // console.log(str.toString().split(''))
// }
// console.log(Test(-123))
// let x = -121
// let temp = x.toString().split('')
// let right = temp.length - 1
// let left = 0
// let maistr = x
// while (right !== Math.floor(temp.length / 2)) {
//  [temp[left],temp[right]] = [temp[right],temp[left]]
//   left++
//   right--
// }
// if (maistr == x) {
//   return true
// } else {
//   return false
// }

// function Armstrong(x) {
//   let left = 0;
//   let temp = 0
//   let pop = x.toString().split('')
//   while (left !== pop.length) {
//     if (pop[left] == 1) {
//       temp += 1
//     } else if (pop[left] == 0) {
//       temp += 0
//     } else {
//          // power(pop[left],pop.length)
//     }
//     left++
//   }
//   return temp
// }



// largest-subarray-with-0-sum
// function SumZero(arr) {
//   let left = 0
//   let right = 1
//   let sum = arr[0]
//   let temp = []
//   let length = 0
//   while (right !== arr.length) {
//     let target = sum + arr[right]
//     if (target == 0) {
//       length = Math.max(length,left - right)
//       right++
//     } else if (target > sum) {
//       sum = sum - arr[left]
//       right++
//       left++
//     } else {
//       sum = target
//       length++
//       right++
//     }
//   }
//   return length
// }
// console.log(SumZero([15, -2, 2, -8, 1, 7, 10, 23]))


// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let sum = 0
// let start = 0
// let max = arr[0]
// let nums = []
// while (start !== arr.length) {
//   sum += arr[start]
//   nums.push(arr[start])
//   if (sum > max) {
//     max = sum
//     console.log(start)
//   } else if (sum < 0) {
//     nums = []
//     sum = 0
//   }
//   start++
// }
// console.log(nums)

// var maxSub = function(nums, size) {

//   // let maxTotal = 0;
//   let subArrLength = 0;
//   let tempSubArrLength = 0;
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // console.log("total: ", total, " nums[i]: ", nums[i], " subArrLength: ", subArrLength)
//     total += nums[i];
//     tempSubArrLength++
//     if (total === 0 && tempSubArrLength > subArrLength) {
//       subArrLength = tempSubArrLength;
//       // tempSubArrLength = 0;
//     } else if (total > nums[i + 1] + nums[i + 2]) {

//       tempSubArrLength = 1;
//       total = nums[i];
//     }
//     // console.log("total: ", total, " nums[i]: ", nums[i], " subArrLength: ", subArrLength, " tempSubArrLength: ", tempSubArrLength)
//   }
//   return subArrLength;
// };


// let nums = [15, -2, 2, -8, 1, 7, 10, 23]

// console.log(maxSub(nums))



// Second Largest in array with O(n)
// function SecondLargest(arr) {
//   let max = 0
//   let secondMax = 0
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max
//       max = arr[i]

//     } else if (arr[i] > secondMax && arr[i] !== max) {
//       secondMax = arr[i]
//     }
//   }
//   return secondMax

// }
// console.log(SecondLargest([2, 35, 1, 10, 1, 34]))



// Check if Array Is Sorted and Rotated
// let arr = [2,1]
// function ArrayIsSortedandRotated(nums){
//     let count = 0;
//     const len = nums.length - 1;
//     for(let i = 0; i < len; i++){
//         if(nums[i] > nums[i+1]) count++;
//     }
//     if(count > 1 || (count == 1 && nums[0] < nums[len])) return false;
//     return true;
// }
// console.log(ArrayIsSortedandRotated(arr))


// Rotate Array
// function RotateArray(nums,k){
// let timesOfRotation = k % nums.length;
//   console.log(nums.splice(timesOfRotation))
//     nums.unshift(...nums.splice(-timesOfRotation));
//     return nums;
// }
// console.log(RotateArray([-1,-100,3,99],2))

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

// Two Sum
// vfunction twoSum(nums, target) {
//       let hash = {}
//     for (var i = 0; i < nums.length; i++) {
//     let diff = target - nums[i]
//     if (hash[diff] !== undefined) {
//         return [hash[diff], i];
//       }
//       hash[nums[i]] = i;
//     }
// }; 
// console.log(twoSun([2,7,11,15],9))

// Sort Colors
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

// binary search
// let nums = [-1,0,3,5,9,12], target = 9
// function BinarySearch(nums,target){
//   let left = 0;
//   let right = nums.length - 1
//   while (left <= right){
//     let mid = left + Math.floor((right - left) / 2);
//    if(nums[mid] === target){
//      return mid
//    } else if (nums[mid] < target){
//        left = mid + 1
//    } else {
//       right = mid - 1
//    }
//   }
//   return -1
// }
// console.log(BinarySearch(nums,target))


// Search Insert Position
// let nums = [1,3,5,6], target = 5
// function SearchInsertion(nums,target){
//     let left = 0;
//   let right = nums.length - 1
//   let index;
//   while (left <= right){
//     let mid = left + Math.floor((right - left) / 2);
//     nums[mid] >= target ? index = mid : ""
//     nums[mid] <= target ? index = mid + 1 : ""
//    if(nums[mid] === target){
//      return mid
//    } else if (nums[mid] < target){
//        left = mid + 1
//    } else {
//       right = mid - 1
//    }
//   }
//   return index
// }
// console.log(SearchInsertion(nums,target))



// Find First and Last Position of Element in Sorted Array
// let nums = [5, 7, 7, 8, 8, 10], target = 8
// function SearchFirstandLast(nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let first = null;
//   let last = null;
//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2)
//     if (first !== null) {
//       if (nums[left] == target) {
//         first = left
//         left--
//       } else if (nums[right] == target) {
//         last = right
//         right++
//       } else if (nums[right] !== target && nums[left] !== target) {
//         break;
//       }
//     } else {
//       if (nums[mid] == target) {
//         first = mid
//         left = mid
//         right = mid
//       } else if (nums[mid] > target) {
//         right = mid - 1
//       } else {
//         left = mid + 1
//       }
//     }
//   }
//   if (first == null && last == null) {
//     return [-1, -1]
//   } else {
//     return [first, last]
//   }
// }
// console.log(SearchFirstandLast(nums, target))


// Search a 2D Matrix
// let nums = [[1,3]], target = 3
// function Matrix(arr, target) {
//   if (arr[0].length > 1) {
//     let temp = Helper(arr, target)
//     if (temp.length > 1) {
//       for (i = 0; i < temp.length; i++) {
//         if (temp[i] == target) {
//           return true
//         }
//       }
//     } else {
//       return temp[0] == target
//     }
//   } else {
//     return arr[0][0] == target
//   }

//   return false
// }
// function Helper(arr, target) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i][0] <= target) {
//       return arr[i]
//     }
//   }
// }
// console.log(Matrix(nums, target))



// Remove Outermost Parentheses
// let  s = "(()())(())(()(()))"
// function RemoveOuterMost(str){
//   let s = str.split('')
//   let temp = []
//    for(i=0;i<s.length;){
//      if(s[i] == "(" && s[i+1] == ")"){
//        temp.push(s[i],s[i+1])
//        i = i + 2
//      } else if (s[i] == "(" && s[i+1] == "("){
//        i++
//      } else {
//        i++
//      }
//    }
// return temp.join('')
// }
// console.log(RemoveOuterMost(s))

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;

//   }
// }
// class LinkedList {
//   constructor() {
//     this.root = null;
//     this.size = 0
//     this.tail = null
//   }
//   append(value) {
//     let newNode = new Node(value)
//     if (this.isEmpty()) {
//       this.root = newNode;
//       this.tail = newNode
//       this.size++
//     } else {
//       let curr = this.root
//       while (curr.next !== null) {
//         curr = curr.next
//       }
//       curr.next = newNode
//       this.size++
//       this.tail = newNode
//     }
//   }
//   isEmpty() {
//     return this.size == 0
//   }
// }
// let temp = new LinkedList()
// temp.append(20)
// temp.append(30)
// temp.append(50)
// temp.append(60)
// console.log(temp)


// Sort Characters By Frequency
// function SortByFrequency(str) {
//   let obj = {}
//   for (i = 0; i < str.length; i++) {
//     obj[str[i]] = (obj[str[i]] || 0) + 1
//   }
//   let temp = Object.entries(obj).sort((a, b) => {
//     return b[1] - a[1]
//   })
//   let result = ""
//   for (let i = 0; i < temp.length; i++) {
//     let count = 0
//     while (count !== temp[i][1]) {
//       result += temp[i][0]
//       count++
//     }
//     count = 0
//   }
//   return result
// }
// console.log(SortByFrequency("treee"))

// array of subsesquence Subset - 1 
// let nums = [3,1,2]
// function Subsequence(arr){
//   let n = arr.length
//   let output = []
//   function fun(index,temp = [],output){
//     if(index >= n){
//      return output.push([...temp])
//     }
//     temp.push(arr[index])
//     fun(index+1,temp,output)
//     temp.pop(arr[index])
//     fun(index + 1,temp,output)
//   }
//   fun(0,[],output)
//   return output 
// }
// console.log(Subsequence(nums))


//Combiation Sum 1
// let candidates = [2, 3, 6, 7], target = 6
// function Combination(arr, target) {
//   let output = []
//   function Recursion(index, temp = [], sum, output) {
//       if(index == arr.length){
//         if(sum == target){
//            console.log(temp,"temp")
//         }
//         return
//       }
//     temp.push(arr[index])
//     sum += arr[index]
//     Recursion(index + 1,temp,sum,output)
//     sum -= arr[index]
//     temp.pop(arr[index])
//     Recursion(index + 1,temp,sum,output)
//       // sum = sum + arr[index]
//       // if(sum > target){
//       //    temp.pop(arr[index])
//       //    sum = sum - arr[index]
//       //    Recursion(index + 1,temp,sum,output)
//       // } else if (sum == target){
//       //   temp.push(arr[index])
//       //   output.push([...temp])
//       //   temp.pop(arr[index])
//       //   sum = sum - arr[index]
//       //   Recursion(index + 1,temp,sum,output)
//       // } else if (sum < target){
//       //   temp.push(arr[index])
//       //   Recursion(index,temp,sum,output)
//       // }   
//   }
//   console.log(Recursion(0, [], 0, output))
//   console.log(output)
// }
// console.log(Combination(candidates, target))


// combination Sum
// let candidates = [2, 3, 6, 7], target = 6
// function CombinationSum(arr, target) {
//   let output = []
//   const recursion = (index, sum, temp = [], output) => {
//     if (index === arr.length) {
//       if (target == sum) {
//         output.push([...temp])
//       }
//       return
//     }
//     temp.push(arr[index])
//     sum += arr[index]
//     recursion(index + 1, sum, temp, output)
//     sum -= arr[index]
//     temp.pop(arr[index])
//     recursion(index + 1, sum, temp, output)
//   }
//   console.log(recursion(0, target, [], output))
// }
// console.log(CombinationSum(candidates, target))



// let arr = [0,1,2,1,1,0,2,1,0];
// let left = 0
// let right = arr.length - 1

// while(left !== arr.length - 1){
//   console.log('working')
//  if(arr[left] > arr[right]){
//    [arr[left],arr[right]] = [arr[right],arr[left]]
//    left++
//    right--
//  } else if (arr[right] > arr[left]){
//    [arr[right],arr[left]] = [arr[left],arr[right]]
//    left++
//    right--
//  }
//   if(left == arr.length -1) {
//     return
//   }
// }
// console.log(arr)



// let arr =[1,2,3,4,5,6,7,8,9,10]
// let temp = 3
// let mainArr = []
// function Convert (arr,temp){
//   let left = 0
//   let right = temp
//   for(let i =0;i < Math.round(arr.length / temp)  ;i++){
//       mainArr.push(arr.slice(left,right))
//     if(i != (Math.round(arr.length / temp)) - 1 && arr.length > right + temp){
//         left = left + temp
//         right = right + temp
//     }  
//   }
//    mainArr.push(arr.slice(right,arr.length))
// }
// Convert(arr,temp)
// console.log(mainArr)



// 1. hollow square

// *****
// *   *
// *   *
// *   *
// *****
  
let str = ''
let n = 5
// for(let i = 0 ; i<5;i++){
//   if(i == 0){
//      for(let j =0 ; j<5;j++){
//   str += '*'
//   } 
//   } else if (i == 4){
//      for(let j =0 ; j<5;j++){
//   str += '*'
//   } 
//   } else {
//      for(let k =0 ; k<5;k++){
//        if(k == 0){
//          str += '*'
//        } else if (k == 4){
//           str += '*'
//        } else {
//           str += ' '
//        }
//   } 
//   }
//   str += '\n'    
// }
// console.log(str)

// for(let i = 0 ;i<n;i++){
//   for(let j=0;j<n;j++){
//     if(i == 0 || i == n-1){
//       str += '*'
//     } else {
//        if(j == 0 || j == n - 1){
//          str += '*'
//        } else {
//          str += ' '
//        }
//     }
//   }
//  str+= '\n'
// }
// console.log(str)


// 2. Right Triangle
//     *
//    **
//   ***
//  ****
// *****

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     str += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str)

// 3. left Triangle
// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= n; i++) {
//     for (let k = 0; k < i; k++) {
//     str += "*";
//   }
//   for (let j = 0; j < n - i; j++) {
//     str += " ";
//   }
//   str += "\n";
// }
// console.log(str)

// 3. Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     str += "*";
//   }
//     for (let k = 0; k < i; k++) {
//     str += " ";
//   }
//   str += "\n";
// }
// console.log(str)

// 4. Pyramid Triangle
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     str += "*";
//   }
//     for (let k = 0; k < i; k++) {
//     str += " ";
//   }
//   str += "\n";
// }
// console.log(str)