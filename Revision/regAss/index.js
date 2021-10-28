///////////////////////////////////////////////////////
// Copy a array and change it withput mutating original
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function cp(ar) {
//   var g = new Array(...ar);
//   g[0] = "ch";
//   return g;
// }

//console.log(arr, cp(arr));

//////////////////////////////////////////////////////////

/*
function Task(t) {
  this.task = t;
  this.status = false;
  this.time = Date.now();
}

function changeStatus() {
  this.status = !this.status;
}

const first = new Task("Wake");

const second = new Task("brush");
const third = new Task("code");

//console.log(first.task, second, third);

changeStatus.call(second);
changeStatus.apply(second);
let g = changeStatus.bind(second);
g();
console.log(second);
*/

////////////////////////////////////////////////////////////////

function Arr() {
  this.length = arguments.length;
  this.arr = {};
  for (let i = 0; i < arguments.length; i++) {
    this.arr[i] = arguments[i];
  }
}

Arr.prototype.add = (a) => {
  console.log(this.Arr);
  let c = 0;
  for (let i in a.arr) {
    c += a.arr[i];
  }
  return c;
};

let a = new Arr(1, 2, 5, 3);
console.log(a);
//console.log(a.add(a));

import { b } from "./one.js";
console.log(b);
