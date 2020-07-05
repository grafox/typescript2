"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private id:string
        //private name:string
        // private  employees:string[]=[]
        this.employees = [];
        //this.name= n
        console.log(Department.fiscalYear); // you can't ues this keyword with static 
    }
    describe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static creatEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins, report, reports) {
        super(id, 'IT'); // if you used constructor in extended class you have to use0
        this.admins = admins;
        this.report = report;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    addEployee(name) {
        if (name === 'Gassan') {
            return;
        }
    }
    addReport(text) {
        this.report.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.report);
    }
}
const accounting = new Department('d1', 'Accounting');
const it = new ITDepartment('d1', ['Gassan'], [], []);
accounting.describe();
it.mostRecentReport = 'Year End Report';
it.addReport('Something went wrong...');
/* const accountingCopy = {name:'dummy',describe: accounting.describe}
accountingCopy.describe();
 */
accounting.addEployee('Gassan');
accounting.addEployee('Maha');
//accounting.employees[1]='Dana'
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map