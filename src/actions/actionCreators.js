import * as types from "../actions/actiontypes";

const actionCreators = {

    userLogin : (userdata)=>({
            type:types.USER_DETAILS,
            payload:userdata
        }),
    fetchUserData :(userData)=>({
            type: types.USERS_INFO_SUCCESS,
            payload:userData
        }),
    fetchUserDataFailure :(userData)=>({
            type: types.USERS_INFO_FAILURE,
            payload:userData
        }),
    fetchUserDataPending :(userData)=>({
            type: types.USERS_INFO_PENDING,
            payload:userData
        })
    }
 
export default actionCreators;