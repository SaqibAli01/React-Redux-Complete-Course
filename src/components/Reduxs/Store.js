// jo hamra main Reducer ha us ko yaha lhekna ha 

//ye global ha isko koe be access kr skta ha

import rootReducer from "./MainReducer";

//create store

import {createStore} from 'redux';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
export default store;

// ab is file  ko apni main file jo ha us me store krwa dna ha
