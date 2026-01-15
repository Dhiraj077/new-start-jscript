const user = {
    username: 'Dhiraj',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = 'Dhiraj'
//     console.log(this.username);

// }
// one()

// const chai = funtion () {
//     let username = 'Dhiraj';
//     console.log(this.username);
    
// }

// const chai = () => {
//     let username = 'Dhiraj';
//     console.log(this.username);
    
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // Implisit return

const addTwo = (num1, num2) => ({username: 'dhiraj'})

console.log(addTwo(3,4));

// const myArray = [2, 3, 4, 5, 6]
// myArray.forEach()

