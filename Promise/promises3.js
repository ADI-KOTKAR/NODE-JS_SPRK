//async function returns promise
//await which wait until promise gets executed - .then not required if await used

async function test(){
    let p = new Promise((resolve)=>{
        resolve('DONE!!!')
    },2000)
    //return p;
    let a = await p
    console.log(a)
    console.log('AFTER DONE!!')
}

// test().then((s)=>{

// }).catch((e)=>{

// })

test()