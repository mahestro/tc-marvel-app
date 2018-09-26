import * as types from '../constants/actionTypes';

const defaultState = {
  authenticated: false,
  projectTypes: [],
  targetDevices: []
};

export default function siteReducer(state = defaultState, action) {
  switch(action.type) {
    case types.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authenticated: action.payload
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
