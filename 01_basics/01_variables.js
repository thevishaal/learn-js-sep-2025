const accountId = 144456
let emailId = "vishal@google.com"
var accountPassword = "12345"
accountCity = "Agra"
let accountState;   // when we not assign values, variables value is undefined.

// accountId = 3 // not allowed

emailId = "thevishaal@vi.com"
accountPassword = "21231213"
accountCity = "Delhi"

console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope

*/

console.table([accountId, emailId, accountPassword, accountCity, accountState])
