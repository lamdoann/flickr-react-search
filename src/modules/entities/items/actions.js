import { ITEM_SUCCESS } from './actionTypes';

export const onSuccess = (items) => (
  {
    type: ITEM_SUCCESS,
    items,
  }
);
