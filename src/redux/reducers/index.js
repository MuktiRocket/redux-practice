import { combineReducers } from 'redux';
import { loginReducer, getCityData } from './loginReducer';

export const rootReducer = combineReducers({
  loginReducer,
  getCityData,
});
