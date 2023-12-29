// Singleton -- when objects are created using constructor
// method = object.create

// object literals (non-singleton)

// create symbol(datatype)
const mySymb = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya raj",
    [mySymb]:"mykey1",
    age: 18,
    location:"Patna",
    email:"aaditya@google.com",
    isLoggedIn:false, // dt : boolean
    lastLoggedIn: ["Monday","Tuesday"] // datatype : object
}

// Access the object prop
// console.log(JsUser.name);
// console.log(JsUser ["name"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.email);
// console.log(typeof JsUser["email"]);
// console.log(typeof JsUser.isLoggedIn);
// console.log(typeof JsUser["lastLoggedIn"]);

// console.log([JsUser["age"]]);
// console.log(JsUser);
// console.log(typeof JsUser[mySymb]); // note - for accessing symbol in objects

JsUser.email = "aaditya@microsoft.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser) // so that object can't be modified
// JsUser.email = "aaditya@amazon.com"
// console.log(JsUser["email"]);

//fuction to object property:
JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



