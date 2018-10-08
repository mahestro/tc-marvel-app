import { combineReducers } from 'redux';
import siteReducer from './siteReducer';
import teamReducer from './teamReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  site: siteReducer,
  teams: teamReducer,
  requests: requestReducer
});
