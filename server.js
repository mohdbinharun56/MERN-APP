const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// initialize middleware
app.use(express.json({extended:false}));


// Dynamic Routing Parameter
app.get('/user/:id',(req,res)=>{
    res.send(`This is User: ${req.params.id}`) // params parameter will contain the url variable value and the property name also be exact variable name like here used 'id' as dynamic route.
}) 

// Post Method
app.post('/add',(req,res)=>{
    res.send(`This is ${req.body.name}`);
})

// Get Method 
app.get('/',(req,res)=>{
    res.send("Hello, Express");
});

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
});