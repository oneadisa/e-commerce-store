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
  UPDATE_CAMPAIGN_REQUEST,
  UPDATE_CAMPAIGN_SUCCESS,
  UPDATE_CAMPAIGN_FAIL,
  DELETE_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAIL,
  CAMPAIGN_DETAILS_REQUEST,
  CAMPAIGN_DETAILS_FAIL,
  CAMPAIGN_DETAILS_SUCCESS,
  NEW_INDIVIDUAL_DONOR_SUCCESS,
  NEW_INDIVIDUAL_DONOR_FAIL,
  NEW_INDIVIDUAL_DONOR_REQUEST,
  ALL_INDIVIDUAL_DONORS_REQUEST,
  ALL_INDIVIDUAL_DONORS_SUCCESS,
  ALL_INDIVIDUAL_DONORS_FAIL,
  DELETE_INDIVIDUAL_DONOR_REQUEST,
  DELETE_INDIVIDUAL_DONOR_SUCCESS,
  DELETE_INDIVIDUAL_DONOR_FAIL,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
  NEW_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_REQUEST,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_FAIL,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
  NEW_BUSINESS_DONOR_SUCCESS,
  NEW_BUSINESS_DONOR_FAIL,
  NEW_BUSINESS_DONOR_REQUEST,
  ALL_BUSINESS_DONORS_REQUEST,
  ALL_BUSINESS_DONORS_SUCCESS,
  ALL_BUSINESS_DONORS_FAIL,
  DELETE_BUSINESS_DONOR_REQUEST,
  DELETE_BUSINESS_DONOR_SUCCESS,
  DELETE_BUSINESS_DONOR_FAIL,
  NEW_CAMPAIGN_BUSINESS_REVIEW_REQUEST,
  NEW_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
  NEW_CAMPAIGN_BUSINESS_REVIEW_FAIL,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_REQUEST,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_BUSINESS_REVIEWS_FAIL,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_REQUEST,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_BUSINESS_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/campaignConstants";

import axios from "axios";

export const listCampaigns =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_CAMPAIGN_REQUEST,
      });

      let link = `/app/campaigns/all?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/app/campaigns/all?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_CAMPAIGN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALL_CAMPAIGN_FAIL,
        payload: message,
      });
    }
  };

export const listMyCampaigns = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MY_CAMPAIGN_REQUEST,
    });

    const {
      signedUpBusinessLogin: { signedUpBusinessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${signedUpBusinessInfo.token}`,
      },
    };

    const { data } = await axios.get(`/app/campaigns/me`, config);

    dispatch({
      type: MY_CAMPAIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MY_CAMPAIGN_FAIL,
      payload: message,
    });
  }
};
export const createCampaignAction =
  (
    campaignName,
    natureOfBusiness,
    campaignCategory,
    business_address_country,
    business_address_city,
    business_address_office,
    phoneNumber,
    investorBrief,
    campaignVideo,
    pitchDeck,
    ideal_target_audience_age,
    ideal_target_audience_health_issues_or_disabilities,
    gender,
    fundingType,
    categoryFunding,
    amountBeingRaised,
    pledged_profit_to_lenders,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
    equity_offering_percentage,
    bank,
    bank_account_name,
    bank_account_number,
    duration,
    go_live_schedule,
    campaignLiveStatus
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: NEW_CAMPAIGN_REQUEST,
      });

      const {
        signedUpBusinessLogin: { signedUpBusinessInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${signedUpBusinessInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/app/campaigns/create`,
        {
          campaignName,
          natureOfBusiness,
          campaignCategory,
          business_address_country,
          business_address_city,
          business_address_office,
          phoneNumber,
          investorBrief,
          campaignVideo,
          pitchDeck,
          ideal_target_audience_age,
          ideal_target_audience_health_issues_or_disabilities,
          gender,
          fundingType,
          categoryFunding,
          amountBeingRaised,
          pledged_profit_to_lenders,
          duration_pledged_profit,
          repayment_schedule_pledged_profit,
          equity_offering_percentage,
          bank,
          bank_account_name,
          bank_account_number,
          duration,
          go_live_schedule,
          campaignLiveStatus,
        },
        config
      );

      dispatch({
        type: NEW_CAMPAIGN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: NEW_CAMPAIGN_FAIL,
        payload: message,
      });
    }
  };

export const deleteCampaignAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_CAMPAIGN_REQUEST,
    });

    const {
      signedUpBusinessLogin: { signedUpBusinessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${signedUpBusinessInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/app/campaigns/${id}`, config);

    dispatch({
      type: DELETE_CAMPAIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_CAMPAIGN_FAIL,
      payload: message,
    });
  }
};

