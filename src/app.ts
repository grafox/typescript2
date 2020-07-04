class Department{
    //private id:string
    //private name:string
    private employees:string[]=[]
    constructor(private readonly id:string,public name:string){
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

class ITDepartment extends Department{
    constructor(id:string, public admins:string[]){
        super(id,'IT');  // if you used constructor in extended class you have to use super
        
    }
}
const accounting = new Department('D1','Accounting');
const it = new ITDepartment('d1',['Gassan'])
accounting.describe()

/* const accountingCopy = {name:'dummy',describe: accounting.describe}
accountingCopy.describe();
 */
accounting.addEployee('Gassan')
accounting.addEployee('Maha')
//accounting.employees[1]='Dana'
accounting.describe()
accounting.printEmployeeInformation()