const express = require("express");
const {
  getCampaigns,
  CreateCampaign,
  getCampaignById,
  UpdateCampaign,
  DeleteCampaign,
  createIndividualCampaignReview,
  getIndividualCampaignReviews,
  deleteIndividualCampaignReview,
  createBusinessCampaignReview,
  getBusinessCampaignReviews,
  deleteBusinessCampaignReview,
  createIndividualCampaignDonation,
  getIndividualCampaignDonations,
  deleteIndividualCampaignDonation,
  createBusinessCampaignDonation,
  getBusinessCampaignDonations,
  deleteBusinessCampaignDonation,
  createCampaignAdmin,
  getAdminCampaigns,
  getCampaignDetailsAdmin,
  updateCampaignAdmin,
} = require("../controllers/campaignController");
const {
  isAuthenticatedUser,
  isAuthenticatedBusiness,
  authorizeRoles,
  protectBusinesss,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getCampaigns);
router.route("/create").post(protectBusinesss, CreateCampaign);
router
  .route("/:id")
  .get(getCampaignById)
  .put(protectBusiness, UpdateCampaign)
  .delete(protectBusiness, DeleteCampaign);

router
  .route("/admin-individual/campaigns")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCampaigns);

router
  .route("/admin-individual/campaign/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCampaignAdmin);

router
  .route("/admin-individual/campaign/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCampaignAdmin)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteCampaign);

router.route("/admin-individual/product/:id").get(getCampaignDetailsAdmin);

router
  .route("/admin-business/campaigns")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getAdminCampaigns);

router
  .route("/admin-business/campaign/new")
  .post(isAuthenticatedBusiness, authorizeRoles("admin"), createCampaignAdmin);

router
  .route("/admin-business/campaign/:id")
  .put(isAuthenticatedBusiness, authorizeRoles("admin"), updateCampaignAdmin)
  .delete(isAuthenticatedBusiness, authorizeRoles("admin"), DeleteCampaign);

router.route("/admin-business/product/:id").get(getCampaignDetailsAdmin);

router
  .route("/create-review/business")
  .put(isAuthenticatedBusiness, createBusinessCampaignReview);

router
  .route("/reviews/business")
  .get(getBusinessCampaignReviews)
  .delete(isAuthenticatedBusiness, deleteBusinessCampaignReview);

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualCampaignReview);

router
  .route("/reviews/individual")
  .get(getIndividualCampaignReviews)
  .delete(isAuthenticatedUser, deleteIndividualCampaignReview);

router
  .route("/create-donation/business")
  .put(isAuthenticatedBusiness, createBusinessCampaignDonation);

router
  .route("/donations/business")
  .get(getBusinessCampaignDonations)
  .delete(isAuthenticatedBusiness, deleteBusinessCampaignDonation);

router
  .route("/create-donation/individual")
  .put(isAuthenticatedUser, createIndividualCampaignDonation);

router
  .route("/donations/individual")
  .get(getIndividualCampaignDonations)
  .delete(isAuthenticatedUser, deleteIndividualCampaignDonation);

module.exports = router;
