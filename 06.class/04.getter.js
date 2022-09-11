/*
    @ getter
        # Reference
            + getter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
*/

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let student = new Student('DK', 'Oh');

console.log(student.fullName); // DK Oh
