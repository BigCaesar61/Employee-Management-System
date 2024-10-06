//Task 5: Create and Manage Departments and Employees
// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);


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

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getDepartmentSalary() {
        return this.employees.reduce((total,employee) => total +employee.salary, 0);
    }

    //Task 4: Handle Bonuses for Managers

    calculateTotalSalaryWithBonus() { 
        return this.employees.reduce((total,employee) => {
            total += employee.salary; //calculates teh salary of all employess 

            if (employee instanceof Manager) {
                total += employee.bonus; //adds a bonus in the instance of a manager
            }
            return total;
        }, 0);

    }


}

//Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee { //extends the parent class
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
     getDetails() { //overwrites previous get details and adds the manager details
        console.log(`${this.name} works as a Manager in the ${this.department} department. Their salary is: ${this.salary} and their bonus is: ${this.bonus}`);
     }
  
}


  
