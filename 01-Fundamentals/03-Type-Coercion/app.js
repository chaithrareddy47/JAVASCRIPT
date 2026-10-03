let x = 10;
x = "hello";
x = true;
console.log(x);


/*
1. What type coercion means ⭐⭐⭐

Know this sentence:

Type coercion = JavaScript automatically or explicitly converts one data type into another.


2. Explicit vs implicit conversion ⭐⭐⭐

Explicit = you convert it yourself:
*/


// string conversion
console.log(String(123));
console.log(123 + "")


let age = 23;
let result = String(age)
console.log(result);

console.log(typeof result);

let anotherAge = "123";
let result1 = Number(anotherAge)
console.log(typeof result1);

console.log("23" + 1);
console.log("2" * 4);


let arr = [1, 2, 3, 4]
let arr1 = String(arr)
console.log(arr1);

let obj = {}
let results = String(obj)
console.log(results);

let isTrue = true;
console.log(isTrue);

let res = String(isTrue)
console.log(typeof res);


// number conversion 
let num = "123";
let res1 = Number(num)
console.log(typeof res1);

let a = "6";
let b = 2;


console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a / b);
console.log(a > b);

let empt = {};
console.log(Number(empt));






