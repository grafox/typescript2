"use strict";
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
    submitHandler(event) {
        var _a;
        event.preventDefault();
        console.log((_a = this.titleInput) === null || _a === void 0 ? void 0 : _a.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
}
const projInput = new ProjectInput();
//# sourceMappingURL=app.js.map