// const http = require('http')
const express = require('express')

const app = express(); 
// const PORT = 3000
// app.use((req,res, next) => {
//     console.log('In the middleware')
//     next()
// })
app.use('/add-product', (req, res, next) => {
    console.log('Add Product')
    res.send('<h1> Add product page<h1/>')
})

app.use('/',(req,res) => {
    console.log('Another the middleware')
    res.send('<h1>Hello from express</h1>')
})



app.listen(3000)
// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })