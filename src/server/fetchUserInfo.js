import * as types from "../actions/actiontypes";
import { fetchUserData,fetchUserDataFailure,fetchUserDataPending} from "../actions/actionCreators"

export default fetchProdcuts=()=>{
    return dispatch=>{
         dispatch(fetchUserDataPending);
         fetch("http://localhost:3002/usersList")
         .then((userData)=>{
             console.log("this is coming from fetchUSerinfoFile",userData);
              userData.json();
         }).then((userData)=>{
            if(userData.error){
                throw(userData.error);
            }
            dispatch(fetchUserData(userData));
            
         })
         .catch((error)=>{
           dispatch((error)=>{
               dispatch(fetchUserDataFailure(error));
           })
         })
}
}