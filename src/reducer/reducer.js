import * as types from "../actions/actiontypes"

 const reducer =(state=[],action)=>{

    switch(action.type){
        case types.USER_DETAILS:
            return[
                ...state,
                Object.assign({},action.payload)
            ]
    }
}
export default reducer