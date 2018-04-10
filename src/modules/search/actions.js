import { SEARCH, SEARCH_SUCCESS } from './actionTypes';

export const onSearch = (input) => (
  {
    type: SEARCH,
    input,
  }
);

export const onSuccess = (items) => (
  {
    type: SEARCH_SUCCESS,
    items,
  }
);
