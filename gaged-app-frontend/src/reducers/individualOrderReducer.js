import {
  CREATE_INDIVIDUAL_ORDER_REQUEST,
  CREATE_INDIVIDUAL_ORDER_SUCCESS,
  CREATE_INDIVIDUAL_ORDER_FAIL,
  MY_INDIVIDUAL_ORDERS_REQUEST,
  MY_INDIVIDUAL_ORDERS_SUCCESS,
  MY_INDIVIDUAL_ORDERS_FAIL,
  ALL_INDIVIDUAL_ORDERS_REQUEST,
  ALL_INDIVIDUAL_ORDERS_SUCCESS,
  ALL_INDIVIDUAL_ORDERS_FAIL,
  UPDATE_INDIVIDUAL_ORDER_REQUEST,
  UPDATE_INDIVIDUAL_ORDER_SUCCESS,
  UPDATE_INDIVIDUAL_ORDER_FAIL,
  UPDATE_INDIVIDUAL_ORDER_RESET,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  DELETE_INDIVIDUAL_ORDER_RESET,
  INDIVIDUAL_ORDER_DETAILS_REQUEST,
  INDIVIDUAL_ORDER_DETAILS_SUCCESS,
  INDIVIDUAL_ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/individualOrderConstants";

export const newIndividualOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case CREATE_INDIVIDUAL_ORDER_FAIL:
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

export const myIndividualOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_INDIVIDUAL_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case MY_INDIVIDUAL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case MY_INDIVIDUAL_ORDERS_FAIL:
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

export const allIndividualOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case ALL_INDIVIDUAL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ALL_INDIVIDUAL_ORDERS_FAIL:
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

export const updateIndividualOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INDIVIDUAL_ORDER_REQUEST:
    case DELETE_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_INDIVIDUAL_ORDER_FAIL:
    case DELETE_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_INDIVIDUAL_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_INDIVIDUAL_ORDER_RESET:
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

export const individualOrderDetailsReducer = (
  state = { order: {} },
  action
) => {
  switch (action.type) {
    case INDIVIDUAL_ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case INDIVIDUAL_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case INDIVIDUAL_ORDER_DETAILS_FAIL:
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
