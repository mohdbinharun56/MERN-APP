const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Aadding using POST Method
// Adding Comments 
const articlesInfo = {
    learnReact: {
        comments: []
    },
    learnNode: {
        comments:[]
    },
    myThoughtsOnLearningReact: {
        comments:[]
    }
};

// initialize middleware
app.use(express.json({extended:false}));

// Aadding using POST Method
// Adding Comments 
app.post('/articles/:articlename/add-comment',(req,res)=>{
    const {username,texts} = req.body || {};
    // const username = req.body.username;
    // const texts = req.body.texts;
    const articlename = req.params.articlename;

    articlesInfo[articlename].comments.push({username,texts});
    res.status(200).send(articlesInfo[articlename]);
});


// get all comments which are adding into the articlesInfo object in all properties comments.
app.get('/articles',(req,res)=>{
    // const {learnReact,learnNode,myThoughtsOnLearningReact} = articlesInfo;
    res.status(200).send(articlesInfo);
});


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