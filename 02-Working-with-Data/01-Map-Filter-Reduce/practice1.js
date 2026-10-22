// Your task: Get the names of students who scored more than 60 marks.

const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 55 },
  { name: "Priya", marks: 92 },
  { name: "Kiran", marks: 40 },
];

const names = students.filter((data) => data.marks > 60).map((data) => data.name)

console.log(names);




