//Asynchronous way
//asynchronous always done in callback function

const fs = require('fs')
const http = require('http')

//const data = fs.readFile('msg.txt').toString()
console.log(fs.watch('msg2.txt',(event,filename)=>{
    console.log('event name',event)
    console.log('filename ',filename)
    
    
}))

//to append any file
// console.log(fs.appendFile('msg2.txt', 'NEW FILE CRATED, nice',(err)=>{
//     console.log(err);
    
// }))

console.log('Ended....')