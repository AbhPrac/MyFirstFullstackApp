import * as types from "../actions/actiontypes";

const actionCreators = {
    
    userLogin : (userdata)=>({
        type:types.USER_DETAILS,
        payload:userdata
    }),
    userRegistration:(userData)=>(
    {
        type:types.USER_REGISTRATION,
        payload:userData
    })

    }
 
export default actionCreators;