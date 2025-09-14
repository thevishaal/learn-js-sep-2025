// Primitive datatype

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTamp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 33242213524354623n


// Reference (Non primitive)

// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vishal",
    age: 20
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof null);
