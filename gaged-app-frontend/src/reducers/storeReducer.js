import {
  STORE_CREATION_REQUEST,
  STORE_CREATION_SUCCESS,
  STORE_CREATION_FAIL,
} from "../constants/storeConstants";

export const setUpStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_CREATION_REQUEST:
      return { loading: true };
    case STORE_CREATION_SUCCESS:
      return { loading: false, storeInfo: action.payload };
    case STORE_CREATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
