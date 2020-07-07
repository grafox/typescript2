"use strict";
const names = []; // string[]
//names[].split(" ")
const promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
        return resolve('I am Done');
    }, 2000);
});
promise.then(data => {
    data.toString;
});
function merge(objA, objB) {
    // or function merge<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Gassan' }, { age: 30 });
console.log(mergedObj.name, mergedObj.age);
function countAndPrint(element) {
    let descriptionText = 'Go no value.';
    if (element.length === 1) {
        descriptionText = '';
    }
    else if (element.length) {
        descriptionText = '';
    }
    return [element, descriptionText];
}
console.log(countAndPrint(['Sports', 'Cooking']));
function extraactAndConvert(obj, key) {
    return 'Value' + obj[key];
}
extraactAndConvert({ name: 'Gassan' }, 'name');
class dataSorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); //-1
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new dataSorage();
textStorage.addItem('Gassan');
textStorage.addItem('Maha');
textStorage.addItem('Aboud');
console.log(textStorage.getItem());
const objStorage = new dataSorage();
objStorage.addItem({ name: 'Gassan' });
objStorage.addItem({ name: 'Maha' });
console.log(objStorage.getItem());
//# sourceMappingURL=app.js.map