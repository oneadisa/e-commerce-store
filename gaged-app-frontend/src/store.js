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
  newIndividualProductOrderReducer,
  idividualProductOrdersReducer,
  idividualProductOrderReducer,
  newIndividualProductCustomerReducer,
  idividualProductCustomerReducer,
  idividualProductCustomersReducer,
  idividualProductReviewsReducer,
  idividualProductReviewReducer,
  newIndividualProductReviewReducer,
  newBusinessProductOrderReducer,
  businessProductOrdersReducer,
  businessProductOrderReducer,
  newBusinessProductCustomerReducer,
  businessProductCustomerReducer,
  businessProductCustomersReducer,
  businessProductReviewsReducer,
  businessProductReviewReducer,
  newBusinessProductReviewReducer,
} from "./reducers/storeProductsReducer";

import {
  campaignsReducer,
  campaignReducer,
  newCampaignReducer,
  campaignDetailsReducer,
  newIndividualCampaignDonorReducer,
  individualCampaignDonorReducer,
  individualCampaignDonorsReducer,
  newIndividualCampaignReviewReducer,
  individualCampaignReviewReducer,
  individualCampaignReviewsReducer,
  newBusinessCampaignDonorReducer,
  businessCampaignDonorReducer,
  businessCampaignDonorsReducer,
  newBusinessCampaignReviewReducer,
  businessCampaignReviewReducer,
  businessCampaignReviewsReducer,
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
  newIndividualProductOrder: newIndividualProductOrderReducer,
  idividualProductOrder: idividualProductOrderReducer,
  idividualProductOrders: idividualProductOrdersReducer,
  newIndividualProductCustomer: newIndividualProductCustomerReducer,
  idividualProductCustomer: idividualProductCustomerReducer,
  idividualProductCustomers: idividualProductCustomersReducer,
  newIndividualProductReview: newIndividualProductReviewReducer,
  idividualProductReview: idividualProductReviewReducer,
  idividualProductReviews: idividualProductReviewsReducer,
  newBusinessProductOrder: newBusinessProductOrderReducer,
  businessProductOrder: businessProductOrderReducer,
  businessProductOrders: businessProductOrdersReducer,
  newBusinessProductCustomer: newBusinessProductCustomerReducer,
  businessProductCustomer: businessProductCustomerReducer,
  businessProductCustomers: businessProductCustomersReducer,
  newBusinessProductReview: newBusinessProductReviewReducer,
  businessProductReview: businessProductReviewReducer,
  businessProductReviews: businessProductReviewsReducer,

  campaigns: campaignsReducer,
  campaign: campaignReducer,
  newCampaign: newCampaignReducer,
  campaignDetails: campaignDetailsReducer,
  newIndividualCampaignDonor: newIndividualCampaignDonorReducer,
  individualCampaignDonor: individualCampaignDonorReducer,
  individualCampaignDonors: individualCampaignDonorsReducer,
  newIndividualCampaignReview: newIndividualCampaignReviewReducer,
  individualCampaignReview: individualCampaignReviewReducer,
  individualCampaignReviews: individualCampaignReviewsReducer,
  newBusinessCampaignDonor: newBusinessCampaignDonorReducer,
  businessCampaignDonor: businessCampaignDonorReducer,
  businessCampaignDonors: businessCampaignDonorsReducer,
  newBusinessCampaignReview: newBusinessCampaignReviewReducer,
  businessCampaignReview: businessCampaignReviewReducer,
  businessCampaignReviews: businessCampaignReviewsReducer,

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
