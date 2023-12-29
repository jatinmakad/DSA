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

// leetecode -------
// function Func(arr) {
//   for (i = 1; i < arr.length; i++) {
//     console.log(arr[i],arr[i-1])
//     arr[i] += arr[i - 1]

//   }
//   return arr
// }
// console.log(Func([3, 1, 2, 10, 1]))

// Linked list ---------------
// class LinkeList {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(data) {
//     let newNode = {
//       value: data,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(data) {
//     let newNode = {
//       value: data,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   traverse(req) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter != req) {
//       counter++;
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }
//   insert(index, data) {
//     let newNode = {
//       value: data,
//       next: null,
//     };
//     const leaderNode = this.traverse(index - 1);
//     let nextNode = leaderNode.next;
//     leaderNode.next = newNode;
//     newNode.next = nextNode;
//     this.length++;
//   }
//   delete(index) {
//     let leaderNode = this.traverse(index - 1);
//     let deleteNode = leaderNode.next;
//     let nextNode = deleteNode.next;
//     leaderNode.next = nextNode;
//     this.length--;
//   }
//   reverse() {
//     let first = this.head;
//     this.tail = this.head;
//     let last = first.next;
//     while (last) {
//       let temp = last.next;
//       last.next = first;
//       first = last;
//       last = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//   }
// }
// let test = new LinkeList(30);
// test.append(20);
// test.append(2);
// test.append(5);
// // test.insert(1, 8);
// // test.delete(1);
// test.reverse();
// console.log(test);

// Stack with array
// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   append(data) {
//     this.array.push(data);
//   }
//   peak() {
//     console.log(this.array[this.array.length - 1]);
//   }
//   remove() {
//     this.array.pop();
//   }
// }

// Stack with linked list

// class Node {
//   constructor(data) {
//     (this.value = data), (this.next = null);
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//     this.length = 0;
//   }
//   append(data) {
//     const myNode = new Node(data);
//     if (this.length == 0) {
//       this.top = myNode;
//     } else {
//       let holding = this.top;
//       this.top = myNode;
//       myNode.next = holding;
//     }
//     this.length++
//   }
// }
// const stack = new Stack();
// stack.append(1);
// stack.append(2);
// stack.append(3);
// console.log(stack);

// practive LinkedList
// class LinkedList {
//   constructor(data) {
//     this.head = {
//       value: data,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(data) {
//     const newNode = {
//       value: data,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(data) {
//     const newNode = {
//       value: data,
//       next: this.head,
//     };
//     this.head = newNode;
//     this.length++;
//   }
//   travers(req) {
//     let count = 0;
//     let currentNode = this.head;
//     while (count !== req) {
//       count++;
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }
//   deleteFromIndex(index) {
//     let current = this.travers(index - 1);
//     let nextNode = current.next;
//     current.next = nextNode.next;
//     this.length--;
//   }
//   reverse(){
//     this.tail = {
//       value:this.head.value,
//       next:null
//     }
//   // this.head =
//   }
// }
// const test = new LinkedList(30);
// test.append(20);
// test.append(10);
// test.append(5);
// // test.prepend(2);
// // test.deleteFromIndex(1);
// test.reverse()
// console.log(test, "test");

// leetecde ------
// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// function Func(){
// }
// console.log(Func())

// let arr = [2,0,2,1,1,0]
// function Func(temp,tempInner){
// //   return arr.sort()
// let count = temp;
// let countInner = tempInner
// if(temp == arr.length){
//     return
// }
// if(tempInner == arr.length){
//     count = temp + 1
//     Func(count,countInner)
// }
// console.log(tempInner,"tyemp")
//  countInner = tempInner + 1
//  Func(count,countInner)

// }
// Func(0,0)
// console.log(Func([2,0,2,1,1,0]))

// let intervals = [
//   [1, 3],
//   [0, 9],
// ];
// let updated = [];
// console.log(intervals.sort((a,b) => a[0] - b[0]))
// function Func(intervals) {
//   if (intervals.length == 1 || intervals.length == 0) {
//     return intervals;
//   } else {
//     for (i = 0; i < intervals.length - 1; i++) {
//       if (intervals[i][1] <= intervals[i + 1][1]) {
//         let sor = [
//           intervals[i][0],
//           intervals[i][1],
//           intervals[i + 1][0],
//           intervals[i + 1][1],
//         ].sort();
//         updated.push([sor[0], sor[sor.length - 1]]);
//         i++;
//       } else {
//         updated.push(
//           [intervals[i][0], intervals[i][1]],
//           [intervals[i + 1][0], intervals[i + 1][1]]
//         );
//       }
//     }
//     return updated;
//   }
// }
// console.log(Func(intervals));

