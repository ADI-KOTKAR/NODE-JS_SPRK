//Synchronous way 

const fs = require('fs')
//const http = require('http')

const data = fs.readFileSync('msg.txt').toString()
console.log(data)
console.log('Ended....')