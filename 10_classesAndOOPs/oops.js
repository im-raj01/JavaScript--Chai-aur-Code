// Object literal

const user = {
    username: "raj",
    logInCount: 5, 
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details from DB")
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// const user2 = {
//     username: "raj",
//     logInCount: 5, 
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got User Details from DB")
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor:

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount =  loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this;
}

// const userOne = User("raj",12,true)
// const userTwo = User("chaiAurCode",11,false) // -> this will overwrite.

const userOne = new User("raj",12,true)
const userTwo = new User("chaiAurCode",11,false)

// console.log(userOne);
// console.log(userTwo);

// whenever a new keyword is used, firstofAll a empty object is created(called an instance)
// step2: constructor function is callled due to new keyword

console.log(userOne.constructor);

