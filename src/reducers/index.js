import { combineReducers } from "redux";
import LoginReducer from './LoginReducer';
import tokenReducer from './tokenReducer';
export default combineReducers({
    LoginReducer,
    tokenReducer
})
