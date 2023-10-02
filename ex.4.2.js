const userGrade = (84);
let letterGrade;
if (userGrade >= 90 && userGrade <= 100) {
  letterGrade = 'A';
} else if (userGrade >= 80 && userGrade < 90) {
  letterGrade = 'B';
} else if (userGrade >= 70 && userGrade < 80) {
  letterGrade = 'C';
} else if (userGrade >= 65 && userGrade < 70) {
  letterGrade = 'D';
} else if (userGrade >= 0 && userGrade < 65) {
  letterGrade = 'F';
}
console.log(`your grade is '${letterGrade}'`);

