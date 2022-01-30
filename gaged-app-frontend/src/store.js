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
  particularCampaignsInvestedReducer,
  allBusinessOrderedFromReducer,
  newBusinessOrderedFromReducer,
  businessOrderedFromReducer,
  allCampaignsInvestedReducer,
  newCampaignInvestedReducer,
  campaignsInvestedReducer,
  allCampaignsPayoutReducer,
  particularCampaignsPayoutReducer,
  newCampaignPayoutReducer,
  campaignsPayoutReducer,
  allCampaignsReviewsReducer,
  newCampaignReviewsReducer,
  campaignsReviewsReducer,
  allProductsReviewsReducer,
  newProductReviewsReducer,
  productsReviewsReducer,

} from "./reducers/userReducers";
import {
  businessSignUpReducer,
  signedUpBusinessLoginReducer,
  businessReducer,
  businessProfileReducer,
  forgotBusinessPasswordReducer,
  allBusinessesReducer,
  businessDetailsReducer,
  businessParticularCampaignsInvestedReducer,
  businessAllBusinessOrderedFromReducer,
  businessNewBusinessOrderedFromReducer,
  businessBusinessOrderedFromReducer,
  businessAllCampaignsInvestedReducer,
  businessNewCampaignInvestedReducer,
  businessCampaignsInvestedReducer,
  businessAllCampaignsPayoutReducer,
  businessParticularCampaignsPayoutReducer,
  businessNewCampaignPayoutReducer,
  businessCampaignsPayoutReducer,
  businessAllCampaignsReviewsReducer,
  businessNewCampaignReviewsReducer,
  businessCampaignsReviewsReducer,
  businessAllProductsReviewsReducer,
  businessNewProductReviewsReducer,
  businessProductsReviewsReducer,
  businessAllStoreProductsReducer,
  businessNewStoreProductReducer,
  businessStoreProductsReducer,
  businessAllCampaignStartedReducer,
  businessNewCampaignStartedReducer,
  businessCampaignStartedReducer,

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
  individualProductOrdersReducer,
  individualProductOrderReducer,
  newIndividualProductCustomerReducer,
  individualProductCustomerReducer,
  individualProductCustomersReducer,
  individualProductReviewsReducer,
  individualProductReviewReducer,
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
  myStoreProductsListReducer,
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
  allIndividualOrdersReducer,
  myIndividualOrdersReducer,
  newIndividualOrderReducer,
  individualOrderDetailsReducer,
  updateIndividualOrderReducer,
} from "./reducers/individualOrderReducer";

import {
  allBusinessOrdersReducer,
  myBusinessOrdersReducer,
  newBusinessOrderReducer,
  businessOrderDetailsReducer,
  updateBusinessOrderReducer,
} from "./reducers/businessOrderReducer";

const reducer = combineReducers({
  //this will contain our reducers
  signedUpUserLogin: signedUpUserLoginReducer,
  userSignUp: userSignUpReducer,
  user: userReducer,
  userProifle: userProfileReducer,
  forgotUserPassword: forgotUserPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  particularCampaignsInvested:particularCampaignsInvestedReducer,
  allBusinessOrderedFrom:allBusinessOrderedFromReducer,
  newBusinessOrderedFrom:newBusinessOrderedFromReducer,
  businessOrderedFrom:businessOrderedFromReducer,
  allCampaignsInvested:allCampaignsInvestedReducer,
  newCampaignInvested:newCampaignInvestedReducer,
  campaignsInvested:campaignsInvestedReducer,
  allCampaignsPayout:allCampaignsPayoutReducer,
  particularCampaignsPayout:particularCampaignsPayoutReducer,
  newCampaignPayout:newCampaignPayoutReducer,
  campaignsPayout:campaignsPayoutReducer,
  allCampaignsReviews:allCampaignsReviewsReducer,
  newCampaignReviews:newCampaignReviewsReducer,
  campaignsReviews:campaignsReviewsReducer,
  allProductsReviews:allProductsReviewsReducer,
  newProductReviews:newProductReviewsReducer,
  productsReviews:productsReviewsReducer,

  signedUpBusinessLogin: signedUpBusinessLoginReducer,
  businessSignUp: businessSignUpReducer,
  business: businessReducer,
  businessProfile: businessProfileReducer,
  forgotBusinessPassword: forgotBusinessPasswordReducer,
  allBusinesses: allBusinessesReducer,
  businessDetails: businessDetailsReducer,
  businessParticularCampaignsInvested: businessParticularCampaignsInvestedReducer,
  businessAllBusinessOrderedFrom:businessAllBusinessOrderedFromReducer,
  businessNewBusinessOrderedFrom:businessNewBusinessOrderedFromReducer,
  businessBusinessOrderedFrom:businessBusinessOrderedFromReducer,
  businessAllCampaignsInvested:businessAllCampaignsInvestedReducer,
  businessNewCampaignInvested:businessNewCampaignInvestedReducer,
  businessCampaignsInvested:businessCampaignsInvestedReducer,
  businessAllCampaignsPayout:businessAllCampaignsPayoutReducer,
  businessParticularCampaignsPayout:businessParticularCampaignsPayoutReducer,
  businessNewCampaignPayout:businessNewCampaignPayoutReducer,
  businessCampaignsPayout:businessCampaignsPayoutReducer,
  businessAllCampaignsReviews:businessAllCampaignsReviewsReducer,
  businessNewCampaignReviews:businessNewCampaignReviewsReducer,
  businessCampaignsReviews:businessCampaignsReviewsReducer,
  businessAllProductsReviews:businessAllProductsReviewsReducer,
  businessNewProductReviews:businessNewProductReviewsReducer,
  businessProductsReviews:businessProductsReviewsReducer,
  businessAllStoreProducts:businessAllStoreProductsReducer,
  businessNewStoreProduct:businessNewStoreProductReducer,
  businessStoreProducts:businessStoreProductsReducer,
  businessAllCampaignStarted:businessAllCampaignStartedReducer,
  businessNewCampaignStarted:businessNewCampaignStartedReducer,
  businessCampaignStarted:businessCampaignStartedReducer,

  setUpStore: setUpStoreReducer,
  storeProductsList: storeProductsListReducer,
  myStoreProductsList: myStoreProductsListReducer,
  storeProductCreate: storeProductCreateReducer,
  storeProductDelete: storeProductDeleteReducer,
  storeProductUpdate: storeProductUpdateReducer,
  products: productsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  productDetails: productDetailsReducer,
  newIndividualProductOrder: newIndividualProductOrderReducer,
  individualProductOrder: individualProductOrderReducer,
  individualProductOrders: individualProductOrdersReducer,
  newIndividualProductCustomer: newIndividualProductCustomerReducer,
  individualProductCustomer: individualProductCustomerReducer,
  individualProductCustomers: individualProductCustomersReducer,
  newIndividualProductReview: newIndividualProductReviewReducer,
  individualProductReview: individualProductReviewReducer,
  individualProductReviews: individualProductReviewsReducer,
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

  allIndividualOrders: allIndividualOrdersReducer,
  updateIndividualOrder: updateIndividualOrderReducer,
  newIndividualOrder: newIndividualOrderReducer,
  myIndividualOrders: myIndividualOrdersReducer,
  individualOrderDetails: individualOrderDetailsReducer,

  allBusinessOrders: allBusinessOrdersReducer,
  updateBusinessOrder: updateBusinessOrderReducer,
  newBusinessOrder: newBusinessOrderReducer,
  myBusinessOrders: myBusinessOrdersReducer,
  businessOrderDetails: businessOrderDetailsReducer,

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
