import {
  SIGNED_UP_USER_LOGIN_FAIL,
  SIGNED_UP_USER_LOGIN_REQUEST,
  SIGNED_UP_USER_LOGIN_SUCCESS,
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
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
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
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  NEW_BUSINESS_ORDERED_FROM_REQUEST,
  NEW_BUSINESS_ORDERED_FROM_SUCCESS,
  NEW_BUSINESS_ORDERED_FROM_FAIL,
  ALL_BUSINESS_ORDERED_FROM_SUCCESS,
  ALL_BUSINESS_ORDERED_FROM_REQUEST,
  ALL_BUSINESS_ORDERED_FROM_FAIL,
  DELETE_BUSINESS_ORDERED_FROM_REQUEST,
  DELETE_BUSINESS_ORDERED_FROM_FAIL,
  DELETE_BUSINESS_ORDERED_FROM_SUCCESS,
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
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";
export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNED_UP_USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/app/individual/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: SIGNED_UP_USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("signedUpUserInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNED_UP_USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const logout = () => async(dispatch) => {
// localStorage.removeItem("signedUpUserInfo");
// dispatch({
// type: SIGNED_UP_USER_LOGOUT
// });
// };

export const signUpUser =
  (firstName, lastName, email, password, pic, phoneNumber) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_SIGN_UP_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/app/individual/signup/2/individual",
        {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          pic,
        },
        config
      );

      dispatch({
        type: USER_SIGN_UP_SUCCESS,
        payload: data,
      });

      dispatch({
        type: SIGNED_UP_USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("signedUpUserInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGN_UP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNED_UP_USER_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/app/individual/login`,
      { email, password },
      config
    );

    dispatch({ type: SIGNED_UP_USER_LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: SIGNED_UP_USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGN_UP_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `/app/individual/register`,
      userData,
      config
    );

    dispatch({ type: USER_SIGN_UP_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: USER_SIGN_UP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/app/individual/me`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/app/individual/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(
      `/app/individual/me/update`,
      userData,
      config
    );

    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/app/individual/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_USER_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_USER_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/app/individual/password/forgot`,
      email,
      config
    );

    dispatch({ type: FORGOT_USER_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_USER_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_USER_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/app/individual/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_USER_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_USER_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`/app/individual/admin/users`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(`/app/individual/admin/user/${id}`);

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update User
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/app/individual/admin/user/${id}`,
      userData,
      config
    );

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(`/app/individual/admin/user/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW BUSINESS_ORDERED_FROM
export const newBusinessOrderedFrom = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BUSINESS_ORDERED_FROM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/business-order-from`,
      orderData,
      config
    );

    dispatch({
      type: NEW_BUSINESS_ORDERED_FROM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_BUSINESS_ORDERED_FROM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All BusinessOrderedFrom of a Product
export const getAllBusinessOrderedFrom = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUSINESS_ORDERED_FROM_REQUEST });

    const { data } = await axios.get(`app/business/business-ordered-from`);

    dispatch({
      type: ALL_BUSINESS_ORDERED_FROM_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_BUSINESS_ORDERED_FROM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete BusinessOrderedFrom of a Product
export const deleteBusinessOrderedFrom =
  (orderId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BUSINESS_ORDERED_FROM_REQUEST });

      const { data } = await axios.delete(
        `app/business/business-ordered-from?id=${orderId}&productId=${productId}`
      );

      dispatch({
        type: DELETE_BUSINESS_ORDERED_FROM_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BUSINESS_ORDERED_FROM_FAIL,
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

// NEW CAMPAIGN REVIEW
export const newCampaignReview = (campaignReviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CAMPAIGN_REVIEWS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/profile-campaign-review/`,
      campaignReviewData,
      config
    );

    dispatch({
      type: NEW_CAMPAIGN_REVIEWS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_CAMPAIGN_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

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
export const newProductReview = (productReviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REVIEWS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/profile-product-review/`,
      productReviewData,
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

// Get All ProductReview of a Business
export const getAllProductReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-product-review/`);

    dispatch({
      type: ALL_PRODUCTS_REVIEWS_SUCCESS,
      payload: data.productReviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete ProductReview of a Business
export const deleteProductReview =
  (productReviewId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REVIEWS_REQUEST });

      const { data } = await axios.delete(
        `app/business/profile-product-review/?id=${productReviewId}&productId=${productId}`
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

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
