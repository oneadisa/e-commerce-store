import {
  BUSINESS_SIGN_UP_FAIL,
  BUSINESS_SIGN_UP_REQUEST,
  BUSINESS_SIGN_UP_SUCCESS,
  SIGNED_UP_BUSINESS_LOGIN_FAIL,
  SIGNED_UP_BUSINESS_LOGIN_REQUEST,
  SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
  SIGNED_UP_BUSINESS_LOGOUT,
  LOAD_BUSINESS_REQUEST,
  LOAD_BUSINESS_SUCCESS,
  LOAD_BUSINESS_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_BUSINESS_PROFILE_REQUEST,
  UPDATE_BUSINESS_PROFILE_SUCCESS,
  UPDATE_BUSINESS_PROFILE_FAIL,
  UPDATE_BUSINESS_PROFILE_RESET,
  UPDATE_BUSINESS_PASSWORD_REQUEST,
  UPDATE_BUSINESS_PASSWORD_SUCCESS,
  UPDATE_BUSINESS_PASSWORD_RESET,
  UPDATE_BUSINESS_PASSWORD_FAIL,
  FORGOT_BUSINESS_PASSWORD_REQUEST,
  FORGOT_BUSINESS_PASSWORD_SUCCESS,
  FORGOT_BUSINESS_PASSWORD_FAIL,
  RESET_BUSINESS_PASSWORD_REQUEST,
  RESET_BUSINESS_PASSWORD_SUCCESS,
  RESET_BUSINESS_PASSWORD_FAIL,
  ALL_BUSINESSS_REQUEST,
  ALL_BUSINESSS_SUCCESS,
  ALL_BUSINESSS_FAIL,
  DELETE_BUSINESS_REQUEST,
  DELETE_BUSINESS_SUCCESS,
  DELETE_BUSINESS_FAIL,
  DELETE_BUSINESS_RESET,
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_FAIL,
  UPDATE_BUSINESS_RESET,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/businessConstants";

export const signedUpBusinessLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNED_UP_BUSINESS_LOGIN_REQUEST:
      return { loading: true };

    case SIGNED_UP_BUSINESS_LOGIN_SUCCESS:
      return { loading: false, signedUpBusinessInfo: action.payload };

    case SIGNED_UP_BUSINESS_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case SIGNED_UP_BUSINESS_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const businessSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_SIGN_UP_REQUEST:
      return { loading: true };
    case BUSINESS_SIGN_UP_SUCCESS:
      return { loading: false, signedUpBusinessInfo: action.payload };
    case BUSINESS_SIGN_UP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessReducer = (
  state = { signedUpBusinessInfo: {} },
  action
) => {
  switch (action.type) {
    case SIGNED_UP_BUSINESS_LOGIN_REQUEST:
    case BUSINESS_SIGN_UP_REQUEST:
    case LOAD_BUSINESS_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SIGNED_UP_BUSINESS_LOGIN_SUCCESS:
    case BUSINESS_SIGN_UP_SUCCESS:
    case LOAD_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        signedUpBusinessInfo: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        signedUpBusinessInfo: null,
        isAuthenticated: false,
      };
    case SIGNED_UP_BUSINESS_LOGIN_FAIL:
    case BUSINESS_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        signedUpBusinessInfo: null,
        error: action.payload,
      };

    case LOAD_BUSINESS_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        signedUpBusinessInfo: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
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

export const businessProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_PROFILE_REQUEST:
    case UPDATE_BUSINESS_PASSWORD_REQUEST:
    case UPDATE_BUSINESS_REQUEST:
    case DELETE_BUSINESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BUSINESS_PROFILE_SUCCESS:
    case UPDATE_BUSINESS_PASSWORD_SUCCESS:
    case UPDATE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_BUSINESS_PROFILE_FAIL:
    case UPDATE_BUSINESS_PASSWORD_FAIL:
    case UPDATE_BUSINESS_FAIL:
    case DELETE_BUSINESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_BUSINESS_PROFILE_RESET:
    case UPDATE_BUSINESS_PASSWORD_RESET:
    case UPDATE_BUSINESS_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_BUSINESS_RESET:
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

export const forgotBusinessPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_BUSINESS_PASSWORD_REQUEST:
    case RESET_BUSINESS_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FORGOT_BUSINESS_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case RESET_BUSINESS_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case FORGOT_BUSINESS_PASSWORD_FAIL:
    case RESET_BUSINESS_PASSWORD_FAIL:
      return {
        ...state,
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

export const allBusinessesReducer = (state = { businesses: [] }, action) => {
  switch (action.type) {
    case ALL_BUSINESSS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESSS_SUCCESS:
      return {
        ...state,
        loading: false,
        businesses: action.payload,
      };

    case ALL_BUSINESSS_FAIL:
      return {
        ...state,
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

export const businessDetailsReducer = (
  state = { signedUpBusinessInfo: {} },
  action
) => {
  switch (action.type) {
    case BUSINESS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUpBusinessInfo: action.payload,
      };

    case BUSINESS_DETAILS_FAIL:
      return {
        ...state,
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
