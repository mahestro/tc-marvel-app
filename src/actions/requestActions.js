import * as types from '../constants/actionTypes';
// import superagent from 'superagent';
import { requests } from '../mockAPI';

export function loadRequestsSuccess(values) {
  return {
    type: types.LOAD_REQUESTS_SUCCESS,
    payload: values
  };
}

export function loadRequests() {
  return dispatch => {
    dispatch(loadRequestsSuccess(requests));
  };
}
