// Drag and Drop interfaces
interface Draggable{
    dragStartHandler(event: DragEvent):void
    dragEndHandler(event: DragEvent):void
}
interface DragTarget{
    dragOverHandler(event: DragEvent):void
    dropHandler(event: DragEvent):void
    dragLeaveHandler(event: DragEvent):void
}

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
type  Listener<T> = (item:T[])=>void

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}
class ProjectState extends State<Project>{

    private projects:Project[]=[]
    private static instance:ProjectState
    
    private constructor(){
      super()
    }
    static getInstance(){
        if(this.instance){
            return this.instance
        }
        this.instance = new ProjectState()
        return this.instance
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
/*         for(const listenerFn of this.listeners){
            listenerFn(this.projects.slice())
        } */
        this.updateListeners()
    }
    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(prj => prj.id === projectId);
        if (project && project.state !== newStatus) {
          project.state = newStatus;
          this.updateListeners();
        }
      }
    
    private updateListeners() {
        for (const listenerFn of this.listeners) {
          listenerFn(this.projects.slice());
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
function validate(validatableInput:Validatable){
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
// Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement
    hostElement: T
    element: U
    constructor(
        templateId:string,
        hostElementId:string,
        insertAtStart:boolean,
        newElementId?:string
    ){
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement
        this.hostElement = document.getElementById(hostElementId)! as T

        const importedNode = document.importNode(this.templateElement.content,true)           
        this.element = importedNode.firstElementChild as U
        if(newElementId){
            this.element.id = newElementId
        }
        this.attach(insertAtStart)
    }
    private attach(insertAtBeginning: boolean) {
        this.hostElement.insertAdjacentElement(
          insertAtBeginning ? 'afterbegin' : 'beforeend',
          this.element
        )
      }
      abstract configure(): void;
      abstract renderContent(): void;
}
// ProjectItem Class
class ProjectItem extends Component<HTMLUListElement,HTMLUListElement> implements Draggable{
     private project: Project

     get persons() {
        if (this.project.people === 1) {
          return '1 person';
        } else {
          return `${this.project.people} persons`;
        }
      }
    constructor(hostId:string,project:Project){
        super('single-project',hostId,false,project.id)
        this.project = project

        this.configure()
        this.renderContent()
    }
    @autobind
    dragStartHandler(event: DragEvent){
        event.dataTransfer!.setData('text/plain',this.project.id)
        event.dataTransfer!.effectAllowed='move'
    }
    dragEndHandler(_event: DragEvent){
        console.log('DragEnd');
    }
    configure(){
        this.element.addEventListener('dragstart',this.dragStartHandler)
        this.element.addEventListener('dragend', this.dragEndHandler);
    }

    renderContent(){
        this.element.querySelector('h2')!.textContent = this.project.title
        this.element.querySelector('h3')!.textContent = this.project.people.toString()+ 'assigned'
        this.element.querySelector('p')!.textContent = this.project.description
    }
}
// ProjectList Class
class projectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
/*  templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLElement */
    assignedProjects: Project[]
    
    constructor(private type:'active'|'finished'){
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects=[]

        this.configure()
        this.renderContent()
         this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement
         this.hostElement = document.getElementById('app')! as HTMLDivElement
 
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
         //this.attach() 
    }
    @autobind
    dragOverHandler(event: DragEvent) {
      if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.add('droppable');
      }
    }
    @autobind
    dropHandler(event: DragEvent) {
      const prjId = event.dataTransfer!.getData('text/plain');
      projectState.moveProject(
        prjId,
        this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
      );
    }
    @autobind
    dragLeaveHandler(_: DragEvent) {
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.remove('droppable');
    }

    renderProjects(){
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement
        listEl.innerHTML=''
        for(const projItem of this.assignedProjects){
            new ProjectItem(this.element.querySelector('ul')!.id,projItem)
            /* const listItem = document.createElement('li')
            listItem.textContent = projItem.title
            listEl.appendChild(listItem) */
        }
    }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.state === ProjectStatus.Active;
        }
        return prj.state === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

     renderContent(){
        const listId=`${this.type}-project-list`
        this.element.querySelector('ul')!.id = listId
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS'
    }
/*     private attach(){
        this.hostElement?.insertAdjacentElement('beforeend',this.element)
    } */
}
// ProjectInput Class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
/*     templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement */
    titleInput: HTMLInputElement //| null
    descriptionInput: HTMLInputElement //| null
    peopleInput: HTMLInputElement //| null
    
    constructor(){
        super('project-input', 'app', true, 'user-input');
        this.titleInput = this.element.querySelector('#title')  as HTMLInputElement
        this.descriptionInput = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInput = this.element.querySelector('#people') as HTMLInputElement
       //  this.attach()
        this.configure()
       // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
       // OR
 /*        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
       
      //  this.hostElement = <HTMLDivElement>document.getElementById('app')!
      // OR
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateElement.content,true)
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input' */

    }
/*     private attach(){
        this.hostElement?.insertAdjacentElement('afterbegin',this.element)
    } */
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
      }
    renderContent() {}

    private gatherUserInput():[string,string,number]|void{
        const enterdTitle = this.titleInput.value
        const enterdDescription = this.descriptionInput.value
        const enterdPeople = this.peopleInput.value

        const titleValidatable: Validatable = {
            value: enterdTitle,
            required: true
          };
          const descriptionValidatable: Validatable = {
            value: enterdDescription,
            required: true,
            minLength: 5
          };
          const peopleValidatable: Validatable = {
            value: +enterdPeople,
            required: true,
            min: 1,
            max: 5
          };
        if(
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
/*             enterdTitle!.trim().length === 0||
            enterdDescription!.trim().length === 0 ||
            enterdPeople!.trim().length ===0 */
        ){
           // alert('Invalid input, please try again')
            alert('Invalid input, please try again');
            return
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
        const userInput = this.gatherUserInput()
        if(Array.isArray(userInput)){
            const [title,desc,people] = userInput
            projectState.addproject(title,desc,people)
            // console.log(title,desc,people);
            this.clearInput()
        }
    }
}
const projInput = new ProjectInput()
const activeProjList = new projectList('active')
const finishedProjList = new projectList('finished')
