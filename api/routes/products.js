
const express = require('express');
const router  = express.Router();

// 127.0.0.1:8000/products/

router.get('/', (req, res, next)=>{
    res.end('Get Request')
})


module.exports = router;
