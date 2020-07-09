//const ADMIN=0 // use enum better type
//const READ_ONLY=1
//const AUTHOR=2
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

// object type
const person:{
    name: string;
    age: number;
    hobbies: string[],
    //role:[number,string] //tuples
    role: Role
} = {
    name: 'Gassan',
    age: 30,
    hobbies:['Sport','Cooking'],
    //role:[2,'author']
    role:Role.ADMIN
}

//person.role.push('admin'); // push not working propaply wuth tulpe
//person.role.push[1]=10; // asign (=) better for debug

//person.role=[0,'admin']; //tuples
person.role=Role.AUTHOR;
let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

