import * as types from '../constants/actionTypes';
import superagent from 'superagent';
import { MARVELAPP_GQL_URL, TC_API_BASE_URL } from '../constants/config';
import { projectTypes } from '../mockAPI';

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

export function setMainTitleSuccess(value) {
  return {
    type: types.UPDATE_MAIN_TITLE_SUCCESSS,
    payload: value
  };
}

export function setMainTitle(value) {
  return dispatch => {
    dispatch(setMainTitleSuccess(value));
  };
}

export function loadChallengeTitle(challengeId) {
  return dispatch => {
      return superagent.get(`${TC_API_BASE_URL}/v3/challenges/${challengeId}`)
        .end((err, res) => {
          if (err) return;

          dispatch(setMainTitleSuccess(res.body.result.content.challengeName));
        });
  };
}

export function loadProjectTypes() {
  return dispatch => {
    // return superagent.get(`${MARVELAPP_GQL_URL}/q`)
    dispatch(loadProjectTypesSuccess(projectTypes));
  };
}

export function loadProjectTypesSuccess(value) {
  return {
    type: types.LOAD_PROJECT_TYPES_SUCCESS,
    payload: value
  };
}
