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
} from "../constants/storeProductsConstants";
import axios from "axios";

export const listStoreProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORE_PRODUCTS_LIST_REQUEST,
    });

    const {
      signedUpBusinessLogin: { signedUpBusinessInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${signedUpBusinessInfo.token}`,
      },
    };

    const { data } = await axios.get(`/app/store/products/`, config);

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

export const createStoreProductAction =
  (
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
