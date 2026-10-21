// Practice 1: filter() + arrow functions

const restaurants = [
  { name: "Pizza House", rating: 4.5 },
  { name: "Burger Spot", rating: 3.7 },
  { name: "Dosa Corner", rating: 4.2 },
  { name: "Cafe Day", rating: 3.5 },
];

// task 2  Your task: Use filter() to get restaurants with a rating greater than 4, then use map() to get only their names.

const res = restaurants.filter((data) => {
    console.log(data);
    
    const topRated = data.rating > 4;  
    return topRated
})


const names = res.map((data) => {
    return data.name.toUpperCase
})

console.log(names);


// const newRes = restaurants.filter((resData) => {
//     //  console.log(resData.rating > 4);
//     return resData.rating > 4;
     
// })

// console.log(newRes);
// // console.log(restaurants);

// const resNames = restaurants.map((data) => {
//     // console.log(data.name);
//     return data.rating
    
// })

// console.log(resNames);





