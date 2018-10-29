import * as types from '../constants/actionTypes';
import { TCMARVEL_API_BASE_URL, MAIL_RECEIVER } from '../constants/config';
import superagent from 'superagent';

export function loadRequestsSuccess(values) {
  return {
    type: types.LOAD_REQUESTS_SUCCESS,
    payload: values
  };
}

export function loadRequests(id) {
  return dispatch => {
    return superagent.get(`${TCMARVEL_API_BASE_URL}/teams/${id}/requests`)
      .end((err, res) => {
        if (err) return;

        dispatch(loadRequestsSuccess(res.body.requests));
      });
  };
}

export function createRequestSuccess(value) {
  return {
    type: types.CREATE_REQUEST_SUCCESS,
    payload: value
  };
}

export function updateRequestSuccess(value) {
  return {
    type: types.UPDATE_REQUEST_SUCCESS,
    payload: value
  };
}

export function saveRequest(request) {
  return dispatch => {
    if (typeof request.id === 'undefined') {
      return superagent.post(`${TCMARVEL_API_BASE_URL}/requests/${request.idTopcoderChallenge}`, { request: request })
      .then((response, failure) => {
        if (failure) return; //dispatch error handler

        const mailData = {
          message: {
            to: MAIL_RECEIVER,
            from: request.tcEmail,
            subject: `Marvelapp Request - ${request.idTopcoderChallenge}`,
            text: `Request from ${request.tcHandle}, email: ${request.tcEmail}`
          }
        };

        superagent.post(`${TCMARVEL_API_BASE_URL}/mail`, mailData)
          .then((res, failure) => {
            if (failure) {
              console.log(failure);
              return;
            }
          })
          .catch(err => {
            console.log(`Error sending email: ${err}`);
          });

        dispatch(createRequestSuccess(response.body.request));
      })
      .catch(err => {
        throw(err);
      });
    } else {
      return superagent.put(`${TCMARVEL_API_BASE_URL}/requests/${request.idTopcoderChallenge}`, { request: request })
      .then((response, failure) => {
        if (failure) return; //dispatch error handler

        dispatch(updateRequestSuccess(response.body.request));
      })
      .catch(err => {
        throw(err);
      });
    }
  };
}

export function deleteRequestSuccess(value) {
  return {
    type: types.DELETE_REQUEST_SUCCESS,
    payload: value
  };
}

export function deleteRequest(id) {
  return dispatch => {
    return superagent.delete(`${TCMARVEL_API_BASE_URL}/requests/${id}`)
    .then((response, failure) => {
      if (failure) return; //dispatch error handler

      dispatch(deleteRequestSuccess(id));
    });
  }
}
