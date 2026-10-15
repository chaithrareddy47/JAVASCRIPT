const user = {
    name: "akshay",
    age: 22,
    place:"bangalore"
}

// without destructuing 
// const name = user.name;
// const age = user.age;

// console.log(name);
// console.log(age);

// with destructuing

const { fisrtName, age } = user;
console.log(fisrtName);
console.log(age);

const arr = [1, "strings"]
const [fisrt, second] = arr;
console.log(fisrt);
console.log(second);



// optional chianing
//The key idea: If the value immediately before ?. is null or undefined, JavaScript stops that property access and returns undefined.

const restaurant = {
    name: "meghana",
    ratings: 4.5
}

    console.log(restaurant?.info?.name);
    console.log(restaurant.name);
    

