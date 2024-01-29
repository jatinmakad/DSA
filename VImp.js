// Minimum Size Subarray Sum
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      console.log(result, i - left + 1);
      result = Math.min(result, i - left + 1);
      sum -= nums[left++];
    }
  }
  return result == Number.MAX_SAFE_INTEGER ? 0 : result;
};

// Reverse Words in a String
// Input: s = "the sky is blue"
// Output: "blue is sky the"

var reverseWords = function (s) {
  let str = s.split(" ");
  s = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i] != "" && str[i] != " ") s += str[i] + " ";
  return s.trim();
};

// Is Subsequence
// Input: s = "abc", t = "ahbgdc"
// Output: true

var isSubsequence = function (s, t) {
  let check = [];
  let start = 0;
  for (i = 0; i < t.length; i++) {
    if (s[start] == t[i]) {
      check.push(t[i]);
      start++;
    }
  }
  return check.length == s.length;
};

// Sort Characters By Frequency
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

var frequencySort = function (s) {
  let obj = {};
  for (i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || "") + s[i];
  }
  return Object.values(obj)
    .sort((a, b) => {
      return b.length - a.length;
    })
    .join("");
};

// Merge Intervals
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let item of intervals) {
    let e1 = result[result.length - 1][1];
    let s2 = item[0];
    let e2 = item[1];
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(item);
    }
  }
  return result;
};

// Rotate Image
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [
        matrix[i][matrix.length - 1 - j],
        matrix[i][j],
      ];
      console.log(i, j);
    }
  }
};

// Maximum Subarray
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

var maxSubArray = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    sum = Math.max(sum, nums[i]);
  }
  return sum;
};

// Pascal's Triangle
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function (numRows) {
  let arr = [[1]];
  if (numRows == 1) {
    return arr;
  } else if (numRows == 2) {
    arr.push([1, 1]);
    return arr;
  } else {
    for (let i = 0; i < numRows - 1; i++) {
      let temp = [];
      if (arr[i]?.length >= 2) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j + 1] !== undefined) {
            temp.push(arr[i][j] + arr[i][j + 1]);
          }
        }
        arr.push([1, ...temp, 1]);
      } else {
        arr.push([1, 1]);
      }
    }
  }
  return arr;
};

// Missing Number
// Input: nums = [3,0,1]
// Output: 2
var missingNumber = function (arr) {
  let num = arr.reduce((pop, val) => {
    return (pop += val);
  }, 0);
  let n = arr.length;
  var expected = (n * (n + 1)) / 2;
  return expected - num;
};

// Rotate Array
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
var rotate = function (nums, k) {
  let timesOfRotation = k % nums.length;
  nums.unshift(...nums.splice(-timesOfRotation));
  return nums;
};

// Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3

var lengthOfLongestSubstring = function (str) {
  let s = str.split("");
  let left = 0;
  let right = 0;
  let max = 0;
  let obj = new Set();
  while (right !== s.length) {
    if (!obj.has(s[right])) {
      obj.add(s[right]);
      max = Math.max(max, obj.size);
      right++;
    } else {
      obj.delete(s[left]);
      left++;
    }
  }
  return max;
};

// Merge Sorted Array
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    let fval = nums1[first];
    let sval = nums2[second];
    if (fval > sval) {
      nums1[i] = fval;
      i--;
      first--;
    } else {
      nums1[i] = sval;
      i--;
      second--;
    }
  }
  return nums1;
};

// Two Sum II - Input Array Is Sorted
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    if (nums[l] + nums[r] === target) return [l + 1, r + 1];
    if (nums[l] + nums[r] < target) l++;
    if (nums[l] + nums[r] > target) r--;
  }
};

// Group Anagrams
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  let sortedArr = strs.map((res) => res.split("").sort().join(""));
  let hash = {};
  for (i = 0; i < strs.length; i++) {
    if (!hash[sortedArr[i]]) {
      hash[sortedArr[i]] = [strs[i]];
    } else {
      hash[sortedArr[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

// Longest Palindrome
// Input: s = "abccccdd"
// Output: 7

var longestPalindrome = function (str) {
  str.split("");
  let map = new Map();
  for (i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  let counter = 0;
  let leftover = 0;
  map.forEach((v, k) => {
    if (v % 2 === 0) {
      counter += v;
    } else if (v % 2 === 1 && v > 2) {
      counter += v - 1;
      leftover += 1;
    } else {
      leftover += 1;
    }
  });
  return map.size === 1 ? str.length : leftover ? counter + 1 : counter;
};

// Valid Anagram
// Input: s = "anagram", t = "nagaram"
// Output: true

var isAnagram = function (s, t) {
  let s1 = s
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  let s2 = t
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
  if (s1 == s2) {
    return true;
  } else {
    return false;
  }
};

// Two Number Add

// let nums = [2, 7, 11, 15];
// let target = 18;
// let hash = {};
// for (var i = 0; i < nums.length; i++) {
//   let diff = target - nums[i];
//   if (hash[diff] !== undefined) {
//     return [hash[diff], i];
//   }
//   hash[nums[i]] = i;
// }

// Bubble Sort

// function bubbleSort(arr) {
//   for (let j = arr.length; j > 0; j--) {
//     for (let i = 0; i < j - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }
//   return arr
// }
// bubbleSort(arr);

// let arr = [0, 4, 23, 5, 13, 6, 78, 89, 7, 12];
// function selectioSort(arr) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     let min = j;
//     for (let i = j; i < arr.length; i++) {
//       if (arr[min] > arr[i]) {
//         min = i;
//       }
//     }
//     [arr[j], arr[min]] = [arr[min], arr[j]];
//   }
//   return arr
// }
// console.log(selectioSort(arr));

// let arr = [0, 4, 23, 5, 13, 6, 78, 89, 7, 12];
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// console.log(insertionSort(arr));

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

// function PromisePolly(executor) {
//   let onResolve,
//     value,
//     onReject,
//     isCalled = false,
//     isFullfilled = false,
//     isRejected = false;

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
//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve == "function") {
//       onResolve(val);
//       isCalled = true;
//     }
//   }
//   function rejected(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onReject == "function") {
//       onReject(val);
//       isCalled = true;
//     }
//   }
//   executor(resolve, rejected);
// }

// new PromisePolly((res, rej) => {
//   setTimeout(() => {
//     rej("hello ji");
//   }, 1000);
// })
//   .then((res) => console.log(res, "then"))
//   .catch((res) => console.log(res, "catch"));

// let p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolved 1");
//   }, 5000);
// });
// let p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolved 2");
//   }, 3000);
// });
// let p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("resolved 3");
//   }, 2000);
// });

// Promise.allSettled([p1,p2,p3]).then((res) => console.log(res,'resss')).catch((res) => console.log(res,'catch'))

// function PromiseAny(promise) {
//   let errorResponse = [];
//   let resolvedResponse = [];
//   return new Promise((resolved, rejected) => {
//     promise.forEach(async (element, i) => {
//       try {
//         let res = await element;
//         resolvedResponse.push(res);
//         resolved(res);
//       } catch (error) {
//         error.push(error);
//       }
//       if (errorResponse.length == promise.length) {
//         rejected("Aggregator Error");
//       }
//     });
//   });
// }

// function PromiseRace(promise) {
//   return new Promise((resolved, rejected) => {
//     promise.forEach(async (element, i) => {
//       try {
//         let res = await element;
//         resolved(res);
//       } catch (error) {
//         rejected(error);
//       }
//     });
//   });
// }

// PromiseRace([p1, p2, p3])
//   .then((res) => console.log(res, "resss"))
//   .catch((res) => console.log(res, "catch"));
