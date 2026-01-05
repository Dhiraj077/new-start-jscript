function sayMyName() {
    console.log('D');
    console.log('H');
    console.log('I');
    console.log('R');
    console.log('A');
    console.log('J');
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2) {    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(4, 6)
// console.log("Result:", result);


// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dhiraj"));
// console.log(loginUserMessage("Dhiraj"));

// Scope & Execution Flow for loginUserMessage('Dhiraj')

// Global Scope
// ┌───────────────────────────┐
// │ console (global object)   │
// │ loginUserMessage (func)   │
// └─────────────┬─────────────┘
//               │
//               │ call loginUserMessage('Dhiraj')
//               ▼
// Function Scope: loginUserMessage
// ┌───────────────────────────┐
// │ Parameter: username = 'Dhiraj'  <-- first checked
// │ Local variables: none yet
// └─────────────┬─────────────┘
//               │
//               │ Check if (!username)
//               ▼
//        username is 'Dhiraj' (truthy)
//        ┌───────────────────────────┐
//        │ Falsy check fails → skip │
//        └─────────────┬─────────────┘
//                      │
//                      │ Execute return statement
//                      ▼
//        return `${username} just logged in` → "Dhiraj just logged in"
//                      │
//                      ▼
// Back to Global Scope
// ┌───────────────────────────┐
// │ console.log("Dhiraj just logged in") │
// │ Print output: Dhiraj just logged in │
// └───────────────────────────┘

// **************************************************//

// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500)); // output: [200, 400, 500]

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // val1:200, val2:400, rest is num1


const user = {
    username: "Dhiraj",
    price: 100
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)
handleObject({
    username: "Peter",
    price: 399
})

const myNewArray = [200, 400, 500, 6000]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // output: 400
console.log(returnSecondValue([200, 400, 500, 6000])); // same output