// leetcode -------
// function Func(a, b) {
//   let first = a.split("");
//   let second = b.split("");
//   let high = first.length > second.length ? first : second;
//   let carry = 0
//   let updated = []
//   for (i = high.length - 1; i >= 0; i--) {
//     if(first[i] == undefined ? 0 : first[i] + second[i] == undefined ? 0 : second[i] + carry >= 10){
//       let cont = first[i] == undefined ? 0 : first[i] + second[i] == undefined ? 0 : second[i] + carry
//     //  updated.push(cont[1])
//     //  carry = cont[0]
//     console.log(cont)
//     }
//   }
//   return updated
// }
// console.log(Func("112", "12"));

//leetcode -----
// function Func(a) {
//   let arr = [];
//   let map = new Map()
//   let updated = a.split("");
//   if (updated.length == 0 || updated.length == 1) {
//     return updated.length;
//   } else {
//     for (i = 0; i < updated.length - 1; i++) {
//       for (j = i + 1; j < updated.length; j++) {
//         if (updated[i] == updated[j]) {
//           // arr.push(updated[j]);
//           // map.set()
//           console.log(updated[j])
//         }
//       }
//     }
//     return arr.length;
//   }
// }
// console.log(Func("ccccccccc"));

// leetcode -------
// let strs = ["eat", "tea","tae"];
// let updated = [];
// for (i = 0; i < strs.length - 1; i++) {
//     let temp = strs[i]
//     if (
//       temp.split("").sort().join("") == strs[i+1].split("").sort().join("")
//     ) {
//       updated.push(strs[i+1],strs[i]);
// }
// }
// console.log(updated, "map");

// leetecode ------
// function func(str){
//     let temp = str.replace(/\s\s+/g, ' ').split(' ');
//     let left = 0 ;
//     let right = temp.length;
//     while(left !== right){
//         let count = temp[left]
//         temp[left] = temp[right]
//         temp[right] = count
//         left++
//         right--
//     }
//     console.log(temp.join(' ').trim(),"======")
//     return temp.join(' ').trim()
// }
// console.log(func("the sky is blue"))

// techincal DSA -----
// function Func(arr) {
//   if (arr.length > 0) {
//     let i = 0;
//     for (j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         arr[i] = arr[j];
//       }
//     }
//     return i + 1;
//   }
// }
// console.log(Func([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]));

// techincal DSA ------
// function Func(arr) {
//   let left = 0;
//   let right = 1;
//   let count = 0;
//   let updated = [];
//   while (left !== arr.length - 1) {
//     if (arr[left] + arr[right] + arr[right + 1] + arr[right + 2] > count) {
//       count = arr[left] + arr[right] + arr[right + 1] + arr[right + 2];
//       updated = [arr[left], arr[right], arr[right + 1], arr[right + 2]];
//       left++;
//       right++;
//     } else {
//       left++;
//       right++;
//     }
//   }
//   return count;
// }
// console.log(Func([1, 2, 3, 4, 5, 3, 5, 6, 7, 8].reverse()));

// function Func(arr, nums) {
//   let max = 0;
//   for (i = 0; i < arr.length - nums + 1; i++) {
//     let temp = 0;
//     for (j = 0; j < nums; j++) {
//       temp += arr[j + i];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }
// console.log(Func([1, 2, 3, 4, 5, 3, 5, 6, 7, 8], 4));

// technical DSA ----
// function Func(ar1, ar2) {
//   let updated = [];
//   for (i = 0; i < ar1.length; i++) {
//     for (j = 0; j < ar2.length; j++) {
//       if (ar1[i] * ar1[i] === ar2[j]) {
//         updated.push(ar1[i]);
//       }
//     }
//   }
//   return updated
// }
// console.log(Func([1, 2, 3, 4], [1, 9, 4, 16]));

// sort array using recursion
// let i = 0;
// let j = 1;
// let updated = []
// function check(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// function sort(arr) {
//   if (check(arr)) {
//     updated = arr
//     return
//   } else if (arr[i] < arr[j]) {
//     i++;
//     j++;
//     sort(arr);
//   } else {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i = 0;
//     j = 1;
//     sort(arr);
//   }
// }
// console.log(sort([2, 3, 51, 78, 1, 9, 0]));
// // console.log(updated)

