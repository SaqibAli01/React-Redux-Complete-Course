//ye main reducers ha is me ham value ko pass krty ha

import changeTheNumber from './Reducers';
// import {combineReducers} from 'redux';

import { combineReducers} from "redux"

// combineReducers ka object banina ha , is me or be value dy skty ha
const rootReducer = combineReducers({
    changeTheNumber
});
export default rootReducer;