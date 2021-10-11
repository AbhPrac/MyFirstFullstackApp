import {applyMiddleware,createStore } from  'redux';
import reducer from '../reducer/reducer';
import loginReducer from '../reducer/logindetailsreducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import  userregistration  from '../reducer/userRegistrationDetails';

const middleware =[thunk];


const rootReducer = combineReducers({
    userRegistration: userregistration,
    userLoginInfo: loginReducer,
    allUserData : reducer
})

console.log("This is coming from store",rootReducer);

const configureStore = ()=>{
    return createStore(rootReducer,applyMiddleware(...middleware));
};

export default configureStore;