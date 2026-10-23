//Practice 1: Array spread
// Your task:

// Create a new array called updatedCart that:
// - Keeps all the existing items.
// - Adds "Dosa" and "Idli".
// - Does not modify the original cart.

const cart = ["Pizza", "Burger"];

const updatedCart = [...cart, "dosa", "idli"]
console.log(updatedCart);
