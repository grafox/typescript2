class ProjectInput{
    templateElement: HTMLTemplateElement | null
    hostElement: HTMLDivElement | null
    element: HTMLFormElement

    constructor(){
       // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
       // OR
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
       
      //  this.hostElement = <HTMLDivElement>document.getElementById('app')!
      // OR
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateElement.content,true)
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.attach()
    }
     private attach(){
        this.hostElement?.insertAdjacentElement('afterbegin',this.element)
    } 
}

const projInput = new ProjectInput()