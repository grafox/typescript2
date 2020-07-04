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
    constructor(id, admins) {
        super(id, 'IT'); // if you used constructor in extended class you have to use super
        this.admins = admins;
    }
}
const accounting = new Department('D1', 'Accounting');
const it = new ITDepartment('d1', ['Gassan']);
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