function outer() {
  var a = 10;
  let b = 5;
  const c = 4;
  return function (d) {
    return a + d;
  };
}
// console.log(outer()(100))

function calculatePrime() {
  const cache = {};
  function prime(num) {
    // console.log(cache,"at",num)
    if (num in cache) return cache[num];
    console.log("calculating for", num);
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return (cache[num] = false);
      }
    }
    return (cache[num] = true);
  }
  return { prime: prime };
}
let calc = calculatePrime();
// let form = document.getElementById("form");
// document.getElementById("btn").addEventListener("click", (e) => {
//   e.preventDefault();
//   let val = form.inp.value;
//   // console.log(val,"val")
console.log(calc.prime(4));
console.log(calc.prime(1321311366657721));
console.log(calc.prime(13213113666577214));
console.log(calc.prime(1321311366657721));
//});
