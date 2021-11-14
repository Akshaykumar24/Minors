let set=new Set()
set.add(1)
set.add(55)
set.add("mahesh")
set.add("akshay")
set.add("rushikesh")
//  set.clear() it clears the set wipes out everything from set
set.delete(55) //it deletes an item from the set
console.log(set.entries()) //it shows the entries
set.forEach(item=>console.log(item)) //we can use forEach also on the set
console.log(set.has(1)) //tells wheather we have the item in the set or not
console.log(set.size)//length of set
console.log(set.values());//sets values
console.log(set)
for(let key of set){ //looping through the set
    console.log("hello")
}
const myArr = Array.from(set) //conversion of set to array

console.log(myArr)


