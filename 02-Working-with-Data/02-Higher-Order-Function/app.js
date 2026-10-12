/*
1. First, what is a higher-order function?
A higher-order function (HOF) is a function that does at least one of these two things:
1. Accepts another function as an argument.
2. Returns another function.
*/

//Case 1: A function accepts another function

function greet() {
    console.log("Hello Bro");
    


}

function doSomething(callBack) {
    callBack()
}

doSomething(greet)


//Case 2: A function returns another function
function outer() {
    function inner() {
        console.log("Hello bro");
        
    }
    return inner;
}

const result = outer();

result();

// normal function
function add(a, b) {
    return a + b;
}

const sum = add(2, 4)
console.log(sum);
