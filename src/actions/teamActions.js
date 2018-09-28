import * as types from '../constants/actionTypes';
import superagent from 'superagent';
import { teams } from '../mockAPI';

export function loadTeamsSucess(values) {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    payload: values
  };
}

export function loadTeams() {
  return dispatch => {
    dispatch(loadTeamsSucess(teams));
  };
}
