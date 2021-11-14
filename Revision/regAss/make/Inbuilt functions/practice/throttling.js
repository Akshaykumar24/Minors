let tCall=document.getElementById("t-call")
let c=0
function throttle(fn,wait){
    let lastCall=0
    return function(){
        console.log(c++)
        if(Date.now()-lastCall>wait){
            lastCall=Date.now()
            fn()
        }
    }
}
function makeApiCall(){
    console.log("making api call it may take some time")
}
let fn=throttle(makeApiCall,1000)
tCall.addEventListener("click",()=>{

    fn()
})