"use strict"; // Treat all JS code as newer version

// alert(3+3) // we are using nodejs so alert will not work, it is used in browser

// spaces logic ";"
// console.log(3+3)

// better make the code readability

// if we wanted to wrtie multiple statements in one line we can use ";"
// console.log(3+3); console.log(4+4); console.log(5+5)



// DATA TYPES IN JS
// String
let name = "Pratyush"
// integer
age = 18 //(this is in var form)
//Boolean
let isLoggedIn = true 


/* 
integer limit -> 2^53
BigInt
String = > " " 
null  (representation of an empty value)
undefined (when we declare a variable but do not assign any value to it, it is undefined)
symbol => unique(used to create unique identifiers for objects)

*/


// object

consol.log(typeof name) // string
console.log(typeof "Pratyush") // string

console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean

console.log(typeof null) // object (this is a bug in JS, it should be null)
console.log(typeof undefined) // undefined