//Task 1: Create an Employee Class

class Employee {
    constructor(name, position, salary, department) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.department = department;

    }

    getDetails() {
        console.log(`${this.name} works as a ${this.position} in the ${this.department} department. Their salary is: ${this.salary}`);
    
    }

}

//Task 2: Create a Department Class

class department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employee.push(employee);
    }

    getDepartmentSalary() {
        return this.employees.reduce((total,employee) => total +employee.salary, 0);
    }


}

//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee { //extends the parent class
    constructor(name, department, salary, bonus) {
        super(name, 'Manager', salary, department);
        this.bonus = bonus;
    }
     getDetails() { //overwrites previous get details and adds the manager details
        console.logconsole.log(`${this.name} works as a Manager in the ${this.department} department. Their salary is: ${this.salary} and their bonus is: ${this.bonus}`);
     }

}