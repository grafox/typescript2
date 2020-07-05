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