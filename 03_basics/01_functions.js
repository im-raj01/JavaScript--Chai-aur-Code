function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");

}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,"a5");

function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result;
}

let ans = addTwoNumbers(3,"5a");
// console.log("result is: ", ans);

function logInUserMsg(username = "raj"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`;
}

// console.log(logInUserMsg());
// console.log(logInUserMsg("aditya"));

//... yahan pe rest operator kahte hain
function calculateCartPrice(val1, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,700));

const user = {
    username: "aditya",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "raj",
//     price: 399
// })

const myNewArray = [200,400,600,800]

function returnSecondValue(anyArray){
    console.log(anyArray[1]);
}

returnSecondValue(myNewArray)
returnSecondValue([1,2,3,4,5,6])



