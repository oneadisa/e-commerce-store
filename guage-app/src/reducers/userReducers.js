import { SIGNED_UP_USER_LOGIN_FAIL, SIGNED_UP_USER_LOGIN_REQUEST, SIGNED_UP_USER_LOGIN_SUCCESS, SIGNED_UP_USER_LOGOUT, USER_SIGN_UP_FAIL, USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS } from "../constants/userConstants";

export const signedUpUserLoginReducer = (state = {}, action) =>{

    switch (action.type) {
        case SIGNED_UP_USER_LOGIN_REQUEST:
            return {loading: true}

        case SIGNED_UP_USER_LOGIN_FAIL:
            return {loading: false, SignedUpUserInfo: action.payload}

        case SIGNED_UP_USER_LOGIN_SUCCESS:
            return {loading: false, error: action.payload}

        case SIGNED_UP_USER_LOGOUT:
            return{}
    
        default:
            return state;
    }
}

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP_REQUEST:
      return { loading: true };
    case USER_SIGN_UP_SUCCESS:
      return { loading: false, SignedUpUserInfo: action.payload };
    case USER_SIGN_UP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};