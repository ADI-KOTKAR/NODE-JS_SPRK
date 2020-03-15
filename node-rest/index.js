const http = require('http')
const cluster = require('cluster')
const nocpus = require('os').cpus().length

const app = require('./app')

console.log(nocpus);

// if(cluster.isMaster){
//     for(let i=0; i<nocpus; i++){
//         const worker = cluster.fork()
//         console.log('worker',worker);
//     }
// }


// const server = http.createServer((req,res)=>{
//     res.end('Hello World')
// })

const server = http.createServer(app)

// server.listen(8000,()=>{
//     console.log('running.......');
    
// })
