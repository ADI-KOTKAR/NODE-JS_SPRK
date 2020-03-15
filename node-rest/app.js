// const express = require('express')
// const app = express()
//const products = require(./api/routes/products.js)

const express  = require('express');
const app = express();
const products  = require('./api/routes/products');
// 127.0.0.1:8000/products




app.use('/products', products)

app.listen(8000, ()=>{
    console.log('running....');
})





// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"GET"
//     })
// })

app.listen(8000,()=>{
    console.log('Hello, its working..')
})

module.exports = app
module.expotrs = router