// function Func(str) {
//   let map = {};
//   let updated = str.split("");
//   for (i = 0; i < updated.length; i++) {
//     map[updated[i]] = map[updated[i]] ? map[updated[i]] + 1 : 1;
//   }
//   let max = 1;
//   char = updated[0];
//   for (let k in map) {
//     if (map[k] > max) {
//       max = map[k];
//       char = k;
//     }
//   }
//   return char;
// }
// console.log(Func("Hello worldddd"));

// leetecode -------
// valid anagram
// function Func(str1, str2) {
// let s1 = str1.split("")
// let s2 = str2.split("")
// let hash = {}
// for(i=0;i<s1.length;i++){
//     hash[s1[i]] = hash[s1[i]] ? hash[s1[i]] + 1 : 1
// }
// for(i=0;i<s2.length;i++){
//     hash[s2[i]] = hash[s2[i]] ? hash[s2[i]] + 1 : 1
// }
// console.log(hash)
//   let s1 = str1.split("").sort((a,b) => a > b ? 1 : -1).join("");
//   let s2 = str2.split("").sort((a,b) => a > b ? 1 : -1).join("");
//   if(s1 == s2){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(Func("anagam", "nagaram"));

// longest palindrome leetecode --------
// function Func(str) {
//   str.split("");
//   let map = new Map();
//   for (i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//       map.set(str[i], map.get(str[i]) + 1);
//     } else {
//       map.set(str[i], 1);
//     }
//   }

//   let counter = 0;
//   let leftover = 0;
//   map.forEach((v, k) =>{
//       if(v % 2 === 0){
//           counter += v
//       }else if(v % 2 === 1 && v > 2){
//           counter +=v-1
//           leftover +=1
//       }else{
//           leftover +=1
//       }
//   })
//   return map.size === 1 ? s.length : leftover ? counter + 1 : counter
// }
// console.log(Func("babad"));

// leetcdode longest palindrome substring -----
// function Func(str) {
//   str.split("");
//   let left;
//   let right;
//   if (str.length % 2 == 0) {
//     left = Math.round(str.length / 2) - 1;
//     right = Math.round(str.length / 2);
//   } else {
//     left = Math.round(str.length / 2) -1;
//     right = Math.round(str.length / 2) - 1;
//   }
//   let temp = [];
//   while (left !== 0) {
//     if (str[left] == str[right]) {
//       temp.push(str[right]);
//       temp.unshift(str[left]);
//       left--;
//       right++;
//     } else {
//       break;
//     }
//   }
//   temp.join("");
// }
// console.log(Func("babba"));

// 2nd method ------

// function Func(s) {
//   let max = [0, 1];
//   for (i = 0; i < s.length; i++) {
//     let even = getDrome(i - 1, i, s);
//     let odd = getDrome(i - 1, i + 1, s);
//     let curMax = odd[i] - odd[0] > even[1] - even[0] ? odd : even;
//     max = max[1]
//   }
//   return screen.slice(max[0], max[1]);
// }
// console.log(Func("babad"));

// first and last index in sorted array  --------
// function Func(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let firstIndex;
//   while (left <= right) {
//     let start = Math.floor((left + right) / 2);
//     if (nums[start] === target) {
//       firstIndex = start;
//       break;
//     } else if (nums[start] < target) {
//       left = start + 1;
//     } else {
//       right = start - 1;
//     }
//   }
//   if (isNaN(firstIndex)) {
//     return [-1, -1];
//    }
//   while (nums[firstIndex] === nums[firstIndex - 1]) {
//     firstIndex--;
//   }
//   let temp = firstIndex;
//   let secondIndex = firstIndex;
//   while (temp !== nums.length) {
//     if (nums[secondIndex] == target) {
//       secondIndex++;
//     } else {
//       break;
//     }
//   }
//   secondIndex = secondIndex - 1;
//   return [firstIndex, secondIndex];
// }
// console.log(Func([5, 7, 7, 8, 8, 10], 8));

