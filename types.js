"use strict";
//const ADMIN=0 // use enum better type
//const READ_ONLY=1
//const AUTHOR=2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// object type
var person = {
    name: 'Gassan',
    age: 30,
    hobbies: ['Sport', 'Cooking'],
    //role:[2,'author']
    role: Role.ADMIN
};
//person.role.push('admin'); // push not working propaply wuth tulpe
//person.role.push[1]=10; // asign (=) better for debug
//person.role=[0,'admin']; //tuples
person.role = Role.AUTHOR;
var favoriteActivities;
favoriteActivities = ['Sport'];
console.log(person.name);
