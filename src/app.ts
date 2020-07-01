
const add = (a:number,b:number=1) => a+b; // defult param 

console.log(add(1,2));

const printOutput: (a:number| string) => void = output => console.log(output); // Arrow function

const button = document.querySelector('button');
button?.addEventListener('click',event=>{
    console.log(event)
})

printOutput(add(6));
const hobbies = ["Sport","Cooking"];
const activeHobbies =['Hiking'];
activeHobbies.push(...hobbies) // we can't sign string "hobbies" to Array of string. So, we used a Spread oprator
console.log(activeHobbies)

const person = {
    name: 'Gassan',
    age: 47
};

const copiedPerson = {...person} // key value pers not only point to the object in memory
console.log(copiedPerson)