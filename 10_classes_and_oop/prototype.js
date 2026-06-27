// let myName = "John Doe";
// let myFile = 'sorted    '

// console.log(myName.length); // Output: 8

let myCars = ['Tata', 'Ferrari']

let carStats = {
    Tata: 'Safety',
    Ferrari: 'Speed',

    getTataStats: function(){
        console.log(`Tata stats is for ${this.Tata}`);
    }
}

Object.prototype.dhiraj = function(){
    console.log(`dhiraj is present in all objects`);
    
}

Array.prototype.heydhiraj= function(){
    console.log(`Dhiraj says Hello`);
}

// carStats.dhiraj()
myCars.dhiraj()
myCars.heydhiraj()
// carStats.heydhiraj()


// inheritence

const User = {
    name: 'dhiraj',
    email: 'sfsdfsdsf@mail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignmen: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'Tech   '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
