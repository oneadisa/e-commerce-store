const express = require("express");
const router = express.Router();

const {
  registerBusiness,
  authBusiness,
  updateBusinessProfile,
  logoutBusiness,
  forgotPassword,
  resetPassword,
  getBusinessDetails,
  updatePassword,
  updateProfile,
  getAllBusiness,
  getSingleBusiness,
  updateBusinessRole,
  deleteBusiness,
  // getAllCampaigns,
  // getSingleCampaign,
  // UpdateCampaign,
  // DeleteCampaign,
  // createCampaignStarted,
  // getListOfCampaignsStarted,
  // getMyListOfCampaignsStarted,
  // deleteCampaignStarted,
  // createCampaignReview,
  // getCampaignReviews,
  // deleteCampaignReview,
  createBusinessCampaignReview,
  getBusinessCampaignReviews,
  deleteBusinessCampaignReview,
  // createCampaignDonation,
  // getCampaignDonations,
  // getParticularCampaignDonation,
  // deleteCampaignDonation,
  createBusinessCampaignDonation,
  getBusinessCampaignDonations,
  deleteBusinessCampaignDonation,
  createCampaignInvested,
  getListOfCampaignsInvested,
  getMyListOfCampaignsInvested,
  getParticularCampaignsInvested,
  deleteCampaignInvested,
  createInvestor,
  getMyInvestors,
  getInvestors,
  deleteInvestor,
  createIndividualInvestor,
  getMyIndividualInvestors,
  getIndividualInvestors,
  deleteIndividualInvestor,
  createBusinessOrderedFrom,
  getMyBusinessOrderedFrom,
  getBusinessOrderedFrom,
  deleteBusinessOrderedFrom,
  createReview,
  getMyReviews,
  getIndividualReviews,
  deleteReview,
  createBusinessReview,
  getMyBusinessReviews,
  getBusinessReviews,
  deleteBusinessReview,
  createOrder,
  getMyOrders,
  getBusinessOrders,
  updateOrder,
  deleteOrder,
  createBusinessCustomer,
  getMyBusinessCustomers,
  getBusinessCustomers,
  deleteBusinessCustomer,
  createindividualCustomer,
  getMyIndividualCustomers,
  getIndividualCustomers,
  deleteindividualCustomer,
  createindividualOrder,
  getMyIndividualOrders,
  getIndividualOrders,
  updateIndividualOrder,
  deleteindividualOrder,
  createPersonalnewProductReview,
  getMyPersonalnewProductReviews,
  getPersonalnewProductReviews,
  deletePersonalnewProductReview,
  createPersonalCampaignReview,
  getMyPersonalCampaignReviews,
  getPersonalCampaignReviews,
  deletePersonalCampaignReview,
  deleteCampaignPayout,
  getParticularCampaignPayouts,
  getMyListOfCampaignsPayouts,
  getListOfCampaignsPayouts,
  createCampaignPayout,
  createStoreProduct,
  getSingleProduct,
  getMyListOfStoreProducts,
  getListOfStoreProducts,
  deleteBusinessStoreProduct,
  UpdateBusinessStoreProduct,
  createReviewProduct,
  getReviewsProduct,
  deleteReviewProduct,
  createindividualCustomerProduct,
  getIndividualCustomersProduct,
  deleteindividualCustomerProduct,
  createindividualOrderProduct,
  updateIndividualOrderProduct,
  getIndividualOrdersProduct,
  deleteindividualOrderProduct,
  createBusinessReviewProduct,
  getBusinessReviewsProduct,
  deleteBusinessReviewProduct,
  createBusinessCustomerProduct,
  getBusinessCustomersProduct,
  deleteBusinessCustomerProduct,
  createBusinessOrderProduct,
  updateBusinessOrderProduct,
  getBusinessOrdersProduct,
  deleteBusinessOrderProduct,
} = require("../controllers/businessController");

