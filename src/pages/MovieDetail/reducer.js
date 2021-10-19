import { ACTIONS } from '../../constants';

const initialState = {
  movie: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case ACTIONS.DETAIL_MOVIE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ACTIONS.DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    default:
      return state;
  }
}
