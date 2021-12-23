const express = require("express");
const {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  DeleteStoreProduct,
} = require("../controllers/campaignController");
const {
  isAuthenticatedUser,
  authorizeRoles,
  protect,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getStoreProducts);
router.route("/create").post(protect, CreateStoreProduct);
router
  .route("/:id")
  .get(getStoreProductById)
  .put(protect, UpdateStoreProduct)
  .delete(protect, DeleteStoreProduct);

module.exports = router;