const {
  protectBusiness,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

router.route("/signUp/2/business").post(registerBusiness);
router.route("/login").post(authBusiness);
router.route("/profile/business").post(protectBusiness, updateBusinessProfile);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/business/all").get(getAllBusiness);

router.route("/logout").get(logoutBusiness);

router.route("/me").get(protectBusiness, getBusinessDetails);

router.route("/password/update").put(protectBusiness, updatePassword);

router.route("/me/update").put(protectBusiness, updateProfile);

router.route("/new-product").put(protectBusiness, createStoreProduct);

router.route("/products").get(getListOfStoreProducts);

router.route("/products/me").get(protectBusiness, getMyListOfStoreProducts);

router
  .route("/business-order-from")
  .put(protectBusiness, createBusinessOrderedFrom);

router
  .route("/business-ordered-from")
  .get(protectBusiness, getBusinessOrderedFrom)
  .delete(protectBusiness, deleteBusinessOrderedFrom);

router.route("/business-ordered-from/me").get(getMyBusinessOrderedFrom);

// router.route("/campaigns") getAllCampaigns;
//
// router.route("/campaign-start").put(protectBusiness, createCampaignStarted);
//
// router
// .route("/campaign-started")
// .get(getListOfCampaignsStarted)
// .delete(protectBusiness, deleteCampaignStarted);
//
router
  .route("/create-review/business")
  .put(protectBusiness, createBusinessCampaignReview);

router
  .route("/reviews/business")
  .get(getBusinessCampaignReviews)
  .delete(protectBusiness, deleteBusinessCampaignReview);

// router.route("/create-review").put(createCampaignReview);
//
// router
// .route("/reviews/")
// .get(getCampaignReviews)
// .delete(protectBusiness, deleteCampaignReview);
//
router
  .route("/create-donation/business")
  .put(protectBusiness, createBusinessCampaignDonation);

router
  .route("/donations/business")
  .get(getBusinessCampaignDonations)
  .delete(protectBusiness, deleteBusinessCampaignDonation);

// router
// .route("/create-donation/individual")
// .put(protectBusiness, createCampaignDonation);
//
// router
// .route("/donations/")
// .get(getCampaignDonations)
// .delete(protectBusiness, deleteCampaignDonation);
//
// router
// .route("donations/one")
// .get(protectBusiness, getParticularCampaignDonation);
//
// router
// .route("/campaign-started/me")
// .get(protectBusiness, getMyListOfCampaignsStarted);

router.route("/campaign-invest").put(protectBusiness, createCampaignInvested);

router
  .route("/campaign-invested")
  .get(protectBusiness, getListOfCampaignsInvested)
  .get(protectBusiness, getParticularCampaignsInvested)
  .delete(protectBusiness, deleteCampaignInvested);

router
  .route("/campaign-invested/me")
  .get(protectBusiness, getMyListOfCampaignsInvested);

router
  .route("/campaign-invested/particular/id/:id")
  .get(protectBusiness, getParticularCampaignsInvested);

router.route("/campaign-payout").put(protectBusiness, createCampaignPayout);

router
  .route("/campaign-paid")
  .get(protectBusiness, getListOfCampaignsPayouts)
  .delete(protectBusiness, deleteCampaignPayout);

router.route("/campaign-paid/me").get(getMyListOfCampaignsPayouts);
router
  .route("/campaign-paid/particular/id/:id")
  .get(protectBusiness, getParticularCampaignPayouts);

router.route("/create-investor").put(protectBusiness, createInvestor);

router
  .route("/investors")
  .get(getInvestors)
  .delete(protectBusiness, deleteInvestor);

router.route("/investors/me").get(protectBusiness, getMyInvestors);

router
  .route("/create-investor/individual")
  .put(protectBusiness, createIndividualInvestor);

router
  .route("/investors/individual")
  .get(getIndividualInvestors)
  .delete(protectBusiness, deleteIndividualInvestor);

router
  .route("/investors/individual/me")
  .get(protectBusiness, getMyIndividualInvestors);

router
  .route("/create-review/business")
  .put(protectBusiness, createBusinessReview);

router
  .route("/reviews/business")
  .get(getBusinessReviews)
  .delete(protectBusiness, deleteBusinessReview);

router.route("/reviews/business/me").get(protectBusiness, getMyBusinessReviews);

router
  .route("admin-individual/reviews/business")
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusinessReview);
router
  .route("admin-business/reviews/business")
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusinessReview);

router.route("/create-review").put(protectBusiness, createReview);

router
  .route("/reviews")
  .get(getIndividualReviews)
  .delete(protectBusiness, deleteReview);

router.route("/reviews/me").get(protectBusiness, getMyReviews);

router
  .route("admin-individual/reviews")
  .delete(protectBusiness, authorizeRoles("admin"), deleteReview);

router
  .route("admin-business/reviews")
  .delete(protectBusiness, authorizeRoles("admin"), deleteReview);

router
  .route("/create-customer/business")
  .put(protectBusiness, createBusinessCustomer);

router
  .route("/customer/business")
  .get(getBusinessCustomers)
  .delete(protectBusiness, deleteBusinessCustomer);

router.route("/customer/business/me").get(getMyBusinessCustomers);

