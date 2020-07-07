const names:Array<string> = [] // string[]
 //names[].split(" ")

const promise: Promise<string>= new Promise((resolve,_reject)=>{
    setTimeout(()=>{
         return resolve('I am Done')
    },2000)
})

promise.then(data=>{
   data.toString
})

function merge<T,U>(objA:T,objB:U){

    // or function merge<T extends object,U extends object>(objA:T,objB:U){
    return Object.assign(objA,objB)
}

const mergedObj = merge({name:'Gassan'},{age:30})
console.log(mergedObj.name, mergedObj.age );
interface Lengthy {
    length:number
}
function countAndPrint<T extends Lengthy>(element: T){
    let descriptionText = 'Go no value.'
    if (element.length ===1){
        descriptionText=''
    }else if(element.length){
        descriptionText=''
    }
    return [element,descriptionText]
}

console.log(countAndPrint(['Sports','Cooking']))

function extraactAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return 'Value'+obj[key]
}

extraactAndConvert({name:'Gassan'},'name')

class dataSorage<T> {   // Generic Class
    private data:T[]=[]
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1) //-1
    }
    getItem(){
        return [...this.data]
    }
}

const textStorage = new dataSorage<string>()
textStorage.addItem('Gassan')
textStorage.addItem('Maha')
textStorage.addItem('Aboud')
console.log(textStorage.getItem());

const objStorage = new dataSorage<object>()
objStorage.addItem({name:'Gassan'})
objStorage.addItem({name:'Maha'})

console.log(objStorage.getItem());

interface CourseGoal{
    title:string
    description:string
    completeUnit:Date
}

function creatCourseGoal(   // Generic utlity type
    title:string, 
    description:string,
    completeUnit:Date
):CourseGoal{
    let courseGoal:Partial<CourseGoal>= {} //
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUnit = completeUnit
    return courseGoal as CourseGoal
}

const newNames: Readonly<string[]>=['Gassan','Maha']

