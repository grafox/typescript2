class Department{
    //private id:string
    //private name:string
    private employees:string[]=[]
    constructor(private id:string,public name:string){
        //this.name= n
    }
    describe(){
        console.log(`Department: ${this.id} ${this.name}`)
    }
    addEployee(employee:string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('1','Accounting');
accounting.describe()

/* const accountingCopy = {name:'dummy',describe: accounting.describe}
accountingCopy.describe();
 */
accounting.addEployee('Gassan')
accounting.addEployee('Maha')
//accounting.employees[1]='Dana'
accounting.describe()
accounting.printEmployeeInformation()