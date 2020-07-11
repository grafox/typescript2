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
    private gatherUserInput():[string,string,number]|void{
        const enterdTitle = this.titleInput.value
        const enterdDescription = this.descriptionInput.value
        const enterdPeople = this.peopleInput.value
        if(
            enterdTitle!.trim().length === 0||
            enterdDescription!.trim().length === 0 ||
            enterdPeople!.trim().length ===0
        ){
            alert('Invalid input, please try again')
            return
        }else{
            return [enterdTitle,enterdDescription,+enterdPeople]
        }
    }

    @autobind
    private submitHandler(event:Event){
        event.preventDefault()
        console.log(this.titleInput.value);
        const userInput = this.gatherUserInput()
        if(Array.isArray(userInput)){
            const [title,desc,people] = userInput
            console.log(title,desc,people);
        }
    }

    private configure(){
     //   this.element.addEventListener('submit',this.submitHandler.bind(this))  // first solution
     this.element.addEventListener('submit',this.submitHandler)  // second solution with decorator

    }
}
const projInput = new ProjectInput()