const express = require('express');

const app = express()
const PORT = 3000;
const loged = (req,res,next)=>{
    console.log("successfully logged in");
    next()
}
const loged1 = (req,res,next)=>{
    console.log("Welcome");
    next()
}


//app.use(loged)
app.get('/', loged ,(req,res)=>{

res.send('hello')
})
app.get('/h', loged1,(req,res) =>{
    res.send("from route 2")
})
app.listen(PORT,(error)=>{
    if(!error)
    console.log(" I am from KBA "+ PORT);
    else {
        console.log("Error occurred, server can't start", error);

    }
    

});

