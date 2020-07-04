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
const accounting = new Department('1', 'Accounting');
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