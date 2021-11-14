let person = { name: "akshay", age: "26" };
function showName(city, state, country) {
  console.log(this.name, "city :", city, "state:", state, "country:", country);
}
let show2 = showName.bind(person, "hyderabad", "ts");
show2("India");
function mybind() {
  let mainObj = arguments[0];
  let arr = Object.values(arguments);
  //   console.log(Array.isArray(arr));
  let func1 = this;
  return function () {
    let arr2 = Object.values(arguments);
    func1.call(mainObj, ...arr.slice(1), ...arr2);
  };
}

showName.mybind = mybind;
let show3 = showName.mybind(person, "hyderabad", "ts");
show3("India");
// function hello() {
//   console.log(this);
// }
// hello.call({ dummy: "dummyś" });
// let dummy2 = { dummy: "dummyś" };
// dummy2.hello = hello;
// dummy2.hello();
