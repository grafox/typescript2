@Logger('Logging ...')
@withTemplate('<h1>My Person Object</h1>','app')
class Person{
    name='Gassan'
    constructor(){
        console.log('Creating person object ...');
    }
}

function Logger(logString:string){
    console.log('LOGGER FACTORY');
    
    return function(_constructor:Function){
        console.log(logString);
     //   console.log(_constructor); 
    }
}

function withTemplate(template:string,hookId:string){
    console.log('TEMPLATE FACTORY');
    
    return function(constructor:any){
        console.log('Render Template');
        const hookEL = document.getElementById(hookId)
        const p = new constructor()
        if(hookEL){
            hookEL.innerHTML = template
            hookEL.querySelector('h1')!.textContent = p.name
        }
    }
}

// @Logger('LOGGING - PERSON)

const person = new Person()
console.log(person);
