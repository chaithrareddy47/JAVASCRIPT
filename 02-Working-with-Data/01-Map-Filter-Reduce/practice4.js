// Your task: Use filter() to select students who scored more than 60, then use map() to get only their names.

const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 45 },
  { name: "Meena", marks: 72 },
];

const student = students.filter((data) => {
    return data.marks > 60;
})

const studNames = student.map((data) => {
    return data.name
})

console.log(studNames);
