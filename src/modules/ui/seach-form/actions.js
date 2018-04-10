import { SEARCH_FORM_REQUEST, SEARCH_FORM_SUCCESS, SEARCH_FORM_ERROR } from './actionTypes';

export const onRequest = () => (
  {
    type: SEARCH_FORM_REQUEST,
  }
);

export const onSuccess = () => (
  {
    type: SEARCH_FORM_SUCCESS,
  }
);

export const onError = (message) => (
  {
    type: SEARCH_FORM_ERROR,
    message,
  }
);
