const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// initialize middleware
app.use(express.json({extended:false}));

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