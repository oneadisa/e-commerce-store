/* eslint-disable no-unused-vars */
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
  SINGLE_BUSINESS_REQUEST,
  SINGLE_BUSINESS_SUCCESS,
  SINGLE_BUSINESS_FAIL,
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
  NEW_CAMPAIGN_STARTED_SUCCESS,
  NEW_CAMPAIGN_STARTED_RESET,
  NEW_CAMPAIGN_STARTED_REQUEST,
  NEW_CAMPAIGN_STARTED_FAIL,
  ALL_CAMPAIGNS_STARTED_REQUEST,
  ALL_CAMPAIGNS_STARTED_SUCCESS,
  ALL_CAMPAIGNS_STARTED_FAIL,
  DELETE_CAMPAIGN_STARTED_REQUEST,
  DELETE_CAMPAIGN_STARTED_SUCCESS,
  DELETE_CAMPAIGN_STARTED_RESET,
  DELETE_CAMPAIGN_STARTED_FAIL,
  ALL_STORE_PRODUCTS_REQUEST,
  ALL_STORE_PRODUCTS_FAIL,
  ALL_STORE_PRODUCTS_SUCCESS,
  NEW_STORE_PRODUCT_FAIL,
  NEW_STORE_PRODUCT_RESET,
  NEW_STORE_PRODUCT_REQUEST,
  NEW_STORE_PRODUCT_SUCCESS,
  DELETE_STORE_PRODUCT_REQUEST,
  DELETE_STORE_PRODUCT_FAIL,
  DELETE_STORE_PRODUCT_SUCCESS,
  DELETE_STORE_PRODUCT_RESET,
  NEW_INDIVIDUAL_ORDER_RESET,
  NEW_INDIVIDUAL_ORDER_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_RESET,
  NEW_ORDER_FAIL,
  ALL_INDIVIDUAL_ORDER_REQUEST,
  ALL_INDIVIDUAL_ORDER_SUCCESS,
  ALL_INDIVIDUAL_ORDER_FAIL,
  ALL_ORDER_REQUEST,
  ALL_ORDER_SUCCESS,
  ALL_ORDER_FAIL,
  UPDATE_INDIVIDUAL_ORDER_REQUEST,
  UPDATE_INDIVIDUAL_ORDER_SUCCESS,
  UPDATE_INDIVIDUAL_ORDER_RESET,
  UPDATE_INDIVIDUAL_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_RESET,
  UPDATE_ORDER_FAIL,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_RESET,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_RESET,
  DELETE_ORDER_FAIL,
  DELETE_INDIVIDUAL_CUSTOMER_REQUEST,
  DELETE_INDIVIDUAL_CUSTOMER_SUCCESS,
  DELETE_INDIVIDUAL_CUSTOMER_RESET,
  DELETE_INDIVIDUAL_CUSTOMER_FAIL,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_RESET,
  DELETE_CUSTOMER_FAIL,
  NEW_INDIVIDUAL_CUSTOMER_REQUEST,
  NEW_INDIVIDUAL_CUSTOMER_SUCCESS,
  NEW_INDIVIDUAL_CUSTOMER_RESET,
  NEW_INDIVIDUAL_CUSTOMER_FAIL,
  NEW_CUSTOMER_REQUEST,
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_RESET,
  NEW_CUSTOMER_FAIL,
  ALL_INDIVIDUAL_CUSTOMER_REQUEST,
  ALL_INDIVIDUAL_CUSTOMER_SUCCESS,
  ALL_INDIVIDUAL_CUSTOMER_FAIL,
  ALL_CUSTOMER_REQUEST,
  ALL_CUSTOMER_SUCCESS,
  ALL_CUSTOMER_FAIL,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_FAIL,
  ALL_BUSINESS_REVIEWS_REQUEST,
  ALL_BUSINESS_REVIEWS_SUCCESS,
  ALL_BUSINESS_REVIEWS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  NEW_BUSINESS_REVIEW_REQUEST,
  NEW_BUSINESS_REVIEW_SUCCESS,
  NEW_BUSINESS_REVIEW_RESET,
  NEW_BUSINESS_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,
  DELETE_BUSINESS_REVIEW_REQUEST,
  DELETE_BUSINESS_REVIEW_SUCCESS,
  DELETE_BUSINESS_REVIEW_RESET,
  DELETE_BUSINESS_REVIEW_FAIL,
  STORE_PRODUCTS_CREATE_RESET,
  STORE_PRODUCTS_CREATE_SUCCESS,
  STORE_PRODUCTS_CREATE_FAIL,
  STORE_PRODUCTS_CREATE_REQUEST,
  STORE_PRODUCTS_UPDATE_RESET,
  STORE_PRODUCTS_UPDATE_SUCCESS,
  STORE_PRODUCTS_UPDATE_FAIL,
  STORE_PRODUCTS_UPDATE_REQUEST,
  STORE_PRODUCTS_DELETE_RESET,
  STORE_PRODUCTS_DELETE_SUCCESS,
  STORE_PRODUCTS_DELETE_FAIL,
  STORE_PRODUCTS_DELETE_REQUEST,
  CLEAR_ERRORS,
  NEW_INDIVIDUAL_ORDER_REQUEST,
  NEW_INDIVIDUAL_ORDER_SUCCESS,
  STORE_PRODUCTS_DETAILS_REQUEST,
  STORE_PRODUCTS_DETAILS_SUCCESS,
  STORE_PRODUCTS_DETAILS_FAIL,
  ALL_INDIVIDUAL_PRODUCT_REVIEWS_REQUEST,
  ALL_INDIVIDUAL_PRODUCT_REVIEWS_SUCCESS,
  ALL_INDIVIDUAL_PRODUCT_REVIEWS_RESET,
  ALL_INDIVIDUAL_PRODUCT_REVIEWS_FAIL,
  ALL_PRODUCT_REVIEWS_REQUEST,
  ALL_PRODUCT_REVIEWS_SUCCESS,
  ALL_PRODUCT_REVIEWS_FAIL,
  ALL_PRODUCT_REVIEWS_RESET,
  NEW_INDIVIDUAL_PRODUCT_REVIEW_REQUEST,
  NEW_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS,
  NEW_INDIVIDUAL_PRODUCT_REVIEW_RESET,
  NEW_INDIVIDUAL_PRODUCT_REVIEW_FAIL,
  NEW_PRODUCT_REVIEW_REQUEST,
  NEW_PRODUCT_REVIEW_SUCCESS,
  NEW_PRODUCT_REVIEW_RESET,
  NEW_PRODUCT_REVIEW_FAIL,
  DELETE_INDIVIDUAL_PRODUCT_REVIEW_REQUEST,
  DELETE_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS,
  DELETE_INDIVIDUAL_PRODUCT_REVIEW_RESET,
  DELETE_INDIVIDUAL_PRODUCT_REVIEW_FAIL,
  DELETE_PRODUCT_REVIEW_REQUEST,
  DELETE_PRODUCT_REVIEW_SUCCESS,
  DELETE_PRODUCT_REVIEW_RESET,
  DELETE_PRODUCT_REVIEW_FAIL,
  NEW_INDIVIDUAL_DONOR_SUCCESS,
  NEW_INDIVIDUAL_DONOR_FAIL,
  NEW_INDIVIDUAL_DONOR_RESET,
  NEW_INDIVIDUAL_DONOR_REQUEST,
  ALL_INDIVIDUAL_DONORS_REQUEST,
  ALL_INDIVIDUAL_DONORS_SUCCESS,
  ALL_INDIVIDUAL_DONORS_FAIL,
  DELETE_INDIVIDUAL_DONOR_REQUEST,
  DELETE_INDIVIDUAL_DONOR_SUCCESS,
  DELETE_INDIVIDUAL_DONOR_FAIL,
  DELETE_INDIVIDUAL_DONOR_RESET,
  NEW_DONOR_SUCCESS,
  NEW_DONOR_FAIL,
  NEW_DONOR_RESET,
  NEW_DONOR_REQUEST,
  ALL_DONORS_REQUEST,
  ALL_DONORS_SUCCESS,
  ALL_DONORS_FAIL,
  DELETE_DONOR_REQUEST,
  DELETE_DONOR_SUCCESS,
  DELETE_DONOR_FAIL,
  DELETE_DONOR_RESET,
  NEW_CAMPAIGN_REVIEW_REQUEST,
  NEW_CAMPAIGN_REVIEW_SUCCESS,
  NEW_CAMPAIGN_REVIEW_FAIL,
  NEW_CAMPAIGN_REVIEW_RESET,
  ALL_CAMPAIGN_REVIEWS_REQUEST,
  ALL_CAMPAIGN_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_REVIEWS_FAIL,
  DELETE_CAMPAIGN_REVIEW_REQUEST,
  DELETE_CAMPAIGN_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_REVIEW_FAIL,
  DELETE_CAMPAIGN_REVIEW_RESET,
  ALL_CAMPAIGN_FAIL,
  ALL_CAMPAIGN_REQUEST,
  ALL_CAMPAIGN_SUCCESS,
  MY_CAMPAIGN_FAIL,
  MY_CAMPAIGN_REQUEST,
  MY_CAMPAIGN_SUCCESS,
  ADMIN_CAMPAIGN_REQUEST,
  ADMIN_CAMPAIGN_SUCCESS,
  ADMIN_CAMPAIGN_FAIL,
  NEW_CAMPAIGN_REQUEST,
  NEW_CAMPAIGN_SUCCESS,
  NEW_CAMPAIGN_FAIL,
  NEW_CAMPAIGN_RESET,
  UPDATE_CAMPAIGN_REQUEST,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAIL,
  UPDATE_CAMPAIGN_RESET,
  DELETE_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAIL,
  DELETE_CAMPAIGN_RESET,
  CAMPAIGN_DETAILS_REQUEST,
  CAMPAIGN_DETAILS_FAIL,
  CAMPAIGN_DETAILS_SUCCESS,
} from "../constants/businessConstants";

