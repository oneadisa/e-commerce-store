import {
  STORE_PRODUCTS_UPDATE_REQUEST,
  STORE_PRODUCTS_UPDATE_SUCCESS,
  STORE_PRODUCTS_UPDATE_FAIL,
  STORE_PRODUCTS_UPDATE_RESET,
  STORE_PRODUCTS_CREATE_FAIL,
  STORE_PRODUCTS_CREATE_REQUEST,
  STORE_PRODUCTS_CREATE_SUCCESS,
  STORE_PRODUCTS_CREATE_RESET,
  STORE_PRODUCTS_DELETE_FAIL,
  STORE_PRODUCTS_DELETE_REQUEST,
  STORE_PRODUCTS_DELETE_SUCCESS,
  STORE_PRODUCTS_DELETE_RESET,
  STORE_PRODUCTS_LIST_FAIL,
  STORE_PRODUCTS_LIST_REQUEST,
  STORE_PRODUCTS_LIST_SUCCESS,
  ADMIN_STORE_PRODUCTS_REQUEST,
  ADMIN_STORE_PRODUCTS_SUCCESS,
  ADMIN_STORE_PRODUCTS_FAIL,
  STORE_PRODUCTS_DETAILS_REQUEST,
  STORE_PRODUCTS_DETAILS_SUCCESS,
  STORE_PRODUCTS_DETAILS_FAIL,
  NEW_INDIVIDUAL_ORDER_REQUEST,
  NEW_INDIVIDUAL_ORDER_SUCCESS,
  NEW_INDIVIDUAL_ORDER_RESET,
  NEW_INDIVIDUAL_ORDER_FAIL,
  ALL_INDIVIDUAL_ORDERS_REQUEST,
  ALL_INDIVIDUAL_ORDERS_SUCCESS,
  ALL_INDIVIDUAL_ORDERS_FAIL,
  DELETE_INDIVIDUAL_ORDER_REQUEST,
  DELETE_INDIVIDUAL_ORDER_SUCCESS,
  DELETE_INDIVIDUAL_ORDER_RESET,
  DELETE_INDIVIDUAL_ORDER_FAIL,
  NEW_INDIVIDUAL_CUSTOMER_REQUEST,
  NEW_INDIVIDUAL_CUSTOMER_SUCCESS,
  NEW_INDIVIDUAL_CUSTOMER_RESET,
  NEW_INDIVIDUAL_CUSTOMER_FAIL,
  ALL_INDIVIDUAL_CUSTOMERS_REQUEST,
  ALL_INDIVIDUAL_CUSTOMERS_SUCCESS,
  ALL_INDIVIDUAL_CUSTOMERS_FAIL,
  DELETE_INDIVIDUAL_CUSTOMER_REQUEST,
  DELETE_INDIVIDUAL_CUSTOMER_SUCCESS,
  DELETE_INDIVIDUAL_CUSTOMER_RESET,
  DELETE_INDIVIDUAL_CUSTOMER_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_RESET,
  NEW_ORDER_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_RESET,
  DELETE_ORDER_FAIL,
  NEW_CUSTOMER_REQUEST,
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_RESET,
  NEW_CUSTOMER_FAIL,
  ALL_CUSTOMERS_REQUEST,
  ALL_CUSTOMERS_SUCCESS,
  ALL_CUSTOMERS_FAIL,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_RESET,
  DELETE_CUSTOMER_FAIL,
  NEW_BUSINESS_REVIEW_REQUEST,
  NEW_BUSINESS_REVIEW_SUCCESS,
  NEW_BUSINESS_REVIEW_RESET,
  NEW_BUSINESS_REVIEW_FAIL,
  ALL_BUSINESS_REVIEWS_REQUEST,
  ALL_BUSINESS_REVIEWS_SUCCESS,
  ALL_BUSINESS_REVIEWS_FAIL,
  DELETE_BUSINESS_REVIEW_REQUEST,
  DELETE_BUSINESS_REVIEW_SUCCESS,
  DELETE_BUSINESS_REVIEW_RESET,
  DELETE_BUSINESS_REVIEW_FAIL,
  MY_STORE_PRODUCTS_LIST_REQUEST,
  MY_STORE_PRODUCTS_LIST_SUCCESS,
  MY_STORE_PRODUCTS_LIST_FAIL,
  CLEAR_ERRORS,
} from "../constants/storeProductsConstants";
//
export const storeProductsListReducer = (
  state = { storeProducts: [] },
  action
) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_LIST_SUCCESS:
      return { loading: false, storeProducts: action.payload };
    case STORE_PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    //
    default:
      return state;
  }
};

export const myStoreProductsListReducer = (
  state = { storeProducts: [] },
  action
) => {
  switch (action.type) {
    case MY_STORE_PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case MY_STORE_PRODUCTS_LIST_SUCCESS:
      return { loading: false, storeProducts: action.payload };
    case MY_STORE_PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    //
    default:
      return state;
  }
};
//
export const storeProductCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CREATE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    //
    default:
      return state;
  }
};
//
export const storeProductDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DELETE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    //
    default:
      return state;
  }
};
//
export const storeProductUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_UPDATE_REQUEST:
      return { loading: true };
    case STORE_PRODUCTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case STORE_PRODUCTS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    //
    default:
      return state;
  }
};

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST_REQUEST:
    case ADMIN_STORE_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case STORE_PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };

    case ADMIN_STORE_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case STORE_PRODUCTS_LIST_FAIL:
    case ADMIN_STORE_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STORE_PRODUCTS_CREATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case STORE_PRODUCTS_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STORE_PRODUCTS_CREATE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DELETE_REQUEST:
    case STORE_PRODUCTS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STORE_PRODUCTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case STORE_PRODUCTS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case STORE_PRODUCTS_DELETE_FAIL:
    case STORE_PRODUCTS_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STORE_PRODUCTS_DELETE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case STORE_PRODUCTS_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case STORE_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case STORE_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case STORE_PRODUCTS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newIndividualProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_ORDER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_ORDER_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualProductOrdersReducer = (
  state = { orders: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ALL_INDIVIDUAL_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newIndividualProductCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_INDIVIDUAL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_INDIVIDUAL_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_INDIVIDUAL_CUSTOMER_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualProductCustomersReducer = (
  state = { customers: [] },
  action
) => {
  switch (action.type) {
    case ALL_INDIVIDUAL_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_INDIVIDUAL_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
      };
    case ALL_INDIVIDUAL_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualProductCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INDIVIDUAL_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_INDIVIDUAL_CUSTOMER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newIndividualnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualnewProductReviewsReducer = (
  state = { reviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const individualnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newBusinessProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ORDER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ORDER_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessProductOrdersReducer = (
  state = { orders: [] },
  action
) => {
  switch (action.type) {
    case ALL_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ALL_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessProductOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newBusinessProductCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CUSTOMER_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CUSTOMER_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessProductCustomersReducer = (
  state = { customers: [] },
  action
) => {
  switch (action.type) {
    case ALL_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
      };
    case ALL_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessProductCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CUSTOMER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newBusinessnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BUSINESS_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BUSINESS_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessnewProductReviewsReducer = (
  state = { reviews: [] },
  action
) => {
  switch (action.type) {
    case ALL_BUSINESS_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_BUSINESS_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_BUSINESS_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const businessnewProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BUSINESS_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUSINESS_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_BUSINESS_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BUSINESS_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
