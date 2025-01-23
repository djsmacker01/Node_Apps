const express = require('express')

const router = express.Router()

router.get('/',(req, res)=> {
    console.log('Shope page');
    res.send('<h2>Welcome to SAAN-STORE</h2>');
    
})

module.exports = router