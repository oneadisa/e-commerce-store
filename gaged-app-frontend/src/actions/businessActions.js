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
  DELETE_BUSINESS_REQUEST,
  DELETE_BUSINESS_SUCCESS,
  DELETE_BUSINESS_FAIL,
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
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
  DELETE_STORE_PRODUCT_REQUEST,
  DELETE_STORE_PRODUCT_FAIL,
  DELETE_STORE_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/businessConstants";
import axios from "axios";

export const businessLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNED_UP_BUSINESS_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/app/loginBusiness",
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

    localStorage.setItem("signedUpBusinessInfo", JSON.stringify(data));
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
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/app/signup/2/business",
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

      localStorage.setItem("signedUpBusinessInfo", JSON.stringify(data));
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
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BUSINESSS_REQUEST });

      let link = `/app/business/business/all?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/app/business/business/all?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_BUSINESSS_SUCCESS,
        payload: data,
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
      `/app/loginBusiness`,
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
export const loadBusiness = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_BUSINESS_REQUEST });

    const { data } = await axios.get(`/app/business/me`);

    dispatch({ type: LOAD_BUSINESS_SUCCESS, payload: data.user });
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
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

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
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

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
export const getBusinessDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_DETAILS_REQUEST });
    const { data } = await axios.get(`/app/business/admin/user/${id}`);

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
    dispatch({ type: NEW_STORE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/new-product`,
      productData,
      config
    );

    dispatch({
      type: NEW_STORE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_STORE_PRODUCT_FAIL,
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
export const deleteStoreProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_STORE_PRODUCT_REQUEST });

    const { data } = await axios.delete(
      `app/business/products?id=${productId}`
    );

    dispatch({
      type: DELETE_STORE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STORE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW BUSINESS ORDERED FROM
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

// NEW CAMPAIGN STARTED
export const newCampaignStarted =
  (campaignStartedData) => async (dispatch, getState) => {
    try {
      dispatch({ type: NEW_CAMPAIGN_STARTED_REQUEST });

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
