// singleton


// Object.create

// object literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Dhiraj',
    'full name': 'Dhiraj Thakare',
    [mySym]: 'mykey1',
    age: '24',
    location: 'Delhi',
    email: 'sadasd@google.com',
    isLoggedIn: false,
    lastLoggedinDays: ['Monday', 'Saturday']
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'fsdfdsfgr@gpt.com'
Object.freeze(JsUser)
JsUser.email = 'vrevwwe@micro.com'
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS users');
}

console.log(JsUser.greeting);





