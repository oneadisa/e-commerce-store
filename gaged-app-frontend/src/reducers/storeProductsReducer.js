import {
  STORE_PRODUCTS_UPDATE_REQUEST,
  STORE_PRODUCTS_UPDATE_SUCCESS,
  STORE_PRODUCTS_UPDATE_FAIL,
  STORE_PRODUCTS_CREATE_FAIL,
  STORE_PRODUCTS_CREATE_REQUEST,
  STORE_PRODUCTS_CREATE_SUCCESS,
  STORE_PRODUCTS_DELETE_FAIL,
  STORE_PRODUCTS_DELETE_REQUEST,
  STORE_PRODUCTS_DELETE_SUCCESS,
  STORE_PRODUCTS_LIST_FAIL,
  STORE_PRODUCTS_LIST_REQUEST,
  STORE_PRODUCTS_LIST_SUCCESS,
} from "../constants/storeProductsConstants";

export const storeProductsListReducer = (
  state = { storeProducts: [] },
  action
) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_LIST_SUCCESS:
      return { loading: false, storeProducts: action.payload };
    case STORE_PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const storeProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CREATE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const storeProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DELETE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const storeProductUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_UPDATE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
