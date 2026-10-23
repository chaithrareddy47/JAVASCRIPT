const student = {
    name:"asha",
    marks:85,
}

console.log(student.name)
console.log(student.marks);

//1. Object destructuring
const { name, marks } = student;
console.log(name);
console.log(marks);


//2. array destructuing
const fruits = ["Apple", "Mango", "Orange"]

const [fist, second, third] = fruits
console.log(fist);
console.log(second);
console.log(third);


const colors = ["red", "blue"]
const [one, two] = colors;

console.log(two);


