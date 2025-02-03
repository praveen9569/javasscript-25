//  sigleton


//object literals

//maximum times we access object element in form of dot operator   sometimes we use [] also i special cases 

const mysum = Symbol("key1");

const user = {
    name : "rahul",
    age:18,
    [mysum]:"mykey1", //syntax of defining of symbol of key in js
    "full name": "praveen kumamr nishad",
    work:"google",
    nation:"india",
    email: "rahul@gmail.com"
}

//how to object element acccess

// // console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"])
// console.log( user[mysum]);

user.email = "hitesh@google.com"
//Object.freeze(user)
// user.email = "hitesh@apple.com"

// console.log(user["email"])
user.greeting = function()
{
    console.log("hello i am here");
}
user.greeting2 = function()
{
    console.log(`hello i am here , ${this.name} `);
}

console.log(user.greeting());
console.log(user.greeting2());







