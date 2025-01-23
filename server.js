const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded())
app.get('/',(req, res)=> {
    console.log('Hello from the root route');
    res.send('Hello from the root route');
    
})

app.get('/about',(req, res)=> {
    console.log('Hello from the about route');
    console.log(req.body)
    res.send('Hello from the about route');
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})