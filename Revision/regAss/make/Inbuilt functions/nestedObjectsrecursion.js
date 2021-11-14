let str="key,value,pair,javascript"
let arr=str.split(",")
let data=str.split(",")
let globalObj={}
// for(let i=arr.length-1;i>=0;i--){
//     let obj={[arr[i]]:globalObj}
//     globalObj=obj
// }
// console.log(globalObj,"globalObj")
function solve(arr,obj){
    if(arr.length===0) return obj
     let newObj={[arr[arr.length-1]]:obj}
     console.log(arr,typeof arr,obj)
    //  arr.splice(arr.length-1)
     arr.pop()
     return solve(arr,newObj)
}
// data=data.reverse()
// console.log(data,"data ")
let ans=solve(data,{})
console.log(ans,"ans")
