// function add(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
    
    
    
// }

// add(10, 20, 30, 4, 5, 6, 7, 8, 9)

// function fruits(first, ...others) {
//     console.log(first);
//     console.log(others);
    
    
// }

// fruits("Apple", "Mango", "Orange", "Grapes");


// const numbers = [10, 20, 30]
// const copy = [...numbers]
// console.log(copy);

// const result = [5, ...numbers, 40]
// console.log(result);


const cart = ["pizza", "burger"]
const updatedCart = [...cart, "Dosa"]
console.log(updatedCart);

const [firstItem, ...otherItems] = ["food", "burger", "Dosa"]
console.log(firstItem);
console.log(otherItems);

 

