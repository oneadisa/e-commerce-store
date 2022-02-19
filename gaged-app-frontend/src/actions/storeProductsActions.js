import {
  STORE_PRODUCTS_UPDATE_REQUEST,
  STORE_PRODUCTS_UPDATE_SUCCESS,
  STORE_PRODUCTS_UPDATE_FAIL,
  STORE_PRODUCTS_CREATE_FAIL,
  STORE_PRODUCTS_CREATE_REQUEST,
  STORE_PRODUCTS_CREATE_SUCCESS,
  STORE_PRODUCTS_DELETE_FAIL,
  STORE_PRODUCTS_DELETE_REQUEST,
  STORE_PRODUCTS_DELETE_SUCCESS,
  STORE_PRODUCTS_LIST_FAIL,
  STORE_PRODUCTS_LIST_REQUEST,
  STORE_PRODUCTS_LIST_SUCCESS,
  MY_STORE_PRODUCTS_LIST_REQUEST,
  MY_STORE_PRODUCTS_LIST_SUCCESS,
  MY_STORE_PRODUCTS_LIST_FAIL,
  ADMIN_STORE_PRODUCTS_REQUEST,
  ADMIN_STORE_PRODUCTS_SUCCESS,
  ADMIN_STORE_PRODUCTS_FAIL,
  STORE_PRODUCTS_DETAILS_REQUEST,
  STORE_PRODUCTS_DETAILS_SUCCESS,
  STORE_PRODUCTS_DETAILS_FAIL,
  NEW_INDIVIDUAL_ORDER_REQUEST,
  NEW_INDIVIDUAL_ORDER_SUCCESS,
  NEW_INDIVIDUAL_ORDER_FAIL,
  ALL_INDIVIDUAL_ORDERS_REQUEST,
  ALL_INDIVIDUAL_ORDERS_SUCCESS,
  ALL_INDIVIDUAL_ORDERS_FAIL,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  NEW_INDIVIDUAL_CUSTOMER_REQUEST,
  NEW_INDIVIDUAL_CUSTOMER_SUCCESS,
  NEW_INDIVIDUAL_CUSTOMER_FAIL,
  ALL_INDIVIDUAL_CUSTOMERS_REQUEST,
  ALL_INDIVIDUAL_CUSTOMERS_SUCCESS,
  ALL_INDIVIDUAL_CUSTOMERS_FAIL,
  DELETE_INDIVIDUAL_CUSTOMER_REQUEST,
  DELETE_INDIVIDUAL_CUSTOMER_SUCCESS,
  DELETE_INDIVIDUAL_CUSTOMER_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  NEW_CUSTOMER_REQUEST,
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_FAIL,
  ALL_CUSTOMERS_REQUEST,
  ALL_CUSTOMERS_SUCCESS,
  ALL_CUSTOMERS_FAIL,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAIL,
  NEW_BUSINESS_REVIEW_REQUEST,
  NEW_BUSINESS_REVIEW_SUCCESS,
  NEW_BUSINESS_REVIEW_FAIL,
  ALL_BUSINESS_REVIEWS_REQUEST,
  ALL_BUSINESS_REVIEWS_SUCCESS,
  ALL_BUSINESS_REVIEWS_FAIL,
  DELETE_BUSINESS_REVIEW_REQUEST,
  DELETE_BUSINESS_REVIEW_SUCCESS,
  DELETE_BUSINESS_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/storeProductsConstants";
import axios from "axios";

export const listStoreProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: STORE_PRODUCTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/app/store/products/`);

    dispatch({
      type: STORE_PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: STORE_PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const listMyStoreProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MY_STORE_PRODUCTS_LIST_REQUEST,
    });

    const {
      signedUpBusinessLogin: { signedUpBusinessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${signedUpBusinessInfo.token}`,
      },
    };

    const { data } = await axios.get(`/app/store/products/me`, config);

    dispatch({
      type: MY_STORE_PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: MY_STORE_PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createStoreProductAction =
  (productData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: STORE_PRODUCTS_CREATE_REQUEST,
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
        `/app/store/products/create`,
        productData,
        config
      );

      dispatch({
        type: STORE_PRODUCTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: STORE_PRODUCTS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteStoreProductAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORE_PRODUCTS_DELETE_REQUEST,
    });

    const {
      signedUpBusinessLogin: { signedUpBusinessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${signedUpBusinessInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/app/store/products/${id}`, config);

    dispatch({
      type: STORE_PRODUCTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: STORE_PRODUCTS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateStoreProductAction =
  (id, productData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: STORE_PRODUCTS_UPDATE_REQUEST,
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
        `/app/store/products/${id}`,
        productData,
        config
      );

      dispatch({
        type: STORE_PRODUCTS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: STORE_PRODUCTS_UPDATE_FAIL,
        payload: message,
      });
    }
  };

// Get All Products
export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: STORE_PRODUCTS_LIST_REQUEST });

      let link = `/app/store/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/app/store/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: STORE_PRODUCTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STORE_PRODUCTS_LIST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_STORE_PRODUCTS_REQUEST });

    const { data } = await axios.get("/app/store/products/admin/products");

    dispatch({
      type: ADMIN_STORE_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_STORE_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_CREATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/app/store/products/admin/product/new`,
      productData,
      config
    );

    dispatch({
      type: STORE_PRODUCTS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_PRODUCTS_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_UPDATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/admin/product/${id}`,
      productData,
      config
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

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_DELETE_REQUEST });

    const { data } = await axios.delete(
      `/app/store/products/admin/product/${id}`
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

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORE_PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(`/app/store/products/product/${id}`);

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

// NEW INDIVIDUAL REVIEW
export const newIndividualReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/review`,
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

    const { data } = await axios.get(`/app/store/products/reviews?id=${id}`);

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
        `/app/store/products/reviews?id=${reviewId}&productId=${productId}`
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

// NEW INDIVIDUAL CUSTOMER
export const newIndividualCustomer = (customerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_INDIVIDUAL_CUSTOMER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/customer`,
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
    dispatch({ type: ALL_INDIVIDUAL_CUSTOMERS_REQUEST });

    const { data } = await axios.get(`/app/store/products/customers?id=${id}`);

    dispatch({
      type: ALL_INDIVIDUAL_CUSTOMERS_SUCCESS,
      payload: data.customers,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_CUSTOMERS_FAIL,
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
        `/app/store/products/customers?id=${customerId}&productId=${productId}`
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

    const { data } = await axios.put(
      `/app/store/products/order`,
      orderData,
      config
    );

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
    dispatch({ type: ALL_INDIVIDUAL_ORDERS_REQUEST });

    const { data } = await axios.get(`/app/store/products/orders?id=${id}`);

    dispatch({
      type: ALL_INDIVIDUAL_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_ORDERS_FAIL,
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
        `/app/store/products/orders?id=${orderId}&productId=${productId}`
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

// NEW BUSINESS REVIEW
export const newBusinessReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BUSINESS_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/review`,
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

    const { data } = await axios.get(`/app/store/products/reviews?id=${id}`);

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
        `/app/store/products/reviews?id=${reviewId}&productId=${productId}`
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

// NEW BUSINESS CUSTOMER
export const newBusinessCustomer = (customerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CUSTOMER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/customer`,
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
    dispatch({ type: ALL_CUSTOMERS_REQUEST });

    const { data } = await axios.get(`/app/store/products/customers?id=${id}`);

    dispatch({
      type: ALL_CUSTOMERS_SUCCESS,
      payload: data.customers,
    });
  } catch (error) {
    dispatch({
      type: ALL_CUSTOMERS_FAIL,
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
        `/app/store/products/customers?id=${customerId}&productId=${productId}`
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
export const newBusinessOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/app/store/products/order`,
      orderData,
      config
    );

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
export const getAllBusinessOrders = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get(`/app/store/products/orders?id=${id}`);

    dispatch({
      type: ALL_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Business Order of a Product
export const deleteBusinessOrders =
  (orderId, productId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_ORDER_REQUEST });

      const { data } = await axios.delete(
        `/app/store/products/orders?id=${orderId}&productId=${productId}`
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

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
