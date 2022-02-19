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
  myBusinessOrderedFromReducer,
  newBusinessOrderedFromReducer,
  businessOrderedFromReducer,
  allCampaignsInvestedReducer,
  myCampaignsInvestedReducer,
  newCampaignInvestedReducer,
  campaignsInvestedReducer,
  allCampaignsPayoutReducer,
  myCampaignsPayoutReducer,
  particularCampaignsPayoutReducer,
  newCampaignPayoutReducer,
  campaignsPayoutReducer,
  allCampaignsReviewsReducer,
  myCampaignsReviewsReducer,
  newCampaignReviewsReducer,
  campaignsReviewsReducer,
  allProductsReviewsReducer,
  myProductsReviewsReducer,
  newnewProductReviewsReducer,
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
  businessMyBusinessOrderedFromReducer,
  businessNewBusinessOrderedFromReducer,
  businessBusinessOrderedFromReducer,
  businessAllCampaignsInvestedReducer,
  businessMyCampaignsInvestedReducer,
  businessNewCampaignInvestedReducer,
  businessCampaignsInvestedReducer,
  businessAllCampaignsPayoutReducer,
  businessMyCampaignsPayoutReducer,
  businessParticularCampaignsPayoutReducer,
  businessNewCampaignPayoutReducer,
  businessCampaignsPayoutReducer,
  businessAllCampaignsReviewsReducer,
  businessMyCampaignsReviewsReducer,
  businessNewCampaignReviewsReducer,
  businessCampaignsReviewsReducer,
  businessAllProductsReviewsReducer,
  ProductReviewsReducer,
  ProductReviewReducer,
  businessAllStoreProductsReducer,
  businessMyStoreProductsReducer,
  businessNewStoreProductReducer,
  businessStoreProductsReducer,
  businessAllCampaignStartedReducer,
  businessMyCampaignStartedReducer,
  businessNewCampaignStartedReducer,
  businessCampaignStartedReducer,
  businessStoreProductCreateReducer,
  businessNewIndividualProductOrderReducer,
  businessNewProductReducer,
  businessProductReducer,
  businessIndividualProductOrdersReducer,
  businessIndividualProductOrderReducer,
  businessNewIndividualProductCustomerReducer,
  businessIndividualProductCustomerReducer,
  businessIndividualProductCustomersReducer,
  reviewsReducer,
  reviewReducer,
  newReviewReducer,
  newOrderReducer,
  OrdersReducer,
  OrderReducer,
  customerReducer,
  deleteCustomerReducer,
  customersReducer,
  businessBusinessnewProductReviewsReducer,
  businessBusinessnewProductReviewReducer,
  businessNewBusinessnewProductReviewReducer,
  businessProductDetailsReducer,
  newProductReviewsReducer,
  newProductReviewReducer,
  newIndividualSinglenewProductReviewReducer,
  allIndividualSinglenewProductReviewsReducer,
  individualSinglenewProductReviewReducer,
  campaignsReducer,
  campaignReducer,
  newCampaignReducer,
  campaignDetailsReducer,
  newIndividualCampaignDonorReducer,
  individualCampaignDonorReducer,
  individualCampaignDonorsReducer,
  newCampaignReviewReducer,
  campaignReviewReducer,
  campaignReviewsReducer,
  newDonorReducer,
  donorReducer,
  donorsReducer,
  businessCampaignReviewReducer,
  businessCampaignReviewsReducer,
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
  individualnewProductReviewsReducer,
  individualnewProductReviewReducer,
  newIndividualnewProductReviewReducer,
  newBusinessProductOrderReducer,
  businessProductOrdersReducer,
  businessProductOrderReducer,
  newBusinessProductCustomerReducer,
  businessProductCustomerReducer,
  businessProductCustomersReducer,
  businessnewProductReviewsReducer,
  businessnewProductReviewReducer,
  newBusinessnewProductReviewReducer,
  myStoreProductsListReducer,
} from "./reducers/storeProductsReducer";

