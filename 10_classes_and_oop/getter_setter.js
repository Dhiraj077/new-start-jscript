class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value 
    }

    // get password(){
    //     return this._password.toUpperCase()
    // }

    get password(){
        return `${this._password}joy`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const log = new User('hey@hh.com', 'sda22')
console.log(log.password);
console.log(log.email);
