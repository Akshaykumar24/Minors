Array.prototype.myFlat = function (n) {
  let that = { ...this },
    p = [];
  while (n > 0) {
    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(that[i])) {
        p.push(...that[i]);
      } else {
        p.push(that[i]);
      }
    }
    n--;
  }
  return p;
};

let a = [1, 2, 3, [4, [5], 6], [7]];

let t = a.myFlat(1);
console.log(t);
