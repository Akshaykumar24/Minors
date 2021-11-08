Array.prototype.myMap = function (callback) {
  let y = [];
  //console.log(this);
  for (let i = 0; i < this.length; i++) {
    y[i] = callback(this[i]);
  }
  return y;
};

let a = [1, 2, 3];
let p = a.myMap((i) => i + 2);
console.log(p);

let v = p.myMap((i) => new Array(i).fill(i));
console.log(v);
