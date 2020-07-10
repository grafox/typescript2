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
    templateElement: HTMLTemplateElement | null
    hostElement: HTMLDivElement | null
    element: HTMLFormElement
    titleInput: HTMLInputElement | null
    descriptionInput: HTMLInputElement | null
    peopleInput: HTMLInputElement | null

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

        this.titleInput = this.element.querySelector('#title') // as HTMLInputElement
        this.descriptionInput = this.element.querySelector('#description') // as HTMLInputElement
        this.peopleInput = this.element.querySelector('#peopleInput') // as HTMLInputElement
        
        this.attach()
        this.configure()
    }
    private attach(){
        this.hostElement?.insertAdjacentElement('afterbegin',this.element)
    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault()
        console.log(this.titleInput?.value);
        
    }
    private configure(){
     //   this.element.addEventListener('submit',this.submitHandler.bind(this))  // first solution
     this.element.addEventListener('submit',this.submitHandler)  // second solution with decorator

    }
}

const projInput = new ProjectInput()