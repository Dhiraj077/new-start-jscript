// const tinderUser = new Object() - singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = '123abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'some@mail.com',
    fullname: {
        userfullname: {
            firstname: 'Sam',
            lastname: 'jones'
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: 'g@mail.com'
    },
    {
        id: 1,
        email: 'g@mail.com'
    },
    {
        id: 1,
        email: 'g@mail.com'
    },
    {
        id: 1,
        email: 'g@mail.com'
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object De-Structure and JSON API intro

const course = {
    coursename: 'JS Course',
    price: '999',
    courseInstructor: 'hitesh'
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(instructor);

// ----------- API ------------------

// Json
// {
//     'name': 'hitesh',
//     'coursename': 'JS course,
//     'price': 'free'
// }

// [
//     {},
//     {},
//     {}
// ]




