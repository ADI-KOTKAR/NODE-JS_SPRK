const http = require('http')

let server = http.createServer((req,res)=>{
    res.write('Hello World')
    res.end()
    //console.log(res.headers)
})

server.listen(3000, ()=>{
    console.log('Localhost Running')
})