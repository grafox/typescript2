
const add = (a:number,b:number=1) => a+b; // defult param 

console.log(add(1,2));

const printOutput: (a:number| string) => void = output => console.log(output); // Arrow function

const button = document.querySelector('button');
button?.addEventListener('click',event=>{
    console.log(event)
})

printOutput(add(5));