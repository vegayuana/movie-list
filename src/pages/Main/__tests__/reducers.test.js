import * as actionsCreator from '../actionCreators';
import reducer from '../reducer';

describe('reducer', () => {
  const initialState = {
    movies: [],
    loading: false,
    search: [],
    loadingSearch: false,
    error: null,
    totalResults: 0,
  };

  test('work as expected', () => {
    expect(reducer(undefined, actionsCreator.moviesRequest())).toEqual({
      ...initialState,
      loading: true
    });
    expect(reducer(undefined, actionsCreator.moviesError('error'))).toEqual({
      ...initialState,
      error: 'error',
      loading: false,
    });
    expect(reducer(undefined, actionsCreator.moviesSuccess({ Search: [{ data: 'movie' }], totalResults: 5 }))).toEqual({
      ...initialState,
      movies: [{ data: 'movie' }],
      totalResults: 5,
      loading: false,
    });
    expect(reducer(undefined, actionsCreator.searchRequest())).toEqual({
      ...initialState,
      loadingSearch: true
    });
    expect(reducer(undefined, actionsCreator.searchError('error'))).toEqual({
      ...initialState,
      error: 'error',
      loadingSearch: false,
    });
    expect(reducer(undefined, actionsCreator.searchSuccess([{ data: 'movie' }]))).toEqual({
      ...initialState,
      search: [{ data: 'movie' }],
      loadingSearch: false,
    });
  });
});
