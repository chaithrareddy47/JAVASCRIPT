//1. What is a Promise in JavaScript?
// A Promise is a JavaScript object that represents the eventual result of an asynchronous operation.

const myPromise = new Promise((resolve, reject) => {
    resolve("Food delivered!")
})

myPromise.then((value) => {
    console.log(value);
    
})