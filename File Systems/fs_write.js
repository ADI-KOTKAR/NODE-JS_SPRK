//Asynchronous way
//asynchronous always done in callback function

const fs = require('fs')
const http = require('http')

//const data = fs.readFile('msg.txt').toString()
console.log(fs.writeFile('msg2.txt', 'NEW FILE CRATED',()=>{
    
}))

//to append any file
console.log(fs.appendFile('msg2.txt', 'NEW FILE CRATED, nice',(err)=>{
    console.log(err);
    
}))

console.log('Ended....')