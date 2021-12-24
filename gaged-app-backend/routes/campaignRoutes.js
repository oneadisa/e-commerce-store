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
  authorizeRoles,
  protect,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getCampaigns);
router.route("/create").post(protect, CreateCampaign);
router
  .route("/:id")
  .get(getCampaignById)
  .put(protect, UpdateCampaign)
  .delete(protect, DeleteCampaign);

router
  .route("/admin/campaigns")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCampaigns);

router
  .route("/admin/campaign/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCampaignAdmin);

router
  .route("/admin/campaign/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCampaignAdmin)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), DeleteCampaign);

router.route("/admin/product/:id").get(getCampaignDetailsAdmin);

router
  .route("/create-review/business")
  .put(isAuthenticatedUser, createBusinessCampaignReview);

router
  .route("/reviews/business")
  .get(getBusinessCampaignReviews)
  .delete(isAuthenticatedUser, deleteBusinessCampaignReview);

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualCampaignReview);

router
  .route("/reviews/individual")
  .get(getIndividualCampaignReviews)
  .delete(isAuthenticatedUser, deleteIndividualCampaignReview);

router
  .route("/create-donation/business")
  .put(isAuthenticatedUser, createBusinessCampaignDonation);

router
  .route("/donations/business")
  .get(getBusinessCampaignDonations)
  .delete(isAuthenticatedUser, deleteBusinessCampaignDonation);

router
  .route("/create-donation/individual")
  .put(isAuthenticatedUser, createIndividualCampaignDonation);

router
  .route("/donations/individual")
  .get(getIndividualCampaignDonations)
  .delete(isAuthenticatedUser, deleteIndividualCampaignDonation);

module.exports = router;
