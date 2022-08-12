// Two Number Add

// let nums = [2, 7, 11, 15];
// let target = 18;
// let hash = {};
// for (var i = 0; i < nums.length; i++) {
//     let diff = target - nums[i]
//     if (hash[diff] !== undefined) {
//         return [hash[diff], i];
//       }
//       hash[nums[i]] = i;
// }

// Palndrome Number

// let x = 123;
// let update = x.toString().split('')
// let arr = []
// for (i = update.length -1; i >= 0; i--) {
//   arr.push(update[i])
// }
// if(arr.join('') == update.join('')){
//     console.log(true)
// } else {
//     console.log(false)
// }

// lonest Prefix

// let strs = ["flower", "flow", "flight"];
// for (i = 0; i < strs[0].length; i++) {
//   for (j = 1; j < strs.length; j++) {
//     if (strs[0][i] !== strs[j][i]) {
//      return strs[0].slice(0, i)
//     }
//   }
//   return strs[0]
// }

// Duplicate
// let nums = [2,1,3,1]
// let temp = 0
// for(i=0;i<nums.length;i++){
//     if(nums[temp] == nums[i+1]){
//         console.log(nums[temp], nums[i+1])

//     }
// }

// loop recursion

// const func = (e) => {
//   let temp;
//   if (e == 5) {
//     return;
//   }
//   temp = e + 1;
//   console.log(temp, "temp");
//   func(temp);
// };
// func(0);

// polyfill for map function

// Array.prototype.myMap = function (callback) {
//   let temp = [];
//   for (i = 0; i < this.length; i++) {
//     temp.push(callback(this[i],i,this))
//   }
//   return temp
// };
// let array = [1, 2, 3, 4, 5, 6, 7];
// let updated = array.myMap((r,i) => r*2)

// polyfill for filter function

// Array.prototype.myMap = function (callback) {
//   let temp = [];
//   for (i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };
// let array = [1, 2, 3, 4, 5, 6, 7];
// let updated = array.myMap((r) => {
//   return r > 2;
// });

// polyfill for find function
// Array.prototype.myMap = function (callback) {
//   let temp = [];
//   for (i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       temp.push(this[i]);
//     } else if (temp == undefined) {
//       temp = []
//     }
//   }
//   return temp;
// };
// let array = [1, 2, 3, 4, 5, 6, 7];
// let updated = array.myMap((r) => {
//   return r == 8;
// });

// polyfill for reduce function

// Array.prototype.myMap = function (callback, val) {
//   let temp = val;
//   for (i = 0; i < this.length; i++) {
//     temp += this[i];
//   }
//   return temp;
// };
// let array = [1, 2, 3, 4, -5];
// let updated = array.myMap((r, i) => {
//   return r + i;
// }, 0);

// leetcode ----------------------------
// let nums = [-4, -1, 0, 3, 10];
// var updated = [];
// const func = (arr) => {
//   let index = 0;
//   if (0 == arr) {
//     return;
//   }
//   index = arr - 1;
//   updated.push(nums[index] * nums[index]);
//   func(index);
// };
// func(nums.length);

// leetcode ----------------------------
// var nums = [-1,-100,3,99], k = 2
// for (i = 1; i < k + 1; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
// }

// leetecode ---------------------------
// let nums = [0, 1, 0, 3, 12];
// if (nums.length === 0) {
//   console.log(nums);
// } else {
//   const func = (e) => {
//     let count = 1;
//     let index;
//     if (e == nums.length) {
//       return;
//     }
//     if (nums[e] == 0) {
//       nums.splice(e, 1);
//       count = count + 1;
//       nums.push(0);
//     }
//     index = e + 1;
//     func(index);
//   };
//   func(0);
// }
//   for (i = 0; i < nums.length; i++) {
//     let count = 1;
//     if (nums[i] == 0) {
//       nums.splice(i, 1);
//       count = count + 1;
//       nums.push(0);
//     }
//   }

