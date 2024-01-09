// Letter Combinations of a Phone Number-----
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

var letterCombinations = function (digits) {
  let result = [];
  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const dfs = (i, digits, slate) => {
    if (i == digits.length) {
      return result.push(slate.join(""));
    }
    let chars = obj[digits[i]];
    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };
  if (digits == "") {
    return [];
  } else {
    dfs(0, digits, []);
    return result;
  }
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
// console.log(reverseWords("the sky is blue"))

// Summary Ranges
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

var summaryRanges = function (nums) {
  let result = [];
  let left = 0;
  let right = 1;
  while (left !== nums.length) {
    if (nums[right - 1] + 1 === nums[right]) {
      right++;
    } else if (nums[left] == nums[right - 1]) {
      result.push(`${nums[left]}`);
      left++;
      right++;
    } else {
      result.push(`${nums[left]}->${nums[right - 1]}`);
      left = right;
      right++;
    }
  }
  return result;
};

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

// Subsets II
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

var subsetsWithDup = function (nums) {
  let obj = {};
  let result = [];
  nums.sort((a, b) => {
    return a - b;
  });
  const dfs = (i, nums, slate) => {
    if (i == nums.length) {
      if (!obj[slate]) {
        result.push(slate.slice());
        obj[slate.slice()] = slate.slice();
      }
      return;
    }
    // exclude
    dfs(i + 1, nums, slate);
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);
  return result;
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

// Set Matrix Zeroes
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function (matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(0) !== -1) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          arr = [...arr, j];
        }
      }
    }
  }
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j].includes(0)) {
      for (let i = 0; i < matrix[j].length; i++) {
        matrix[j][i] = 0;
      }
    }
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      matrix[j][arr[i]] = 0;
    }
  }
  return matrix;
};

// Merge Strings Alternately
// Input: word1 = "abc", word2 = "pqre"
// Output: "apbqcr"

function mergerStr(str1, str2) {
  let length = Math.max(str1.length, str2.length);
  let output = "";
  for (let i = 0; i < length; i++) {
       if(str1[i] !== undefined && str2[i] == undefined){
         output += str1[i]
       } else if (str1[i] == undefined && str2[i] !== undefined){
        output += str2[i]
       } else if(str1[i] !== undefined && str2[i] !== undefined){
        output += str1[i] + str2[i]
       }
  }
}


// Find First and Last Position of Element in Sorted Array
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
var searchRange = function (nums, target) {
  let left = -1;
  let right = -1;
  for (let i = 0; i < nums.length; ) {
    if (left !== -1) {
      if (nums[i] == target) {
        right = i;
      }
    } else {
      if (nums[i] === target) {
        left = i;
        right = i;
      }
    }
    i++;
  }
  return [left, right];
};

// Subsets
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subsets = function (arr) {
  let n = arr.length;
  let output = [];
  function fun(index, temp = [], output) {
    if (index >= n) {
      return output.push([...temp]);
    }
    temp.push(arr[index]);
    fun(index + 1, temp, output);
    temp.pop(arr[index]);
    fun(index + 1, temp, output);
  }
  fun(0, [], output);
  return output;
};

// Merge Two Sorted Lists
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let prev = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      prev.next = list2;
      list2 = list2.next;
    } else {
      prev.next = list1;
      list1 = list1.next;
    }
    prev = prev.next;
  }
  if (list1 !== null) {
    prev.next = list1;
  }

  if (list2 !== null) {
    prev.next = list2;
  }
  return dummy.next;
};

// Longest Common Prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function (strs) {
  let cur = strs[0];
  let temp = "";
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] == strs[i][j]) {
        temp += cur[j];
      } else {
        break;
      }
    }
    cur = temp;
    temp = "";
  }
  return cur;
};

// Search a 2D Matrix
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

var searchMatrix = function (arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};


// Search Insert Position
// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    nums[mid] >= target ? (index = mid) : "";
    nums[mid] <= target ? (index = mid + 1) : "";
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
};

// Binary Search
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
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

// Check if Array Is Sorted and Rotated
// Input: nums = [3,4,5,1,2]
// Output: true

var check = function (nums) {
  let count = 0;
  const len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1]) count++;
  }
  if (count > 1 || (count == 1 && nums[0] < nums[len])) return false;
  return true;
};

// Set Matrix Zeroes
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

var setZeroes = function (arr) {
  let obj = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        obj.push([i, j]);
      }
    }
  }
  for (let letter of obj) {
    let row = letter[0];
    let col = letter[1];
    for (i = 0; i < arr.length; i++) {
      arr[i][col] = 0;
    }
    for (i = 0; i < arr[0].length; i++) {
      arr[row][i] = 0;
    }
  }
  return arr;
};

// Palindrome Number
// Input: x = 121
// Output: true

var isPalindrome = function (x) {
  let temp = x.toString().split("");
  let pop = temp.reverse().join("");
  if (pop == x) {
    return true;
  } else {
    return false;
  }
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

// Search a 2D Matrix
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

var searchMatrix = function (arr, num) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == num) {
        return true;
      }
    }
  }
  return false;
};

// Majority Element
// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function (arr) {
  let temp = 0;
  let pop = 0;
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (obj[arr[i]] > temp) {
      temp = obj[arr[i]];
      pop = arr[i];
    }
  }
  return pop;
};

// Majority Element II
// Input: nums = [3,2,3]
// Output: [3]

