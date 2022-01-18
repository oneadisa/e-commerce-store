import {
  CREATE_BUSINESS_ORDER_REQUEST,
  CREATE_BUSINESS_ORDER_SUCCESS,
  CREATE_BUSINESS_ORDER_FAIL,
  MY_BUSINESS_ORDERS_REQUEST,
  MY_BUSINESS_ORDERS_SUCCESS,
  MY_BUSINESS_ORDERS_FAIL,
  ALL_BUSINESS_ORDERS_REQUEST,
  ALL_BUSINESS_ORDERS_SUCCESS,
  ALL_BUSINESS_ORDERS_FAIL,
  UPDATE_BUSINESS_ORDER_REQUEST,
  UPDATE_BUSINESS_ORDER_SUCCESS,
  UPDATE_BUSINESS_ORDER_FAIL,
  DELETE_BUSINESS_ORDER_REQUEST,
  DELETE_BUSINESS_ORDER_SUCCESS,
  DELETE_BUSINESS_ORDER_FAIL,
  BUSINESS_ORDER_DETAILS_REQUEST,
  BUSINESS_ORDER_DETAILS_SUCCESS,
  BUSINESS_ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/businessOrderConstants";

import axios from "axios";

// Create BusinessOrder
export const createBusinessOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: CREATE_BUSINESS_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BUSINESS_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My BusinessOrders
export const myBusinessOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_BUSINESS_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: MY_BUSINESS_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_BUSINESS_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All BusinessOrders (admin)
export const getAllBusinessOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUSINESS_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/orders");

    dispatch({ type: ALL_BUSINESS_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_BUSINESS_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update BusinessOrder
export const updateBusinessOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BUSINESS_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch({ type: UPDATE_BUSINESS_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete BusinessOrder
export const deleteBusinessOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BUSINESS_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch({ type: DELETE_BUSINESS_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_BUSINESS_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get BusinessOrder Details
export const getBusinessOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: BUSINESS_ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: BUSINESS_ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
