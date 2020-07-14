"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project type
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, state) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.state = state;
    }
}
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addproject(title, description, numOfPepole) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPepole, ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();
function Validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid &&
            validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid &&
            validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid &&
            validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid &&
            validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
// autobind decorator
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
// Component Base Class
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
// ProjectItem Class
class ProjectItem extends Component {
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    configure() {
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.project.people.toString();
        this.element.querySelector('p').textContent = this.project.description;
    }
}
// ProjectList Class
class projectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        this.assignedProjects = [];
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-project`;
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.state === ProjectStatus.Active;
                }
                return prj.state === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-project-list`);
        listEl.innerHTML = '';
        for (const projItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul').id, projItem);
            /* const listItem = document.createElement('li')
            listItem.textContent = projItem.title
            listEl.appendChild(listItem) */
        }
    }
    renderContent() {
        const listId = `${this.type}-project-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + 'PROJECTS';
    }
    attach() {
        var _a;
        (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', this.element);
    }
}
// ProjectInput Class
class ProjectInput {
    constructor() {
        // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
        // OR
        this.templateElement = document.getElementById('project-input');
        //  this.hostElement = <HTMLDivElement>document.getElementById('app')!
        // OR
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        this.attach();
        this.configure();
    }
    attach() {
        var _a;
        (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterbegin', this.element);
    }
    gatherUserInput() {
        const enterdTitle = this.titleInput.value;
        const enterdDescription = this.descriptionInput.value;
        const enterdPeople = this.peopleInput.value;
        if (enterdTitle.trim().length === 0 ||
            enterdDescription.trim().length === 0 ||
            enterdPeople.trim().length === 0) {
            // alert('Invalid input, please try again')
            throw console.error('Invalid input, please try again');
        }
        else {
            return [enterdTitle, enterdDescription, +enterdPeople];
        }
    }
    clearInput() {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.peopleInput.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInput.value);
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addproject(title, desc, people);
            // console.log(title,desc,people);
            this.clearInput();
        }
    }
    configure() {
        //   this.element.addEventListener('submit',this.submitHandler.bind(this))  // first solution
        this.element.addEventListener('submit', this.submitHandler); // second solution with decorator
    }
}
__decorate([
    autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ProjectInput.prototype, "submitHandler", null);
const projInput = new ProjectInput();
const activeProjList = new projectList('active');
const finishedProjList = new projectList('finished');
//# sourceMappingURL=app.js.map