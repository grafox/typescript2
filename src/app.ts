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

