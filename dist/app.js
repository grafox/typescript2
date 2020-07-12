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
// ProjectList Class
class projectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-project`;
        this.attach();
        this.renderContent();
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
            console.log(title, desc, people);
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