// Same values, different results
console.log(1 == "1"); // true  — loose equality converts types
console.log(1 === "1"); // false — strict equality checks type first


console.log(null == undefined);
console.log(null === undefined);

const a = {
    name:"a"
}

// const b = {
//     name:"b"
// }
const b = a;

console.log(a === b);

console.log(NaN === NaN);

