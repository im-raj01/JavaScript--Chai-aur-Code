const accountId = 144553
let accountEmail = "raj@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;
// accountId = 2
accountEmail = "aditya@gmail.com"
accountPassword = "56656"
accountCity = "Bengaluru"
console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);