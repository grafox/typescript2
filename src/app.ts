type Admin ={
    name:string
    privileges:string[]
}
type Employee={
    name:string
    startDate:Date
}
type ElevatedEmployee = Admin&Employee //compine two types
interface Admin2 {
    name:string
    privileges:string[]
}
interface Employee2{
    name:string
    startDate:Date
}
interface ElevatedEmployee2 extends Admin,Employee{} //compine two interface

const e1:ElevatedEmployee={
    name:'Gassan',
    privileges:['Create-server'],
    startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable&Numeric

function add(a:number,b:number){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a+b
}
type UnKnownEmployee = Employee | Admin

function printEmployeeInformation(emp:UnKnownEmployee){
    console.log(`Name: ${emp.name}`);
    if('privileges' in emp){
        console.log(`Start Date: ${emp.privileges}`);
    }
    if('startDate' in emp){
        console.log(`Start Date: ${emp.startDate}`);
    }
}
printEmployeeInformation(e1)
//or
printEmployeeInformation({name:'Gassan',startDate: new Date})

class Car{
    drive(){
        console.log('driveing ...');
        
    }
    
}
class Truck{
    drive(){
        console.log('driving ...');
        
    }
    loadCargo(amount:string){
        console.log(`loading cargo ... ${amount}`);
    }
}

type Vehicle =Car|Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle:Vehicle){
    vehicle.drive()
 //   if ('loadCargo' in vehicle){  // or
    if (vehicle instanceof Truck){
        vehicle.loadCargo('1000')
    }
}