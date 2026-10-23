// const promise = new Promise((res, rej) => {
//     res(10)
// })

// promise.then((value) => {
//     return value *2
// }).then((result) => {
//     console.log(result + 5);
    
// })

// Promise.resolve(5).then((value) => {
//     return value + 3
// }).then((result) => {
//     return result * 2;
// }).then((finalValue) => {
//     console.log(finalValue);
    
// })

// console.log("start");
// setTimeout(() => {
//     console.log("after 1 second");
    
// }, 1000)

// console.log("after set timeout");

const fetchValue = fetch("/api/get-data");
console.log(fetchValue);

fetchValue.then((res) => {
    // console.log(res);
    return res.json();
    
}).then((json) => {
    console.log(json);
    
})


