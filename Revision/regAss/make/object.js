/*

let o = {
  name: "Aman",
  age: 22,
  well: function () {
    return 2 * this.age;
  },
};

console.log(o.well());

function truct(n, a) {
  this.name = n;
  this.age = a;
}

const a = new truct("Akshay", 22);
console.log(a);

function hello() {
  console.log("Hello " + this.name);
}

let b = hello.bind(a);
hello.call(o);
b();

// Makes object without any of the properties
const h = Object.create(null);
let y = {};
console.log(h, y);

class Person {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

const lass = new Person("mahesh", 24);
console.log(lass);

class Extra extends Person {
  constructor(n, a, s) {
    super(n, a);
    this.state = s;
  }
}

let him = new Extra("Rushikesh", 24, "Karnataka");
console.log(him);
hello.apply(him);


/////////////////////////////////////////////

var per = {
  name: "Akshay",
  es6: () => {
    console.log(this, "ES6");
  },
  es5: function () {
    console.log(this, "ES5");
  },
};

per.es5();
per.es6();
//console.log(per.es6);
let a = {
  name: "Ajay",
  call: per.es5,
};
a.call();

*/

function truct(n, a) {
  this.name = n;
  this.age = a;
  this.that = () => {
    console.log(this);
  };
}
const b = new truct("Akshay", 22);

b.that();
