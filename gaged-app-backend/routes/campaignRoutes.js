const express = require("express");
const {
  getMyCampaigns,
  getAllCampaigns,
  CreateCampaign,
  getCampaignById,
  UpdateCampaign,
  DeleteCampaign,
  getCampaignDetails,
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
  protectUser,
  authorizeRoles,
  protectBusiness,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/me").get(getMyCampaigns);
router.route("/create").post(protectBusiness, CreateCampaign);
router
  .route("campaign/:id")
  .get(getCampaignById)
  .put(protectBusiness, UpdateCampaign)
  .delete(protectBusiness, DeleteCampaign);

router.route("/campaign/:id").get(getCampaignDetails);

router.route("/all").get(getAllCampaigns);

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

router.route("/admin-individual/campaign/:id").get(getCampaignDetailsAdmin);

router
  .route("/admin-business/campaigns")
  .get(protectBusiness, authorizeRoles("admin"), getAdminCampaigns);

router
  .route("/admin-business/campaign/new")
  .post(protectBusiness, authorizeRoles("admin"), createCampaignAdmin);

router
  .route("/admin-business/campaign/:id")
  .put(protectBusiness, authorizeRoles("admin"), updateCampaignAdmin)
  .delete(protectBusiness, authorizeRoles("admin"), DeleteCampaign);

router.route("/admin-business/campaign/:id").get(getCampaignDetailsAdmin);

router
  .route("/create-review/business")
  .put(protectBusiness, createBusinessCampaignReview);

router
  .route("/reviews/business")
  .get(getBusinessCampaignReviews)
  .delete(protectBusiness, deleteBusinessCampaignReview);

router
  .route("admin-individual/reviews/business")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteBusinessCampaignReview
  );

router
  .route("admin-business/reviews/business")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteBusinessCampaignReview
  );

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualCampaignReview);

router
  .route("/reviews/individual")
  .get(getIndividualCampaignReviews)
  .delete(isAuthenticatedUser, deleteIndividualCampaignReview);

router
  .route("admin-individual/reviews/individual")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteIndividualCampaignReview
  );

router
  .route("admin-business/reviews/individual")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteIndividualCampaignReview
  );

router
  .route("/create-donation/business")
  .put(protectBusiness, createBusinessCampaignDonation);

router
  .route("/donations/business")
  .get(getBusinessCampaignDonations)
  .delete(protectBusiness, deleteBusinessCampaignDonation);

router
  .route("/create-donation/individual")
  .put(isAuthenticatedUser, createIndividualCampaignDonation);

router
  .route("/donations/individual")
  .get(getIndividualCampaignDonations)
  .delete(isAuthenticatedUser, deleteIndividualCampaignDonation);

module.exports = router;
