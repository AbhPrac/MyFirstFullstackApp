import { formControlClasses } from "@mui/material";
import axios from "axios";
const postUsers = (userData) => {
    
    axios.post("http://localhost:3002/usersList",userData).
    then((response,error)=>{
         axios.get("http://localhost:3002/usersList")
         .then((response)=>{
          console.log(response.data);
         })
    })
    .then((error)=>{
       if(error){
          throw error
       }
       console.log("Data posted to the server");
    }).catch((error)=>{
       console.log("Data dint posted");
    })

}
export default postUsers;