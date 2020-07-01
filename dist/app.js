"use strict";
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
printOutput(add(5));
//# sourceMappingURL=app.js.map