enum Editor{
    Marvel,
    DC
}

class SuperHero{
    private _editor: any;
       
    constructor(
        _name:string,
        _editor:Editor,
        _creationYear:number){
            
        }
creatMessage(_message:string){
    console.log(_message)
    }
    get editor():string{
        return Editor[this._editor]
    }
    set editor(editorName:string){
            this.editor = (<any>Editor)[editorName];
    }
}
const superman = new SuperHero('Superman',Editor.DC,1938);
console.log(superman.creatMessage('Gassan'))
