import * as types from "../actions/actiontypes"



const loginReducer =(state=[],action)=>{

    switch(action.type){
    case types.USER_DETAILS :
        return {
          state:action.payload
        }
        default:
            return{
                ...state
            }
    }

}
export default loginReducer;