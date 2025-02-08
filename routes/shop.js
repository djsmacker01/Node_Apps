const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()
const adminData = require('./admin')

router.get('/',(req, res)=> {
    console.log('Shop js',adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
})

module.exports = router