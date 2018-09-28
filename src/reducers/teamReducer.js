import defaultState from './defaultState';
import * as types from '../constants/actionTypes';

export default function teamReducer(state = defaultState.teams, action) {
  switch (action.type) {
    case types.LOAD_TEAMS_SUCCESS:
      return action.payload;

    case types.CREATE_TEAM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

    case types.UPDATE_TEAM_SUCCESS:
      return [
        ...state.filter(team => team.id !== action.team.id),
        Object.assign({}, action.team)
      ];

    default: return state;
  }
}
