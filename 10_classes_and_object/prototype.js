// let myName = "vishal     "
// let channel = "chai      "
// // console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${thi.spiderman}`)
    }
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all objects`);  
}

Array.prototype.heyvishal = function(){
    console.log(`vishal says hello`);
}

// heroPower.vishal()
myHeros.vishal()
myHeros.heyvishal()
// heroPower.heyvishal()

// inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vishal            ".trueLength()