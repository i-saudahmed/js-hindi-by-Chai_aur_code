/*
JavaScript is dynamically typed, which means that the interpreter assigns a variable's type at runtime based on the variable's value at the time. In other words, the variable type is determined when the program is running, rather than when it is compiled
*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber)


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// function return type of function but is actually a object function 
// and also if we store it in any variable it remains function 
