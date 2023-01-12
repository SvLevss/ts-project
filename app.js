"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WageEmployee_1 = require("./WageEmployee");
const SalesePerson_1 = require("./SalesePerson");
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 50);
console.log(employee.id);
const sales = new SalesePerson_1.SalesePerson(123, "Vasya", 2000, "QA", 40000, 100, 50, 40000, 20);
console.log(`salary + percentage of revenue = ${sales.computeSalary()}`);
//# sourceMappingURL=app.js.map