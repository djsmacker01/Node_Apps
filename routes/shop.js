const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res) => {
    const products = adminData.products
    // console.log('Shop js',adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop',{products:products, docTitle: 'Shop'})
    
})

module.exports = router