// Leetecode -----------------------
// let numbers = [0, 0, 4, 5];
// target = 0;
// let update = [];
// const func = (e, temp) => {
//   let pot;
//   let pointer;
//   if (temp == numbers.length) {
//     return;
//   }
//   if (temp !== e) {
//     if (numbers[temp] + numbers[e] == target) {
//       update = [temp + 1, e + 1];
//       return;
//     }
//   }
//   if (e == numbers.length) {
//     pointer = 0;
//     pot = temp + 1;
//     func(pointer, pot);
//   }
//   if (e !== numbers.length) {
//     pointer = e + 1;
//     func(pointer, temp);
//   }
// };
// func(0, 0);
// console.log(update);

// LeeteCode -----------------
// let head = [1, 2, 3, 4, 5,6];
// if (head.length % 2 == 0) {
//   let updated = head.length / 2;
//   console.log(head.slice(updated, head.length + 1));
// } else {
//     let updated = (head.length - 1) / 2;
//     console.log(head.slice(updated, head.length + 1));
// }

// leetecode -----------------
// let s = "Let's take LeetCode contest"
// let udpated = s.split(" ")
// let latest = []
// for(i=0;i<udpated.length;i++){
//     latest.push(udpated[i].split("").reverse().join(""))
// }
// console.log(latest.join(" "))

// Leetcode --------------
// let head = [1,2,3,4,5], n = 2
// let updated = head.indexOf(head[n])
// console.log(head.splice(updated+1,1))
// console.log(head)

// Leetcode ----------------------
// let s = ")[]";
// s.split("");
// let count = 0;
// for (i = 0; i < s.length; i++) {
//   if (s[i] == "(" && s[i + 1] == ")") {
//     count = count + 1;
//   } else if (s[i] == "[" && s[i + 1] == "]") {
//     count = count + 1;
//   } else if (s[i] == "{" && s[i + 1] == "}") {
//     count = count + 1;
//   }
// }
// if (count == 1 && s.length == 2) {
// //   return true;
//   console.log(true)
// } else if (count == 2 && s.length == 4) {
// //   return true;
// console.log(true)
// } else if (count == 3 && s.length == 6) {
// //   return true;
// console.log(true)
// } else {
//     console.log(false)
// }

// leetecode -----------------
// let digits = [7,7,9]
// let overflow = 0;
// let initialIncrement = 1;
// for(let i = digits.length - 1; i >= 0; i--){
//     digits[i] = digits[i] + overflow + initialIncrement;
//     overflow = 0;
//     initialIncrement = 0;
//     if(digits[i] > 9){
//         let currentOverflow = digits[i].toString().split('');
//         digits[i] = parseInt(currentOverflow.pop());
//         overflow = parseInt(currentOverflow[0]);
//     }
// }
// if(overflow){
//     digits.unshift(overflow);
// }

// leetcode --------------------
// let nums = [2,14,18,28,22]
// nums.sort()
// let updated;
// for(i=0;i<nums.length -1;i++){
//     if(nums[i] == nums[i+1]){
//       updated = true
//       break;
//     }
// }
// if(updated == undefined){
//     return false
// } else {
//     return updated
// }

// leetecode -------------------
// let s = "abcabcbb";
// s.split("");
// let temp = [];
// for (i = 0; i < s.length - 1; i++) {
//   if(s[0] !== s[i + 1]){
//     temp.push(s[0],s[i+1])
//   }
// }

// console.log(temp,'temp')

// binary searching ----------

// let nums = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// val = 19;
// const binarySearch = (arr, index) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const midVal = arr[mid];
//     if (midVal === index) {
//       return mid;
//     } else if (midVal < index) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };
// console.log(binarySearch(nums, val));

// string pattern search ------------
// const stringFunction = (string, pattern) => {
//   let count = 0;
//   for (i = 0; i < string.length; i++) {
//     for (j = 0; j < pattern.length; j++) {
//         const patternChar = pattern[j]
//         if(patternChar !== string[i+j]){
//             break;
//         }
//         if(j === pattern.length - 1){
//             count++
//         }
//     }
//   }
//   return count
// };
// console.log(stringFunction("lollop", "lol"));

// bubble sort -----------
// let nums = [2, 4, 6, 2, 66, 99, 10, 3, 2, 76, 32, 1, 27, 84, 0];
// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function bubblesort(arr) {
//   for (j = 0; j < arr.length; j++) {
//     for (i = 0; i < arr.length - i; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubblesort(nums));

