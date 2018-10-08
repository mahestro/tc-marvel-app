import defaultState from './defaultState';
import * as types from '../constants/actionTypes';

export default function requestReducer(state = defaultState.requests, action) {
  switch (action.type) {
    case types.LOAD_REQUESTS_SUCCESS:
      return action.payload;

    case types.CREATE_REQUEST_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_REQUEST_SUCCESS:
      return [
        ...state.filter(request => request.id !== action.request.id),
        Object.assign({}, action.request)
      ];

    default: return state;
  }
}
