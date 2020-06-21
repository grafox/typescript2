function add(n1, n2) {
    //if (typeof n1!=='number' || typeof n2!=='number'){
    //    throw new Error('Incorrect input!');  
    //}
    console.log(typeof (n1));
    return n1 + n2;
}
var number1;
number1 = 5;
var number2;
number2 = 2.8;
// this solution convert string to number //const result = add(+number1,+number2);
var result = add(number1, number2);
console.log(result);
