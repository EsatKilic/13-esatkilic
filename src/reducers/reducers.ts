// reducers.js

import { SET_IMAGE_URL } from '../actions/actionTypes';

const initialState = {
  imageUrl: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
