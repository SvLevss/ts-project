"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(employee) {
        this.employee = employee;
    }
    ;
    addEmployee() {
    }
    ;
    removeEmployee() {
    }
    ;
    getEmployee() {
    }
    ;
    getEmployeeBySalary() {
    }
    ;
    computeBudget() {
        return this.employee.reduce((res, cur) => res + cur.getSalary(), 0);
    }
}
exports.Company = Company;
;
//# sourceMappingURL=Company.js.map