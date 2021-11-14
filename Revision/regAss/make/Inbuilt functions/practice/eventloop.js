console.log("sync1");
async function p() {
  await Promise.resolve();
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000000) i++;
    resolve("promise done");
  });
}

p().then((h) => console.log(h, "h"));
console.log("sync2");
// // end
// let promise1 = () => {
//   return Promise.resolve(200);
// };
// let promise2 = () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("timedone");
//     }, 500);
//   });
// };
// promise1()
// promise1()
// promise1()
// Promise.all([promise1(),promise2()]).then((res)=>{
//     console.log(res)
// })
// let btn=document.getElementById("loop")
// console.log(btn);
// btn.addEventListener("click",function clicky(){
//     resolve()
// })
// function resolve(){
//     Promise.resolve().then((res)=>{
//         console.log("running in microtask")
//         resolve();
//     })
// }

// const curry=(a,b,c)=>a=>b=>a+b+c
