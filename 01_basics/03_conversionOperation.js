let score = "45ac" 

// let score = 45 Result => number
// let score = "45sf" Result => NaN
// let score = null Result => 0
// let score = undefined Result => NaN
// let score = true/false Result => 1/0

console.log(typeof score);
console.log(typeof(score));

let valueINNumber = Number(score)
console.log(typeof(valueINNumber));
console.log(valueINNumber);

let isLoggedIn = "Dhiraj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Dhiraj" => true

let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************* Operations ******************

let value = 3

let negvalue = -value

// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hey"
let str2 = " buddy"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 3);
// console.log(1 + "3");
// console.log("1" + 3 + 3);
// console.log(1 + 3 + "4");

// console.log((3 + 4) * 3 % 8);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter);














