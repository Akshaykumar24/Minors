Array.prototype.myFors = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback.call(this, this[i]);
  }
  return this;
};

let a = [1, 2, 3];
a.myFors((i) => i + 1);
console.log(a);
