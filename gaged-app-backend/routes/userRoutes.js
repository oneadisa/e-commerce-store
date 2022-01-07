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
} = require("../controllers/userController");
const {
  protectUser,
  isAuthenticatedUser,
  isAuthenticatedBusiness,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

router.route("/signup/2/individual").post(registerUser);
router.route("/loginUser").post(authUser);
router.route("/profile/user").post(protectUser, updateUserProfile);

router.route("/password/forgot").post(forgotUserPassword);

router.route("/password/reset/:token").put(resetUserPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);

router.route("/me/update").put(isAuthenticatedUser, updateUserProfileAdmin);

router
  .route("/admin-individual/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin-individual/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

router
  .route("/admin-business/users")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getAllUser);

router
  .route("/admin-business/user/:id")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedBusiness, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedBusiness, authorizeRoles("admin"), deleteUser);

module.exports = router;
