import {
  SIGNED_UP_USER_LOGIN_FAIL,
  SIGNED_UP_USER_LOGIN_REQUEST,
  SIGNED_UP_USER_LOGIN_SUCCESS,
  SIGNED_UP_USER_LOGOUT,
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_RESET,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_RESET,
  UPDATE_USER_PASSWORD_FAIL,
  FORGOT_USER_PASSWORD_REQUEST,
  FORGOT_USER_PASSWORD_SUCCESS,
  FORGOT_USER_PASSWORD_FAIL,
  RESET_USER_PASSWORD_REQUEST,
  RESET_USER_PASSWORD_SUCCESS,
  RESET_USER_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  NEW_ORDERED_FROM_REQUEST,
  NEW_ORDERED_FROM_RESET,
  NEW_ORDERED_FROM_SUCCESS,
  NEW_ORDERED_FROM_FAIL,
  ALL_ORDERED_FROM_SUCCESS,
  ALL_ORDERED_FROM_REQUEST,
  ALL_ORDERED_FROM_FAIL,
  DELETE_ORDERED_FROM_REQUEST,
  DELETE_ORDERED_FROM_FAIL,
  DELETE_ORDERED_FROM_SUCCESS,
  DELETE_ORDERED_FROM_RESET,
  NEW_CAMPAIGN_INVESTED_REQUEST,
  NEW_CAMPAIGN_INVESTED_SUCCESS,
  NEW_CAMPAIGN_INVESTED_RESET,
  NEW_CAMPAIGN_INVESTED_FAIL,
  NEW_CAMPAIGN_PAYOUT_REQUEST,
  NEW_CAMPAIGN_PAYOUT_SUCCESS,
  NEW_CAMPAIGN_PAYOUT_RESET,
  NEW_CAMPAIGN_PAYOUT_FAIL,
  ALL_CAMPAIGNS_INVESTED_REQUEST,
  ALL_CAMPAIGNS_INVESTED_SUCCESS,
  ALL_CAMPAIGNS_INVESTED_FAIL,
  ALL_CAMPAIGNS_PAYOUT_REQUEST,
  ALL_CAMPAIGNS_PAYOUT_SUCCESS,
  ALL_CAMPAIGNS_PAYOUT_FAIL,
  PARTICULAR_CAMPAIGNS_INVESTED_REQUEST,
  PARTICULAR_CAMPAIGNS_INVESTED_SUCCESS,
  PARTICULAR_CAMPAIGNS_INVESTED_FAIL,
  PARTICULAR_CAMPAIGNS_PAYOUT_REQUEST,
  PARTICULAR_CAMPAIGNS_PAYOUT_SUCCESS,
  PARTICULAR_CAMPAIGNS_PAYOUT_FAIL,
  DELETE_CAMPAIGN_INVESTED_REQUEST,
  DELETE_CAMPAIGN_INVESTED_SUCCESS,
  DELETE_CAMPAIGN_INVESTED_RESET,
  DELETE_CAMPAIGN_INVESTED_FAIL,
  DELETE_CAMPAIGN_PAYOUT_REQUEST,
  DELETE_CAMPAIGN_PAYOUT_SUCCESS,
  DELETE_CAMPAIGN_PAYOUT_RESET,
  DELETE_CAMPAIGN_PAYOUT_FAIL,
  NEW_CAMPAIGN_REVIEWS_REQUEST,
  NEW_CAMPAIGN_REVIEWS_SUCCESS,
  NEW_CAMPAIGN_REVIEWS_RESET,
  NEW_CAMPAIGN_REVIEWS_FAIL,
  ALL_CAMPAIGNS_REVIEWS_REQUEST,
  ALL_CAMPAIGNS_REVIEWS_SUCCESS,
  ALL_CAMPAIGNS_REVIEWS_FAIL,
  DELETE_CAMPAIGN_REVIEWS_REQUEST,
  DELETE_CAMPAIGN_REVIEWS_SUCCESS,
  DELETE_CAMPAIGN_REVIEWS_RESET,
  DELETE_CAMPAIGN_REVIEWS_FAIL,
  NEW_PRODUCT_REVIEWS_REQUEST,
  NEW_PRODUCT_REVIEWS_SUCCESS,
  NEW_PRODUCT_REVIEWS_RESET,
  NEW_PRODUCT_REVIEWS_FAIL,
  ALL_PRODUCTS_REVIEWS_REQUEST,
  ALL_PRODUCTS_REVIEWS_SUCCESS,
  ALL_PRODUCTS_REVIEWS_FAIL,
  DELETE_PRODUCT_REVIEWS_REQUEST,
  DELETE_PRODUCT_REVIEWS_SUCCESS,
  DELETE_PRODUCT_REVIEWS_RESET,
  DELETE_PRODUCT_REVIEWS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const signedUpUserLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNED_UP_USER_LOGIN_REQUEST:
      return { loading: true };

    case SIGNED_UP_USER_LOGIN_SUCCESS:
      return { loading: false, signedUpUserInfo: action.payload };

    case SIGNED_UP_USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case SIGNED_UP_USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP_REQUEST:
      return { loading: true };
    case USER_SIGN_UP_SUCCESS:
      return { loading: false, signedUpUserInfo: action.payload };
    case USER_SIGN_UP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = { signedUpUserInfo: {} }, action) => {
  switch (action.type) {
    case SIGNED_UP_USER_LOGIN_REQUEST:
    case USER_SIGN_UP_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SIGNED_UP_USER_LOGIN_SUCCESS:
    case USER_SIGN_UP_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        signedUpUserInfo: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        signedUpUserInfo: null,
        isAuthenticated: false,
      };
    case SIGNED_UP_USER_LOGIN_FAIL:
    case USER_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        signedUpUserInfo: null,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        signedUpUserInfo: null,
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

export const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
    case UPDATE_USER_PASSWORD_REQUEST:
    case UPDATE_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
    case UPDATE_USER_PASSWORD_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_USER_PROFILE_FAIL:
    case UPDATE_USER_PASSWORD_FAIL:
    case UPDATE_USER_FAIL:
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_USER_PROFILE_RESET:
    case UPDATE_USER_PASSWORD_RESET:
    case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_USER_RESET:
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

export const forgotUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_USER_PASSWORD_REQUEST:
    case RESET_USER_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FORGOT_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    case FORGOT_USER_PASSWORD_FAIL:
    case RESET_USER_PASSWORD_FAIL:
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

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ALL_USERS_FAIL:
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

export const userDetailsReducer = (
  state = { signedUpUserInfo: {} },
  action
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUpUserInfo: action.payload,
      };

    case USER_DETAILS_FAIL:
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

export const allBusinessOrderedFromReducer = (
  state = { businessOrderedFrom: [] },
  action
) => {
  switch (action.type) {
    case ALL_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        businessOrderedFrom: action.payload,
      };
    case ALL_ORDERED_FROM_FAIL:
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

export const myBusinessOrderedFromReducer = (
  state = { businessOrderedFrom: [] },
  action
) => {
  switch (action.type) {
    case ALL_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        businessOrderedFrom: action.payload,
      };
    case ALL_ORDERED_FROM_FAIL:
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

export const newBusinessOrderedFromReducer = (
  state = { businessOrderedFrom: {} },
  action
) => {
  switch (action.type) {
    case NEW_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        businessOrderedFrom: action.payload.businessOrderedFrom,
      };
    case NEW_ORDERED_FROM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ORDERED_FROM_RESET:
      return {
        ...state,
        success: false,
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

export const businessOrderedFromReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ORDERED_FROM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_ORDERED_FROM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ORDERED_FROM_RESET:
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

export const allCampaignsInvestedReducer = (
  state = { campaignsInvested: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_INVESTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_INVESTED_SUCCESS:
      return {
        loading: false,
        campaignsInvested: action.payload,
      };
    case ALL_CAMPAIGNS_INVESTED_FAIL:
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

export const myCampaignsInvestedReducer = (
  state = { campaignsInvested: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_INVESTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_INVESTED_SUCCESS:
      return {
        loading: false,
        campaignsInvested: action.payload,
      };
    case ALL_CAMPAIGNS_INVESTED_FAIL:
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

export const newCampaignInvestedReducer = (
  state = { campaignsInvested: {} },
  action
) => {
  switch (action.type) {
    case NEW_CAMPAIGN_INVESTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_INVESTED_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        campaignsInvested: action.payload.CampaignsInvested,
      };
    case NEW_CAMPAIGN_INVESTED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_INVESTED_RESET:
      return {
        ...state,
        success: false,
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

export const campaignsInvestedReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_INVESTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_INVESTED_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_CAMPAIGN_INVESTED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_INVESTED_RESET:
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

export const allCampaignsPayoutReducer = (
  state = { campaignsPayout: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_PAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_PAYOUT_SUCCESS:
      return {
        loading: false,
        campaignsPayout: action.payload,
      };
    case ALL_CAMPAIGNS_PAYOUT_FAIL:
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

export const myCampaignsPayoutReducer = (
  state = { campaignsPayout: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_PAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_PAYOUT_SUCCESS:
      return {
        loading: false,
        campaignsPayout: action.payload,
      };
    case ALL_CAMPAIGNS_PAYOUT_FAIL:
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

export const particularCampaignsPayoutReducer = (
  state = { campaignsPayout: [] },
  action
) => {
  switch (action.type) {
    case PARTICULAR_CAMPAIGNS_PAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PARTICULAR_CAMPAIGNS_PAYOUT_SUCCESS:
      return {
        loading: false,
        campaignsPayout: action.payload,
      };
    case PARTICULAR_CAMPAIGNS_PAYOUT_FAIL:
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

export const newCampaignPayoutReducer = (
  state = { campaignsPayout: {} },
  action
) => {
  switch (action.type) {
    case NEW_CAMPAIGN_PAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_PAYOUT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        campaignsPayout: action.payload.CampaignsPacampaignsPayout,
      };
    case NEW_CAMPAIGN_PAYOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_PAYOUT_RESET:
      return {
        ...state,
        success: false,
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

export const campaignsPayoutReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_PAYOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_PAYOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_CAMPAIGN_PAYOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_PAYOUT_RESET:
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

export const particularCampaignsInvestedReducer = (
  state = { campaignsInvested: [] },
  action
) => {
  switch (action.type) {
    case PARTICULAR_CAMPAIGNS_INVESTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PARTICULAR_CAMPAIGNS_INVESTED_SUCCESS:
      return {
        loading: false,
        campaignsInvested: action.payload,
      };
    case PARTICULAR_CAMPAIGNS_INVESTED_FAIL:
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

export const allCampaignsReviewsReducer = (
  state = { campaignsReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_REVIEWS_SUCCESS:
      return {
        loading: false,
        campaignsReviews: action.payload,
      };
    case ALL_CAMPAIGNS_REVIEWS_FAIL:
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

export const myCampaignsReviewsReducer = (
  state = { campaignsReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_REVIEWS_SUCCESS:
      return {
        loading: false,
        campaignsReviews: action.payload,
      };
    case ALL_CAMPAIGNS_REVIEWS_FAIL:
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

export const newCampaignReviewsReducer = (
  state = { campaignsReviews: {} },
  action
) => {
  switch (action.type) {
    case NEW_CAMPAIGN_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_REVIEWS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        campaignsReviews: action.payload.campaignsReviews,
      };
    case NEW_CAMPAIGN_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_REVIEWS_RESET:
      return {
        ...state,
        success: false,
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

export const campaignsReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_CAMPAIGN_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_REVIEWS_RESET:
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

export const allProductsReviewsReducer = (
  state = { productsReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_PRODUCTS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCTS_REVIEWS_SUCCESS:
      return {
        loading: false,
        productsReviews: action.payload,
      };
    case ALL_PRODUCTS_REVIEWS_FAIL:
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

export const myProductsReviewsReducer = (
  state = { productsReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_PRODUCTS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCTS_REVIEWS_SUCCESS:
      return {
        loading: false,
        productsReviews: action.payload,
      };
    case ALL_PRODUCTS_REVIEWS_FAIL:
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

export const newnewProductReviewsReducer = (
  state = { productsReviews: {} },
  action
) => {
  switch (action.type) {
    case NEW_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT_REVIEWS_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        productsReviews: action.payload.productsReviews,
      };
    case NEW_PRODUCT_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PRODUCT_REVIEWS_RESET:
      return {
        ...state,
        success: false,
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

export const productsReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_PRODUCT_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_REVIEWS_RESET:
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
