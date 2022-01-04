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
  isAuthenticatedBusiness,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

router.route("/signUp/2/business").post(registerBusiness);
router.route("/loginBusiness").post(authBusiness);
router.route("/profile/business").post(protectBusiness, updateBusinessProfile);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutBusiness);

router.route("/me").get(isAuthenticatedBusiness, getBusinessDetails);

router.route("/password/update").put(isAuthenticatedBusiness, updatePassword);

router.route("/me/update").put(isAuthenticatedBusiness, updateProfile);

router
  .route("/admin-business/business")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getAllBusiness);

router
  .route("/admin-business/business/:id")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getSingleBusiness)
  .put(isAuthenticatedBusiness, authorizeRoles("admin"), updateBusinessRole)
  .delete(isAuthenticatedBusiness, authorizeRoles("admin"), deleteBusiness);

router
  .route("/admin-individual/business")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllBusiness);

router
  .route("/admin-individual/business/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleBusiness)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBusinessRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBusiness);
