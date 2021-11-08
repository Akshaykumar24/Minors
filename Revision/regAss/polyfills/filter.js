Array.prototype.myFilter = function (cb) {
  let y = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      y.push(this[i]);
    }
  }
  return y;
};

let a = [1, 2, 3, 4, 5];

let p = a.myFilter((i) => i % 2 == 1);
console.log(p);
