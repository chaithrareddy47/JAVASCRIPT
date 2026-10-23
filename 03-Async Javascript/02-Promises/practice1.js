const promise = new Promise((res,rej) =>{
    res(100)
})

promise.then((data) => {
    console.log(data + 50);
    
})