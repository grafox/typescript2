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
        this.titleInput = this.element.querySelector('#title'); // as HTMLInputElement
        this.descriptionInput = this.element.querySelector('#description'); // as HTMLInputElement
        this.peopleInput = this.element.querySelector('#peopleInput'); // as HTMLInputElement
        this.attach();
        this.configure();
    }
    attach() {
        var _a;
        (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterbegin', this.element);
    }
    gatherUserInput() {
        var _a, _b, _c;
        const enterdTitle = (_a = this.titleInput) === null || _a === void 0 ? void 0 : _a.value;
        const enterdDescription = (_b = this.descriptionInput) === null || _b === void 0 ? void 0 : _b.value;
        const enterdPeople = (_c = this.peopleInput) === null || _c === void 0 ? void 0 : _c.value;
        if ((enterdTitle === null || enterdTitle === void 0 ? void 0 : enterdTitle.trim().length) === 0 ||
            (enterdDescription === null || enterdDescription === void 0 ? void 0 : enterdDescription.trim().length) === 0 ||
            (enterdPeople === null || enterdPeople === void 0 ? void 0 : enterdPeople.trim().length) === 0) {
            alert('Invalid input, please try again');
            return;
        }
        else {
            return; //[enterdTitle!,enterdDescription!,enterdPeople?]
        }
    }
    submitHandler(event) {
        var _a;
        event.preventDefault();
        console.log((_a = this.titleInput) === null || _a === void 0 ? void 0 : _a.value);
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
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
//# sourceMappingURL=app.js.map