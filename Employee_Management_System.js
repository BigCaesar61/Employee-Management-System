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