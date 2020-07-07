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
    return Object.assign(objA,objB)
}

const mergedObj = merge({name:'Gassan'},{age:30})
console.log(mergedObj.name, mergedObj.age );


