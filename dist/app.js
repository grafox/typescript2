"use strict";
var button = document.querySelector('button'); // ! this mean you know is null
function clickHandler() {
    console.log();
}
// or rap with if() statment 
if (button) {
    button.addEventListener('click', function () {
        console.log('Clicked');
    });
}
//# sourceMappingURL=app.js.map