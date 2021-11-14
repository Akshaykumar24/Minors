// let data=[1,-1,0]
// let n=data.length
// for(let i=0;i<n;i++){
//     let res=[]
//     for(let j=i;j<n;j++){
//         res.push(data[j])
//         let f=res.reduce((prev,current)=>prev+current)
//         if(f==0){
//             console.log(res,"res")
//         }   
//     }
// }

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    getName(){
        console.log(this.name)
    }
}
class Admin extends Person{
    constructor(name,age,role){
        super(name,age)
        // super(age)
        this.role=role
    }
}
class Instructor extends Admin{
    constructor (name,age,role,subject){
        super(name,age,role)
        this.subject=subject
        this.normal="normal"
    }
}
let data=[new Person("akshay",22),new Person("mahesh",24),new Person("rushikesh",24)]
let ages=data.reduce((a,b)=>{
    return a+=b.age},0)
console.log(ages)
let admin=new Admin("rajesh",85,"devops")
console.log(admin,"admin")
admin.getName()
let ins=new Instructor("dhawal",40,"vp","backend")
console.log(ins)