// selection sort --------------------
// let nums = [2, 4, 6, 2, 66, 99, 10, 3, 2, 76, 32, 1, 27, 84, 0];
// function selectionSort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let swapId = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[swapId]) {
//         swapId = j;
//       }
//     }
//     swap(arr, i, swapId);
//   }
//   return arr;
// }
// console.log(selectionSort(nums));

// merge sort ---------------------

// function merger (arr1,arr2){
//    let p1 =0;
//    let p2 = 0;
//    let res = []
//    while(p1 < arr1.length && pr <arr2.length){
//     if(s)
//    }
// }

// leetecode--------------------
// let s = "10101";
// function check (arr){
//   let count = 0;
//   for(i=0;i<arr.length;i++){
//     for(j=0;j< arr.length;j++){
//       if(arr[i] == arr[i+j]){
//         count++
//         break;
//       }
//     }
//   }
// console.log(count,"count")
// }
// console.log(check(s.split("")))

// max and min ------
// let num = [12, 3, 5, 7, 11, 2, 56, 99, 2, 34, 75, 98, 4, 32, 12]
// function Find(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for(j=1;j<nums.length - 1;j++)
//      if(nums[i] > nums[j]){
//       console.log(nums[i])
//      }
//   }
// }
// console.log(Find(num))

// leete code ------------
// let nums = [1, 2, 1, 2, 4];
// const Func = (nums) => {
//   nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
//   }
// }
// console.log(Func(nums))

// leetecode ---------
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// function Func(nums1,m,nums2,n){
//   let updated1 = nums1.slice(0,m)
//   let updated2 = nums2.slice(0,n)
//   return updated1.concat(updated2).sort()
// }
// console.log(Func(nums1,m,nums2,n))

// leetecode --------------
// let haystack = "hello", needle = "ll"
// function Func(haystack,needle){
//   if(needle.length == 0){
//     return 0
//   }
//   if( haystack.includes(needle)){
//    return haystack.indexOf(needle)
//   } else {
//     return -1
//   }
// }
// console.log(Func(haystack,needle))

// leetecode -------------
// let a = "11", b = "1"
// let Ua = a.split("");
// let Ub = b.split("");
// let updated = [];
// let carry = 0;
// for (i = Ua.length - 1; i >= 0; i--) {
//   if (Ua[i] == 0 && Ub[i] == 1) {
//     updated.push(1 + carry);
//     carry = 0
//   } else if (Ua[i] == 0 && Ub[i] == 0) {
//     updated.push(0 + carry);
//     carry = 0
//   } else if (Ua[i] == 1 && Ub[i] == 0){
//     updated.push(1 + carry);
//     carry = 0
//   }else if(Ua[i] == 1 && Ub[i] == 1) {
//     updated.push(0 + carry);
//     carry = 1
//   }
// }
// if(carry == 1){
//   updated.reverse()
//   updated.unshift(carry)
// }
// console.log(updated)

// bubble sort
// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// function bubbleSort(arr){
//      for(i=0;i<arr.length;i++){
//       for(j=i;j<arr.length;j++){
//           if(arr[i] > arr[j]){
//             swap(arr,i,j)
//           }
//       }
//      }
//     return arr
// }
// console.log(bubbleSort([1,3,1,88,564,12,545,78,22,1,56,43,7,8,2,10,32,2]))

// selection sort
// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// function selectionSort(arr){
//      for(i=0;i<arr.length;i++){
//       let updated = i;
//       for(j=i+1;j<arr.length;j++){
//           if(arr[j] < arr[updated]){
//           updated = j
//           }
//       }
//      swap(arr,i,updated)
//      }
//     return arr
// }
// console.log(selectionSort([1,3,1,88,564,12,545,78,22,1,56,43,7,8,2,10,32,2]))

// DSA 1.
// reverse array
// let arr = [ 3, 4, 5, 21, 222,2, 22, 55, 3, 6, 8, 10];
// with new array
// function reverse(nums) {
//   let updated = [];
//   for (i = nums.length - 1; i >= 0; i--) {
//     updated.push(nums[i]);
//   }
//   return updated;
// }
// console.log(reverse(arr));

// update intial array
// function reverse(nums) {
//     let start = 0
//     let end = nums.length -1
//     while(start < end){
//       let temp = nums[start]
//       nums[start] = nums[end]
//       nums[end] = temp
//       start++
//       end--
//     }
//     return nums
// }
// console.log(reverse(arr));

