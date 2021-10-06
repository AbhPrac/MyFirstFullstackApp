const express = require('express');
const db = require('../config/connection.config');
const cors = require('cors');

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json());

app.get("/userslist",(req,res)=>{
 db.query("SELECT * from allUser",(err,usersInfo)=>{
     if(err){
         console.log("error raised",err)
     }
     console.log("the user data is ",usersInfo)
         res.send(usersInfo);
 });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

module.export = app;