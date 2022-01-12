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

router.route("/logout").get(logoutBusiness);

router.route("/me").get(protectBusiness, getBusinessDetails);

router.route("/password/update").put(protectBusiness, updatePassword);

router.route("/me/update").put(protectBusiness, updateProfile);

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

module.exports = router;
