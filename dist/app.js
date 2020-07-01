"use strict";
var button = document.querySelector('button'); // ! this mean you know the button is null
function clickHandler(message) {
    console.log('clicked' + message);
}
// or rap with if() statment 
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You\'re welcome!")); // don't use "noImplicitThis": true
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
    }
}
//# sourceMappingURL=app.js.map