//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 1, 24)
// myCreatedDate = new Date(2025, 1, 24, 6, 3)
// let myCreatedDate = new Date('2025-02-23')
let myCreatedDate = new Date('01-06-2025')

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// `${newDate.getDate() and the time }`

newDate.toLocaleString('default',{
    weekday: 'long',
})














