import * as types from "../actions/actiontypes"

  let intialState = {
    userDetails:" ",
    pending: false,
    products: [],
    error: null
  }

 const reducer =(state=intialState,action)=>{

    switch(action.type){
        case types.USER_DETAILS:
            return{
                ...state,
                userDetails:action.payload
            }
            case types.USERS_INFO_PENDING:
            return{
                ...state,
                pending: true
            }
            case types.USERS_INFO_SUCCESS:
                return{
                    ...state,
                    pending:false,
                    prodcuts:action.payload
                }
                case types.USERS_INFO_FAILURE:
                    return{
                        ...state,
                        pending:false,
                        prodcuts:action.error
                    }
    }
}

export const getUser=state=>(state.prodcuts)
export const getErros=state=>(state.error)
export const getUsersPending=state=>(state.pending)
export default reducer;