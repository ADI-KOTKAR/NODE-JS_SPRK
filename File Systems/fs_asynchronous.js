//Asynchronous way
//asynchronous always done in callback function

const fs = require('fs')
const http = require('http')

//const data = fs.readFile('msg.txt').toString()
console.log(fs.readFile('msg.txt', (err, data)=>{
    console.log(data.toString())
}))
console.log('Ended....')