const students = [

  {
    id: 1,
    name: "Ismail",
    age: 18,
    marks: [90, 20, 44, 37, 79],
    city: "Karachi"
  },

  {
    id: 2,
    name: "Ammar",
    age: 19,
    marks: [80, 67, 43, 27, 88],
    city: "Karachi"
  },

  {
    id: 3,
    name: "Anus",
    age: 17,
    marks: [20, 60, 80, 57, 29],
    city: "Karachi"
  },

  {
    id: 4,
    name: "Umer",
    age: 18,
    marks: [90, 60, 54, 67, 32],
    city: "Karachi"
  },

  {
    id: 5,
    name: "Ayan",
    age: 16,
    marks: [40, 22, 50, 33, 89],
    city: "Karachi"
  }


]


// Average Marks function
const calculateMarksAvg = (marks) => {

  let totalMarks = 0;

  for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
  };

  return totalMarks / marks.length;

};


let avg = calculateMarksAvg(students[2].marks);






// Grade function
const calculateGrade = (average) => {

  let grade = null;

  if (average >= 80) {

    grade = "A";

  } else if (average >= 70) {

    grade = "B";

  } else if (average >= 60) {

    grade = "C";

  } else if (average >= 50) {

    grade = "D";

  } else {
    grade = "Fail";
  }

  return grade;

}


let studentGrade = calculateGrade(avg)




// student report function
const studentReport = (student) => {

  let name = student.name;
  let age = student.age;
  let averageMarks = calculateMarksAvg(student.marks);
  let grade = calculateGrade(averageMarks);

  console.log("Name: ", name)
  console.log("Age: ", age)
  console.log("Average: ", averageMarks)
  console.log("Grade: ", grade)



}




// Find Topper function
const findTopper = (studentList) => {

  let highestAverage = 0;
  let topperStudent = null;

  let currentAverage = 0;

  for (let i = 0; i < studentList.length; i++) {

    currentAverage = calculateMarksAvg(studentList[i].marks);

    if(currentAverage > highestAverage){
      
      highestAverage = currentAverage;
      topperStudent = studentList[i];

    }

  }


  return topperStudent;



}

const topper = findTopper(students)
console.log(topper)