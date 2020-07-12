interface Validatable{
    value:string | number
    required?: boolean
    minLength?:number
    maxLength?:number
    min?:number
    max?:number
}
function Validate(validatableInput:Validatable){
    let isValid = true
    if(validatableInput.required){
        isValid = isValid && 
        validatableInput.value.toString().trim().length !==0
    } 
    if(validatableInput.minLength !=null && 
        typeof validatableInput.value === 'string'){
        isValid = isValid && 
        validatableInput.value.length>=validatableInput.minLength   
    }
    if(validatableInput.min != null && 
        typeof validatableInput.value === 'number'){
        isValid = isValid && 
        validatableInput.value >= validatableInput.min
    }
    if (
        validatableInput.max != null &&
        typeof validatableInput.value === 'number'
      ) {
        isValid = isValid && 
        validatableInput.value <= validatableInput.max;
      }
    return isValid
}


// autobind decorator
function autobind(
    _target:any,
    _methodName:string,
    descriptor:PropertyDescriptor)
    {
    const originalMethod = descriptor.value
    const adjDescriptor:PropertyDescriptor = {
        configurable:true,
        get(){
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

// ProjectInput Class
class ProjectInput{
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement
    titleInput: HTMLInputElement //| null
    descriptionInput: HTMLInputElement //| null
    peopleInput: HTMLInputElement //| null
    
    constructor(){
       // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
       // OR
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
       
      //  this.hostElement = <HTMLDivElement>document.getElementById('app')!
      // OR
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateElement.content,true)
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input'

        this.titleInput = this.element.querySelector('#title')  as HTMLInputElement
        this.descriptionInput = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInput = this.element.querySelector('#people') as HTMLInputElement
        this.attach()
        this.configure()
    }
    private attach(){
        this.hostElement?.insertAdjacentElement('afterbegin',this.element)
    }
    private gatherUserInput():[string,string,number]{
        const enterdTitle = this.titleInput.value
        const enterdDescription = this.descriptionInput.value
        const enterdPeople = this.peopleInput.value
        if(
            enterdTitle!.trim().length === 0||
            enterdDescription!.trim().length === 0 ||
            enterdPeople!.trim().length ===0
        ){
           // alert('Invalid input, please try again')
            throw console.error('Invalid input, please try again');
            
        }else{
            return [enterdTitle,enterdDescription,+enterdPeople]
        }
    }
    private clearInput(){
        this.titleInput.value=''
        this.descriptionInput.value=''
        this.peopleInput.value=''
    }

    @autobind
    private submitHandler(event:Event){
        event.preventDefault()
        console.log(this.titleInput.value);
        const userInput = this.gatherUserInput()
        if(Array.isArray(userInput)){
            const [title,desc,people] = userInput
            console.log(title,desc,people);
            this.clearInput()
        }
    }

    private configure(){
     //   this.element.addEventListener('submit',this.submitHandler.bind(this))  // first solution
     this.element.addEventListener('submit',this.submitHandler)  // second solution with decorator

    }
}
const projInput = new ProjectInput()