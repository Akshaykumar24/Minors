Array.prototype.myRed = function (cb, init) {
  if (init == undefined) {
    init = 0;
  }
  let a = init;
  for (let i = 0; i < this.length; i++) {
    a = cb(a, this[i]);
  }
  return a;
};

let a = [1, 2, 3, 4, 5];
let p = a.myRed((a, c) => a * c, 1);
console.log(p);
//done