// merge sorted array --------
// function Func(nums1, m, nums2, n) {
//   let updated = nums1.slice(0, m);
//   let updated2 = nums2.slice(0, n);
//   nums1 = [...updated, ...updated2];
//   function swap(nums1, i, j) {
//     let temp = nums1[i];
//     nums1[i] = nums1[j];
//     nums1[j] = temp;
//   }
//   for (i = 0; i < nums1.length; i++) {
//     for (j = i + 1; j < nums1.length; j++) {
//       if (nums1[i] > nums1[j]) {
//         swap(nums1, i, j);
//       }
//     }
//   }
//   return nums1;
// }
// console.log(Func([1,2,3,0,0,0],3,[2,5,6],3));

// intersection of two array
// function Func(num1, num2) {
//   let map2 = new Map();
//   let map1 = new Map();
//   for (i = 0; i < num2.length; i++) {
//     if (!map2.has(num2[i])) {
//       map2.set(num2[i], num2[i]);
//     }
//   }
//   for (i = 0; i < num1.length; i++) {
//     if (!map1.has(num1[i])) {
//       map1.set(num1[i], num1[i]);
//     }
//   }
//   if(map1.has(5)){
//     console.log(map1.get(5))
//   }
// }
// console.log(Func([4, 9, 5], [9, 4, 9, 8, 4]));

// let temp = [];
// let temp2= [];
// function Func(arr) {
//   arr.forEach((res) => {
//     if (Array.isArray(res)) {
//       Func(res);
//     } else {
//       temp.push(res);
//     }
//   });
//     for (i = 0;i< arr.length; i++) {
//       if(Array.isArray(arr)){
//            Func(arr[i])
//       } else {
//           temp2.push(arr[i])
//       }
//     }
// }
// Func([[["a", "b"]], [[["c", "d"]]], ["e", "f"]]);
// console.log(temp2);

// let mainArr = [];
// function Func(arr, count) {
//   let temp = [];
//   let array = arr;
//   for (i = 0; i < array.length; i++) {
//     if (i == count) {
//       mainArr.push(temp);
//       let pop = array.splice(count, array.length)
//       Func(pop, count);
//     } else {
//       temp.push(array[i]);
//     }
//   }
//   if (array.length <= count) {
//     mainArr.push(temp);
//   }
// }

// function Func(arr, count) {
//   let temp = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i >= count - 1) {
//       mainArr.push(temp);
//       let pop = arr.splice(count - 1, arr.length);
//       Func(pop, count);
//     } else {
//       temp.push(arr[i]);
//     }
//     if(arr.length <= count - 1){
//       // mainArr.push(temp);
//       break
//     }
//   }

// }

// Func(["a", "b", "c", "d", "e", "f", "g"], 3);
// console.log(mainArr);

// shifting zero to end
// let arr = [6, 0, 2, 0, 1, 5, 0, 9, 8];
// function Test(nums) {
//     let temp = [];
//     for (i = 0; i < nums.length; i++) {
//       if (nums[i] == 0) {
//         temp.push(nums[i]);
//       } else {
//         temp.unshift(nums[i]);
//       }
//     }
//     return temp;

//   let counter = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[i], nums[counter]] = [nums[counter], nums[i]];
//       counter++;
//     }
//   }
//   return nums;
// }
// console.log(Test(arr));

// let str1 = "silent";
// let str2 = "listen";
// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) {
//     return false;
//   }
//   let map = {};
//   for (let item in s1) {
//     map[s1[item]] = (map[s1[item]] || 0) + 1;
//     map[s2[item]] = (map[s2[item]] || 0) - 1;
//   }
//   for (let item in map) {
//     if (map[item] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isAnagram(str1, str2));

// const name = "jatin";
// const teest = () => {
//   console.log(this.name);
// };
// teest();

// let obj = {
//     name:"jatin",
//     getName:() => {
//         console.log(this)
//     },
//     getName2:function(){
//         console.log(this)
//     }
// }
// obj.getName2()

// const obj = {
//   name: "jatin",
//   getName() {
//     console.log(this.name);
//   },
// };
// setTimeout(obj.getName, 1000);

// let s = "Let's take LeetCode contest";
// function Test(str) {
//   let temp = str.split(" ");
//   for (i = 0; i < temp.length; i++) {
//     let res = Reverse(temp[i]);
//     temp[i] = res

//   }
//   return temp.join(' ')
// }
// function Reverse(s) {
//   let str = s.split("");
//   let start = 0;
//   let end = s.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   while (start <= mid) {
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++;
//     end--;
//   }
//   return str.join("");
// }

