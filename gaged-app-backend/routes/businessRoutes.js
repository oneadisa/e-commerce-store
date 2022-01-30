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
  deleteCampaignStarted,
  createCampaignInvested,
  getListOfCampaignsInvested,
  getParticularCampaignsInvested,
  deleteCampaignInvested,
  createBusinessInvestor,
  getBusinessInvestors,
  deleteBusinessInvestor,
  createIndividualInvestor,
  getIndividualInvestors,
  deleteIndividualInvestor,
  createBusinessOrderedFrom,
  getBusinessOrderedFrom,
  deleteBusinessOrderedFrom,
  createIndividualReview,
  getIndividualReviews,
  deleteIndividualReview,
  createBusinessReview,
  getBusinessReviews,
  deleteBusinessReview,
  createBusinessOrder,
  getBusinessOrders,
  deleteBusinessOrder,
  createBusinessCustomer,
  getBusinessCustomers,
  deleteBusinessCustomer,
  createindividualCustomer,
  getIndividualCustomers,
  deleteindividualCustomer,
  createindividualOrder,
  getindividualOrders,
  deleteindividualOrder,
  createPersonalProductReview,
  getPersonalProductReviews,
  deletePersonalProductReview,
  createPersonalCampaignReview,
  getPersonalCampaignReviews,
  deletePersonalCampaignReview,
  deleteCampaignPayout,
  getParticularCampaignPayouts,
  getListOfCampaignsPayouts,
  createCampaignPayout,
} = require("../controllers/businessController");

const {
  protectBusiness,
  isAuthenticatedUser,
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

router
  .route("/business-order-from")
  .put(protectBusiness, createBusinessOrderedFrom);

router
  .route("/business-ordered-from")
  .get(protectBusiness, getBusinessOrderedFrom)
  .delete(protectBusiness, deleteBusinessOrderedFrom);

router.route("/campaign-start").put(protectBusiness, createCampaignStarted);

router
  .route("/campaign-started")
  .get(getListOfCampaignsStarted)
  .delete(protectBusiness, deleteCampaignStarted);

router.route("/campaign-invest").put(protectBusiness, createCampaignInvested);

router
  .route("/campaign-invested")
  .get(protectBusiness, getListOfCampaignsInvested)
  .get(protectBusiness, getParticularCampaignsInvested)
  .delete(protectBusiness, deleteCampaignInvested);

router
  .route("/campaign-invested/particular/:id")
  .get(protectBusiness, getParticularCampaignsInvested);

router.route("/campaign-payout").put(protectBusiness, createCampaignPayout);

router
  .route("/campaign-paid")
  .get(protectBusiness, getListOfCampaignsPayouts)
  .delete(protectBusiness, deleteCampaignPayout);

router
  .route("/campaign-paid/particular/:id")
  .get(protectBusiness, getParticularCampaignPayouts);

router
  .route("/create-investor/business")
  .put(protectBusiness, createBusinessInvestor);

router
  .route("/investors/business")
  .get(getBusinessInvestors)
  .delete(protectBusiness, deleteBusinessInvestor);

router
  .route("/create-investor/individual")
  .put(isAuthenticatedUser, createIndividualInvestor);

router
  .route("/investors/individual")
  .get(getIndividualInvestors)
  .delete(isAuthenticatedUser, deleteIndividualInvestor);

router
  .route("/create-review/business")
  .put(protectBusiness, createBusinessReview);

router
  .route("/reviews/business")
  .get(getBusinessReviews)
  .delete(protectBusiness, deleteBusinessReview);

router
  .route("admin-individual/reviews/business")
  .delete(protectUser, authorizeRoles("admin"), deleteBusinessReview);
router
  .route("admin-business/reviews/business")
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusinessReview);

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualReview);

router
  .route("/reviews/individual")
  .get(getIndividualReviews)
  .delete(isAuthenticatedUser, deleteIndividualReview);

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

router
  .route("/create-customer/individual")
  .put(isAuthenticatedUser, createindividualCustomer);

router
  .route("/customers/individual")
  .get(getIndividualCustomers)
  .delete(isAuthenticatedUser, deleteindividualCustomer);

router
  .route("/create-order/business")
  .put(protectBusiness, createBusinessOrder);
router
  .route("/order/business")
  .get(getBusinessOrders)
  .delete(protectBusiness, deleteBusinessOrder);
router
  .route("/create-order/individual")
  .put(isAuthenticatedUser, createindividualOrder);
router
  .route("/orders/individual")
  .get(getindividualOrders)
  .delete(isAuthenticatedUser, deleteindividualOrder);

router
  .route("/profile-product-review")
  .put(protectBusiness, createPersonalProductReview);

router
  .route("/profile-product-review/edit")
  .get(protectBusiness, getPersonalProductReviews)
  .delete(protectBusiness, deletePersonalProductReview);

router
  .route("/profile-campaign-review")
  .put(protectBusiness, createPersonalCampaignReview);

router
  .route("/profile-campaign-review/edit")
  .get(protectBusiness, getPersonalCampaignReviews)
  .delete(protectBusiness, deletePersonalCampaignReview);

router.route("/admin-business/business").get(getAllBusiness);

router
  .route("/admin-business/business/:id")
  .get(protectBusiness, authorizeRoles("admin"), getSingleBusiness)
  .put(protectBusiness, authorizeRoles("admin"), updateBusinessRole)
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusiness);

router
  .route("/admin-individual/business")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllBusiness);

router
  .route("/admin-individual/business/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleBusiness)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBusinessRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBusiness);

router.route("/profile/business/:id").get(getSingleBusiness);

module.exports = router;
