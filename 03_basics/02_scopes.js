// let a = 10    // => Block Scope
// const b = 20  // => Block Scope
// var c = 30    // => Global Scope

let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log('Inner: ', a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);
// console.log(b);
// console.log(c);
