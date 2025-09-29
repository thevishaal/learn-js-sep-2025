// const user = {
//     username: "vishal baghel",
//     logincount: 5,
//     signedIn: true,

//     getUserDetails: function() {
//         //console.log("Got user details from db");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username); 
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
const date = new Date()        // new context - constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User('vishal', 21, true)
const userTwo = new User('baghel', 23, false)
console.log(userOne.constructor)
// console.log(userTwo)
