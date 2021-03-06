import * as types from '../constants/actionTypes';
import { TCMARVEL_API_BASE_URL } from '../constants/config';
import agent from '../utils/agent';

export function loadTeamsSuccess(values) {
  return {
    type: types.LOAD_TEAMS_SUCCESS,
    payload: values
  };
}

export function loadTeams() {
  return dispatch => {
    return agent.requests.get(`${TCMARVEL_API_BASE_URL}/teams`)
      .end((err, res) => {
        if (err) return;

        dispatch(loadTeamsSuccess(res.body.teams));
      });
  };
}

export function createTeamSuccess(value) {
  return {
    type: types.CREATE_TEAM_SUCCESS,
    payload: value
  };
}

export function updateTeamSuccess(value) {
  return {
    type: types.UPDATE_TEAM_SUCCESS,
    payload: value
  };
}

export function saveTeam(team) {
  return dispatch => {
    if (typeof team.id === 'undefined') {
      return agent.requests.post(`${TCMARVEL_API_BASE_URL}/teams`, { team: team })
      .then((response, failure) => {
        if (failure) return; //dispatch error handler

        dispatch(createTeamSuccess(response.body.team));
      });
    } else {
      return agent.requests.put(`${TCMARVEL_API_BASE_URL}/teams/${team.idTeamMarvelApp}`, { team: team })
      .then((response, failure) => {
        if (failure) return; //dispatch error handler

        dispatch(updateTeamSuccess(response.body.team));
      });
    }
  };
}
