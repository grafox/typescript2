"use strict";
const names = []; // string[]
// names[0].split('')
const promise = new Promise((resolve) => {
    setTimeout(() => {
        return resolve;
    }, 2000);
});
promise.then(data => {
    data.toString;
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Gassan' }, { age: 30 });
console.log(mergedObj.age);
//# sourceMappingURL=app.js.map