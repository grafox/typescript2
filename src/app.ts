<<<<<<< HEAD
// Drag & Drop Interfaces
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

// Project Type
enum ProjectStatus {
  Active,
  Finished
}

class Project {
<<<<<<< HEAD
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
type Listener<T> = (items: T[]) => void;
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}
<<<<<<< HEAD
///
class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
}

const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
<<<<<<< HEAD

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
}

// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
<<<<<<< HEAD
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(this.templateElement.content,true);
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

// ProjectItem Class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db

  get persons() {
    if (this.project.people === 1) {
      return '1 person';
    } else {
      return `${this.project.people} persons`;
    }
<<<<<<< HEAD
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(_: DragEvent) {
    console.log('DragEnd');
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}

// ProjectList Class
class ProjectList extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
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

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        if (this.type === 'active') {
          return prj.status === ProjectStatus.Active;
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
    }
<<<<<<< HEAD
  }
=======

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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
}

// ProjectInput Class
<<<<<<< HEAD
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {}

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
=======
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
>>>>>>> 1531383872a828f6ab3e5a1f736eab0a561403db
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
