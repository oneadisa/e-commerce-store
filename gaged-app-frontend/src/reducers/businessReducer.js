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
  NEW_BUSINESS_ORDERED_FROM_REQUEST,
  NEW_BUSINESS_ORDERED_FROM_RESET,
  NEW_BUSINESS_ORDERED_FROM_SUCCESS,
  NEW_BUSINESS_ORDERED_FROM_FAIL,
  ALL_BUSINESS_ORDERED_FROM_SUCCESS,
  ALL_BUSINESS_ORDERED_FROM_REQUEST,
  ALL_BUSINESS_ORDERED_FROM_FAIL,
  DELETE_BUSINESS_ORDERED_FROM_REQUEST,
  DELETE_BUSINESS_ORDERED_FROM_FAIL,
  DELETE_BUSINESS_ORDERED_FROM_SUCCESS,
  DELETE_BUSINESS_ORDERED_FROM_RESET,
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
  NEW_BUSINESS_ORDER_REQUEST,
  NEW_BUSINESS_ORDER_SUCCESS,
  NEW_BUSINESS_ORDER_RESET,
  NEW_BUSINESS_ORDER_FAIL,
  ALL_INDIVIDUAL_ORDER_REQUEST,
  ALL_INDIVIDUAL_ORDER_SUCCESS,
  ALL_INDIVIDUAL_ORDER_FAIL,
  ALL_BUSINESS_ORDER_REQUEST,
  ALL_BUSINESS_ORDER_SUCCESS,
  ALL_BUSINESS_ORDER_FAIL,
  UPDATE_INDIVIDUAL_ORDER_REQUEST,
  UPDATE_INDIVIDUAL_ORDER_SUCCESS,
  UPDATE_INDIVIDUAL_ORDER_RESET,
  UPDATE_INDIVIDUAL_ORDER_FAIL,
  UPDATE_BUSINESS_ORDER_REQUEST,
  UPDATE_BUSINESS_ORDER_SUCCESS,
  UPDATE_BUSINESS_ORDER_RESET,
  UPDATE_BUSINESS_ORDER_FAIL,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_RESET,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  DELETE_BUSINESS_ORDER_REQUEST,
  DELETE_BUSINESS_ORDER_SUCCESS,
  DELETE_BUSINESS_ORDER_RESET,
  DELETE_BUSINESS_ORDER_FAIL,
  DELETE_INDIVIDUAL_CUSTOMER_REQUEST,
  DELETE_INDIVIDUAL_CUSTOMER_SUCCESS,
  DELETE_INDIVIDUAL_CUSTOMER_RESET,
  DELETE_INDIVIDUAL_CUSTOMER_FAIL,
  DELETE_BUSINESS_CUSTOMER_REQUEST,
  DELETE_BUSINESS_CUSTOMER_SUCCESS,
  DELETE_BUSINESS_CUSTOMER_RESET,
  DELETE_BUSINESS_CUSTOMER_FAIL,
  NEW_INDIVIDUAL_CUSTOMER_REQUEST,
  NEW_INDIVIDUAL_CUSTOMER_SUCCESS,
  NEW_INDIVIDUAL_CUSTOMER_RESET,
  NEW_INDIVIDUAL_CUSTOMER_FAIL,
  NEW_BUSINESS_CUSTOMER_REQUEST,
  NEW_BUSINESS_CUSTOMER_SUCCESS,
  NEW_BUSINESS_CUSTOMER_RESET,
  NEW_BUSINESS_CUSTOMER_FAIL,
  ALL_INDIVIDUAL_CUSTOMER_REQUEST,
  ALL_INDIVIDUAL_CUSTOMER_SUCCESS,
  ALL_INDIVIDUAL_CUSTOMER_FAIL,
  ALL_BUSINESS_CUSTOMER_REQUEST,
  ALL_BUSINESS_CUSTOMER_SUCCESS,
  ALL_BUSINESS_CUSTOMER_FAIL,
  ALL_INDIVIDUAL_REVIEWS_REQUEST,
  ALL_INDIVIDUAL_REVIEWS_SUCCESS,
  ALL_INDIVIDUAL_REVIEWS_FAIL,
  ALL_BUSINESS_REVIEWS_REQUEST,
  ALL_BUSINESS_REVIEWS_SUCCESS,
  ALL_BUSINESS_REVIEWS_FAIL,
  NEW_INDIVIDUAL_REVIEW_REQUEST,
  NEW_INDIVIDUAL_REVIEW_SUCCESS,
  NEW_INDIVIDUAL_REVIEW_RESET,
  NEW_INDIVIDUAL_REVIEW_FAIL,
  NEW_BUSINESS_REVIEW_REQUEST,
  NEW_BUSINESS_REVIEW_SUCCESS,
  NEW_BUSINESS_REVIEW_RESET,
  NEW_BUSINESS_REVIEW_FAIL,
  DELETE_INDIVIDUAL_REVIEW_REQUEST,
  DELETE_INDIVIDUAL_REVIEW_SUCCESS,
  DELETE_INDIVIDUAL_REVIEW_RESET,
  DELETE_INDIVIDUAL_REVIEW_FAIL,
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

