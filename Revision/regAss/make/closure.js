function callHere() {
  const memo = {};
  function isPrime(n) {
    if (memo[n]) return memo[n];
    console.log("running first time");
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        memo[n] = false;
        return memo[n];
      }
    }
    memo[n] = true;
    return memo[n];
  }
  return isPrime;
}
const cal = callHere();
console.log(cal(4));
console.log(cal(1321311357755242));
console.log(cal(1321311366657721));
console.log(cal(132131577214554));
console.log(cal(1321113577245461));
console.log(cal(1321113577245461));
console.log(cal(1321113577245461));
console.log(cal(1321311377521747));

function onn() {
  var x = "Hello";

  return function () {
    console.log(this);
  };
}

//const y = onn()();
