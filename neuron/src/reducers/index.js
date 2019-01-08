import { combineReducers } from 'redux';
import trialReducer from './trialReducer';

export default combineReducers({
  trial: trialReducer
});