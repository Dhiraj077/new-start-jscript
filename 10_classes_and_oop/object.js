function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/* what is new?

In JavaScript, the `new` keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. When you use `new`, it does the following:
1. Creates a new empty object.
2. Sets the prototype of the new object to the constructor function's prototype.
3. Binds `this` to the new object within the constructor function.
4. Executes the constructor function, allowing it to initialize properties on the new object.
5. Returns the new object, unless the constructor function explicitly returns a different object.

In the example above, when you call `new createUser('chai', 25)`, it creates a new instance of `createUser`, initializes its properties (`username` and `score`), and allows you to use methods defined on its prototype, such as `increment` and `printMe`.    

 */




