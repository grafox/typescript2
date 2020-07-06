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

function add(a:string,b:string):string //overload function
function add(a:string,b:number):string
function add(a:number,b:string):string
function add(a:number,b:number):number

function add(a:Combinable,b:Combinable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a+b
}
const result=add('Gassan','Jabbar')
result.split('')

const fetchUserData={
    id:1,
    name:'Gassan',
    job:{title:'CEO', description:'My own company'}
}
console.log(fetchUserData?.job?.title);

const userInput= null
const storeData = userInput ?? 'DEFAULT' //Nullish 
console.log(storeData);


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
        console.log('driving ...');
        
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

useVehicle(v1)
useVehicle(v2)
/// Discriminated Unions
interface Bird {
    type:'bird'
    flyingSpeed:number
}
interface Horse{
    type:'horse'
    runningSpeed:number
}

type Animal = Bird | Horse

function moveAnimal(animal:Animal){ 
    let speed:number
    switch (animal.type){
        case 'bird':  speed = animal.flyingSpeed
        break
        case 'horse': speed = animal.runningSpeed
    }    
    console.log(`${animal.type} Moving at speed:  ${speed}`);
}
moveAnimal({type:'bird',flyingSpeed:10})

const paragraph = document.querySelector('p')
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// or
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement
//userInputElement.value = 'Hi there!'
// or
if(userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there'
}

interface ErrorContainer{
    // {email:'Not a valid email',username:'Must start'}
    [prop:string]:string  // index type
}
const errorBag:ErrorContainer = {
    email:'Not a valid email!',
    username:'Must start with a capital character!'
}

