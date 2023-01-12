import { Employee } from "./Employee";

export class Company {

    constructor(private employee: Array<Employee>) { };
    addEmployee() {

    };
    removeEmployee() {

    };
    getEmployee() {

    };
    getEmployeeBySalary() {

    };
   
    computeBudget(): number {
        return this.employee.reduce((res, cur) => res + cur.getSalary(), 0);
    }
};



