const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    signedIn: true,
    
    getUserDetails: function() {
        // console.log('Got user details from database');
        console.log(`Username: ${this.username}, Email: ${this.email}, Signed In: ${this.signedIn}`);
        console.log(this); // this will refer to the user object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // this will refer to the global object (window in browsers, global in Node.js)

// Constructor function information
function User(username, loginCount, isLoggedIn) {
    this.username = username; // this will refer to the new object being created
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
   
    return this; // this will refer to the new object being created
}

const userOne = new User('Alice', 5, true); // calling the constructor function without 'new' keyword, this will refer to the global object
const userTwo = new User('Bob', 10, false); // using 'new' keyword to create a new instance of User
console.log(userOne); // undefined, because we didn't use 'new' keyword
console.log(userTwo); // { username: 'Bob', loginCount: 10, isLoggedIn: false }
console.log(userOne.constructor); // [Function: User]   