router
  .route("/create-customer/individual")
  .put(protectBusiness, createindividualCustomer);

router
  .route("/customers/individual")
  .get(getIndividualCustomers)
  .delete(protectBusiness, deleteindividualCustomer);

router.route("/customer/individual/me").get(getMyIndividualCustomers);

router.route("/create-order").put(protectBusiness, createOrder);
router
  .route("/orders")
  .get(protectBusiness, getMyOrders)
  .delete(protectBusiness, deleteOrder)
  .put(protectBusiness, updateOrder);

router.route("/orders/id/:id").put(protectBusiness, updateOrder);

router.route("/orders/business/:id").delete(protectBusiness, deleteOrder);

router.route("/orders/me").get(getMyOrders);

router
  .route("/create-order/individual")
  .put(protectBusiness, createindividualOrder);
router
  .route("/orders/individual")
  .get(protectBusiness, getIndividualOrders)
  .delete(protectBusiness, deleteindividualOrder)
  .put(protectBusiness, updateIndividualOrder);

router
  .route("/orders/individual/id/:id")
  .put(protectBusiness, updateIndividualOrder);

router.route("/orders/individual/me").get(getMyIndividualOrders);

router
  .route("/profile-product-review")
  .put(protectBusiness, createPersonalnewProductReview);

router
  .route("/profile-product-review/edit")
  .get(protectBusiness, getPersonalnewProductReviews)
  .delete(protectBusiness, deletePersonalnewProductReview);

router
  .route("/profile-product-review/edit/me")
  .get(getMyPersonalnewProductReviews);

router
  .route("/profile-campaign-review")
  .put(protectBusiness, createPersonalCampaignReview);

router
  .route("/profile-campaign-review/edit")
  .get(protectBusiness, getPersonalCampaignReviews)
  .delete(protectBusiness, deletePersonalCampaignReview);

router
  .route("/profile-campaign-review/edit/me")
  .get(getMyPersonalCampaignReviews);

router.route("/admin-business/business").get(getAllBusiness);

router
  .route("/admin-business/business/id/:id")
  .get(protectBusiness, authorizeRoles("admin"), getSingleBusiness)
  .put(protectBusiness, authorizeRoles("admin"), updateBusinessRole)
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusiness);

router
  .route("/admin-individual/business")
  .get(protectBusiness, authorizeRoles("admin"), getAllBusiness);

router
  .route("/admin-individual/business/id/:id")
  .get(protectBusiness, authorizeRoles("admin"), getSingleBusiness)
  .put(protectBusiness, authorizeRoles("admin"), updateBusinessRole)
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusiness);

router.route("/profile/business/id/:id").get(getSingleBusiness);
router
  .route("/products/business/id/:id")
  .get(getSingleProduct)
  .put(UpdateBusinessStoreProduct)
  .delete(protectBusiness, deleteBusinessStoreProduct);
// router
// .route("/campaigns/business/id/:id")
// .get(getSingleCampaign)
// .put(protectBusiness, UpdateCampaign)
// .delete(protectBusiness, DeleteCampaign);

router.route("/products/review").put(protectBusiness, createReviewProduct);

router
  .route("products/reviews/")
  .get(getReviewsProduct)
  .delete(protectBusiness, deleteReviewProduct);

router
  .route("products/customer/individual")
  .put(protectBusiness, createindividualCustomerProduct);

router
  .route("products/customers/individual")
  .get(getIndividualCustomersProduct)
  .delete(protectBusiness, deleteindividualCustomerProduct);

router
  .route("products/order/individual")
  .put(protectBusiness, createindividualOrderProduct);
router
  .route("products/orders/individual")
  .get(getIndividualOrdersProduct)
  .delete(protectBusiness, deleteindividualOrderProduct);

router
  .route("products/review/business")
  .put(protectBusiness, createBusinessReviewProduct);

router
  .route("products/reviews/business")
  .get(getBusinessReviewsProduct)
  .delete(protectBusiness, deleteBusinessReviewProduct);

router
  .route("products/customer/business")
  .put(protectBusiness, createBusinessCustomerProduct);

router
  .route("products/customers/business")
  .get(getBusinessCustomersProduct)
  .delete(protectBusiness, deleteBusinessCustomerProduct);

router
  .route("products/order/business")
  .put(protectBusiness, createBusinessOrderProduct);
router
  .route("products/orders/business")
  .get(getIndividualOrdersProduct)
  .delete(protectBusiness, deleteBusinessOrderProduct);

module.exports = router;
