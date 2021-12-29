import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  signedUpUserLoginReducer,
  userSignUpReducer,
  userReducer,
  userProfileReducer,
  forgotUserPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducers";
import {
  businessSignUpReducer,
  signedUpBusinessLoginReducer,
  businessReducer,
  businessProfileReducer,
  forgotBusinessPasswordReducer,
  allBusinessesReducer,
  businessDetailsReducer,
} from "./reducers/businessReducer";

import { setUpStoreReducer } from "./reducers/storeReducer";
import {
  storeProductsListReducer,
  storeProductCreateReducer,
  storeProductDeleteReducer,
  storeProductUpdateReducer,
  productsReducer,
  newProductReducer,
  productReducer,
  productDetailsReducer,
  newProductOrderReducer,
  productOrdersReducer,
  productOrderReducer,
  newProductCustomerReducer,
  productCustomerReducer,
  productCustomersReducer,
  productReviewsReducer,
  productReviewReducer,
  newProductReviewReducer,
} from "./reducers/storeProductsReducer";

import {
  campaignsReducer,
  campaignReducer,
  newCampaignReducer,
  campaignDetailsReducer,
  newCampaignDonorReducer,
  campaignDonorReducer,
  campaignDonorsReducer,
  newCampaignReviewReducer,
  campaignReviewReducer,
  campaignReviewsReducer,
} from "./reducers/campaignReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  //this will contain our reducers
  signedUpUserLogin: signedUpUserLoginReducer,
  userSignUp: userSignUpReducer,
  user: userReducer,
  userProifle: userProfileReducer,
  forgotUserPassword: forgotUserPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,

  signedUpBusinessLogin: signedUpBusinessLoginReducer,
  businessSignUp: businessSignUpReducer,
  business: businessReducer,
  businessProfile: businessProfileReducer,
  forgotBusinessPassword: forgotBusinessPasswordReducer,
  allBusinesses: allBusinessesReducer,
  businessDetails: businessDetailsReducer,

  setUpStore: setUpStoreReducer,
  storeProductsList: storeProductsListReducer,
  storeProductCreate: storeProductCreateReducer,
  storeProductDelete: storeProductDeleteReducer,
  storeProductUpdate: storeProductUpdateReducer,
  products: productsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productDetails: productDetailsReducer,
  newProductOrder: newProductOrderReducer,
  productOrder: productOrderReducer,
  productOrders: productOrdersReducer,
  newProductCustomer: newProductCustomerReducer,
  productCustomer: productCustomerReducer,
  productCustomers: productCustomersReducer,
  newProductReview: newProductReviewReducer,
  productReview: productReviewReducer,
  productReviews: productReviewsReducer,

  campaigns: campaignsReducer,
  campaign: campaignReducer,
  newCampaign: newCampaignReducer,
  campaignDetails: campaignDetailsReducer,
  newCampaignDonor: newCampaignDonorReducer,
  campaignDonor: campaignDonorReducer,
  campaignDonors: campaignDonorsReducer,
  newCampaignReview: newCampaignReviewReducer,
  campaignReview: campaignReviewReducer,
  campaignReviews: campaignReviewsReducer,

  allOrders: allOrdersReducer,
  order: orderReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,

  cart: cartReducer,
});

const userInfoFromStorage = localStorage.getItem("signedUpUserInfo")
  ? JSON.parse(localStorage.getItem("signedUpUserInfo"))
  : null;

const businessInfoFromStorage = localStorage.getItem("signedUpBusinessInfo")
  ? JSON.parse(localStorage.getItem("signedUpBusinessInfo"))
  : null;

const InitialState = {
  signedUpUserLoginReducer: {
    signedUpUserInfo: userInfoFromStorage,
  },
  signedUpBusinessLoginReducer: {
    signedUpBusinessInfo: businessInfoFromStorage,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  InitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
