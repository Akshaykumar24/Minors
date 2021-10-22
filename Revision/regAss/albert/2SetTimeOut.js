// var arr = [1,2,3,4,5]

// for(var i=0; i<arr.length; i++){
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// console.log('value of i after for loop',i)

// expected
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

// value is
// undefined 5 -> 5 times -> 1 sec intervals

// IIFE

// for(var i=0; i<arr.length; i++){
//   setTimeout(function(i){
//        return function(){
//       console.log(arr[i],i)
//     }
//   }(i),i*1000)
// }

// function display(i){
//   setTimeout(()=>console.log(this[i],i),i*1000)
// }

// for(var i=0; i<arr.length; i++){
//   display.call(arr,i)
// }

// for(let i=0; i<arr.length; i++){
//     //   locally scoped
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// // closures, scopes, eventloop, call,apply,bind/functions

// Extra questions on closures:

// write function for sum(5)(10)(2)

// What is debouncing? Write a function to explain debouncing?

// DE-BOUNCING: EXTRA

// minimise the no api requsest
//

const debounce = (func, delay) => {
  // if the request or call is not interrupted for delay milliseconds
  // then the function should be fired
  let debouncing;
  return function () {
    clearTimeout(debouncing);
    debouncing = setTimeout(() => func.apply(this, arguments), delay);
  };
};

// 'use strict'

// function test(){
//     console.log(this)
// }

// test()

// 'key,value,pair,javascript'
// {key:{value:{pair:{javascript:{}}}}}

// for loop

// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var obj = {}
// obj[arr[arr.length-1]] = {}
// for(var i=arr.length-2;i>=0; i--){
//     obj[arr[i]] = {...obj}

//     delete obj[arr[i+1]]
// }

// console.log(obj)

// 'key,value,pair,javascript'
// {key:{value:{pair:{javascript:{}}}}}

// // for loop

// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var rec = (arr,i=0,obj={}) => {
//   if(i===arr.length){
//     return obj
//   }
//   else{
//       obj[arr[i]] = rec( arr, i+1 )
//       return obj
//   }
// }

// // recursion
// var str = 'key,value,pair,javascript'

// var arr = str.split(',')

// var obj = {}

// // recursion

// var rec =( arr , i=0 , obj={}) => !arr[i] ? obj : { [arr[i]]: rec(arr,i+1) }

// console.log( rec(arr) )
