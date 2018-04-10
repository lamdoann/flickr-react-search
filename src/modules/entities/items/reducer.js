import { ITEM_SUCCESS } from './actionTypes';

const initialState = {
  byId: {},
  allIds: [],
};

function byId(items = []) {
  const itemsObj = {};
  items.forEach((item, index) => itemsObj[index] = item);
  return itemsObj;
}

function allIds(items = []) {
  return items.map((_, index) => index); 
}

export default function reducer(state = initialState, action) {
  const { type, items } = action;
  switch (type) {
    case ITEM_SUCCESS:
      return {
        byId: byId(items),
        allIds: allIds(items), 
      };
    
    default:
      return state;
  }
}
