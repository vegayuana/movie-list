import * as actionsCreator from '../actionCreators';
import reducer from '../reducer';

describe('reducer', () => {
  const initialState = {
    movie: null,
    loading: false,
    error: null,
  };

  test('work as expected', () => {
    expect(reducer(undefined, actionsCreator.detailMovieRequest())).toEqual({
      ...initialState,
      loading: true
    });
    expect(reducer(undefined, actionsCreator.detailMovieError('error'))).toEqual({
      ...initialState,
      error: 'error',
      loading: false,
    });
    expect(reducer(undefined, actionsCreator.detailMovieSuccess({ data: 'movie' }))).toEqual({
      ...initialState,
      movie: { data: 'movie' },
      loading: false,
    });
  });
});
