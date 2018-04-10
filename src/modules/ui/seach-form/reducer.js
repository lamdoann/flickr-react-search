import { SEARCH_FORM_REQUEST, SEARCH_FORM_SUCCESS, SEARCH_FORM_ERROR } from './actionTypes';

const initialState = {
  isRequesting: false,
  isError: false,
  message: null,
};

export default function reducer(state = initialState, action) {
  const { type, message } = action;
  switch (type) {
    case SEARCH_FORM_REQUEST: 
      return {
        ...state,
        isRequesting: true,
        isError: false,
        message: null,
      };

    case SEARCH_FORM_SUCCESS:
      return {
        isRequesting: false,
        isError: false,
        message: null,
      };
    
    case SEARCH_FORM_ERROR:
      return {
        message,
        isRequesting: false,
        isError: true,
      };

    default:
      return state;
  }
}
