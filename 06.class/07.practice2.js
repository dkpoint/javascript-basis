/*
    @ Practice 2
*/

class Employee {
  #hourly_wage;

  constructor(employee_name, dept_name, working_hour_per_month, hourly_wage) {
    this.employee_name = employee_name;
    this.dept_name = dept_name;
    this.working_hour_per_month = working_hour_per_month;
    this.#hourly_wage = hourly_wage;
  }

  calculateMonthlyWage() {
    return this.working_hour_per_month * this.#hourly_wage;
  }
}

class FullTimeJob extends Employee {
  static #HOURLY_WAGE = 15000;

  constructor(employee_name, dept_name, working_hour_per_month) {
    super(
      employee_name,
      dept_name,
      working_hour_per_month,
      FullTimeJob.#HOURLY_WAGE
    );
  }
}

class PartTimeJob extends Employee {
  static #HOURLY_WAGE = 10000;

  constructor(employee_name, dept_name, working_hour_per_month) {
    super(
      employee_name,
      dept_name,
      working_hour_per_month,
      PartTimeJob.#HOURLY_WAGE
    );
  }
}

let dk = new FullTimeJob('DK', 'S/W', 160);
console.log(dk.calculateMonthlyWage());

let ted = new PartTimeJob('Ted', 'S/W', 140);
console.log(ted.calculateMonthlyWage());