import // campaignsReducer,
// campaignReducer,
// newCampaignReducer,
// campaignDetailsReducer,
// newIndividualCampaignDonorReducer,
// individualCampaignDonorReducer,
// individualCampaignDonorsReducer,
// newCampaignReviewReducer,
// campaignReviewReducer,
// campaignReviewsReducer,
// newDonorReducer,
// donorReducer,
// donorReducer,
// newCampaignReviewReducer,
// businessCampaignReviewReducer,
// businessCampaignReviewsReducer,
"./reducers/campaignReducer";

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
  particularCampaignsInvested: particularCampaignsInvestedReducer,
  allBusinessOrderedFrom: allBusinessOrderedFromReducer,
  myBusinessOrderedFrom: myBusinessOrderedFromReducer,
  newBusinessOrderedFrom: newBusinessOrderedFromReducer,
  businessOrderedFrom: businessOrderedFromReducer,
  allCampaignsInvested: allCampaignsInvestedReducer,
  myCampaignsInvested: myCampaignsInvestedReducer,
  newCampaignInvested: newCampaignInvestedReducer,
  campaignsInvested: campaignsInvestedReducer,
  allCampaignsPayout: allCampaignsPayoutReducer,
  myCampaignsPayout: myCampaignsPayoutReducer,
  particularCampaignsPayout: particularCampaignsPayoutReducer,
  newCampaignPayout: newCampaignPayoutReducer,
  campaignsPayout: campaignsPayoutReducer,
  allCampaignsReviews: allCampaignsReviewsReducer,
  myCampaignsReviews: myCampaignsReviewsReducer,
  newCampaignReviews: newCampaignReviewsReducer,
  campaignsReviews: campaignsReviewsReducer,
  allProductsReviews: allProductsReviewsReducer,
  myProductsReviews: myProductsReviewsReducer,
  newnewProductReviews: newnewProductReviewsReducer,
  productsReviews: productsReviewsReducer,

  signedUpBusinessLogin: signedUpBusinessLoginReducer,
  businessSignUp: businessSignUpReducer,
  business: businessReducer,
  businessProfile: businessProfileReducer,
  forgotBusinessPassword: forgotBusinessPasswordReducer,
  allBusinesses: allBusinessesReducer,
  businessDetails: businessDetailsReducer,
  businessParticularCampaignsInvested:
    businessParticularCampaignsInvestedReducer,
  businessAllBusinessOrderedFrom: businessAllBusinessOrderedFromReducer,
  businessMyBusinessOrderedFrom: businessMyBusinessOrderedFromReducer,
  businessNewBusinessOrderedFrom: businessNewBusinessOrderedFromReducer,
  businessBusinessOrderedFrom: businessBusinessOrderedFromReducer,
  businessAllCampaignsInvested: businessAllCampaignsInvestedReducer,
  businessMyCampaignsInvested: businessMyCampaignsInvestedReducer,
  businessNewCampaignInvested: businessNewCampaignInvestedReducer,
  businessCampaignsInvested: businessCampaignsInvestedReducer,
  businessAllCampaignsPayout: businessAllCampaignsPayoutReducer,
  businessMyCampaignsPayout: businessMyCampaignsPayoutReducer,
  businessParticularCampaignsPayout: businessParticularCampaignsPayoutReducer,
  businessNewCampaignPayout: businessNewCampaignPayoutReducer,
  businessCampaignsPayout: businessCampaignsPayoutReducer,
  businessAllCampaignsReviews: businessAllCampaignsReviewsReducer,
  businessMyCampaignsReviews: businessMyCampaignsReviewsReducer,
  businessNewCampaignReviews: businessNewCampaignReviewsReducer,
  businessCampaignsReviews: businessCampaignsReviewsReducer,
  businessAllProductsReviews: businessAllProductsReviewsReducer,
  ProductReviews: ProductReviewsReducer,
  newnewProductReview: newProductReviewsReducer,
  ProductReview: ProductReviewReducer,
  businessAllStoreProducts: businessAllStoreProductsReducer,
  businessMyStoreProducts: businessMyStoreProductsReducer,
  businessNewStoreProduct: businessNewStoreProductReducer,
  businessStoreProducts: businessStoreProductsReducer,
  businessAllCampaignStarted: businessAllCampaignStartedReducer,
  businessMyCampaignStarted: businessMyCampaignStartedReducer,
  businessNewCampaignStarted: businessNewCampaignStartedReducer,
  businessCampaignStarted: businessCampaignStartedReducer,
  businessStoreProductCreate: businessStoreProductCreateReducer,
  businessNewIndividualProductOrder: businessNewIndividualProductOrderReducer,
  businessProduct: businessProductReducer,
  businessNewProduct: businessNewProductReducer,
  businessIndividualProductOrders: businessIndividualProductOrdersReducer,
  businessIndividualProductOrder: businessIndividualProductOrderReducer,
  businessNewIndividualProductCustomer:
    businessNewIndividualProductCustomerReducer,
  businessIndividualProductCustomer: businessIndividualProductCustomerReducer,
  businessIndividualProductCustomers: businessIndividualProductCustomersReducer,
  reviews: reviewsReducer,
  review: reviewReducer,
  newReview: newReviewReducer,
  newOrder: newOrderReducer,
  Orders: OrdersReducer,
  Order: OrderReducer,
  customer: customerReducer,
  deleteCustomer: deleteCustomerReducer,
  customers: customersReducer,
  businessBusinessnewProductReviews: businessBusinessnewProductReviewsReducer,
  businessBusinessnewProductReview: businessBusinessnewProductReviewReducer,
  businessNewBusinessnewProductReview:
    businessNewBusinessnewProductReviewReducer,
  businessProductDetails: businessProductDetailsReducer,
  newProductReview: newProductReviewReducer,
  newIndividualSinglenewProductReview:
    newIndividualSinglenewProductReviewReducer,
  allIndividualSinglenewProductReviews:
    allIndividualSinglenewProductReviewsReducer,
  individualSinglenewProductReview: individualSinglenewProductReviewReducer,

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
  newIndividualnewProductReview: newIndividualnewProductReviewReducer,
  individualnewProductReview: individualnewProductReviewReducer,
  individualnewProductReviews: individualnewProductReviewsReducer,
  newBusinessProductOrder: newBusinessProductOrderReducer,
  businessProductOrder: businessProductOrderReducer,
  businessProductOrders: businessProductOrdersReducer,
  newBusinessProductCustomer: newBusinessProductCustomerReducer,
  businessProductCustomer: businessProductCustomerReducer,
  businessProductCustomers: businessProductCustomersReducer,
  newBusinessnewProductReview: newBusinessnewProductReviewReducer,
  businessnewProductReview: businessnewProductReviewReducer,
  businessnewProductReviews: businessnewProductReviewsReducer,

  campaigns: campaignsReducer,
  campaign: campaignReducer,
  newCampaign: newCampaignReducer,
  campaignDetails: campaignDetailsReducer,
  newIndividualCampaignDonor: newIndividualCampaignDonorReducer,
  individualCampaignDonor: individualCampaignDonorReducer,
  individualCampaignDonors: individualCampaignDonorsReducer,

  campaignReview: campaignReviewReducer,
  campaignReviews: campaignReviewsReducer,
  newDonor: newDonorReducer,
  donor: donorReducer,
  donors: donorsReducer,
  newCampaignReview: newCampaignReviewReducer,
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
