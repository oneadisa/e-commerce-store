// NEW PRODUCT REVIEW
export const newProductReview = (campaignPayoutData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_STORE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `app/business/profile-product-review/`,
      campaignPayoutData,
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

// Get All ProductReview of a Business
export const getAllProductReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REVIEWS_REQUEST });

    const { data } = await axios.get(`app/business/profile-product-review/`);

    dispatch({
      type: ALL_PRODUCTS_REVIEWS_SUCCESS,
      payload: data.campaignPayouts,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_REVIEWS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get history of payouts in a particular campaign
export const particularCampaignPayout =
  (campaignPayoutId) => async (dispatch) => {
    try {
      dispatch({ type: PARTICULAR_CAMPAIGN_PAYOUT_REQUEST });

      const { data } = await axios.get(
        `app/business/campaign-paid/particular/${campaignPayoutId}`
      );

      dispatch({
        type: PARTICULAR_CAMPAIGN_PAYOUT_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: PARTICULAR_CAMPAIGN_PAYOUT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
