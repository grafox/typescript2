"use strict";
const e1 = {
    name: 'Gassan',
    privileges: ['Create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Start Date: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
printEmployeeInformation(e1);
//or
printEmployeeInformation({ name: 'Gassan', startDate: new Date });
class Car {
    drive() {
        console.log('driveing ...');
    }
}
class Truck {
    drive() {
        console.log('driving ...');
    }
    loadCargo(amount) {
        console.log(`loading cargo ... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //   if ('loadCargo' in vehicle){  // or
    if (vehicle instanceof Truck) {
        vehicle.loadCargo('1000');
    }
}
//# sourceMappingURL=app.js.map