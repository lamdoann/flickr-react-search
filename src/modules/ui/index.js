import { combineReducers } from 'redux';
import searchForm from './seach-form';

export default combineReducers({
  ['searchForm']: searchForm.reducer,
});
