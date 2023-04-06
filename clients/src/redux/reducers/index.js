import { combineReducers } from 'redux';
import authReducer from './authReducers';
import tokenReducer from './tokenReducers';
import usersReducer from './userReducers';

export default combineReducers({
  authReducer,
  tokenReducer,
  usersReducer
});