import { ACTIONS } from '../../constants';

const initialState = {
  movies: [],
  loading: false,
  search: [],
  loadingSearch: false,
  error: null,
  totalResults: 0,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.MOVIES_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case ACTIONS.MOVIES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ACTIONS.MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload.Search || [],
        totalResults: payload.totalResults || 0,
        loading: false,
      };
    case ACTIONS.SEARCH_REQUEST:
      return {
        ...state,
        loadingSearch: true
      };
    case ACTIONS.SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loadingSearch: false,
      };
    case ACTIONS.SEARCH_SUCCESS:
      return {
        ...state,
        search: payload,
        loadingSearch: false,
      };
    default:
      return state;
  }
}
