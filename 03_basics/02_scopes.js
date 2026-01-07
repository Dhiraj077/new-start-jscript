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

function one() {
    const username = "Dhiraj"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if (true) {
    const username = "Dhiraj"
    if (username === "Dhiraj") {
        const website = ' youtube'
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++ Interesting ++++++++++++++++++++++++//

// function addone(num) {
//     return num + 1
// }

// addone(5)

addOne(5)

function addOne(num) {
    return num + 1
}

const addTwo = function (num) {
    return num + 2
}

addTwo(5)