export const singleBusinessesReducer = (state = { businesses: [] }, action) => {
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
        businesses: action.payload,
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

export const businessAllBusinessOrderedFromReducer = (
  state = { businessOrderedFrom: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESS_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        businessOrderedFrom: action.payload,
      };
    case ALL_BUSINESS_ORDERED_FROM_FAIL:
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
    case ALL_BUSINESS_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESS_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        businessOrderedFrom: action.payload,
      };
    case ALL_BUSINESS_ORDERED_FROM_FAIL:
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
    case NEW_BUSINESS_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_ORDERED_FROM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        businessOrderedFrom: action.payload.businessOrderedFrom,
      };
    case NEW_BUSINESS_ORDERED_FROM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_ORDERED_FROM_RESET:
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
    case DELETE_BUSINESS_ORDERED_FROM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_ORDERED_FROM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_BUSINESS_ORDERED_FROM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUSINESS_ORDERED_FROM_RESET:
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

export const businessMyProductsReviewsReducer = (
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

export const businessNewProductReviewsReducer = (
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

export const businessProductsReviewsReducer = (state = {}, action) => {
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
      return { loading: true };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
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

// export const productDetailsReducer = (state = { product: {} }, action) => {
// switch (action.type) {
// case STORE_PRODUCTS_DETAILS_REQUEST:
// return {
// loading: true,
// ...state,
// };
// case STORE_PRODUCTS_DETAILS_SUCCESS:
// return {
// loading: false,
// product: action.payload,
// };
// case STORE_PRODUCTS_DETAILS_FAIL:
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

export const businessNewIndividualProductReviewReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_REVIEW_RESET:
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

export const businessIndividualProductReviewsReducer = (
  state = { individualReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_REVIEWS_SUCCESS:
      return {
        loading: false,
        individualReviews: action.payload,
      };
    case ALL_INDIVIDUAL_REVIEWS_FAIL:
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

export const businessIndividualProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_REVIEW_RESET:
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

export const businessNewBusinessProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_ORDER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_BUSINESS_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_ORDER_RESET:
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

export const businessBusinessProductOrdersReducer = (
  state = { businessOrders: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loadingBusiness: true,
      };
    case ALL_BUSINESS_ORDER_SUCCESS:
      return {
        loadingBusiness: false,
        businessOrders: action.payload,
      };
    case ALL_BUSINESS_ORDER_FAIL:
      return {
        ...state,
        loadingBusiness: false,
        errorBusiness: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errorBusiness: null,
      };
    default:
      return state;
  }
};

export const businessBusinessProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_BUSINESS_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const updateProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BUSINESS_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_BUSINESS_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_BUSINESS_ORDER_RESET:
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

export const businessNewBusinessProductCustomerReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case NEW_BUSINESS_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_BUSINESS_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_CUSTOMER_RESET:
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

export const businessBusinessProductCustomersReducer = (
  state = { businessCustomers: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_CUSTOMER_REQUEST:
      return {
        ...state,
        loadingBusiness: true,
      };
    case ALL_BUSINESS_CUSTOMER_SUCCESS:
      return {
        loadingBusiness: false,
        businessCustomers: action.payload,
      };
    case ALL_BUSINESS_CUSTOMER_FAIL:
      return {
        ...state,
        loadingBusiness: false,
        errorBusiness: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errorBusiness: null,
      };
    default:
      return state;
  }
};

export const businessBusinessProductCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_BUSINESS_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUSINESS_CUSTOMER_RESET:
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

export const businessNewBusinessProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
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

export const businessBusinessProductReviewsReducer = (
  state = { businessReviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_REVIEWS_REQUEST:
      return {
        ...state,
        loadingBusiness: true,
      };
    case ALL_BUSINESS_REVIEWS_SUCCESS:
      return {
        loadingBuiness: false,
        businessReviews: action.payload,
      };
    case ALL_BUSINESS_REVIEWS_FAIL:
      return {
        ...state,
        loadingBusiness: false,
        errorBusiness: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errorBusiness: null,
      };
    default:
      return state;
  }
};

export const businessBusinessProductReviewReducer = (state = {}, action) => {
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
