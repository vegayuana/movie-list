import * as actions from './actionCreators';
import axios from 'axios';
import { API } from '../../configs';

export function getMovies(keyword, page) {
  return async (dispatch) => {
    try {
      dispatch(actions.moviesRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: `${API.movies(keyword)}&page=${page}`
      }));
      data.Error ?
        dispatch(actions.moviesError(data.Error)) :
        dispatch(actions.moviesSuccess(data));
    } catch ({ response }) {
      dispatch(actions.moviesError(response));
    }
  };
}

export function getSearchList(keyword) {
  return async (dispatch) => {
    try {
      dispatch(actions.searchRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: API.movies(keyword),
      }));

      dispatch(actions.searchSuccess(data.Search || []));
    } catch ({ response }) {
      dispatch(actions.searchError(response));
    }
  };
}

