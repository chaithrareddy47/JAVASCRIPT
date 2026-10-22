// const students = [
//   { name: "Asha", marks: 85 },
//   { name: "Ravi", marks: 55 },
//   { name: "Priya", marks: 92 },
// ];


// const result = students.forEach((data) => {
//     console.log(data.name);
//     // return data.name
    
// })
// console.log(result);


// const mapResult = students.map((data) =>{
//     // console.log(data.name);
//     return data.name
    
// })
// console.log(mapResult);


//Task: Use forEach() to print only the names of students who scored above 60.

const studentsObj = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 55 },
  { name: "Priya", marks: 92 },
  { name: "Kiran", marks: 40 },
];

const newresult = studentsObj.forEach((data) => {
    // console.log(data.marks > 60);

    if (data.marks > 60) {
        console.log(data.name);
        
    }

    
    
})







