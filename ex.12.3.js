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
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    };


    // function findPerson(type, id) {
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
    // console.log(findPerson ('student', 11));
    // console.log(findPerson('teacher',));



    function assignStudent(id,subassgn) {
        for (const student of school.students) {
          if (student.id === id) {
         chosen = student.name
          }
        }
        for (const teacher of school.teachers) {
            for (const sub of teacher.subjects){
            if (sub === subassgn) 
            teacher.students.push(chosen)
            }
        }
    }
    assignStudent(12,'history')
    console.log(JSON.stringify(school, null, 2));

    // function assignStudent(id, subassgn) {
    //     let chosen = ''; // Initialize chosen to an empty string
      
    //     for (const student of school.students) {
    //       if (student.id === id) {
    //         chosen = student.name; // Assign the chosen student's name
    //       }
    //     }
      
    //     for (const teacher of school.teachers) {
    //       for (const sub of teacher.subjects) {
    //         if (sub === subassgn) {
    //           teacher.students.push(chosen);
    //         }
    //       }
    //     }
    //   }
      
    //   assignStudent(12, 'history');
    //   console.log(school);
      