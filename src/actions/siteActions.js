import * as types from '../constants/actionTypes';
const password = process.env.REACT_APP_DASHBOARD_PASSWORD;

export function authenticateSuccess(value) {
  return {
    type: types.AUTHENTICATE_USER_SUCCESS,
    payload: value
  };
}

export function authenticate(value) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (value === password) {
        dispatch(authenticateSuccess(true));
        resolve();

      } else {
        reject(Error('Password is not valid'));
      }

    });
  };
}
