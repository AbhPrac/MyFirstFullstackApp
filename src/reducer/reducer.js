import * as types from "../actions/actiontypes"

  let intialState = {
    pending: false,
    products: [],
    error: null
  }

 const reducer =(state=intialState,action)=>{

    switch(action.type){
            case types.USERS_INFO_PENDING:
            return{
                ...state,
                pending: true
            }
            case types.USERS_INFO_SUCCESS:
                return{
                    ...state,
                    pending:false,
                    products:action.payload
                }
                case types.USERS_INFO_FAILURE:
                    return{
                        ...state,
                        pending:false,
                        products:action.error
                    }
                    default:
                        return{
                            ...state
                        }
    }
}

export const getUser=state=>(intialState.products)
export const getErrors=state=>(intialState.error)
export const getUsersPending=state=>(intialState.pending)
export default reducer;

