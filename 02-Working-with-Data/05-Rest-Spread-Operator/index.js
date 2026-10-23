const fruits = ["Apple", "Mango", "Orange"];
const newFruits = [...fruits, "grapes"]

console.log(newFruits);
console.log(fruits);


const restaurants = ["Pizza House", "Dosa Corner"];

// const updatedRestaurants = [...restaurants, "BurgerSpot"]
const updatedRestaurants = [restaurants, "BurgerSpot"]

console.log(updatedRestaurants);
console.log(restaurants);

const a = [1, 2, 3]
const b = [4, 5, 6]

const result = [...a, ...b]
console.log(result);
console.log(a);
console.log(b);


const cart = ["Pizza", "Burger"]
const updatedCart = [...cart, "dosa", "idli"]


console.log(updatedCart);


//spread with objects





