import { SEARCH, SEARCH_SUCCESS } from './actionTypes';

/**
 * Array of item ids
 */
const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  const { type, items } = action;
  switch (type) {
    case SEARCH_SUCCESS:
      return { items: items.map((_, index) => index) };
    default:
      return state;
  }
}
