function combine(input1: number|string,input2: number|string):number{
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        const result = input1+input2
    }else{
        result= input1.toString() + input2.toString();
    }
    return result}

const combinedAge = combine(30,26);