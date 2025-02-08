const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const product = []

// GET request for admin/add-product page
router.get('/admin/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// POST request for admin/add-product page
router.post('/admin/add-product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})
module.exports = router