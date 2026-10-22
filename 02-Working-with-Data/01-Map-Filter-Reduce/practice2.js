// Use find() to get the first student who scored more than 60 from the same array
const students = [
  { name: "Asha", marks: 85, message:"distiction" },
  { name: "Ravi", marks: 55 },
  { name: "Priya", marks: 92 },
  { name: "Kiran", marks: 40 },
];

const studName = students.find((data) => {
    return data.marks > 90;
})

console.log(studName.name);
