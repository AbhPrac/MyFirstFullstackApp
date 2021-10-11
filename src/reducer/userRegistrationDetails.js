import * as types from "../actions/actiontypes"

const userregistration = (state=[],action)=>{

    switch(action.type){
        case types.USER_REGISTRATION:{
            return{
               ...state,
              ...action.payload
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}
export default userregistration









/*
let state = {
    userDetails : ""
}
const userregistration = (state,action)=>{
     
    switch(action.type){
        case types.USER_REGISTRATION:{
          return{
             ...state,
             userDetails : action.payload
          }        
    }
    default:{
        return{
            ...state
        }
    }
}
}
export default userregistration;*/