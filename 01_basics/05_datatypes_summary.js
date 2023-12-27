// 1.>primitive datatypes
// 7 types : String, Number, Boolean,null, undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3 // Number type
const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 3514236785412314n;
// console.log(typeof bigNumber);


// 2.> Reference type(non-primitive datatypes):
// : Array,Objects,Functions
const heros = ["shaktiman","naagraj","doga"]
let myObj ={
    name: "Aditya",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);





// --> JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// NOTE:
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

