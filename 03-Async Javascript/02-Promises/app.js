//1. What is a Promise in JavaScript?
// A Promise is a JavaScript object that represents the eventual result of an asynchronous operation.

// const myPromise = new Promise((resolve, reject) => {
//     resolve("Food delivered!")
// })

// myPromise.then((value) => {
//     console.log(value);
    
// })

// const promise = new Promise((res,rej)=>{
//     res(5)
// })

// promise.then((value) => {
//     console.log(value * 2);
    
// })
// const promise = new Promise((res,rej)=>{
//     res(5)
// })

// promise.then((value) => {
//     return value * 2;
    
// }).then((res) =>{
//     console.log(res)
// })
// const promise = new Promise((res,rej)=>{
//     res(5)
// })

// promise.then((value) => { // new promise
//     return value * 2;
    
// }).then((res) =>{ // new promise 
//     return res + 2;
// }).then((res) => {
//     console.log(res);
    
// })

// function addMoney() {
//     return 100 + 50;
// }

// const total = addMoney();
// console.log(total);


// const promise = new Promise((res,rej)=>{
//     res(5)
// })

// promise.then((value) => { // new promise
//     console.log(value * 2);
    
    
// }).then((res) =>{ // new promise 
//     console.log(res + 2);
    
// }).then((res) => {
//     console.log(res);
    
// })

// what happens whn promise fails
const promise = new Promise((resolve, reject) => {
    let succes = false;

    if (succes) {
      resolve({
        value: 50,
        message: "task xompleted",
      });
    } else {
      reject("something went worng");
    }

    
})

promise.then((res) => {
    console.log(res.value);
    console.log(res.message);
    
    
}).catch((error) => {
    console.log(error);
    
})

async function getData() {
    return 50;
}

console.log(getData());

// async function getNumber() {
//     return 100;
// }

// getNumber().then((result) => {
//     console.log(result + 10);
    
// })


// async function getNumber() {
//     return 100;
// }

// async function displayNumber() {
//     const result = await getNumber()
//     console.log(result);
    
// }

// displayNumber()

function getData() {
    return new Promise((res) => {
        setTimeout(() => {
            res("Data Received")
        },10000)
    })
}

async function showData() {
    console.log("1.starting");
    console.log("2.starting");
    console.log("3.starting");

    const result = await getData()
    console.log("before data received");
    
    console.log("4.", result);
    console.log("5 finished");   
}

showData()

console.log(
    "next lines"
 );



