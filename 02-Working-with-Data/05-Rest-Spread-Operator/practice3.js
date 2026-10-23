//🔥 Practice 3 — A little challenge!
//Your task: Create updatedUser so that:
// - All existing properties are preserved.
// - age becomes 23.
// - A new property job: "Developer" is added.
// - The original user stays unchanged.

const user = {
  name: "Ravi",
  age: 22,
  city: "Bangalore",
};

const updatedUser = {
    ...user,
    age: 23,
    job: "developer",
    
}

console.log(updatedUser);
console.log(user);

