String.prototype.trim2 = function () {
  let left = 0;
  let right = this.length - 1;
  while (this[left] === " " || this[right] === " ") {
    if (this[left] === " ") {
      left++;
    }
    if (this[right] === " ") {
      right--;
    }
  }
  let str = "";
  for (let i = left; i <= right; i++) {
    str += this[i];
  }
  return str;
};

// String.prototype.strim = function () {
//   let l = 0,
//     r = this.length - 1;
//   while (this[l] === " ") {
//     l++;
//   }
//   while (this[r] === " ") {
//     r--;
//   }
//   let res = "";
//   for (let i = l; i <= r; i++) {
//     res += this[i];
//   }
//   return res;
// };

console.log("  raj   ".strim());
