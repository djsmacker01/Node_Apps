const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes);
app.use(shopRouter);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})