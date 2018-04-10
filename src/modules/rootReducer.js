import { combineReducers } from 'redux';
import entities from './entities';
import ui from './ui';
import search from './search';

export default combineReducers({
  entities,
  ui,
  search: search.reducer,
});
