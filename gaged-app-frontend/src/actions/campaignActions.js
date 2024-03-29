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
  // NEW_INDIVIDUAL_DONOR_SUCCESS,
  // NEW_INDIVIDUAL_DONOR_FAIL,
  // NEW_INDIVIDUAL_DONOR_REQUEST,
  // ALL_INDIVIDUAL_DONORS_REQUEST,
  // ALL_INDIVIDUAL_DONORS_SUCCESS,
  // ALL_INDIVIDUAL_DONORS_FAIL,
  // DELETE_INDIVIDUAL_DONOR_REQUEST,
  // DELETE_INDIVIDUAL_DONOR_SUCCESS,
  // DELETE_INDIVIDUAL_DONOR_FAIL,
  NEW_CAMPAIGN_REVIEW_REQUEST,
  NEW_CAMPAIGN_REVIEW_SUCCESS,
  NEW_CAMPAIGN_REVIEW_FAIL,
  ALL_CAMPAIGN_REVIEWS_REQUEST,
  ALL_CAMPAIGN_REVIEWS_SUCCESS,
  ALL_CAMPAIGN_REVIEWS_FAIL,
  DELETE_CAMPAIGN_REVIEW_REQUEST,
  DELETE_CAMPAIGN_REVIEW_SUCCESS,
  DELETE_CAMPAIGN_REVIEW_FAIL,
  NEW_DONOR_SUCCESS,
  NEW_DONOR_FAIL,
  NEW_DONOR_REQUEST,
  ALL_DONORS_REQUEST,
  ALL_DONORS_SUCCESS,
  ALL_DONORS_FAIL,
  DELETE_DONOR_REQUEST,
  DELETE_DONOR_SUCCESS,
  DELETE_DONOR_FAIL,
  // NEW_CAMPAIGN_REVIEW_REQUEST,
  // NEW_CAMPAIGN_REVIEW_SUCCESS,
  // NEW_CAMPAIGN_REVIEW_FAIL,
  // ALL_CAMPAIGN_REVIEWS_REQUEST,
  // ALL_CAMPAIGN_REVIEWS_SUCCESS,
  // ALL_CAMPAIGN_REVIEWS_FAIL,
  // DELETE_CAMPAIGN_REVIEW_REQUEST,
  // DELETE_CAMPAIGN_REVIEW_SUCCESS,
  // DELETE_CAMPAIGN_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/campaignConstants";

import axios from "axios";

