// Project type
enum ProjectStatus{
    Active,
    Finished
}
class Project {
    constructor(
        public id:string,
        public title:string,
        public description:string,
        public people:number,
        public state:ProjectStatus
        ){
    }
}
// State Class
type  listener = (item:Project[])=>void
class ProjectState{
    private listeners:listener[]=[]
    private projects:Project[]=[]
    private static instance:ProjectState
    
    private constructor(){
    }
    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ProjectState()
        return this.instance
    }
    addListener(listenerFn:listener){
        this.listeners.push(listenerFn)
    }
    addproject(title:string,description:string,numOfPepole:number){
        const newProject= new Project(
            Math.random().toString(),
            title,
            description,
            numOfPepole,
            ProjectStatus.Active
        )
        this.projects.push(newProject)
        for(const listenerFn of this.listeners){
            listenerFn(this.projects.slice())
        }
    }
}

const projectState = ProjectState.getInstance()

// Validation
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
    if(validatableInput.max != null &&
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
// ProjectList Class
class projectList{
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLElement
    assignedProjects: Project[]
    constructor(private type:'active'|'finished'){

       this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement
         this.hostElement = document.getElementById('app')! as HTMLDivElement
         this.assignedProjects=[]
 
         const importedNode = document.importNode(this.templateElement.content,true)
         this.element = importedNode.firstElementChild as HTMLElement
         this.element.id = `${this.type}-project`

         projectState.addListener((projects:Project[])=>{
             const relevantProjects = projects.filter(prj =>{
                 if(this.type==='active'){
                     return prj.state === ProjectStatus.Active
                 }
                 return prj.state === ProjectStatus.Finished

             })
             this.assignedProjects = relevantProjects
             this.renderProjects()
         })
         this.attach()
         this.renderContent()
    }
    private renderProjects(){
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
        listEl.innerHTML=''
        for(const projItem of this.assignedProjects){
            const listItem = document.createElement('li')
            listItem.textContent = projItem.title
            listEl.appendChild(listItem)
        }
    }
    private renderContent(){
        const listId=`${this.type}-project-list`
        this.element.querySelector('ul')!.id = listId
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS'
    }
    private attach(){
        this.hostElement?.insertAdjacentElement('beforeend',this.element)
    }
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
            projectState.addproject(title,desc,people)
            // console.log(title,desc,people);
            this.clearInput()
        }
    }

    private configure(){
     //   this.element.addEventListener('submit',this.submitHandler.bind(this))  // first solution
     this.element.addEventListener('submit',this.submitHandler)  // second solution with decorator

    }
}
const projInput = new ProjectInput()
const activeProjList = new projectList('active')
const finishedProjList = new projectList('finished')
