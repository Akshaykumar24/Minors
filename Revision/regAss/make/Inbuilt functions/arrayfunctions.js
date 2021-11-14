Array.prototype.ourforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
Array.prototype.ourMap = function (callback, context) {
  let data = [];
  for (let i = 0; i < this.length; i++) {
    data.push(callback(this[i], i, this));
  }
  return data;
};
Array.prototype.ourFilter = function (callback) {
  let data = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      data.push(this[i]);
    }
  }
  return data;
};
Array.prototype.ourReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[0];
    }
  }
  return accumulator;
};
Array.prototype.ourFlat = function (depth) {
  function solve(data, c) {
    if (c === 0) return data;
    let n = data.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
      let bool = false;
      if (Array.isArray(data[i])) {
        let x = solve(data[i], c - 1);
        data[i] = x;
        bool = true;
      }
      bool ? (ans = [...ans, ...data[i]]) : ans.push(data[i]);
    }
    return ans;
  }
  return solve(this, depth || Infinity);
};

let arr = [1, 2, 3, 4];
let sum = arr.ourReduce((acc, cur) => acc + cur);
let mappedArr = arr.ourMap((item) => item + 10);
let filteredArr = arr.ourFilter((item) => item > 2);
let flattenedArr = [1, 2, [3, [4], 5], 6].ourFlat();
console.log(sum, mappedArr, filteredArr);
console.log(flattenedArr);
function polyfillforBind() {}
