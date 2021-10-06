import * as types from "../actions/actiontypes";

export const userLogin = (userdata)=>{
    return {
        type:types.USER_DETAILS,
        payload:userdata
    }
}
