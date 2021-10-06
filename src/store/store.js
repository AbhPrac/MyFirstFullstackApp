import {applyMiddleware,createStore } from  'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const middleware =[thunk];

export default function configureStore(intialState){
    return createStore(reducer,intialState,applyMiddleware(...middleware));
};