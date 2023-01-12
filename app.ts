
import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalesePerson";

const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 console.log(employee.id);
 
 
 const sales: SalesePerson = new SalesePerson(123, "Vasya", 2000, "QA",
 40000, 100,50, 40000,20);
 console.log(`salary + percentage of revenue = ${sales.computeSalary()}`);
