//Type and Conversion of data types

let example = "100" // this is a string
console.log(typeof example) // string

// if we want to convert this string to a number we can use the Number() function
let example2 = Number(example) // this will convert the string to a number
console.log(typeof example2) // number

// if we want to convert a number to a string we can use the String() function
let example3 = String(example2) // this will convert the number to a string
console.log(typeof example3) // string 

// we can also use the + operator to convert a string to a number
let example4 = +example // this will convert the string to a number
console.log(typeof example4) // number    

// Nan + null 
let num = "22ab"
let num2 = Number(num) // this will return NaN (Not a Number)
console.log(num2) // NaN
console.log(typeof num2) // number (NaN is of type number)


let num1 = null
let num3 = Number(num1) // this will return 0
console.log(num3) // 0
console.log(typeof num3) // number (0 is of type number)

let num5 = undefined
let num6 = Number(num5) // this will return NaN
console.log(num6) // NaN
console.log(typeof num6) // number (NaN is of type number)







// True => 1
// False => 0

let isloogedIn = 1
console.log(Boolean(isloogedIn)) // true

let isloogedIn2 = 0
console.log(Boolean(isloogedIn2)) // false

// if left empty => boolean = false
let isloogedIn3 = ""
console.log(Boolean(isloogedIn3)) // false  

// if any nameor string then => boolean = true
let isloogedIn4 = "Pratyush"
console.log(Boolean(isloogedIn4)) // true 
