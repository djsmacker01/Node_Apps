const express = require('express');
const app = express();

// Middleware
app.get('/',(req, res)=> {
    console.log('Hello from the root route');
    res.send('Hello from the root route');
    
})

app.get('/about',(req, res)=> {
    console.log('Hello from the about route');
    res.send('Hello from the about route');
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})