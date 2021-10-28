// class Person {
//   name = "Akshay";
//   es6 = () => {
//     console.log(this.name);
//   };
//   es5 = function () {
//     console.log(this.name);
//     this.es6();
//   };
// }

// class Student extends Person {
//   constructor() {
//     super();
//   }
//   name = "Man";
//   age = 22;
// }

// // let p = new Student();
// // p.es6();

// let per = {
//   name: "Akshay",
//   es6: () => {
//     console.log(this, "ES6");
//   },
//   es5: function () {
//     return () => {
//       console.log(this, "ES5");
//     };
//   },
// };

// let g = per.es6();
// g();

const foo = () => {
  let a = 5;

  return bar();
};
function bar(b) {
  console.log(a);
}
let h = foo();
h();
