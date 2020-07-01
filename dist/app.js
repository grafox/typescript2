"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}; // defult param 
console.log(add(1, 2));
var printOutput = function (output) { return console.log(output); }; // Arrow function
var button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (event) {
    console.log(event);
});
printOutput(add(6));
var hobbies = ["Sport", "Cooking"];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies); // we can't sign string "hobbies" to Array of string. So, we used a Spread oprator
console.log(activeHobbies);
var person = {
    name: 'Gassan',
    age: 47
};
var copiedPerson = __assign({}, person); // key value pers not only point to the object in memory
console.log(copiedPerson);
var add2 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addNumbers = add2(5, 10, 2, 3.7);
console.log(addNumbers);
//# sourceMappingURL=app.js.map