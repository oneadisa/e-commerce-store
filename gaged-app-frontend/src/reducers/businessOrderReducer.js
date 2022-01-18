import {
  CREATE_BUSINESS_ORDER_REQUEST,
  CREATE_BUSINESS_ORDER_SUCCESS,
  CREATE_BUSINESS_ORDER_FAIL,
  MY_BUSINESS_ORDERS_REQUEST,
  MY_BUSINESS_ORDERS_SUCCESS,
  MY_BUSINESS_ORDERS_FAIL,
  ALL_BUSINESS_ORDERS_REQUEST,
  ALL_BUSINESS_ORDERS_SUCCESS,
  ALL_BUSINESS_ORDERS_FAIL,
  UPDATE_BUSINESS_ORDER_REQUEST,
  UPDATE_BUSINESS_ORDER_SUCCESS,
  UPDATE_BUSINESS_ORDER_FAIL,
  UPDATE_BUSINESS_ORDER_RESET,
  DELETE_BUSINESS_ORDER_REQUEST,
  DELETE_BUSINESS_ORDER_SUCCESS,
  DELETE_BUSINESS_ORDER_FAIL,
  DELETE_BUSINESS_ORDER_RESET,
  BUSINESS_ORDER_DETAILS_REQUEST,
  BUSINESS_ORDER_DETAILS_SUCCESS,
  BUSINESS_ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/businessOrderConstants";

export const newBusinessOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_BUSINESS_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case CREATE_BUSINESS_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const myBusinessOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_BUSINESS_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case MY_BUSINESS_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case MY_BUSINESS_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const allBusinessOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ALL_BUSINESS_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case ALL_BUSINESS_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ALL_BUSINESS_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const updateBusinessOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_ORDER_REQUEST:
    case DELETE_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BUSINESS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_BUSINESS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_BUSINESS_ORDER_FAIL:
    case DELETE_BUSINESS_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_BUSINESS_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_BUSINESS_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const businessOrderDetailsReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case BUSINESS_ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case BUSINESS_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case BUSINESS_ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
