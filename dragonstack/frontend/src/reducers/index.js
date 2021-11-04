import generation from './generation';
import dragon from './dragon';
import { combineReducers } from 'redux'; // function that takes multiple reducers and joins them into 1 reducer function

export default combineReducers({ generation, dragon });