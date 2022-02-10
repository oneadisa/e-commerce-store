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
  createCampaignStarted,
  getListOfCampaignsStarted,
  getMyListOfCampaignsStarted,
  deleteCampaignStarted,
  createCampaignInvested,
  getListOfCampaignsInvested,
  getMyListOfCampaignsInvested,
  getParticularCampaignsInvested,
  deleteCampaignInvested,
  createBusinessInvestor,
  getMyBusinessInvestors,
  getBusinessInvestors,
  deleteBusinessInvestor,
  createIndividualInvestor,
  getMyIndividualInvestors,
  getIndividualInvestors,
  deleteIndividualInvestor,
  createBusinessOrderedFrom,
  getMyBusinessOrderedFrom,
  getBusinessOrderedFrom,
  deleteBusinessOrderedFrom,
  createIndividualReview,
  getMyIndividualReviews,
  getIndividualReviews,
  deleteIndividualReview,
  createBusinessReview,
  getMyBusinessReviews,
  getBusinessReviews,
  deleteBusinessReview,
  createBusinessOrder,
  getMyBusinessOrders,
  getBusinessOrders,
  deleteBusinessOrder,
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
  deleteindividualOrder,
  createPersonalProductReview,
  getMyPersonalProductReviews,
  getPersonalProductReviews,
  deletePersonalProductReview,
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
  getMyListOfStoreProducts,
  getListOfStoreProducts,
  deleteBusinessStoreProduct,
  updateBusinessOrder,
  updateIndividualOrder,
  UpdateBusinessStoreProduct,

  createIndividualReviewProduct,
  getIndividualReviewsProduct,
  deleteIndividualReviewProduct,
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

  getSingleProduct,
} = require("../controllers/businessController");

const {
  protectBusiness,

  authorizeRoles,
  protectUser,
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

router
  .route("/products")
  .get(getListOfStoreProducts)
  .delete(protectBusiness, deleteBusinessStoreProduct);

router.route("/products/me").get(getMyListOfStoreProducts);
router.route("products/me").put(UpdateBusinessStoreProduct);

router
  .route("/business-order-from")
  .put(protectBusiness, createBusinessOrderedFrom);

router
  .route("/business-ordered-from")
  .get(protectBusiness, getBusinessOrderedFrom)
  .delete(protectBusiness, deleteBusinessOrderedFrom);

router.route("/business-ordered-from/me").get(getMyBusinessOrderedFrom);

router.route("/campaign-start").put(protectBusiness, createCampaignStarted);

router
  .route("/campaign-started")
  .get(getListOfCampaignsStarted)
  .delete(protectBusiness, deleteCampaignStarted);

router
  .route("/campaign-started/me")
  .get(protectBusiness, getMyListOfCampaignsStarted);

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

router
  .route("/create-investor/business")
  .put(protectBusiness, createBusinessInvestor);

router
  .route("/investors/business")
  .get(getBusinessInvestors)
  .delete(protectBusiness, deleteBusinessInvestor);

router
  .route("/investors/business/me")
  .get(protectBusiness, getMyBusinessInvestors);

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
  .delete(protectUser, authorizeRoles("admin"), deleteBusinessReview);
router
  .route("admin-business/reviews/business")
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusinessReview);

router
  .route("/create-review/individual")
  .put(protectBusiness, createIndividualReview);

router
  .route("/reviews/individual")
  .get(getIndividualReviews)
  .delete(protectBusiness, deleteIndividualReview);

router
  .route("/reviews/individual/me")
  .get(protectBusiness, getMyIndividualReviews);

router
  .route("admin-individual/reviews/individual")
  .delete(protectUser, authorizeRoles("admin"), deleteIndividualReview);

router
  .route("admin-business/reviews/individual")
  .delete(protectBusiness, authorizeRoles("admin"), deleteIndividualReview);

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

router
  .route("/create-order/business")
  .put(protectBusiness, createBusinessOrder);
router
  .route("/orders/business")
  .get(protectBusiness, getBusinessOrders)
  .delete(protectBusiness, deleteBusinessOrder)
  .put(protectBusiness, updateBusinessOrder);

router
  .route("/orders/business/id/:id")
  .put(protectBusiness, updateBusinessOrder);

router
  .route("/orders/business/id")
  .delete(protectBusiness, deleteBusinessOrder);

router.route("/orders/business/me").get(getMyBusinessOrders);

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
  .put(protectBusiness, createPersonalProductReview);

router
  .route("/profile-product-review/edit")
  .get(protectBusiness, getPersonalProductReviews)
  .delete(protectBusiness, deletePersonalProductReview);

router
  .route("/profile-product-review/edit/me")
  .get(getMyPersonalProductReviews);

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
router.route("/products/business/id/:id").get(getSingleProduct);

router
  .route("products/review/individual")
  .put(protectBusiness, createIndividualReviewProduct);

router
  .route("products/reviews/individual")
  .get(getIndividualReviewsProduct)
  .delete(protectBusiness, deleteIndividualReviewProduct);

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
