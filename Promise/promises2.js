let p1 = Promise.resolve("foo")
let p2 = 27
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("timeout")
    },3000)
})
Promise.all([p1,p2,p3]).then((s)=>{
    console.log(s)
}).catch((e)=>{
    
})