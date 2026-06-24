const promiseOne = new Promise(function (resolve, reject){
    //Do an aync task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)

})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)

}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setInterval(function(){
        resolve({username: 'John', email:'john@mail.com'})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);  
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // when true will run reject line...
        if (!error){
            resolve({username: 'ray', password: '123'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log('The Promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: 'jason', password: '123'})
        } else {
            reject('Error: Value went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
       const response = await promiseFive 
    } catch (error) {
       console.log(response)
    }   
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);   
//     } catch (error) {
//         console.log('E: ', error)
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch(() => console.log(error))