export const listCampaigns =
  () =>
  // keyword = "", currentPage = 1, campaignCategory
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_CAMPAIGN_REQUEST,
      });

      let link = `/app/campaigns/all`;

      // if (campaignCategory) {
      // link = `/app/campaigns/all?keyword=${keyword}&page=${currentPage}&campaignCategory=${campaignCategory}`;
      // }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_CAMPAIGN_SUCCESS,
        payload: data.campaigns,
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
      business: { businessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.get(`/app/campaigns/me`, config);

    dispatch({
      type: MY_CAMPAIGN_SUCCESS,
      payload: data.campaigns,
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
export const createCampaign = (campaignData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEW_CAMPAIGN_REQUEST,
    });

    const {
      business: { businessInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/app/campaigns/create`,
      { campaignData },
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
      business: { businessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/app/campaigns/campaign/${id}`,
      config
    );

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

export const updateCampaignAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_CAMPAIGN_REQUEST,
    });

    const {
      business: { businessInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/app/campaigns/campaign/${id}`,
      {},
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
  (
    keyword = "",
    currentPage = 1,
    price = [0, 25000],
    campaignCategory,
    ratings = 0
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CAMPAIGN_REQUEST });

      let link = `/app/campaigns?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (campaignCategory) {
        link = `/app/campaigns?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&campaignCategory=${campaignCategory}&ratings[gte]=${ratings}`;
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
export const createCampaignAdmin = (productData) => async (dispatch) => {
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
export const updateCampaignAdmin = (id, productData) => async (dispatch) => {
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
export const deleteCampaignAdmin = (id) => async (dispatch) => {
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

// NEW CAMPAIGN REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/campaigns/create-review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_REVIEW_SUCCESS,
      payload: data.campaignReviews,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Reviews of a Campaign
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_REVIEWS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/reviews?id=${id}`);

    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_SUCCESS,
      payload: data.campaignReviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Review of a Campaign
export const deleteReviews = (reviewId, campaignId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CAMPAIGN_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/app/campaigns/reviews?id=${reviewId}&campaignId=${campaignId}`
    );

    dispatch({
      type: DELETE_CAMPAIGN_REVIEW_SUCCESS,
      payload: data.campaignReviews,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CAMPAIGN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW BUSINESS DONOR
export const newDonor = (donorata) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DONOR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/app/campaigns/donor`, donorata, config);

    dispatch({
      type: NEW_DONOR_SUCCESS,
      payload: data.donors,
    });
  } catch (error) {
    dispatch({
      type: NEW_DONOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Customers of a Campaign
export const getAllDonors = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_DONORS_REQUEST });

    const { data } = await axios.get(`/app/campaigns/donors?id=${id}`);

    dispatch({
      type: ALL_DONORS_SUCCESS,
      payload: data.donors,
    });
  } catch (error) {
    dispatch({
      type: ALL_DONORS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Customer of a Campaign
export const deleteDonor = (donorId, campaignId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DONOR_REQUEST });

    const { data } = await axios.delete(
      `/app/campaigns/donors?id=${donorId}&campaignId=${campaignId}`
    );

    dispatch({
      type: DELETE_DONOR_SUCCESS,
      payload: data.donors,
    });
  } catch (error) {
    dispatch({
      type: DELETE_DONOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW CAMPAIGN_INDIVIDUAL REVIEW
// export const newIndividualReview = (reviewData) => async (dispatch) => {
// try {
// dispatch({ type: NEW_CAMPAIGN_REVIEW_REQUEST });
//
// const config = {
// headers: { "Content-Type": "application/json" },
// };
//
// const { data } = await axios.put(
// `/app/campaigns/review`,
// reviewData,
// config
// );
//
// dispatch({
// type: NEW_CAMPAIGN_REVIEW_SUCCESS,
// payload: data.success,
// });
// } catch (error) {
// dispatch({
// type: NEW_CAMPAIGN_REVIEW_FAIL,
// payload: error.response.data.message,
// });
// }
// };

// Get All Individual Reviews of a Campaign
// export const getAllIndividualReviews = (id) => async (dispatch) => {
// try {
// dispatch({ type: ALL_CAMPAIGN_REVIEWS_REQUEST });
//
// const { data } = await axios.get(`/app/campaigns/reviews?id=${id}`);
//
// dispatch({
// type: ALL_CAMPAIGN_REVIEWS_SUCCESS,
// payload: data.reviews,
// });
// } catch (error) {
// dispatch({
// type: ALL_CAMPAIGN_REVIEWS_FAIL,
// payload: error.response.data.message,
// });
// }
// };

// Delete Individual Review of a Campaign
// export const deleteIndividualReviews =
// (reviewId, campaignId) => async (dispatch) => {
// try {
// dispatch({ type: DELETE_CAMPAIGN_REVIEW_REQUEST });
//
// const { data } = await axios.delete(
// `/app/campaigns/reviews?id=${reviewId}&campaignId=${campaignId}`
// );
//
// dispatch({
// type: DELETE_CAMPAIGN_REVIEW_SUCCESS,
// payload: data.success,
// });
// } catch (error) {
// dispatch({
// type: DELETE_CAMPAIGN_REVIEW_FAIL,
// payload: error.response.data.message,
// });
// }
// };

//NEW INDIVIDUAL DONOR
// export const newIndividualCustomer = (donorata) => async (dispatch) => {
// try {
// dispatch({ type: NEW_INDIVIDUAL_DONOR_REQUEST });
//
// const config = {
// headers: { "Content-Type": "application/json" },
// };
//
// const { data } = await axios.put(`/app/campaigns/donor`, donorata, config);
//
// dispatch({
// type: NEW_INDIVIDUAL_DONOR_SUCCESS,
// payload: data.success,
// });
// } catch (error) {
// dispatch({
// type: NEW_INDIVIDUAL_DONOR_FAIL,
// payload: error.response.data.message,
// });
// }
// };
//
//Get All Individual Customers of a Campaign
// export const getAllIndividualCustomers = (id) => async (dispatch) => {
// try {
// dispatch({ type: ALL_INDIVIDUAL_DONORS_REQUEST });
//
// const { data } = await axios.get(`/app/campaigns/donors?id=${id}`);
//
// dispatch({
// type: ALL_INDIVIDUAL_DONORS_SUCCESS,
// payload: data.donors,
// });
// } catch (error) {
// dispatch({
// type: ALL_INDIVIDUAL_DONORS_FAIL,
// payload: error.response.data.message,
// });
// }
// };
//
//Delete Individual Customer of a Campaign
// export const deleteIndividualCustomers =
// (donorId, campaignId) => async (dispatch) => {
// try {
// dispatch({ type: DELETE_INDIVIDUAL_DONOR_REQUEST });
//
// const { data } = await axios.delete(
// `/app/campaigns/donors?id=${donorId}&campaignId=${campaignId}`
// );
//
// dispatch({
// type: DELETE_INDIVIDUAL_DONOR_SUCCESS,
// payload: data.success,
// });
// } catch (error) {
// dispatch({
// type: DELETE_INDIVIDUAL_DONOR_FAIL,
// payload: error.response.data.message,
// });
// }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
