import {combineReducers} from 'redux';

import authenticationReducer from './authenticationReducer';
//import registerReducer from './registerReducer'

const rootReducers = combineReducers(
    {
        authentication :authenticationReducer,
        //register:registerReducer
    }
)

export default rootReducers;