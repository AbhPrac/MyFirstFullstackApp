import * as types from "../actions/actiontypes";
import actionCreators from "../actions/actionCreators";

 const fetchProdcuts=()=>{
    return dispatch=>{
         dispatch(actionCreators.fetchUserDataPending);
         fetch("http://localhost:3002/usersList")
         .then((userData)=>{
             console.log("this is coming from fetchUSerinfoFile",userData.json());
             
         }).then((userData)=>{
            if(userData.error){
                throw(userData.error);
            }
            dispatch(actionCreators.fetchUserData(userData));
         })
         .catch((error)=>{
           dispatch((error)=>{
               dispatch(actionCreators.fetchUserDataFailure(error));
           })
         })
}
}
export default fetchProdcuts;