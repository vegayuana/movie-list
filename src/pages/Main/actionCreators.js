import { ACTIONS } from '../../constants';

export function moviesRequest() {
  return {
    type: ACTIONS.MOVIES_REQUEST,
  };
}

export function moviesSuccess(payload) {
  return {
    type: ACTIONS.MOVIES_SUCCESS,
    payload
  };
}

export function moviesError(payload) {
  return {
    type: ACTIONS.MOVIES_ERROR,
    payload
  };
}

export function searchRequest() {
  return {
    type: ACTIONS.SEARCH_REQUEST,
  };
}

export function searchSuccess(payload) {
  return {
    type: ACTIONS.SEARCH_SUCCESS,
    payload
  };
}

export function searchError(payload) {
  return {
    type: ACTIONS.SEARCH_ERROR,
    payload
  };
}