// export const businessReducer = (state = {}, action) => {
// switch (action.type) {
// case SIGNED_UP_BUSINESS_LOGIN_REQUEST:
// return { loading: true };
//
// case SIGNED_UP_BUSINESS_LOGIN_SUCCESS:
// return { loading: false, businessInfo: action.payload };
//
// case SIGNED_UP_BUSINESS_LOGIN_FAIL:
// return { loading: false, error: action.payload };
//
// case SIGNED_UP_BUSINESS_LOGOUT:
// return {};
//
// default:
// return state;
// }
// };
//
// export const businessReducer = (state = {}, action) => {
// switch (action.type) {
// case BUSINESS_SIGN_UP_REQUEST:
// return { loading: true };
// case BUSINESS_SIGN_UP_SUCCESS:
// return { loading: false, businessInfo: action.payload };
// case BUSINESS_SIGN_UP_FAIL:
// return { loading: false, error: action.payload };
// default:
// return state;
// }
// };

export const businessReducer = (state = { businessInfo: {} }, action) => {
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
        businessInfo: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        businessInfo: null,
        isAuthenticated: false,
      };
    case SIGNED_UP_BUSINESS_LOGIN_FAIL:
    case BUSINESS_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        businessInfo: null,
        error: action.payload,
      };

    case LOAD_BUSINESS_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        businessInfo: null,
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

