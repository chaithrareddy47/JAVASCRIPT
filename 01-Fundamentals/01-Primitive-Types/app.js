/*
 JavaScript’s 7 primitive types: string, number, bigint, boolean, undefined, null, and symbol. Understand immutability, typeof quirks, and autoboxing

 These seven primitive types are the foundation of all data in JavaScript. Unlike objects, primitives are immutable (unchangeable) and compared by value. 
*/

// javascript has 7 primitive data types

const str = "hello"; // string
const num = 43; // number
const big = 900020837389292n // bigint
const bool = true; // boolean
const undef = undefined; // undefined 
const nul = null;//null
const sym = Symbol("id");// symbol

console.log(typeof str)// string


// 1. Immutable - Values Cannot Be Changed
let personName = "Alice";
personName.toUpperCase();
console.log(personName);


let a = "hello";
let b = "hello";
console.log(a === b); // returns true


let obj1 = {
    text :"hello"
}

let obj2 = obj1; // compared by refernce

// let obj2 = {
//     text: "hello"
// }  this is different object 

console.log(obj1 === obj2);


// strings  - A string represents text data: a sequence of characters.

// 3 ways to create strings 
let single = 'hello';
let double = "hello";
let backtick = ` hello`; // template literal es6

console.log(single);
console.log(double);
console.log(backtick);


//Strings Are Immutable
// You cannot change individual characters in a string:

single[0] = "H"
console.log(single);  // does nothing  no erroe but no change


// number - has only one number type  for both interger and decimals  all number are stored in 64bit floating paont


let integer = 42;
let decimal = 3.14;
let negaive = -10;
let dcientific = 2.5e6;

// specia; number values 
console.log(1 / 0); // imfinity

console.log("hello" * 2); // nan not a number


// Boolean has exactly two values: true and false.
let isLoggedIn = true;
let hasPermission = false;


/*
 Truthy and Falsy
 When used in boolean contexts (like if statements), all values are either “truthy” or “falsy”:

 // Falsy values (only 8!)
false
0
-0
0n        // BigInt zero
""        // Empty string
null
undefined
NaN

Everything else is truthy
"hello"   // truthy
42        // truthy
[]        // truthy (empty array!)
{}        // truthy (empty object!)
 */



// undefined
// undefined means “no value has been assigned.” JavaScript uses it automatically in several situations:

let x; // declared but not assigned
console.log(x); // undefined


// null
// null means “intentionally empty”. You’re explicitly saying “this has no value.”
