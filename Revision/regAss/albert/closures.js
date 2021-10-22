/*
closures
currying
why do we need them
applications
*/

// a mechaniasm in which js maintains scope of some var if the particular
//var goes out of scope of the

// works on functions

// function outer() {
//   var a = 10;
//   return function inner(b) {
//     return a + b;
//   };
// }

// var fn = outer();
// console.log(fn(5));
// console.log(outer()(10));---> Currying

//redux, connect=> higher order components
/////////////////////////////////////////////////////////////
// function calc(init = 0) {
//   var value = init;
//   function add(val) {
//     value += val;
//     return value;
//   }
//   return { add };
// }

// var c = calc();
// console.log(c.add(10));
// console.log(c.add(20));

// Can be used for memoization
// to get the prime numbers
///////////////////////////////////////////////////////////////////

// Debouncing
/*
const apiCall = () => {
  console.log("Call in progress");
};

const debouncer = (fn, delay) => {
  let debouncing;
  return function () {
    debouncing && clearTimeout(debouncing);
    debouncing = setTimeout(() => fn(), delay);
  };
};
*/

// Throttling
// guarantees a callback at every timeout set
/*
const throttler = (fn, wait) => {
  // keeping this value in memory // Memoization
  var lastCall = 0;
  return function () {
    // Presnt time and last call made
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fn.apply(this, arguments);
    }
  };
};
*/

/*
window.addEventListener("load", function () {
  var deb = document.getElementById("debounce");
  deb.addEventListener("click", debouncer(apiCall, 1000));
  var throt = document.getElementById("throttle");
  throt.addEventListener("click", throttler(apiCall, 1000));
});
*/

///////////////////////////////////////////////////////////////////

// Toggler - Memoize
/*
function toggler() {
  var arr = arguments;

  // Memoize the index here
  var index = -1;
  return function () {
    index++;
    if (index > arr.length - 1) {
      index = 0;
    }
    return arr[index];
  };
}

const toggle = toggler(1, 2, 3);
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
*/

///////////////////////////////////////////////////////////////

// setTimeOut()

var arr = [1, 2, 3, 4, 5];

//// Wrong
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i, arr[i]);
//   }, i * 1000);
// }

//// Right
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i, arr[i]);
//   }, i * 1000);
// }

//// Right, no need of call apply or anyhting
// function display(i) {
//   setTimeout(function () {
//     console.log(i, arr[i]);
//   }, i * 1000);
// }

// need to use .apply
/*
function display(i) {
  setTimeout(() => {
    console.log(i, this[i]);
  }, i * 1000);
}
for (var i = 0; i < arr.length; i++) {
  display.apply(arr, [i]);
}
*/
/*
// For Call
function display(i) {
  setTimeout(() => {
    console.log(i, this[i]);
  }, i * 1000);
}
for (var i = 0; i < arr.length; i++) {
  display.call(arr, i);
}
*/
/*
//// Using Bind
// function display(i) {
//   setTimeout(
//     function () {
//       console.log(i, this[i]);
//     }.bind(this),
//     i * 1000
//   );
// }

// for (var i = 0; i < arr.length; i++) {
//   display.call(arr, i);
// }
*/ /////////

//// Using that to refer to the this
// function display(i) {
//   var that = this;
//   setTimeout(function () {
//     console.log(i, that[i]);
//   }, i * 1000);
// }

// for (var i = 0; i < arr.length; i++) {
//   display.call(arr, i);
// }

// connect component in redux
// hooks
