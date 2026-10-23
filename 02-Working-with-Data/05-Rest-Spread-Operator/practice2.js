//Practice 2: Object spread 🍕
// Your task: Create a new object called updatedRestaurant that:
// 1. Keeps all the existing properties.
// 2. Changes the rating to 4.8.
// 3. Changes the city to "Mysore".
// 4. Does not modify the original restaurant.

const restaurant = {
  name: "Pizza House",
  rating: 4.2,
  city: "Bangalore",
};

const updatedRestro = {
    ...restaurant,
    rating:4.8,
    city:"Mysore"

}

console.log(updatedRestro);
