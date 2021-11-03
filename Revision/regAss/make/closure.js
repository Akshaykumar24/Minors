function callHere(n) {
  let memo = {};
  return function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) return (memo[n] = false);
    }
    return (memo[n] = true);
  };
}

console.log(callHere(1321311357755242)());
console.log(callHere(1321311366657721)());
console.log(callHere(132131577214554)());
console.log(callHere(1321113577245461)());
console.log(callHere(1321113577245461)());
console.log(callHere(1321113577245461)());
console.log(callHere(1321311377521747)());

function onn() {
  var x = "Hello";

  return function () {
    console.log(this);
  };
}

const y = onn()();
