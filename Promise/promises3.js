//async function returns promise

async function test(){
    let p = setTimeout(()=>{
        console.log('DONE!!!')
    },2000)
    return p;
}

test().then((s)=>{

}).catch((e)=>{

})