"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private id:string
        //private name:string
        this.employees = [];
        //this.name= n
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
}
class ITDepartment extends Department {
    constructor(id, admins, report) {
        super(id, 'IT'); // if you used constructor in extended class you have to use
        this.admins = admins;
        this.report = report;
    }
    addReport() {
        this.report.push();
    }
    printReport() {
        console.log(this.report);
    }
}
const accounting = new Department('d1', 'Accounting');
const it = new ITDepartment('d1', ['Gassan'], []);
accounting.describe();
/* const accountingCopy = {name:'dummy',describe: accounting.describe}
accountingCopy.describe();
 */
accounting.addEployee('Gassan');
accounting.addEployee('Maha');
//accounting.employees[1]='Dana'
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map