import * as types from "../actions/actiontypes";
import actionCreatorsReg from "../actions/actionCreatorsReg";
import axios from "axios";

const fetchProducts =()=>{
     return (dispatch)=>{
        return  axios.get("http://localhost:3002/usersList")
        .then((resposne)=>{
            return resposne.data
        }).then((data)=>{
             dispatch(actionCreatorsReg.fetchUserData(data));
        })
        .catch((error)=>{
           dispatch(actionCreatorsReg.fetchUserDataFailure(error));
        })

        }
     }
  
export default fetchProducts;





 /* return dispatch=>{
        dispatch(actionCreatorsReg.fetchUserDataPending);

    return dispatch=>{
        /*fetch("http://localhost:3002/usersList")
        .then(handleErrors)
        .then(res=>res.json)
        .then(json=>{
            dispatch(actionCreatorsReg.fetchUserData(json));
            console.log("Hello world",json)
            return json
            
        }).catch(error=>{actionCreatorsReg.fetchUserDataFailure(error)});
    };
}*/