// let numbers = [1, 2, 3, 4, 4, 9, 56, 90],
//   target = 8;
// function InputSum(nums, target) {
//   let l = 0,
//     r = nums.length - 1;
//   while (l <= r) {
//     if (nums[l] + nums[r] === target) return [l + 1, r + 1];
//     if (nums[l] + nums[r] < target) l++;
//     if (nums[l] + nums[r] > target) r--;
//   }
//   let first = 0;
//   let second = 1;
//   while (first !== nums.length - 1) {
//     if (first === second) {
//       second++;
//     }
//     if (nums[first] + nums[second] == tar) {
//       return [first + 1, second + 1];
//     }
//     if (second == nums.length) {
//       second = 0;
//       first++;
//     }
//     second++;
//   }
//   return
// }
// console.log(InputSum(numbers, target));

// Squares of a Sorted Array
// let nums = [-4, -1, 0, 3, 10];
// function Test(arr) {
//   let newArr = new Array(arr.length).fill(0);
//   let left = 0;
//   let right = arr.length - 1;
//   let index = arr.length - 1;
//   while (left <= right) {
//     let powerLeft = Math.pow(arr[left],2);
//     let powerRight = Math.pow(arr[right],2);
//     if (powerLeft > powerRight) {
//       newArr[index] = powerLeft;
//       left++;
//       index--;
//     } else {
//       newArr[index] = powerRight;
//       right--;
//       index--;
//     }
//   }
//   return newArr
// }
// console.log(Test(nums))

// let nums = [1,2,3,4,5,6,7]
//   k = 3;
// function Test(nums, k) {
//     let timesOfRotation = k % nums.length;
//     console.log(nums.splice(-timesOfRotation))
//     nums.unshift(...nums.splice(-timesOfRotation));
//     return nums;
// }
// console.log(Test(nums, k));

// let s1 = "ab", s2 = "eidbaooo"
// function Test(str1,str2){
//    let s1 =  str1.split("")
//   let s2 =  str2.split("")
//   console.log(s1,s2)
// }
// Test(s1,s2)

// max sum in array

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function Test(nums) {
//   let sum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i],nums[i] + nums[i-1])
//     sum = Math.max(sum,nums[i])
//   }
//   return sum
// }
// Test(arr);

// let nums = [3, 2, 4],
//   target = 6;
// function Test(nums, target) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === tar) {
//           return [i, j];
//         }
//       }
//     }
//   let hash = {};
//   for (var i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (hash[diff] !== undefined) {
//       return [hash[diff], i];
//     }
//     hash[nums[i]] = i;
//   }
// }
// console.log(Test(nums, target))

// let string = "abaaba";
// function Test(str) {
//   let temp = str.split("");
//   let hash = new Map();
//   let arr = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
//   for (let item in arr) {
//     hash[arr[item]] = 0;
//     hash[temp[item]] = hash[temp[item]] + 1;
//   }
//   console.log(hash);
// }
// Test(string);

// const arr = [15, 23, 19, 20, 7];
// let max = 0;
// let maxe;
// function findKthMaxElement(arr, k) {
//   maxe = Math.max.apply(null, arr);
//   arr.splice(arr.indexOf(maxe), 1);
//   max++;
//   while (max !== k) {
//     findKthMaxElement(arr, k);
//   }
//   return maxe;
// }
// let element = findKthMaxElement(arr, 4);
// console.log(element);

// Array.prototype.myIndexof = function (num) {
//   let index = false;
//   for (i = 0; i < this.length; i++) {
//     if (this[i] == num) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// };
// console.log(arr.myIndexof(7));

// const arr = [15, 23, 19, 20, 7];
// let count = 0;
// let maxElement = 0;
// function findKthMaxElement(arr, k) {
//   let max = 0;
//   let maxIndex = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//   }
//   [arr[maxIndex], arr[arr.length - 1]] = [arr[arr.length - 1], arr[maxIndex]];
//   maxElement = arr.pop();
//   count++;
//   while (count !== k) {
//     findKthMaxElement(arr, k);
//   }
// }
// let element = findKthMaxElement(arr, 2);
// console.log(maxElement);

// let nums = [1011, 1100, 001, 01, 120, 4350, 3400];
// function removeZero(arr) {
//   arr.map((i) => {
//     i.toString().replace(/0/g, "");
//   });
//   return arr;
// }
// console.log(removeZero(nums));