var majorityElement = function (arr) {
  let size = Math.floor(arr.length / 3);
  let temp = [];
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (obj[arr[i]] > size && !temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
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

// Find the Duplicate Number
// Input: nums = [1,3,4,2,2]
// Output: 2

var findDuplicate = function (arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    if (obj[arr[i]] > 1) {
      return arr[i];
    }
  }
};

// Sort Colors
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

var sortColors = function (arr) {
  let first = 0;
  let temp;
  let last = arr.length - 1;
  for (var i = 0; i <= last; ) {
    if (arr[i] === 0) {
      temp = arr[i];
      arr[i] = arr[first];
      arr[first] = temp;
      i++;
      first++;
    } else if (arr[i] == 2) {
      temp = arr[i];
      arr[i] = arr[last];
      arr[last] = temp;
      last--;
    } else {
      i++;
    }
  }
  return arr;
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

// Move Zeroes
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let counter = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[counter]] = [nums[counter], nums[i]];
      counter++;
    }
  }
  return nums;
};

// Reverse Words in a String III
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function (str) {
  function Reverse(s) {
    let str = s.split("");
    let start = 0;
    let end = s.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= mid) {
      let temp = str[start];
      str[start] = str[end];
      str[end] = temp;
      start++;
      end--;
    }
    return str.join("");
  }

  let temp = str.split(" ");
  for (i = 0; i < temp.length; i++) {
    let res = Reverse(temp[i]);
    temp[i] = res;
  }
  return temp.join(" ");
};

// Reverse String
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function (str) {
  let start = 0;
  let end = str.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= mid) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  return str;
};

// Find Peak Element
// Input: nums = [1,2,3,1]
// Output: 2

var findPeakElement = function (nums) {
  let start = 0;
  let count = 0;
  while (start !== nums.length) {
    if (nums[start] > nums[count]) {
      count = start;
    }
    start++;
  }
  return count;
};

// Intersection of Two Arrays
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

var intersection = function (arr1, arr2) {
  let obj = {};
  let arr = [];
  for (let item of arr2) {
    obj[item] = 0;
  }
  for (let item of arr1) {
    if (obj[item] !== undefined) {
      arr.push(item);
      obj[item] = undefined;
    }
  }
  return arr;
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

// Running Sum of 1d Array
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

var runningSum = function (arr) {
  for (i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
};

// Valid Palindrome
// Input: s = "A man, a plan, a canal: Panama"
// Output: true

var isPalindrome = function (s) {
  let updated = s
    .split(/\s/)
    .join("")
    .replace(/[^a-zA-Z0-9]+/g, "");
  let text = updated.split("");
  if (text.length == 0) {
    return true;
  } else {
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
      let temp = text[left];
      text[left] = text[right];
      text[right] = temp;
      left++;
      right--;
    }
    if (text.join("").toLowerCase() == updated.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
};

// Add Binary
// Input: a = "11", b = "1"
// Output: "100"

var addBinary = function (a, b) {
  let a1 = a.split("");
  let b1 = b.split("");
  let temp = [];
  a1.reverse();
  b1.reverse();
  let carry = 0;
  if (a1.length == b1.length) {
    updated = a1.length;
  } else {
    updated = a1.length > b1.length ? a1.length : b1.length;
  }
  for (i = 0; i < updated; i++) {
    let second = b1[i] == undefined ? 0 : Number(b1[i]);
    let first = a1[i] == undefined ? 0 : Number(a1[i]);
    if (first + second + Number(carry) == 0) {
      temp.push(0);
      carry = 0;
    } else if (first + second + Number(carry) == 1) {
      temp.push(1);
      carry = 0;
    } else if (first + second + Number(carry) == 2) {
      carry = 1;
      temp.push(0);
    } else {
      carry = 1;
      temp.push(1);
    }
  }
  if (carry !== 0) {
    temp.push(1);
  }
  return temp.reverse().join("");
};

// Contains Duplicate
// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = function (nums) {
  if (nums.length == 1) {
    return false;
  } else {
    nums.sort();
    let updated;
    for (i = 0; i < nums.length - 1; i++) {
      if (nums[i] == nums[i + 1]) {
        updated = true;
        break;
      }
    }
    if (updated == undefined) {
      return false;
    } else {
      return true;
    }
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

// polyfill for map function

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};
let array = [1, 2, 3, 4, 5, 6, 7];
let updated = array.myMap((r, i) => r * 2);

// polyfill for filter function

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

// polyfill for find function

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    } else if (temp == undefined) {
      temp = [];
    }
  }
  return temp;
};



// leetcode ----------------------------

// var nums = [-1,-100,3,99], k = 2
// for (i = 1; i < k + 1; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
// }

// LeeteCode -----------------

// let head = [1, 2, 3, 4, 5,6];
// if (head.length % 2 == 0) {
//   let updated = head.length / 2;
//   console.log(head.slice(updated, head.length + 1));
// } else {
//     let updated = (head.length - 1) / 2;
//     console.log(head.slice(updated, head.length + 1));
// }

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

// bubble sort ----

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

// DSA 1. ---

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

// DSA 2. ----

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

// DSA 3. -----

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

// selection sort ---

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

// merge sort ---

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

// sort array using recursion ----

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

// intersection of two array ----

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

// shifting zero to end -----

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

// Squares of a Sorted Array -----
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
