// const http = require('http')
const express = require('express')

const app = express(); 

app.use((req,res, next) => {
    console.log('In the middleware')
    next()
})

app.use((req,res,next) => {
    console.log('Another the middleware')
    res.send('<h1>Hello from express</h1>')
})


// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })