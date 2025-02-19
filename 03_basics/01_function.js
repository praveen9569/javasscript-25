function hello()
{
    console.log("hello");
}

//hello();
// function add(number1,number2) // in function defenition we called the parameter and in function calling we called the aargument
// {
//     console.log(number1+number2);
// }
// add(2,"a");

// function user(username)
// {

//     return `${username} just logged in `

// }
// console.log(user("praveen"));

// function cart(...num1) ///here triple dot is called the rest operator and the spread operator
// {
//     return num1
// }
// console.log(cart(6,8,10))

//  const user ={
//     name: "rahul",
//     age : 25
// }

// function objectpass(object)
// {
//     console.log(`${user.age}  and ${user.name}`)

// }
// objectpass(user);

const array =[1,2,3,45];
function arrayob(ab)
{
    return array[0];
}
console.log(arrayob(array));