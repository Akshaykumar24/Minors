let mahesh = {
  name: "mahesh",
  age: 22,
  school: "masai school",
  reactInstuctor: "Prabhanjan Prabhadyay",
};
let akshay = {
  name: "akshay",
  age: 25,
};
// akshay.__proto__=mahesh
Object.prototype.fun = function () {
  console.log("deependra");
};
// console.log(Object.prototype)
console.log(akshay.name, akshay.school);
console.log(mahesh.name, mahesh.school);
akshay.fun();

function gaja(house, city) {
  console.log(this.name, " has ", house, " at ", city);
}
let hello = Object.create(akshay);
hello.school = "sms";
console.log(hello, "hello", hello.name);
gaja.call(akshay, "bungalow", "ballari");
gaja.apply(akshay, ["bungalow", "ballari"]);
let f = gaja.bind(mahesh, "bungalow", "ballari");
f();
