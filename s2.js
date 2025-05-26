const students = [
  { name: "Ali", grade: 16 },
  { name: "sara", grade: 18 },
  { name: "reza", grade: 19 }
];
const highAchievers = students.filter(student => student.grade > 17);
highAchievers.forEach(student => {
  console.log(student.name);
});