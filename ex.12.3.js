const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id: 13,
        name: "Houston",
        age: 21,
      },
    ],
    
}
  

// function findPerson(school,type, id) {
//     if (type === 'teacher') {
//     for (const teacher of school.teachers) {
//         if (teacher.id === id) {
//             return (teacher)
//         }
//     }
// }
// else if (type === 'student') {
//     for (const student of school.students) {
//         if (student.id === id) {
//             return (student)
//         }
//     }
// }
// }
// console.log(findPerson (school,'student', 11));
// console.log(findPerson(school,'teacher',2));

// function assignStudent(school,id,subassgn) {
//     for (const student of school.students) {
//       if (student.id === id) {
//      chosen = student.name
//       }
//     }
//     for (const teacher of school.teachers) {
//         for (const sub of teacher.subjects){
//         if (sub === subassgn)
//         teacher.students.push(chosen)
//         }
//         teacher.capacityLeft --
//     }
// }
// assignStudent(school,12,'history')
// console.log(JSON.stringify(school, null, 2));

// function assignTeachersSubject(school, teacherId, newSubject) {
//     const teacher = school.teachers.find((t) => t.id === teacherId);
//     if (teacher) {
//       if (!teacher.subjects.includes(newSubject)) {
//         teacher.subjects.push(newSubject);
//         console.log(`Subject '${newSubject}' added to ${teacher.name}'s subjects.`);
//       } else {
//         console.log(`${teacher.name} already teaches '${newSubject}'.`);
//       }
//     }
//   }
//   assignTeachersSubject(school, 1, "mathematics");
//   assignTeachersSubject(school, 2, "ethics");
//   assignTeachersSubject(school, 2, "mathematics");
  

// function findTeachersByCourse(course) {
//     const teachersTeachingCourse = school.teachers.filter((teacher) => {
//       return teacher.subjects.includes(course);
//     });
  
//     return teachersTeachingCourse;
//   }
  
//   const teachersForHistory = findTeachersByCourse("history");
//   console.log("Teachers who teach history:", teachersForHistory);
