import { ACTIONS } from '../../constants';

export function detailMovieRequest() {
  return {
    type: ACTIONS.DETAIL_MOVIE_REQUEST,
  };
}

export function detailMovieSuccess(payload) {
  return {
    type: ACTIONS.DETAIL_MOVIE_SUCCESS,
    payload
  };
}

export function detailMovieError(payload) {
  return {
    type: ACTIONS.DETAIL_MOVIE_ERROR,
    payload
  };
}
