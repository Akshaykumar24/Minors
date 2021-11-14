function Person() {
  this.name = "mahesh";
  this.age = 22;
  this.skills = ["javascript", "react", "DS ALGO"];
  // this.hobby=hobby
}
Person.prototype.display = function () {
  console.log(this.name);
  console.log("hello");
};
class Admin extends Person {
  constructor() {
    super();
  }
}
let admin1 = new Admin();
console.log(Admin.prototype);
console.log(admin1.display());

let obj = {
  name: "raj",
  age: 19.6,
};
Object.defineProperty(obj, "college", {
  value: "masai",
  writable: false,
  enumerable: true,
});
obj.college = "rm-r";
console.log(Object.getOwnPropertyNames(obj));
// console.log(obj)
