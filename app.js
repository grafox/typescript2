"use strict";
//unknown and never
var userInput;
var userName;
userInput = 5;
userInput = 'Gassan';
if (typeof userInput === 'string') {
    userName = userInput;
}
function genreateError(message, code) {
    throw { message: message, errorCode: code };
    //while(true) {}
}
var result2 = genreateError('An error occurret!', 500);