// DSA 2.
// find max and min element in an array
// --- use bubble sort and after get first and last index of sorted array
// function FindMaxandMin(nums) {
//   let max = 0;
//   let min = 0;
//   let updated
//   for (i = 1; i < nums.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i]
//     }
//     if(nums[min] > nums[i]) {
//       updated = nums[i]
//     }
//   }
//   return max
//   return min
// }
// console.log(FindMaxandMin(arr));

// DSA 3.
// move negative number to one side and positve to another
// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// function moveNegative(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i; j < nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }
//   return nums;
// }
// console.log(moveNegative(arr));

// DSA 4.
// function Func(arr,count){
//   let temp=0
//     for(i=0;i<arr.length;i++){
//       for(j=i;j<arr.length;j++){
//         if(arr[i] + arr[j] == count){
//           temp = temp + 1
//           // console.log(arr[i],arr[j])
//         }
//       }
//     }
//     return temp
// }
// console.log(Func([1,1,1,1],2))

// Leetecode ----
// let arr = [3,2,3];
// function Func(nums) {
//   let s = 0; // Location of first possible suspect
//   for (let i = s + 1; i < nums.length; i++) {
//       if (nums[i] == nums[s]) { // If we found a duplicate
//           nums.splice(i, 1); // Remove duplicate so it won't confuse us next time we come across it
//           s++; // Next suspect's location
//           i = s; // Start of next search (i=s+1 in next loop iteration)
//       }
//   }
//   return nums[s];
// };
// console.log(Func(arr));

// leetecode -----
// let nums = [-1,0,1,2,-1,-4]
// function Func(arr) {
//   arr.sort()
//   let updated = [];
//   for (i = 0; i < arr.length; i++) {
//     if(i > 0 && arr[i] == arr[i-1]) continue
//     for (j = i + 1; j < arr.length; j++) {
//       if(j > j+1 && arr[j] == arr[j-1]) continue
//       for (k = j + 1; k < arr.length; k++) {
//         if(k > j+1 && arr[k] == arr[k-1]) continue
//         if (arr[i] + arr[j] + arr[k] == 0) {
//             updated.push([arr[i], arr[j], arr[k]]);

//         }
//       }
//     }
//   }
//   if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
//     return [[0, 0, 0]]
//   } else {
//     return updated;
//   }
// }
// console.log(Func(nums));

// leetecode -----
// let s = "abcabcbb";
// function Probelm(arr) {
//   let temp = []
//   for (i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       temp.push(arr[i], arr[i + 1])
//     }
//   }
//   return temp
// }
// console.log(Probelm(s.split('')))

// ===============All star pattern ===============

// ****
// ***
// **
// *

// function Func() {
//   let str = ""
//   for (i = 0; i < 5; i++) {
//     for (j = i; j < 5; j++) {
//       str += "*"
//     }
//     str += "\n"
//   }
//   return str
// }
// console.log(Func())

// *
// **
// ***
// ****
// *****
// function Func() {
//   let str = ""
//   for (i = 1; i < 5; i++) {
//     for (j = 1; j <= i; j++) {
//       str += "*"
//     }
//     str += "\n"
//   }
//   return str
// }
// console.log(Func())

//     *
//    **
//   ***
//  ****
// *****
// function Func() {
//   let str = ""
//   for (i = 1; i <= 5; i++) {
//     for (j = 0; j < 5 - i; j++) {
//       str += " "
//     }
//     for (k = 0; k < i; k++) {
//       str += "*"
//     }
//     str += "\n"
//   }
//   return str
// }
// console.log(Func())

//    *
//   ***
//  ******
// ********
// function Func() {
//   let str = ""
//   let n = 1
//   for (i = 1; i <= 5; i++) {
//     for (j = 0; j < 5 - i; j++) {
//       str += " "
//     }
//     for (k = 0; k < n; k++) {
//       str += "*"
//     }
//     for (j = 0; j < 5 - i; j++) {
//       str += ""
//     }
//     n = n + 2
//     str += "\n"
//   }
//   return str
// }
// console.log(Func())


