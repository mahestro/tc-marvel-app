import defaultState from './defaultState';
import * as types from '../constants/actionTypes';

export default function siteReducer(state = defaultState.site, action) {
  switch(action.type) {
    case types.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload
      };

    case types.UPDATE_MAIN_TITLE_SUCCESSS:
      return {
        ...state,
        mainTitle: action.payload
      };

    case types.LOAD_PROJECT_TYPES:
      return {
        ...state,
        projectTypes: action.payload
      };

    case types.LOAD_TARGET_DEVICES:
      return {
        ...state,
        targetDevices: action.payload
      };

    default:
      return state;
  }
}
