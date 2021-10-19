import * as actions from './actionCreators';
import axios from 'axios';
import { API } from '../../configs';

export function getDetailMovie(id) {
  return async (dispatch) => {
    try {
      dispatch(actions.detailMovieRequest());
      const { data } = await axios(API.axiosOptions({
        method: 'GET',
        url: `${API.movieById(id)}`
      }));
      data.Error ?
        dispatch(actions.detailMovieError(data.Error)) :
        dispatch(actions.detailMovieSuccess(data));
    } catch ({ response }) {
      dispatch(actions.detailMovieError(response));
    }
  };
}
