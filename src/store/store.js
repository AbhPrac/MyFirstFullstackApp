import { createStore } from  'redux';
import reducer from '../reducer/reducer';

export default function configureStore(intialState){
    return createStore(reducer,intialState);
};