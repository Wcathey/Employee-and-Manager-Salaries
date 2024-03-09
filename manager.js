
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager)
        this.employees = employees;
    }

    addEmployee(employee) {
        if(employee instanceof Employee) {
            this.employees.push(employee)
        }
    }
    _totalSubSalary() {
        let sum = 0;
        this.employees.forEach((employee) => {
            if(employee instanceof Manager) sum += employee._totalSubSalary() + employee.salary
            else sum += employee.salary;
        })
        return sum;
    }
    calculateBonus(multiplier) {

        return (this.salary + this._totalSubSalary()) * multiplier;

    }
}

module.exports = Manager;
