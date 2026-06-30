// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User('yuvi', 'sdf@gf.com', '123')
// console.log(user.encryptPassword());
// console.log(user.changeUsername());


// Behind the scene -V

function User(username, email, password){
    this.username = username;
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const player = new User('yuri', 'yuri@mail.com', '123')

console.log(player.encryptPassword());
console.log(player.changeUsername());




