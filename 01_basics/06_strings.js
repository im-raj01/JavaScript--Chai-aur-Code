const name = "raj"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('adit-ya');
// stores in key value pair
// console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "     aditya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('raj'));

let gameName2 = "adit-ya-raj-singh";

console.log(gameName2.split('-'));