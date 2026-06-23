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
        let error = true
        if (!error){
            resolve({username: 'ray', password: '123'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(() => {
    console.log(username);
    
}).catch((error) => {
    console.log(error);
})

