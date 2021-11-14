let person={
    name:"hello",
    es6:()=>{
        // this.hello="hello"
        console.log(this,"in es6")
    },
    es5:function(){
        let r=()=>{
            console.log(this.name," in nested es5 arrow func")
        }
        r()
    }
}
person.es6()
person.es5()
// let f=person.es5
// f()
const arr=new Array(5).fill(new Array(5).fill(4))
console.log(arr)
function Person(){
    this.name="raj"
    this.age=50
    // return "he;;lp"
}
let k= new Person()
console.log(k)
