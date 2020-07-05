class Department{
    //private id:string
    //private name:string
   // private  employees:string[]=[]
    protected  employees:string[]=[]
    static fiscalYear = 2020
   
    constructor(private readonly id:string,public name:string){
        //this.name= n
        console.log(Department.fiscalYear); // you can't ues this keyword with static 
        
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
    static creatEmployee(name:string){
        return{name:name}
    }
}

class ITDepartment extends Department{
    private lastReport:string
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No report found.')
    }
    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }
    constructor(
        id:string, 
        public admins:string[],
        private report:string[],
        reports:string[]
       ){

        super(id,'IT');  // if you used constructor in extended class you have to use0
        this.lastReport= reports[0]

    }
    addEployee(name:string){   // overriding properties
        if(name==='Gassan'){
            return
        }
    }
    addReport(text:string){
        this.report.push(text)
        this.lastReport= text
    }
    printReport(){
        console.log(this.report)
    }
}
const accounting = new Department('d1','Accounting');

const it = new ITDepartment('d1',['Gassan'],[],[])
accounting.describe()
it.mostRecentReport = 'Year End Report';
it.addReport('Something went wrong...');

/* const accountingCopy = {name:'dummy',describe: accounting.describe}
accountingCopy.describe();
 */
accounting.addEployee('Gassan')
accounting.addEployee('Maha')
//accounting.employees[1]='Dana'

accounting.printEmployeeInformation()