export const updateCampaignAction =
  (
    id,
    productTitle,
    shortDescription,
    productDetails,
    standardPrice,
    discountedPrice,
    costPrice,
    productStockCount,
    productUnitCount,
    productSKU,
    productImageOne,
    productImageTwo,
    productImageThree,
    category
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_CAMPAIGN_REQUEST,
      });

      const {
        signedUpBusinessLogin: { signedUpBusinessInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${signedUpBusinessInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/app/campaigns/${id}`,
        {
          productTitle,
          shortDescription,
          productDetails,
          standardPrice,
          discountedPrice,
          costPrice,
          productStockCount,
          productUnitCount,
          productSKU,
          productImageOne,
          productImageTwo,
          productImageThree,
          category,
        },
        config
      );

      dispatch({
        type: UPDATE_CAMPAIGN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: UPDATE_CAMPAIGN_FAIL,
        payload: message,
      });
    }
  };

// Get All Campaigns
export const getCampaign =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CAMPAIGN_REQUEST });

      let link = `/app/campaigns?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/app/campaigns?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_CAMPAIGN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CAMPAIGN_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Campaigns For Admin
export const getAdminCampaign = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CAMPAIGN_REQUEST });

    const { data } = await axios.get("/app/campaigns/admin/products");

    dispatch({
      type: ADMIN_CAMPAIGN_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Campaign
export const createCampaign = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/app/campaigns/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Campaign
export const updateCampaign = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CAMPAIGN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/campaigns/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_CAMPAIGN_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Campaign
export const deleteCampaign = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CAMPAIGN_REQUEST });

    const { data } = await axios.delete(`/app/campaigns/admin/product/${id}`);

    dispatch({
      type: DELETE_CAMPAIGN_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CAMPAIGN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Campaigns Details
export const getCampaignDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CAMPAIGN_DETAILS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/campaign/${id}`);

    dispatch({
      type: CAMPAIGN_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: CAMPAIGN_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW CAMPAIGN_BUSINESS REVIEW
export const newBusinessReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_BUSINESS_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/campaigns/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_BUSINESS_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Reviews of a Campaign
export const getAllBusinessReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_BUSINESS_REVIEWS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/reviews?id=${id}`);

    dispatch({
      type: ALL_CAMPAIGN_BUSINESS_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGN_BUSINESS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Review of a Campaign
export const deleteBusinessReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_BUSINESS_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/campaigns/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_BUSINESS_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_BUSINESS_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS DONOR
export const newBusinessCustomer = (donorData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BUSINESS_DONOR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/app/campaigns/donor`, donorData, config);

    dispatch({
      type: NEW_BUSINESS_DONOR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_BUSINESS_DONOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Customers of a Campaign
export const getAllBusinessCustomers = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUSINESS_DONORS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/donors?id=${id}`);

    dispatch({
      type: ALL_BUSINESS_DONORS_SUCCESS,
      payload: data.donors,
    });
  } catch (error) {
    dispatch({
      type: ALL_BUSINESS_DONORS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Customer of a Campaign
export const deleteBusinessCustomers =
  (donorId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BUSINESS_DONOR_REQUEST });

      const { data } = await axios.delete(
        `/app/campaigns/donors?id=${donorId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_BUSINESS_DONOR_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BUSINESS_DONOR_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN_INDIVIDUAL REVIEW
export const newIndividualReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/campaigns/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Individual Reviews of a Campaign
export const getAllIndividualReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/reviews?id=${id}`);

    dispatch({
      type: ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGN_INDIVIDUAL_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Review of a Campaign
export const deleteIndividualReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/campaigns/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_INDIVIDUAL_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL DONOR
export const newIndividualCustomer = (donorData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INDIVIDUAL_DONOR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/app/campaigns/donor`, donorData, config);

    dispatch({
      type: NEW_INDIVIDUAL_DONOR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_INDIVIDUAL_DONOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Individual Customers of a Campaign
export const getAllIndividualCustomers = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_DONORS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/donors?id=${id}`);

    dispatch({
      type: ALL_INDIVIDUAL_DONORS_SUCCESS,
      payload: data.donors,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_DONORS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Customer of a Campaign
export const deleteIndividualCustomers =
  (donorId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_INDIVIDUAL_DONOR_REQUEST });

      const { data } = await axios.delete(
        `/app/campaigns/donors?id=${donorId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_INDIVIDUAL_DONOR_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_INDIVIDUAL_DONOR_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
