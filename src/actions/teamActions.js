import * as types from '../constants/actionTypes';
import superagent from 'superagent';
import { teams } from '../mockAPI';

export function loadTeamsSuccess(values) {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    payload: values
  };
}

export function loadTeams() {
  return dispatch => {
    dispatch(loadTeamsSuccess(teams));
  };
}
