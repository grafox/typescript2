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
activeHobbies.push(...hobbies)      // we can't sign string "hobbies" to Array of string. So, we used a Spread oprator

console.log(...activeHobbies)        // nice

const [hobby1,hobby2, ...reamainingHobbies] = hobbies;
console.log(hobbies,hobby1,hobby2);

const person = {
    firstName: 'Gassan',
    age: 47
};

const copiedPerson = {...person} // key value pers not only point to the object in memory
console.log(copiedPerson);

const {firstName: userName,age} = person;
console.log(userName,age)

const add2 = (...numbers:number[])=>{     // Rest parameters
    return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0);
};

const addNumbers = add2(5,10,2,3.7);
console.log(addNumbers);
