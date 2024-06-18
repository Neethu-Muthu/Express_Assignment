const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',(req,res) =>{
    res.status(200);
    res.send("Hi");
});

app.post('/',(req,res)=>{
    res.send("I am here");
});
app.listen(PORT,(error)=>{
    if(!error)
    console.log(" I am from KBA "+ PORT);
    else {
        console.log("Error occurred, server can't start", error);

    }
    

});
