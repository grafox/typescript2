const names:Array<string> = [] // string[]
// names[0].split('')
const promise= new Promise<number>((resolve)=>{
    setTimeout(()=>{
        return resolve
    },2000)
})

promise.then(data=>{
   data.toString
})

function merge<T,U>(objA:T,objB:U){
    return Object.assign(objA,objB)
}

const mergedObj = merge({name:'Gassan'},{age:30})
console.log(mergedObj.age);