// ********
//  ******
//   ***
//    *
// function Func() {
//   let str = ""
//   let n = 9
//   for (i = 1; i <= 5; i++) {
//     for (j = 1; j < i; j++) {
//       str += " "
//     }
//     for (k = 0; k < n; k++) {
//       str += "*"
//     }
//     for (j = 1; j < i; j++) {
//       str += ""
//     }
//     n = n - 2
//     str += "\n"
//   }
//   return str
// }
// console.log(Func())


// leetecode -----------
// let a = "1010", b = "101"
// function Func(a1, b1) {
//   let a1 = a.split('')
//   let b1 = b.split('')
//   let temp = []
//   a1.reverse()
//   b1.reverse()
//   let carry = 0
//   if (a1.length == b1.length) {
//     updated = a1.length
//   } else {
//     updated = a1.length > b1.length ? a1.length : b1.length
//   }
//   for (i = 0; i < updated; i++) {
//     let second = b1[i] == undefined ? 0 : Number(b1[i])
//     let first = a1[i] == undefined ? 0 : Number(a1[i])
//     if (first + second + Number(carry) == 0) {
//       temp.push(0)
//       carry = 0
//     } else if (first + second + Number(carry) == 1) {
//       temp.push(1)
//       carry = 0
//     } else if (first + second + Number(carry) == 2) {
//       carry = 1
//       temp.push(0)
//     } else {
//       carry = 1
//       temp.push(1)
//     }
//   }
//   if (carry !== 0) {
//     temp.push(1)
//   }
//   return temp.reverse().join('')
// }
// console.log(Func(a.split(""), b.split("")))

// leetecode --------------
// let s = "Live on evasions? No, I save no evil."
// function Func(a) {
//   let updated = a.split(/\s/).join('').replace(/[^a-zA-Z0-9]+/g, '')
//   console.log(updated)
//   let text = updated.split('')
//   if (text.length == 0) {
//     return true
//   } else {
//     let left = 0;
//     let right = text.length - 1

//     while (left < right) {
//       let temp = text[left]
//       text[left] = text[right]
//       text[right] = temp
//       left++
//       right--
//     }
//     if (text.join('').toLowerCase() == updated.toLowerCase()) {
//       return true
//     } else {
//       return false
//     }
//   }

// }
// console.log(Func(s))

// selection sort 
// moving smaller value to first 
// function Swap(arr, i, j) {
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
// }
// function SelectionSort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let swapIndex = i
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[swapIndex]) {
//         swapIndex = j
//       }
//     }
//     Swap(arr, i, swapIndex)
//   }
//   return arr
// }
// console.log(SelectionSort([1, 5, 2, 7, 9, 11, 21, 222, 543, 7664, 3, 2, 78, 9, 8, 3]))

// merge sort
// function MergeSort (){
//     let p1 = 0;
//     let p2 = 0;
//     let result = []
//     while(p1 < arr1.length && p2 < arr2.length){
//       if(arr1[p1] < arr2[p2]){
//         result.push(arr1[p1])
//         p1++
//       } else {
//         result.push(arr2[p2])
//         p2++
//       }
//     }
//     while(p1 < arr1.length){
//       result.push(arr1[p1])
//       p1++
//     }
//     while(p2 < arr1.length){
//       result.push(arr2[p2])
//       p2++
//     }
// }
// console.log(MergeSort(arr1,arr2))


// Linked list
// class LinkedList {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null
//     }
//     this.tail = this.head
//     this.length = 1
//   }
//   append(data) {
//     const newNode = {
//       value: data,
//       next: null
//     }
//     this.tail.next = newNode;
//     this.tail = newNode
//     this.length++
//   }
//   prepend(data) {
//     const newNode = {
//       value: data,
//       next: null
//     }
//     newNode.next = this.head
//     this.head = newNode
//     this.length++
//   }
//   // insert(data){

//   // }
//   // delete(data){

//   // }
// }
// const myList = new LinkedList(10)
// myList.append(18)
// myList.append(30)
// myList.prepend(3)
// console.log(myList)

// leetecode -------
// function Func(arr) {
//   for (i = 1; i < arr.length; i++) {
//     console.log(arr[i],arr[i-1])
//     arr[i] += arr[i - 1]
   
//   }
//   return arr
// }
// console.log(Func([3, 1, 2, 10, 1]))