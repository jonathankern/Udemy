import { combineReducers } from 'redux'; // function that takes multiple reducers and joins them into 1 reducer function
import generation from './generation';
import dragon from './dragon';
import account from './account';


export default combineReducers({ account, dragon, generation });