export const singleBusinessesReducer = (state = { business: {} }, action) => {
  switch (action.type) {
    case SINGLE_BUSINESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        business: action.payload,
      };

    case SINGLE_BUSINESS_FAIL:
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
  state = { businessInfo: {} },
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
        businessInfo: action.payload,
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

export const businessAllBusinessOrderedFromReducer = (
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

export const businessMyBusinessOrderedFromReducer = (
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

export const businessNewBusinessOrderedFromReducer = (
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

export const businessBusinessOrderedFromReducer = (state = {}, action) => {
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

export const businessAllCampaignsInvestedReducer = (
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

export const businessMyCampaignsInvestedReducer = (
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

export const businessNewCampaignInvestedReducer = (
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

export const businessCampaignsInvestedReducer = (state = {}, action) => {
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

export const businessAllCampaignsPayoutReducer = (
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

export const businessMyCampaignsPayoutReducer = (
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

export const businessParticularCampaignsPayoutReducer = (
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

export const businessNewCampaignPayoutReducer = (
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

export const businessCampaignsPayoutReducer = (state = {}, action) => {
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

export const businessParticularCampaignsInvestedReducer = (
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

export const businessAllCampaignsReviewsReducer = (
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

export const businessMyCampaignsReviewsReducer = (
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

export const businessNewCampaignReviewsReducer = (
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

export const businessCampaignsReviewsReducer = (state = {}, action) => {
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

export const businessAllProductsReviewsReducer = (
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

export const ProductReviewsReducer = (
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

export const newProductReviewReducer = (
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

export const ProductReviewReducer = (state = {}, action) => {
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

export const businessAllStoreProductsReducer = (
  state = { storeProducts: [] },
  action
) => {
  switch (action.type) {
    case ALL_STORE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STORE_PRODUCTS_SUCCESS:
      return {
        loading: false,
        storeProducts: action.payload,
      };
    case ALL_STORE_PRODUCTS_FAIL:
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

export const businessMyStoreProductsReducer = (
  state = { storeProducts: [] },
  action
) => {
  switch (action.type) {
    case ALL_STORE_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STORE_PRODUCTS_SUCCESS:
      return {
        loading: false,
        storeProducts: action.payload,
      };
    case ALL_STORE_PRODUCTS_FAIL:
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

export const businessNewStoreProductReducer = (
  state = { storeProducts: {} },
  action
) => {
  switch (action.type) {
    case NEW_STORE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_STORE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        storeProducts: action.payload.storeProducts,
      };
    case NEW_STORE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_STORE_PRODUCT_RESET:
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

export const businessStoreProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STORE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_STORE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_STORE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_STORE_PRODUCT_RESET:
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

export const businessAllCampaignStartedReducer = (
  state = { campaignStarted: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_STARTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_STARTED_SUCCESS:
      return {
        loading: false,
        campaignStarted: action.payload,
      };
    case ALL_CAMPAIGNS_STARTED_FAIL:
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

export const businessMyCampaignStartedReducer = (
  state = { campaignStarted: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGNS_STARTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGNS_STARTED_SUCCESS:
      return {
        loading: false,
        campaignStarted: action.payload,
      };
    case ALL_CAMPAIGNS_STARTED_FAIL:
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

export const businessNewCampaignStartedReducer = (
  state = { campaignStarted: {} },
  action
) => {
  switch (action.type) {
    case NEW_CAMPAIGN_STARTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_STARTED_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        campaignStarted: action.payload.campaignStarted,
      };
    case NEW_CAMPAIGN_STARTED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_STARTED_RESET:
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

export const businessCampaignStartedReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_STARTED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_STARTED_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_CAMPAIGN_STARTED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_STARTED_RESET:
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

export const businessStoreProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CREATE_REQUEST:
      return { businessLoading: true };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return { businessLoading: false, businessSuccess: true };
    case STORE_PRODUCTS_CREATE_FAIL:
      return { businessLoading: false, businessError: action.payload };
    //
    default:
      return state;
  }
};
//
export const businessStoreProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DELETE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    //
    default:
      return state;
  }
};
//
export const businessStoreProductUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_UPDATE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    //
    default:
      return state;
  }
};

// export const productsReducer = (state = { products: [] }, action) => {
// switch (action.type) {
// case STORE_PRODUCTS_LIST_REQUEST:
// case ADMIN_STORE_PRODUCTS_REQUEST:
// return {
// loading: true,
// products: [],
// };
// case STORE_PRODUCTS_LIST_SUCCESS:
// return {
// loading: false,
// products: action.payload.products,
// productsCount: action.payload.productsCount,
// resultPerPage: action.payload.resultPerPage,
// filteredProductsCount: action.payload.filteredProductsCount,
// };
//
// case ADMIN_STORE_PRODUCTS_SUCCESS:
// return {
// loading: false,
// products: action.payload,
// };
// case STORE_PRODUCTS_LIST_FAIL:
// case ADMIN_STORE_PRODUCTS_FAIL:
// return {
// loading: false,
// error: action.payload,
// };
//
// case CLEAR_ERRORS:
// return {
// ...state,
// error: null,
// };
// default:
// return state;
// }
// };
//
export const businessNewProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case STORE_PRODUCTS_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STORE_PRODUCTS_CREATE_RESET:
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

export const businessProductReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DELETE_REQUEST:
    case STORE_PRODUCTS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STORE_PRODUCTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case STORE_PRODUCTS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case STORE_PRODUCTS_DELETE_FAIL:
    case STORE_PRODUCTS_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STORE_PRODUCTS_DELETE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case STORE_PRODUCTS_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
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

export const businessProductDetailsReducer = (
  state = { product: {} },
  action
) => {
  switch (action.type) {
    case STORE_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case STORE_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case STORE_PRODUCTS_DETAILS_FAIL:
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

export const businessNewIndividualProductOrderReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_ORDER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_ORDER_RESET:
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

export const businessIndividualProductOrdersReducer = (
  state = { individualOrders: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ALL_INDIVIDUAL_ORDER_FAIL:
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

export const updateIndividualProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_INDIVIDUAL_ORDER_RESET:
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

export const businessIndividualProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const businessNewIndividualProductCustomerReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_CUSTOMER_RESET:
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

export const businessIndividualProductCustomersReducer = (
  state = { customers: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
      };
    case ALL_INDIVIDUAL_CUSTOMER_FAIL:
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

export const businessIndividualProductCustomerReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_RESET:
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

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
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

export const reviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEWS_FAIL:
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

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
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

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ORDER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ORDER_RESET:
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

export const OrdersReducer = (state = { businessOrders: [] }, action) => {
  switch (action.type) {
    case ALL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ORDER_SUCCESS:
      return {
        loading: false,
        businessOrders: action.payload,
      };
    case ALL_ORDER_FAIL:
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

export const OrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ORDER_RESET:
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

export const updateProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ORDER_RESET:
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

export const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CUSTOMER_RESET:
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

export const customersReducer = (state = { businessCustomers: [] }, action) => {
  switch (action.type) {
    case ALL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CUSTOMER_SUCCESS:
      return {
        loading: false,
        businessCustomers: action.payload,
      };
    case ALL_CUSTOMER_FAIL:
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

export const deleteCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CUSTOMER_RESET:
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

export const businessNewBusinessnewProductReviewReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_REVIEW_SUCCESS:
      return {
        loading: false,
        successBusiness: action.payload,
      };
    case NEW_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_REVIEW_RESET:
      return {
        ...state,
        successBusiness: false,
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

export const businessBusinessnewProductReviewsReducer = (
  state = { businessReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESS_REVIEWS_SUCCESS:
      return {
        loadingBuiness: false,
        businessReviews: action.payload,
      };
    case ALL_BUSINESS_REVIEWS_FAIL:
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

export const businessBusinessnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUSINESS_REVIEW_RESET:
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

export const newnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loadingProductBusiness: true,
      };
    case NEW_PRODUCT_REVIEW_SUCCESS:
      return {
        loadingProductBusiness: false,
        successProductBusiness: action.payload,
      };
    case NEW_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        loadingProductBusiness: false,
        errorProductBusiness: action.payload,
      };
    case NEW_PRODUCT_REVIEW_RESET:
      return {
        ...state,
        successProductBusiness: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorProductBusiness: null,
      };
    default:
      return state;
  }
};

export const newProductReviewsReducer = (
  state = { businessReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCT_REVIEWS_SUCCESS:
      return {
        loadingBuiness: false,
        businessReviews: action.payload,
      };
    case ALL_PRODUCT_REVIEWS_FAIL:
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

export const productReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_REVIEW_RESET:
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

export const newIndividualSinglenewProductReviewReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loadingProduct: true,
      };
    case NEW_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS:
      return {
        loadingProduct: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        loadingProduct: false,
        errorProduct: action.payload,
      };
    case NEW_INDIVIDUAL_PRODUCT_REVIEW_RESET:
      return {
        ...state,
        successProduct: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errorProduct: null,
      };
    default:
      return state;
  }
};

export const allIndividualSinglenewProductReviewsReducer = (
  state = { businessReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_PRODUCT_REVIEWS_SUCCESS:
      return {
        loadingBuiness: false,
        businessReviews: action.payload,
      };
    case ALL_INDIVIDUAL_PRODUCT_REVIEWS_FAIL:
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

export const individualSinglenewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_PRODUCT_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_PRODUCT_REVIEW_RESET:
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

export const campaignDetailsReducer = (state = { campaign: {} }, action) => {
  switch (action.type) {
    case CAMPAIGN_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CAMPAIGN_DETAILS_SUCCESS:
      return {
        loading: false,
        campaign: action.payload,
      };
    case CAMPAIGN_DETAILS_FAIL:
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

export const newIndividualCampaignDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_DONOR_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_DONOR_RESET:
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

export const individualCampaignDonorsReducer = (
  state = { donors: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_DONORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_DONORS_SUCCESS:
      return {
        loading: false,
        donors: action.payload,
      };
    case ALL_INDIVIDUAL_DONORS_FAIL:
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

export const individualCampaignDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_DONOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_DONOR_RESET:
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

// export const newCampaignReviewReducer = (state = {}, action) => {
// switch (action.type) {
// case NEW_CAMPAIGN_REVIEW_REQUEST:
// return {
// ...state,
// loading: true,
// };
// case NEW_CAMPAIGN_REVIEW_SUCCESS:
// return {
// loading: false,
// success: action.payload,
// };
// case NEW_CAMPAIGN_REVIEW_FAIL:
// return {
// ...state,
// loading: false,
// error: action.payload,
// };
// case NEW_CAMPAIGN_REVIEW_RESET:
// return {
// ...state,
// success: false,
// };
// case CLEAR_ERRORS:
// return {
// ...state,
// error: null,
// };
// default:
// return state;
// }
// };

export const campaignReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_CAMPAIGN_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGN_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_CAMPAIGN_REVIEWS_FAIL:
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

export const campaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CAMPAIGN_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_REVIEW_RESET:
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

export const newDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_DONOR_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_DONOR_RESET:
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

export const donorsReducer = (state = { donors: [] }, action) => {
  switch (action.type) {
    case ALL_DONORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_DONORS_SUCCESS:
      return {
        loading: false,
        donors: action.payload,
      };
    case ALL_DONORS_FAIL:
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

export const donorReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DONOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_DONOR_RESET:
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

export const newCampaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CAMPAIGN_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CAMPAIGN_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_REVIEW_RESET:
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

export const businessCampaignReviewsReducer = (
  state = { reviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGN_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGN_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_CAMPAIGN_REVIEWS_FAIL:
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

export const businessCampaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CAMPAIGN_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_REVIEW_RESET:
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

export const campaignsReducer = (state = { campaigns: [] }, action) => {
  switch (action.type) {
    case ALL_CAMPAIGN_REQUEST:
    case ADMIN_CAMPAIGN_REQUEST:
      return {
        loading: true,
        campaigns: [],
      };
    case ALL_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        campaigns: action.payload,
        // campaignsCount: action.payload.campaignsCount,
        // resultPerPage: action.payload.resultPerPage,
        // filteredCampaignsCount: action.payload.filteredCampaignsCount,
      };

    case ADMIN_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        campaigns: action.payload,
      };
    case ALL_CAMPAIGN_FAIL:
    case ADMIN_CAMPAIGN_FAIL:
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

export const MyCampaignsReducer = (state = { campaigns: [] }, action) => {
  switch (action.type) {
    case MY_CAMPAIGN_REQUEST:
    case ADMIN_CAMPAIGN_REQUEST:
      return {
        loading: true,
        campaigns: [],
      };
    case MY_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        campaigns: action.payload.campaigns,
        campaignsCount: action.payload.campaignsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredCampaignsCount: action.payload.filteredCampaignsCount,
      };

    case ADMIN_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        campaigns: action.payload,
      };
    case MY_CAMPAIGN_FAIL:
    case ADMIN_CAMPAIGN_FAIL:
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

export const newCampaignReducer = (state = { campaign: {} }, action) => {
  switch (action.type) {
    case NEW_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        campaign: action.payload.campaign,
      };
    case NEW_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_RESET:
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

export const campaignReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_REQUEST:
    case UPDATE_CAMPAIGN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CAMPAIGN_FAIL:
    case UPDATE_CAMPAIGN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CAMPAIGN_RESET:
      return {
        ...state,
        isUpdated: false,
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
