import {
  CREATE_INDIVIDUAL_ORDER_REQUEST,
  CREATE_INDIVIDUAL_ORDER_SUCCESS,
  CREATE_INDIVIDUAL_ORDER_FAIL,
  MY_INDIVIDUAL_ORDERS_REQUEST,
  MY_INDIVIDUAL_ORDERS_SUCCESS,
  MY_INDIVIDUAL_ORDERS_FAIL,
  ALL_INDIVIDUAL_ORDERS_REQUEST,
  ALL_INDIVIDUAL_ORDERS_SUCCESS,
  ALL_INDIVIDUAL_ORDERS_FAIL,
  UPDATE_INDIVIDUAL_ORDER_REQUEST,
  UPDATE_INDIVIDUAL_ORDER_SUCCESS,
  UPDATE_INDIVIDUAL_ORDER_FAIL,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  INDIVIDUAL_ORDER_DETAILS_REQUEST,
  INDIVIDUAL_ORDER_DETAILS_SUCCESS,
  INDIVIDUAL_ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/individualOrderConstants";

import axios from "axios";

// Create IndividualOrder
export const createIndividualOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_INDIVIDUAL_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: CREATE_INDIVIDUAL_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_INDIVIDUAL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My IndividualOrders
export const myIndividualOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_INDIVIDUAL_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: MY_INDIVIDUAL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_INDIVIDUAL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All IndividualOrders (admin)
export const getAllIndividualOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_INDIVIDUAL_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/orders");

    dispatch({ type: ALL_INDIVIDUAL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_INDIVIDUAL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update IndividualOrder
export const updateIndividualOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_INDIVIDUAL_ORDER_REQUEST });

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

    dispatch({ type: UPDATE_INDIVIDUAL_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_INDIVIDUAL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete IndividualOrder
export const deleteIndividualOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_INDIVIDUAL_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch({ type: DELETE_INDIVIDUAL_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_INDIVIDUAL_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get IndividualOrder Details
export const getIndividualOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: INDIVIDUAL_ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: INDIVIDUAL_ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: INDIVIDUAL_ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
