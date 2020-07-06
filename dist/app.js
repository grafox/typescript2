"use strict";
var _a;
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
const result = add('Gassan', 'Jabbar');
result.split('');
const fetchUserData = {
    id: 1,
    name: 'Gassan',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; //Nullish 
console.log(storeData);
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
        console.log('driving ...');
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
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse': speed = animal.runningSpeed;
    }
    console.log(`${animal.type} Moving at speed:  ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const paragraph = document.querySelector('p');
const userInputElement = document.getElementById('user-input');
// or
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement
//userInputElement.value = 'Hi there!'
// or
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
//# sourceMappingURL=app.js.map