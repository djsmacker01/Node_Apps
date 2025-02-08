const path = require('path');
const express = require('express');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes with base path
app.use(adminData.routes);
app.use(shopRouter); 

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})