function printJob(work,place){
    console.log(`${this.name} whose age ${this.age} works as ${work} at ${place}`)
}

let mahesh={
    name:"mahesh",
    age:22
}
let akshay={
    name:"akshay",
    age:23
}
printJob.call(mahesh,"SDE1","dream11")

printJob.apply(akshay,["SDE2","dream11"])

let methodThatwillbeCalledLater=printJob.bind(akshay,"SDE2","dream11")
methodThatwillbeCalledLater()



