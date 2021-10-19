import * as actionsCreator from '../actionCreators';

describe('actions creators', () => {
  it('works', () => {
    actionsCreator.moviesRequest();
    actionsCreator.moviesError();
    actionsCreator.moviesSuccess();
    actionsCreator.searchRequest();
    actionsCreator.searchError();
    actionsCreator.searchSuccess();
  });
});
