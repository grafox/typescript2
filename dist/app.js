"use strict";
let user1;
user1 = {
    name: 'Gassan',
    age: 47,
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
};
let add;
class thePerson {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(`${phrase}${name}`);
    }
}
//# sourceMappingURL=app.js.map