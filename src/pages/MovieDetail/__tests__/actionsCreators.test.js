import * as actionsCreator from '../actionCreators';

describe('actions creators', () => {
  it('works', () => {
    actionsCreator.detailMovieRequest();
    actionsCreator.detailMovieError();
    actionsCreator.detailMovieSuccess();
  });
});
