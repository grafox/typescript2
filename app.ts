function add(n1: number,n2: number):number{
    //if (typeof n1!=='number' || typeof n2!=='number'){
    //    throw new Error('Incorrect input!');  
    //}
    console.log(typeof(n1));
    return n1+n2;
}

let number1:number;
number1 = 5;
let number2:number 
number2 = 2.8;

// this solution convert string to number //const result = add(+number1,+number2);
const result = add(number1,number2);

console.log(result);