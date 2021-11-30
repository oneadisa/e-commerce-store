import {
  BUSINESS_SIGN_UP_FAIL,
  BUSINESS_SIGN_UP_REQUEST,
  BUSINESS_SIGN_UP_SUCCESS,
  SIGNED_UP_BUSINESS_LOGIN_FAIL,
  SIGNED_UP_BUSINESS_LOGIN_REQUEST,
  SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
  SIGNED_UP_BUSINESS_LOGOUT,
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
