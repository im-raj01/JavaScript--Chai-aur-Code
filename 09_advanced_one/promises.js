// fetch('https://something.com').then().catch().finally();

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB CALLS, cryptography related , network 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "raj", email: "raj@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// error 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"aditya", email: "aditya@gmail.com"})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },1000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

//async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"JavaScript", email: "chai@gmail.com"})
        }
        else{
            reject('ERROR: Something Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: " ,error);
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data)=>{
    console.log(data);
})
.catch( (error) => console.log(error))