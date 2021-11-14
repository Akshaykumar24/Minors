// console.log(Array)
let data = [1, 2, 3, 4];

Array.prototype.map2 = function (callback) {
  let data = [];
  console.log(this[0], "ouigku");
  for (let i = 0; i < this.length; i++) {
    data.push(callback(this[i], i));
  }
  return data;
};
Array.prototype.reduce2 = function (callback) {
  let f = this[0];
  for (let i = 1; i < this.length; i++) {
    console.log(f, "f");
    f = callback(f, this[i]);
  }
  return f;
};
console.log(data, "data");
let data2 = data.map2((item) => {
  // console.log(item)
  return item + item;
});
// console.log(data2,"data2")

let data3 = data.reduce2((acc, item) => (acc *= item));
console.log(data3, "data3");
