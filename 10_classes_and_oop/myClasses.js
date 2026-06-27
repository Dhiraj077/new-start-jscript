// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User('yuvi', 'sdf@gf.com', '123')
console.log(user.encryptPassword());
console.log(user.changeUsername());


// Behind the scene -V


