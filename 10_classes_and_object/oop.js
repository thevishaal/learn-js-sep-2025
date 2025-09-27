const user = {
    username: "john_doe",
    logincount: 5,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user details from db");
    }
}

console.log(user.username); 
console.log(user.getUserDetails());

