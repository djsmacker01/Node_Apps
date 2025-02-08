const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const products = []

// GET request for admin/add-product page
router.get('/admin/add-product', (req, res, next) => {
    // const products = adminData.products

    res.render('add-product',{prods:products, docTitle: 'add-product'})

    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// POST request for admin/add-product page
router.post('/admin/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    console.log(req.body)
    res.redirect('/')
})
// module.exports = router
exports.routes = router;
exports.products = products;