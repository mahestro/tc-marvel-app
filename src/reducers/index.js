import { combineReducers } from 'redux';
import siteReducer from './siteReducer';
import teamReducer from './teamReducer';

export default combineReducers({
  site: siteReducer,
  teams: teamReducer
});
