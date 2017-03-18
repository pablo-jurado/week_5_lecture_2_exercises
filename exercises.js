// 1.You are working for a state university and are tasked with writing software to
// determine the academic standing and honors recognition of students. The rules are:
// Standings:
// - 2.0 or higher - good standing
// - less than 2.0 - academic probation
//
// Honors recognitions:
//
// - 3.40 to 3.59 - cum laude
// - 3.60 t0 3.79 - magna cum laude
// - 3.80 to 4.00 or higher - summa cum laude
//
// Given a GPA, your job is to print whether or not the student is in good standing.
// If the student has earned honors recognitions print those out too.
//
// For example:
//
// - A GPA of 2.5 prints "Student is in good standing".
// - A GPA of 1.9 prints "Student is on probation".
// - A GPA of 3.6 prints "Student is in good standing with magna cum laude".

function printStudentStatus (gpa) {
  var message = ''
  if (gpa < 2.0) {
    message = 'Student is on probation'
  } else {
    message = 'Student is in good standing'
    if (gpa >= 3.40 && gpa <= 3.59) {
      message = message + ' with cum laude'
    } else if (gpa >= 3.60 && gpa <= 3.79) {
      message = message + ' with magna cum laude'
    } else if (gpa >= 3.80 && gpa <= 4) {
      message = message + ' with summa cum laude'
    }
  }
 return message
}

console.log(printStudentStatus(1.9))
console.log(printStudentStatus(2.5))
console.log(printStudentStatus(3.45))
console.log(printStudentStatus(3.79))
console.log(printStudentStatus(3.80))
