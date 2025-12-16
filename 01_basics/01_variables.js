const accountId = 123335
let accoutEmail = "dhiraj@gooole.com"
var accountPassword = "123435"
accountCity = "Mumbai"
let accountState

//accountId = 23 // not allowed

accoutEmail = "dsa@dsfds.com"
accountPassword = "dsfsdf"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accoutEmail, accountPassword, accountCity, accountState])
