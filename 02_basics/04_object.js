// const tinder  = new Object();  //singelton object

// const tinder = {}   //non-singleton object

// console.log(tinder);


const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
const obj3 = {7:"g",8:"h",9:"j"}

//const obj4 = {...obj1,...obj2,...obj3}; --> spread operator
const obj4 =Object.assign({},obj1,obj2,obj3)
console.log(obj4)
console.log(Object.keys(obj4))
console.log(Object.values(obj4))


 