function makeApiCall(arg){
    console.log(arg,"came in")
    console.log("calling network this may take some time wait")
}
// let c=0
const debouncer=(fn,delay)=>{
    let debouncing;
    return (query)=>{
        // console.log(c++)
        console.log(debouncing,"debouncing val")
        debouncing&&clearTimeout(debouncing)
        debouncing=setTimeout(()=>fn(query),delay)
    }
}
let apiCall=document.getElementById("api-call")
let fn=debouncer(makeApiCall,500)
// console.log(apiCall)
let arr=[1,2,3,4,5,6,7]
let ind=0
apiCall.addEventListener("click",()=>{
    fn(`query${arr[ind]}`)
    // ind>=arr.length?ind=0:ind++
})