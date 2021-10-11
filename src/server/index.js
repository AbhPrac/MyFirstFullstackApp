const express = require('express');
const db = require('../config/connection.config');
const cors = require('cors');

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json());

app.get("/userslist",(req,res)=>{
 db.query("SELECT * from alluser",(err,usersInfo)=>{
     if(err){
         console.log("error raised",err)
     }
         res.send(usersInfo);
 });
});


app.post("/userslist",(req,res)=>{
   let userDetails = req.body;
   var sql = `INSERT INTO alluser (firstName,lastName,userName,email,password,skills) VALUES ("${req.body.firstName}", "${req.body.lastName}", "${req.body.userName}", "${req.body.email}","${req.body.password}","${req.body.skills}")`;
   console.log(sql);
   db.query(sql,userDetails,(err)=>{
       if(err){
           console.log("data is not inserted from server end");
       }
})
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

module.export = app;