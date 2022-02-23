/* eslint-disable no-unused-vars */
import {
  BUSINESS_SIGN_UP_FAIL,
  BUSINESS_SIGN_UP_REQUEST,
  BUSINESS_SIGN_UP_SUCCESS,
  SIGNED_UP_BUSINESS_LOGIN_FAIL,
  SIGNED_UP_BUSINESS_LOGIN_REQUEST,
  SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
  LOAD_BUSINESS_REQUEST,
  LOAD_BUSINESS_SUCCESS,
  LOAD_BUSINESS_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_BUSINESS_PROFILE_REQUEST,
  UPDATE_BUSINESS_PROFILE_SUCCESS,
  UPDATE_BUSINESS_PROFILE_FAIL,
  UPDATE_BUSINESS_PASSWORD_REQUEST,
  UPDATE_BUSINESS_PASSWORD_SUCCESS,
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
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
  NEW_ORDERED_FROM_REQUEST,
  NEW_ORDERED_FROM_SUCCESS,
  NEW_ORDERED_FROM_FAIL,
  ALL_ORDERED_FROM_SUCCESS,
  ALL_ORDERED_FROM_REQUEST,
  ALL_ORDERED_FROM_FAIL,
  DELETE_ORDERED_FROM_REQUEST,
  DELETE_ORDERED_FROM_FAIL,
  DELETE_ORDERED_FROM_SUCCESS,
  NEW_CAMPAIGN_INVESTED_REQUEST,
  NEW_CAMPAIGN_INVESTED_SUCCESS,
  NEW_CAMPAIGN_INVESTED_FAIL,
  NEW_CAMPAIGN_PAYOUT_REQUEST,
  NEW_CAMPAIGN_PAYOUT_SUCCESS,
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
  DELETE_CAMPAIGN_INVESTED_FAIL,
  DELETE_CAMPAIGN_PAYOUT_REQUEST,
  DELETE_CAMPAIGN_PAYOUT_SUCCESS,
  DELETE_CAMPAIGN_PAYOUT_FAIL,
  NEW_CAMPAIGN_REVIEWS_REQUEST,
  NEW_CAMPAIGN_REVIEWS_SUCCESS,
  NEW_CAMPAIGN_REVIEWS_FAIL,
  ALL_CAMPAIGNS_REVIEWS_REQUEST,
  ALL_CAMPAIGNS_REVIEWS_SUCCESS,
  ALL_CAMPAIGNS_REVIEWS_FAIL,
  DELETE_CAMPAIGN_REVIEWS_REQUEST,
  DELETE_CAMPAIGN_REVIEWS_SUCCESS,
  DELETE_CAMPAIGN_REVIEWS_FAIL,
  NEW_PRODUCT_REVIEWS_REQUEST,
  NEW_PRODUCT_REVIEWS_SUCCESS,
  NEW_PRODUCT_REVIEWS_FAIL,
  ALL_PRODUCTS_REVIEWS_REQUEST,
  ALL_PRODUCTS_REVIEWS_SUCCESS,
  ALL_PRODUCTS_REVIEWS_FAIL,
  DELETE_PRODUCT_REVIEWS_REQUEST,
  DELETE_PRODUCT_REVIEWS_SUCCESS,
  DELETE_PRODUCT_REVIEWS_FAIL,
  NEW_CAMPAIGN_STARTED_SUCCESS,
  NEW_CAMPAIGN_STARTED_REQUEST,
  NEW_CAMPAIGN_STARTED_FAIL,
  ALL_CAMPAIGNS_STARTED_REQUEST,
  ALL_CAMPAIGNS_STARTED_SUCCESS,
  ALL_CAMPAIGNS_STARTED_FAIL,
  DELETE_CAMPAIGN_STARTED_REQUEST,
  DELETE_CAMPAIGN_STARTED_SUCCESS,
  DELETE_CAMPAIGN_STARTED_FAIL,
  ALL_STORE_PRODUCTS_REQUEST,
  ALL_STORE_PRODUCTS_FAIL,
  ALL_STORE_PRODUCTS_SUCCESS,
  NEW_STORE_PRODUCT_FAIL,
  NEW_STORE_PRODUCT_REQUEST,
  NEW_STORE_PRODUCT_SUCCESS,
  UPDATE_STORE_PRODUCT_FAIL,
  UPDATE_STORE_PRODUCT_REQUEST,
  UPDATE_STORE_PRODUCT_SUCCESS,
  DELETE_STORE_PRODUCT_REQUEST,
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
  DELETE_STORE_PRODUCT_FAIL,
  DELETE_STORE_PRODUCT_SUCCESS,
  NEW_INDIVIDUAL_ORDER_REQUEST,
  NEW_INDIVIDUAL_ORDER_SUCCESS,
  NEW_INDIVIDUAL_ORDER_RESET,
  NEW_INDIVIDUAL_ORDER_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_RESET,
  NEW_ORDER_FAIL,
  ALL_INDIVIDUAL_ORDER_REQUEST,
  ALL_INDIVIDUAL_ORDER_SUCCESS,
  ALL_INDIVIDUAL_ORDER_RESET,
  ALL_INDIVIDUAL_ORDER_FAIL,
  ALL_ORDER_REQUEST,
  ALL_ORDER_SUCCESS,
  ALL_ORDER_RESET,
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
  ALL_INDIVIDUAL_CUSTOMER_RESET,
  ALL_INDIVIDUAL_CUSTOMER_FAIL,
  ALL_CUSTOMER_REQUEST,
  ALL_CUSTOMER_SUCCESS,
  ALL_CUSTOMER_RESET,
  ALL_CUSTOMER_FAIL,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_RESET,
  ALL_REVIEWS_FAIL,
  ALL_BUSINESS_REVIEWS_REQUEST,
  ALL_BUSINESS_REVIEWS_SUCCESS,
  ALL_BUSINESS_REVIEWS_FAIL,
  ALL_BUSINESS_REVIEWS_RESET,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  NEW_BUSINESS_REVIEW_REQUEST,
  NEW_BUSINESS_REVIEW_SUCCESS,
  NEW_BUSINESS_REVIEW_RESET,
  NEW_BUSINESS_REVIEW_FAIL,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_RESET,
  UPDATE_REVIEW_FAIL,
  UPDATE_BUSINESS_REVIEW_REQUEST,
  UPDATE_BUSINESS_REVIEW_SUCCESS,
  UPDATE_BUSINESS_REVIEW_RESET,
  UPDATE_BUSINESS_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,
  DELETE_BUSINESS_REVIEW_REQUEST,
  DELETE_BUSINESS_REVIEW_SUCCESS,
  DELETE_BUSINESS_REVIEW_RESET,
  DELETE_BUSINESS_REVIEW_FAIL,
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
  CLEAR_ERRORS,
} from "../constants/businessConstants";
import axios from "axios";

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(
      `/app/business/products/business/id/${id}`
    );

    dispatch({
      type: STORE_PRODUCTS_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCTS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const businessLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNED_UP_BUSINESS_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/app/business/login`,
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("businessInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNED_UP_BUSINESS_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signUpBusiness =
  (businessName, accountHolderName, email, password, phoneNumber, pic) =>
  async (dispatch) => {
    try {
      dispatch({
        type: BUSINESS_SIGN_UP_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/app/business/signup/2/business`,
        {
          businessName,
          accountHolderName,
          pic,
          phoneNumber,
          email,
          password,
        },
        config
      );

      dispatch({
        type: BUSINESS_SIGN_UP_SUCCESS,
        payload: data,
      });

      dispatch({
        type: SIGNED_UP_BUSINESS_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("businessInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: BUSINESS_SIGN_UP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Get All BUSINESSES
export const getBusiness =
  () =>
  // keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BUSINESSS_REQUEST });

      let link = `/app/business/business/all`;

      // if (category) {
      // link = `/app/business/business/all?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_BUSINESSS_SUCCESS,
        payload: data.businesses,
      });
    } catch (error) {
      dispatch({
        type: ALL_BUSINESSS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNED_UP_BUSINESS_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/app/business/login`,
      { email, password },
      config
    );

    dispatch({ type: SIGNED_UP_BUSINESS_LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: SIGNED_UP_BUSINESS_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_SIGN_UP_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `/app/business/register`,
      userData,
      config
    );

    dispatch({ type: BUSINESS_SIGN_UP_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: BUSINESS_SIGN_UP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load Business
export const loadBusiness = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_BUSINESS_REQUEST });

    const {
      business: { businessInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.get("/app/business/me", config);

    dispatch({ type: LOAD_BUSINESS_SUCCESS, payload: data.business });
  } catch (error) {
    dispatch({
      type: LOAD_BUSINESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Logout Business
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/app/business/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_PROFILE_REQUEST });

    const {
      business: { businessInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/app/business/me/update`,
      userData,
      config
    );

    dispatch({ type: UPDATE_BUSINESS_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_PASSWORD_REQUEST });

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
      `/app/business/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_BUSINESS_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_BUSINESS_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/app/business/password/forgot`,
      email,
      config
    );

    dispatch({ type: FORGOT_BUSINESS_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_BUSINESS_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_BUSINESS_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/app/business/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_BUSINESS_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_BUSINESS_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Businesss
export const getAllBusinesss = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUSINESSS_REQUEST });
    const { data } = await axios.get(`/app/business/admin/users`);

    dispatch({ type: ALL_BUSINESSS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: ALL_BUSINESSS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get  Business Details
export const getSingleBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_BUSINESS_REQUEST });
    const { data } = await axios.get(`/app/business/profile/business/id/${id}`);

    dispatch({ type: SINGLE_BUSINESS_SUCCESS, payload: data.business });
  } catch (error) {
    dispatch({
      type: SINGLE_BUSINESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get  Business Details
export const getBusinessDetails = () => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_DETAILS_REQUEST });
    const { data } = await axios.get(`/app/business/me`);

    dispatch({ type: BUSINESS_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: BUSINESS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Business
export const updateBusiness = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/app/business/admin/user/${id}`,
      userData,
      config
    );

    dispatch({ type: UPDATE_BUSINESS_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business
export const deleteBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BUSINESS_REQUEST });

    const { data } = await axios.delete(`/app/business/admin/user/${id}`);

    dispatch({ type: DELETE_BUSINESS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_BUSINESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // NEW STORE PRODUCT
export const newProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_CREATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/new-product`,
      productData,
      config
    );

    dispatch({
      type: STORE_PRODUCTS_CREATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCTS_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All BusinessOrderedFrom of a Product
export const getAllProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_STORE_PRODUCTS_REQUEST });

    const { data } = await axios.get(`app/business/products`);

    dispatch({
      type: ALL_STORE_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_STORE_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteStoreProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: STORE_PRODUCTS_DELETE_REQUEST });

    const {
      business: { businessInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `app/business/products/business/id/${id}`,
      config
    );

    dispatch({
      type: STORE_PRODUCTS_DELETE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCTS_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const updateStoreProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_UPDATE_REQUEST });

    const { data } = await axios.delete(
      `app/business/products/business/id/${id}`
    );

    dispatch({
      type: STORE_PRODUCTS_UPDATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCTS_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW BUSINESS ORDERED FROM
export const newBusinessOrderedFrom = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDERED_FROM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/business-order-from`,
      orderData,
      config
    );

    dispatch({
      type: NEW_ORDERED_FROM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_ORDERED_FROM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All BusinessOrderedFrom of a Product
export const getAllBusinessOrderedFrom = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERED_FROM_REQUEST });

    const { data } = await axios.get(`app/business/business-ordered-from`);

    dispatch({
      type: ALL_ORDERED_FROM_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERED_FROM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My BusinessOrderedFrom of a Product
export const getMyBusinessOrderedFrom = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERED_FROM_REQUEST });

    const { data } = await axios.get(`app/business/business-ordered-from/me`);

    dispatch({
      type: ALL_ORDERED_FROM_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERED_FROM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete BusinessOrderedFrom of a Product
export const deleteBusinessOrderedFrom =
  (orderId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_ORDERED_FROM_REQUEST });

      const { data } = await axios.delete(
        `app/business/business-ordered-from?id=${orderId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_ORDERED_FROM_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ORDERED_FROM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN INVESTED
export const newCampaignInvested =
  (campaignInvestedData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_CAMPAIGN_INVESTED_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `app/business/campaign-invest`,
        campaignInvestedData,
        config
      );

      dispatch({
        type: NEW_CAMPAIGN_INVESTED_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_CAMPAIGN_INVESTED_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All CampaignInvested of a Business
export const getAllCampaignInvested = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_INVESTED_REQUEST });

    const { data } = await axios.get(`app/business/campaign-invest`);

    dispatch({
      type: ALL_CAMPAIGNS_INVESTED_SUCCESS,
      payload: data.campaignInvesteds,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_INVESTED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My CampaignInvested of a Business
export const getMyCampaignInvested = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_INVESTED_REQUEST });

    const { data } = await axios.get(`app/business/campaign-invest/me`);

    dispatch({
      type: ALL_CAMPAIGNS_INVESTED_SUCCESS,
      payload: data.campaignInvesteds,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_INVESTED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get history of investments in a particular campaign
export const particularCampaignInvested =
  (campaignInvestedId) => async (dispatch) => {
    try {
      dispatch({ type: PARTICULAR_CAMPAIGNS_INVESTED_REQUEST });

      const { data } = await axios.get(
        `app/business/campaign-invested/particular/${campaignInvestedId}`
      );

      dispatch({
        type: PARTICULAR_CAMPAIGNS_INVESTED_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: PARTICULAR_CAMPAIGNS_INVESTED_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete CampaignInvested of a Business
export const deleteCampaignInvested =
  (campaignInvestedId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_INVESTED_REQUEST });

      const { data } = await axios.delete(
        `app/business/campaign-invest?id=${campaignInvestedId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_INVESTED_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_INVESTED_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN PAYOUT
export const newCampaignPayout = (campaignPayoutData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_PAYOUT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/campaign-paid`,
      campaignPayoutData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_PAYOUT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_PAYOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All CampaignPayout of a Business
export const getAllCampaignPayout = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_PAYOUT_REQUEST });

    const { data } = await axios.get(`app/business/campaign-paid`);

    dispatch({
      type: ALL_CAMPAIGNS_PAYOUT_SUCCESS,
      payload: data.campaignPayouts,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_PAYOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My CampaignPayout of a Business
export const getMyCampaignPayout = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_PAYOUT_REQUEST });

    const { data } = await axios.get(`app/business/campaign-paid/me`);

    dispatch({
      type: ALL_CAMPAIGNS_PAYOUT_SUCCESS,
      payload: data.campaignPayouts,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_PAYOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get history of payouts in a particular campaign
export const particularCampaignPayout =
  (campaignPayoutId) => async (dispatch) => {
    try {
      dispatch({ type: PARTICULAR_CAMPAIGNS_PAYOUT_REQUEST });

      const { data } = await axios.get(
        `app/business/campaign-paid/particular/${campaignPayoutId}`
      );

      dispatch({
        type: PARTICULAR_CAMPAIGNS_PAYOUT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: PARTICULAR_CAMPAIGNS_PAYOUT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete CampaignPayout of a Business
export const deleteCampaignPayout =
  (campaignPayoutId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_PAYOUT_REQUEST });

      const { data } = await axios.delete(
        `app/business/campaign-paid?id=${campaignPayoutId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_PAYOUT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_PAYOUT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN STARTED
export const newCampaignStarted =
  (campaignStartedData) => async (dispatch, getState) => {
    try {
      dispatch({ type: NEW_CAMPAIGN_STARTED_REQUEST });

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
        `app/business/campaign-started`,
        campaignStartedData,
        config
      );

      dispatch({
        type: NEW_CAMPAIGN_STARTED_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_CAMPAIGN_STARTED_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All CampaignStarted of a Business
export const getAllCampaignStarted = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_STARTED_REQUEST });

    const { data } = await axios.get(`app/business/campaign-started`);

    dispatch({
      type: ALL_CAMPAIGNS_STARTED_SUCCESS,
      payload: data.campaignStarteds,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_STARTED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My CampaignStarted of a Business
export const getMyCampaignStarted = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_STARTED_REQUEST });

    const { data } = await axios.get(`app/business/campaign-started/me`);

    dispatch({
      type: ALL_CAMPAIGNS_STARTED_SUCCESS,
      payload: data.campaignStarteds,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_STARTED_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete CampaignStarted of a Business
export const deleteCampaignStarted =
  (campaignStartedId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_STARTED_REQUEST });

      const { data } = await axios.delete(
        `app/business/campaign-started?id=${campaignStartedId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_STARTED_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_STARTED_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN REVIEW
// export const newCampaignReview = (campaignReviewData) => async (dispatch) => {
// try {
// dispatch({ type: NEW_CAMPAIGN_REVIEWS_REQUEST });
//
// const config = {
// headers: { "Content-Type": "application/json" },
// };
//
// const { data } = await axios.put(
// `app/business/profile-campaign-review/`,
// campaignReviewData,
// config
// );
//
// dispatch({
// type: NEW_CAMPAIGN_REVIEWS_SUCCESS,
// payload: data.success,
// });
// } catch (error) {
// dispatch({
// type: NEW_CAMPAIGN_REVIEWS_FAIL,
// payload: error.response.data.message,
// });
// }
// };

// Get All CampaignReview of a Business
export const getAllCampaignReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-campaign-review/`);

    dispatch({
      type: ALL_CAMPAIGNS_REVIEWS_SUCCESS,
      payload: data.campaignReviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My CampaignReview of a Business
export const getMyCampaignReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGNS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-campaign-review/me`);

    dispatch({
      type: ALL_CAMPAIGNS_REVIEWS_SUCCESS,
      payload: data.campaignReviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGNS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete CampaignReview of a Business
export const deleteCampaignReview =
  (campaignReviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_REVIEWS_REQUEST });

      const { data } = await axios.delete(
        `app/business/profile-campaign-review/?id=${campaignReviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_REVIEWS_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_REVIEWS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW PRODUCT REVIEW
export const newProductReview = (newProductReviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REVIEWS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/profile-product-review/`,
      newProductReviewData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_REVIEWS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All newProductReview of a Business
export const getAllnewProductReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-product-review/`);

    dispatch({
      type: ALL_PRODUCTS_REVIEWS_SUCCESS,
      payload: data.newProductReview,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get My newProductReview of a Business
export const getMynewProductReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-product-review/`);

    dispatch({
      type: ALL_PRODUCTS_REVIEWS_SUCCESS,
      payload: data.newProductReview,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete newProductReview of a Business
export const deletenewProductReview =
  (newProductReviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REVIEWS_REQUEST });

      const { data } = await axios.delete(
        `app/business/profile-product-review/?id=${newProductReviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_PRODUCT_REVIEWS_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_REVIEWS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL REVIEW
export const newIndividualReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Individual Reviews of a Product
export const getAllIndividualReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEWS_REQUEST });

    const { data } = await axios.get(`/app/business/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Review of a Product
export const deleteIndividualReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL REVIEW
export const newIndividualnewProductReview =
  (reviewData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_INDIVIDUAL_PRODUCT_REVIEW_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `/app/business/products/review/individual`,
        reviewData,
        config
      );

      dispatch({
        type: NEW_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_INDIVIDUAL_PRODUCT_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Individual Reviews of a Product
export const getAllIndividualnewProductReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_PRODUCT_REVIEWS_REQUEST });

    const { data } = await axios.get(
      `/app/business/products/reviews/individual?id=${id}`
    );

    dispatch({
      type: ALL_INDIVIDUAL_PRODUCT_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_PRODUCT_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Review of a Product
export const deleteIndividualnewProductReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_INDIVIDUAL_PRODUCT_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/products/reviews/individual?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_INDIVIDUAL_PRODUCT_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_INDIVIDUAL_PRODUCT_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL CUSTOMER
export const newIndividualCustomer = (customerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INDIVIDUAL_CUSTOMER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/customer`,
      customerData,
      config
    );

    dispatch({
      type: NEW_INDIVIDUAL_CUSTOMER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_INDIVIDUAL_CUSTOMER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Individual Customers of a Product
export const getAllIndividualCustomers = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_CUSTOMER_REQUEST });

    const { data } = await axios.get(`/app/business/customers?id=${id}`);

    dispatch({
      type: ALL_INDIVIDUAL_CUSTOMER_SUCCESS,
      payload: data.customers,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_CUSTOMER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Customer of a Product
export const deleteIndividualCustomers =
  (customerId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_INDIVIDUAL_CUSTOMER_REQUEST });

      const { data } = await axios.delete(
        `/app/business/customers?id=${customerId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_INDIVIDUAL_CUSTOMER_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_INDIVIDUAL_CUSTOMER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL ORDER
export const newIndividualOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INDIVIDUAL_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/app/business/order`, orderData, config);

    dispatch({
      type: NEW_INDIVIDUAL_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_INDIVIDUAL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Individual Orders of a Product
export const getAllIndividualOrders = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_ORDER_REQUEST });

    const { data } = await axios.get(`/app/business/orders?id=${id}`);

    dispatch({
      type: ALL_INDIVIDUAL_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Order of a Product
export const deleteIndividualOrders =
  (orderId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_INDIVIDUAL_ORDER_REQUEST });

      const { data } = await axios.delete(
        `/app/business/orders?id=${orderId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_INDIVIDUAL_ORDER_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_INDIVIDUAL_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete Individual Order of a Product
export const updateIndividualOrders =
  (orderId, productId) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_INDIVIDUAL_ORDER_REQUEST });

      const { data } = await axios.delete(
        `/app/business/orders?id=${orderId}&productId=${productId}`
      );

      dispatch({
        type: UPDATE_INDIVIDUAL_ORDER_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_INDIVIDUAL_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS REVIEW
export const newBusinessReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BUSINESS_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_BUSINESS_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_BUSINESS_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Reviews of a Product
export const getAllBusinessReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUSINESS_REVIEWS_REQUEST });

    const { data } = await axios.get(`/app/business/reviews?id=${id}`);

    dispatch({
      type: ALL_BUSINESS_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_BUSINESS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Review of a Product
export const deleteBusinessReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BUSINESS_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_BUSINESS_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BUSINESS_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS REVIEW
export const newBusinessnewProductReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/products/review/business`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Reviews of a Product
export const getAllBusinessnewProductReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REVIEWS_REQUEST });

    const { data } = await axios.get(
      `/app/business/products/reviews/business?id=${id}`
    );

    dispatch({
      type: ALL_PRODUCT_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Review of a Product
export const deleteBusinessnewProductReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/products/reviews/business?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_PRODUCT_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS CUSTOMER
export const newBusinessCustomer = (customerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CUSTOMER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/customer`,
      customerData,
      config
    );

    dispatch({
      type: NEW_CUSTOMER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CUSTOMER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Customers of a Product
export const getAllBusinessCustomers = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CUSTOMER_REQUEST });

    const { data } = await axios.get(`/app/business/customers?id=${id}`);

    dispatch({
      type: ALL_CUSTOMER_SUCCESS,
      payload: data.customers,
    });
  } catch (error) {
    dispatch({
      type: ALL_CUSTOMER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Customer of a Product
export const deleteBusinessCustomers =
  (customerId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CUSTOMER_REQUEST });

      const { data } = await axios.delete(
        `/app/business/customers?id=${customerId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CUSTOMER_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CUSTOMER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS ORDER
export const newOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/app/business/order`, orderData, config);

    dispatch({
      type: NEW_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Orders of a Product
export const getAllOrders = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDER_REQUEST });

    const { data } = await axios.get(`/app/business/orders?id=${id}`);

    dispatch({
      type: ALL_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Order of a Product
export const deleteOrders = (orderId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(
      `/app/business/orders?id=${orderId}&productId=${productId}`
    );

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Order of a Product
export const BusinessOrders = (orderId, productId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const { data } = await axios.delete(
      `/app/business/orders?id=${orderId}&productId=${productId}`
    );

    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const listCampaigns =
  (keyword = "", currentPage = 1, campaignCategory) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_CAMPAIGN_REQUEST,
      });

      let link = `/app/business/campaigns/all?keyword=${keyword}&page=${currentPage}`;

      if (campaignCategory) {
        link = `/app/business/campaigns/all?keyword=${keyword}&page=${currentPage}&campaignCategory=${campaignCategory}`;
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
      business: { businessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${businessInfo.token}`,
      },
    };

    const { data } = await axios.get(`/app/business/campaigns/me`, config);

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
  (campaignData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: { NEW_CAMPAIGN_REQUEST, UPDATE_CAMPAIGN_REQUEST },
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
        `/app/business/campaign-start`,
        { campaignData },
        config
      );

      dispatch({
        type: { NEW_CAMPAIGN_SUCCESS, UPDATE_CAMPAIGN_SUCCESS },
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: { NEW_CAMPAIGN_FAIL, UPDATE_CAMPAIGN_FAIL },
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
      `/app/business/campaigns/business/id/${id}`,
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
      `/app/business/campaigns/business/id/${id}`,
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
export const getCampaign = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_REQUEST });

    let link = `/app/business/business/all`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_CAMPAIGN_SUCCESS,
      payload: data.campaigns,
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

    const { data } = await axios.get("/app/business/campaigns/admin/products");

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
      `/app/business/campaigns/admin/product/new`,
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
      `/app/business/campaigns/admin/product/${id}`,
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

    const { data } = await axios.delete(
      `/app/business/campaigns/admin/product/${id}`
    );

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

    const { data } = await axios.get(
      `/app/business/campaigns/business/id/${id}`
    );

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
export const newCampaignReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/campaigns/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Reviews of a Campaign
export const getAllBusinessCampaignReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_REVIEWS_REQUEST });

    const { data } = await axios.get(
      `/app/business/campaigns/reviews?id=${id}`
    );

    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Review of a Campaign
export const deleteBusinessCampaignReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/campaigns/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW BUSINESS DONOR
export const newBusinessDonor = (donorata) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DONOR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/campaigns/donor`,
      donorata,
      config
    );

    dispatch({
      type: NEW_DONOR_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_DONOR_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Business Customers of a Campaign
export const getAllBusinessDonor = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_DONORS_REQUEST });

    const { data } = await axios.get(`/app/business/campaigns/donors?id=${id}`);

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
export const deleteBusinessDonors =
  (donorId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_DONOR_REQUEST });

      const { data } = await axios.delete(
        `/app/business/campaigns/donors?id=${donorId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_DONOR_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_DONOR_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW CAMPAIGN_INDIVIDUAL REVIEW
// export const newCampaignReview = (reviewData) => async (dispatch) => {
// try {
// dispatch({ type: NEW_CAMPAIGN_REVIEW_REQUEST });
//
// const config = {
// headers: { "Content-Type": "application/json" },
// };
//
// const { data } = await axios.put(
// `/app/business/campaigns/review`,
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
export const getAllcampaignReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_CAMPAIGN_REVIEWS_REQUEST });

    const { data } = await axios.get(
      `/app/business/campaigns/reviews?id=${id}`
    );

    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_CAMPAIGN_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Individual Review of a Campaign
export const deletecampaignReviews =
  (reviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CAMPAIGN_REVIEW_REQUEST });

      const { data } = await axios.delete(
        `/app/business/campaigns/reviews?id=${reviewId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_CAMPAIGN_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CAMPAIGN_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// NEW INDIVIDUAL DONOR
export const newIndividualDonor = (donorata) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INDIVIDUAL_DONOR_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/business/campaigns/donor`,
      donorata,
      config
    );

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
export const getAllIndividualDonors = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_DONORS_REQUEST });

    const { data } = await axios.get(`/app/business/campaigns/donors?id=${id}`);

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
export const deleteIndividualDonor =
  (donorId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_INDIVIDUAL_DONOR_REQUEST });

      const { data } = await axios.delete(
        `/app/business/campaigns/donors?id=${donorId}&productId=${productId}`
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
