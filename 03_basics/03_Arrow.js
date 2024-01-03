const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()

// console.log(this); // empty object. but in inspect of browser it is window

// function chai(){
//     let username = "aditya"
//     // console.log(this)
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "aditya"
//     console.log(this.username);
// }

const chai = () => {
    let username = "aditya"
    console.log(this);
}

// chai()
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) =>  (num1+num2) // implicit return

const addTwo = (num1,num2) =>  ({username: "aditya"})


console.log(addTwo(3,4));

const myArray = [2,5,3,7,8]

// myArray.forEach()

