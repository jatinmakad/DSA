// 1.

// let num = [1, 2, 3, 6, 7, 1, 2];
// using Loop
// let temp = [];
// for (i = num.length - 1; i >= 0; i--) {
//   temp.push(num[i]);
// }

// using bubble sort
// function reverse(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log(reverse(num));

// react componet
// react element
// component instance

// Binary Search Tree BST
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     let newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertRoot(this.root, newNode);
//     }
//   }
//   insertRoot(root, node) {
//     if (node.value < root.value) {
//       if (root.left === null) {
//         root.left = node;
//       } else {
//         this.insertRoot(root.left, node);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = node;
//       } else {
//         this.insertRoot(root.right, node);
//       }
//     }
//   }
//   // Depth First Search
//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }
//   inOrder(root) {
//     if (root) {
//       this.preOrder(root.left);
//       console.log(root.value);
//       this.preOrder(root.right);
//     }
//   }
//   postOrder(root) {
//     if (root) {
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//       console.log(root.value);
//     }
//   }

//   // Breath First Search
//   levelOrder() {
//     const queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       let curr = queue.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }
//   minNode(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.minNode(root.left);
//     }
//   }
//   maxNode(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       return this.maxNode(root.right);
//     }
//   }
//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.minNode(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }
// }
// const test = new BinarySearchTree();
// test.insert(30);
// test.insert(5);
// test.insert(45);
// test.insert(40);
// test.insert(50);
// test.delete(30);
// console.log(test.levelOrder());

// Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//     this.tail = null;
//   }
//   // O (n)
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//       this.tail = node;
//       this.length++;
//     }
//   }
//   // O(1)
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//       this.length++;
//     }
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.length++;
//   }
//   delete(value) {
//     let prev = this.head;
//     while (prev.value) {
//       if (prev.next == null) {
//         return;
//       } else if (prev.next.value == value) {
//         let last = prev.next;
//         prev.next = last.next;
//         this.length--;
//         return;
//       }
//       prev = prev.next;
//     }
//   }
//   insert(index, value) {
//     let cont = index;
//     let prev = this.head;
//     let temp = 0;
//     while (prev.value !== null) {
//       if (temp == cont) {
//         let obj = {
//           value: prev.value,
//           next: prev.next,
//         };
//         prev.value = value;
//         prev.next = obj;
//         this.length++;
//         break;
//       }
//       if (prev.next !== null) {
//         prev = prev.next;
//         temp++;
//       } else {
//         break;
//       }
//     }
//   }
//   print() {
//     let prev = this.head;
//     let temp = 0;
//     while (prev.value !== null) {
//       console.log(`${temp} ${prev.value}`);
//       temp++;
//       if (prev.next !== null) {
//         prev = prev.next;
//       } else break;
//     }
//   }
//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
//   isEmpty() {
//     return this.length === 0;
//   }
// }
// const test = new LinkedList();
// test.prepend(20);
// test.prepend(10);
// test.append(40);
// test.append(50);
// test.append(22);
// // test.insert(4, 90);
// // test.delete(90);
// // test.reverse();
// // test.print();
// console.log(test);

// class Node {
//   constructor(data) {
//     this.value = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//     this.tail = null;
//   }
//   isEmpty() {
//     return this.head === null;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//       this.size++;
//     }
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       node.next = this.head;
//       this.head = node;
//       this.size++;
//     }
//   }
//   deleteNode(value) {
//     if (this.isEmpty()) {
//       return;
//     } else {
//       let prev = this.head;
//       if (this.head.value === value) {
//         this.head = this.head.next;
//         this.size--;
//       } else {
//         let mainPrev = prev;
//         while (prev.value) {
//           if (prev.value == value) {
//             mainPrev.next = prev.next;
//             this.size--;
//             if (prev.next == null) {
//               this.tail = mainPrev;
//             }
//             break;
//           }
//           mainPrev = prev;
//           prev = prev.next;
//         }
//       }
//     }
//   }
//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     this.tail = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
// }
// const link = new LinkedList();
// link.append(2);
// link.append(4);
// link.append(90);
// link.prepend(8);
// link.deleteNode(4);
// link.reverse();
// console.log(link);

// class Node {
//   constructor(data) {
//     this.value = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, node) {
//     if (root.value > node.value) {
//       if (root.left == null) {
//         root.left = node;
//       } else {
//         this.insertNode(root.left, node);
//       }
//     } else if (root.value < node.value) {
//       if (root.right == null) {
//         root.right = node;
//       } else {
//         this.insertNode(root.right, node);
//       }
//     }
//   }
  
// }
// let node = new BinarySearchTree();
// node.insert(20);
// node.insert(10);
// node.insert(5);
// node.insert(3);
// node.insert(6);
// console.log(node);
