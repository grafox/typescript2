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
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Gassan' }, { age: 30 });
console.log(mergedObj.name, mergedObj.age);
//# sourceMappingURL=app.js.map