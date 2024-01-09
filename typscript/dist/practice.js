"use strict";
// let a: string = "{23}";
// let nambo: number = 343;
// let check: boolean;
// let nambo2 = <string>"23"
// Union you can assign multiple data type
// let surname: string | number;
// surname = "hello";
// surname = 21;
// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   // return String(n*m)
//   return n * m;
// };
// type UseName=string|number
// let b:UseName = false
// type Test = (n: number, m: number) => number;
// const func2: Test = (n, m) => {
//   return n * m;
// };
// Array ---
// const arr:number[] = []
// const arr:number[] = [1,2,3]
// const arr2:Array<number | string> = []
// Object ----
// const obj: {
//   height: number;
//   weight: string;
// } = {
//   height: 23,
//   weight: "12",
// };
// const obj: {
//   height: number;
//   weight: string;
//   gender?:number
// } = {
//   height: 23,
//   weight: "12",
// };
// interface Obj {
//   height: number;
//   weight: string;
//   gender?: number;
// }
// const obj: Obj = {
//   height: 23,
//   weight: "12",
// };
// you can interherit the property of above interface into new one
// interface Obj {
//   height: number;
//   weight: string;
//   gender?: number;
// }
// type FuncType = (n: number, m: number) => void;
// interface NewObj extends Obj {
//   func: FuncType;
//   scolar?: boolean;
// }
// const kendel: NewObj = {
//   height: 21,
//   weight: "12",
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };
// kendel.func(20, 40);
// Function -----
// type FuncType = (n: number, m: number, l?: number) => number | string;
// // Optional Paramter
// const func: FuncType = (n, m, l) => {
//   if (typeof l == "undefined") return n * m;
//   return n * m * l;
// };
// console.log(func(23, 45))
// type FuncType = (n: number, m: number, l?: number) => number | string;
// // Default Parameter
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };
// console.log(func(23, 45))
// Reset Operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// console.log(func(23, 45, 23, 45));
// Function with Object
// type FunctionObj = (product: { name: string; stock: number }) => void;
// const getData: FunctionObj = (product) => {
//   console.log(product);
// };
// const produtOne = {
//   name: "jatin",
//   stock: 99,
//   age:20
// };
// getData(produtOne)
// Never Type
// const errorHandeler = ():never => {
//     throw new Error()
// }
// Classes ------------
// class Plaeyer {
//   private height;
//   protected power;
//   weight;
//   constructor(height: number, weight: number) {
//     this.height = height;
//     this.weight = weight;
//   }
//   myHeight = () => {
//     return this.height;
//   };
// }
// const abhi = new Plaeyer(100, 150);
// console.log(abhi.myHeight(), "abhi");
