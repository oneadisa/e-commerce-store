import {
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
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_RESET,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_REQUEST,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_FAIL,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_RESET,
  NEW_BUSINESS_DONOR_SUCCESS,
  NEW_BUSINESS_DONOR_FAIL,
  NEW_BUSINESS_DONOR_RESET,
  NEW_BUSINESS_DONOR_REQUEST,
  ALL_BUSINESS_DONORS_REQUEST,
  ALL_BUSINESS_DONORS_SUCCESS,
  ALL_BUSINESS_DONORS_FAIL,
  DELETE_BUSINESS_DONOR_REQUEST,
  DELETE_BUSINESS_DONOR_SUCCESS,
  DELETE_BUSINESS_DONOR_FAIL,
  DELETE_BUSINESS_DONOR_RESET,
  NEW_CAMPAIGN_BUSINESS_REVIEW_REQUEST,
  NEW_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
  NEW_CAMPAIGN_BUSINESS_REVIEW_FAIL,
  NEW_CAMPAIGN_BUSINESS_REVIEW_RESET,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_REQUEST,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_FAIL,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_REQUEST,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_FAIL,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_RESET,
  CLEAR_ERRORS,
} from "../constants/campaignConstants";

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

export const newIndividualCampaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_INDIVIDUAL_REVIEW_RESET:
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

export const individualCampaignReviewsReducer = (
  state = { reviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_FAIL:
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

export const individualCampaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_RESET:
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

export const newBusinessCampaignDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_BUSINESS_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_DONOR_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_BUSINESS_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_DONOR_RESET:
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

export const businessCampaignDonorsReducer = (
  state = { donors: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_DONORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESS_DONORS_SUCCESS:
      return {
        loading: false,
        donors: action.payload,
      };
    case ALL_BUSINESS_DONORS_FAIL:
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

export const businessCampaignDonorReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_DONOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_DONOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_BUSINESS_DONOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUSINESS_DONOR_RESET:
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

export const newBusinessCampaignReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CAMPAIGN_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CAMPAIGN_BUSINESS_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CAMPAIGN_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CAMPAIGN_BUSINESS_REVIEW_RESET:
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
    case ALL_CAMPAIGN_BUSINESS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CAMPAIGN_BUSINESS_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_CAMPAIGN_BUSINESS_REVIEWS_FAIL:
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
    case DELETE_CAMPAIGN_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CAMPAIGN_BUSINESS_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CAMPAIGN_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CAMPAIGN_BUSINESS_REVIEW_RESET:
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
