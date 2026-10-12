const nums = [1, 2, 3, 4]
const result = nums.map((num) => {
    return num * 2;
    
})

console.log(result);


const user = [
    {
        name: "anu", age: 22,
    },
    {
        name: "ravi", age: 22,
    },
    {
        name: "sam", age: 22,
    }
]

const names = user.map((userNames) => {
    return userNames.name
})

console.log(names);
