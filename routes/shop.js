const express = require('express')

const router = express.Router()

router.get('/',(req, res)=> {
    console.log('Shope page');
    res.sendFile();
    
})

module.exports = router