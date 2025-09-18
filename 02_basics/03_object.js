// Singleton
// Object.create 

// object literals

const mySym = Symbol("key1")
// console.log(typeof mySym);


const Jsuser = {
    name: "Vishal",
    "full name": "Vishal Baghel",
    [mySym]: "mykey1",
    age: 20,
    location: "Agra",
    email: "vishal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(typeof Jsuser["full name"]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "vishal@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "vishal@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user"); 
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
