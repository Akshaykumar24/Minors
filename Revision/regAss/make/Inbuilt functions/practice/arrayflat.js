let data = [1, 2, 3, 20, 22, 23, 24, [[25, [26], 27]]];
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
console.log(data, "data before");
// console.log(solve([1, [2, [3]], 4, [5, 6]]));
console.log(solve(data, 2));
// console.log(data, "data after");
