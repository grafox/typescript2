interface Greeting {
    greet(phrase:string):void
}
interface Person extends Greeting{
    name:string
    age:number,  
}
interface Named{
    readonly name?:string  //optional
} 
let user1: Person;

user1 = {
    name:'Gassan',
    age: 47,
    greet(phrase:string){
        console.log(phrase + ''+this.name);
        
    }
}
type Addfn = (a:number,b:number)=>number

interface Addfunction {
    (a:number,b:number):number
}

let add:Addfn

class thePerson implements Greeting,Named{  // multi interface
    name:string | undefined

    constructor(n?:string,){ // optainal
        if(n){
            this.name = n
        }
    }
    greet(phrase:string){
        console.log(`${phrase}${name}`);
        
    }
} 