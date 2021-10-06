const mysql = require('mysql');
const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"developer_profiles"
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("The datbase connection established successfully");

});
module.exports = db;