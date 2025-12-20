const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // to convert it into string
// console.log(balance.toString().length); // adding properties, i.e, can check string properties

// console.log(balance.toFixed(2));

// const otherNumber = 23.8966 // gives result 23.9
// const otherNumber = 123.8966 // gives result 124
const otherNumber = 123.8966 // gives result 1.2e+2, if precision value is reduce to 2 => (123 have 3 value)

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());// default gives US value
// console.log(hundreds.toLocaleString('en-IN')); // gives Indian Value results

// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4)); // absolute value function
// console.log(Math.round(4.7)); // round off result function
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.pow(3, 4));
// console.log(Math.min(2, 5, 1, 6));
// console.log(Math.max(8, 4, 6, 2));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);














