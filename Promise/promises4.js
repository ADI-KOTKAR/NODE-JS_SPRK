//async function returns promise
//await which wait until promise gets executed - .then not required if await used

async function test(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('ERROR!!!')
        },2000)
    })
    try{
        console.log('ddd',await p)
    }
    catch(e){
        console.log('sss',e)
    }
    console.log('AFTER DONE!!!')
}

// test().then((s)=>{

// }).catch((e)=>{

// })

test()