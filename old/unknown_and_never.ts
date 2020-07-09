//unknown and never
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Gassan';
if(typeof userInput === 'string'){

    userName = userInput;
}

function genreateError(message:string,code:number):never{
    throw {message: message, errorCode: code};
    //while(true) {}
}

const result2 = genreateError('An error occurret!',500);