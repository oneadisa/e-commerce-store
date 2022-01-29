const express = require("express");
const router = express.Router();
// const signUpTemplateCopy = require('../models/signUpModels')
// const signUpBusinessTemplateCopy = require('../models/signUpBusinessModels')
// const bcrypt = require('bcrypt')
const {
  registerUser,
  authUser,
  updateUserProfile,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfileAdmin,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  individualCreateBusinessOrderedFrom,
  getIndividualBusinessOrderedFrom,
  deleteIndividualBusinessOrderedFrom,
  createIndividualCampaignInvested,
  getListOfIndividualCampaignsInvested,
  deleteIndividualCampaignInvested,
  createIndividualPersonalProductReview,
  getIndividualPersonalProductReviews,
  deleteIndividualPersonalProductReview,
  createIndividualPersonalCampaignReview,
  getIndividualPersonalCampaignReviews,
  deleteIndividualPersonalCampaignReview,
  deleteIndividualCampaignPayout,
  getParticularIndividualCampaignPayouts,
  getListOfIndividualCampaignsPayouts,
  createIndividualCampaignPayout,
} = require("../controllers/userController");
const {
  protectUser,
  protectBusiness,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

router.route("/signup/2/individual").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile/user").post(protectUser, updateUserProfile);

router.route("/password/forgot").post(forgotUserPassword);

router.route("/password/reset/:token").put(resetUserPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(protectUser, getUserDetails);

router.route("/password/update").put(protectUser, updateUserPassword);

router.route("/me/update").put(protectUser, updateUserProfileAdmin);

router
  .route("/business-order-from")
  .put(protectBusiness, individualCreateBusinessOrderedFrom);

router
  .route("/business-ordered-from")
  .get(protectBusiness, getIndividualBusinessOrderedFrom)
  .delete(protectBusiness, deleteIndividualBusinessOrderedFrom);

router
  .route("/campaign-invest")
  .put(protectBusiness, createIndividualCampaignInvested);

router
  .route("/campaign-invested")
  .get(protectBusiness, getListOfIndividualCampaignsInvested)
  .delete(protectBusiness, deleteIndividualCampaignInvested);

router
  .route("/campaign-payout")
  .put(protectBusiness, createIndividualCampaignPayout);

router
  .route("/campaign-paid")
  .get(protectBusiness, getListOfIndividualCampaignsPayouts)
  .delete(protectBusiness, deleteIndividualCampaignPayout);

router
  .route("/campaign-paid/particular")
  .get(protectBusiness, getParticularIndividualCampaignPayouts);

router
  .route("/profile-product-review")
  .put(protectBusiness, createIndividualPersonalProductReview);

router
  .route("/profile-product-review/edit")
  .get(protectBusiness, getIndividualPersonalProductReviews)
  .delete(protectBusiness, deleteIndividualPersonalProductReview);

router
  .route("/profile-campaign-review")
  .put(protectBusiness, createIndividualPersonalCampaignReview);

router
  .route("/profile-campaign-review/edit")
  .get(protectBusiness, getIndividualPersonalCampaignReviews)
  .delete(protectBusiness, deleteIndividualPersonalCampaignReview);

router
  .route("/admin-individual/users")
  .get(protectUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin-individual/user/:id")
  .get(protectUser, authorizeRoles("admin"), getSingleUser)
  .put(protectUser, authorizeRoles("admin"), updateUserRole)
  .delete(protectUser, authorizeRoles("admin"), deleteUser);

router
  .route("/admin-business/users")
  .get(protectBusiness, authorizeRoles("admin"), getAllUser);

router
  .route("/admin-business/user/:id")
  .get(protectBusiness, authorizeRoles("admin"), getSingleUser)
  .put(protectBusiness, authorizeRoles("admin"), updateUserRole)
  .delete(protectBusiness, authorizeRoles("admin"), deleteUser);

module.exports = router;
