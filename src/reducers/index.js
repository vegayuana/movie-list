import { combineReducers } from 'redux';
import list from '../pages/Main/reducer';
import detail from '../pages/MovieDetail/reducer';

const rootReducer = combineReducers({
  list,
  detail
});

export default rootReducer;
