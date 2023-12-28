// array:

const myArr = [0,1,2,3,4,5];
// console.log(myArr);

let Arr = [5,6,9,"Adi","raj","thanos"]; // -->JavaScript arrays are resizable and 
                                    //  can contain a mix of different data types.
// console.log(Arr);
// console.log(Arr[0]);

// other ways to create array:
const myArr2 = new Array(1,2,3,4)

//Array Methods:
myArr.push(9) // add element to last of the array
myArr.push(7)
myArr.pop() // delete an element at last index of array

myArr.unshift(8)// add an element at first index
myArr.shift() // delete element at first index
myArr.shift()

// console.log(myArr.includes(25));
// console.log(myArr.includes(4));
const newArr = myArr.join() // convert arr to string 
// console.log(myArr);
// console.log(newArr);

// slice && splice:
console.log("A: ",myArr);

let myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B: ",myArr);

let myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C: ",myArr);
// what is the main diff between slice and splice