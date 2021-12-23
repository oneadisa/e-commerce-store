const express = require("express");
const {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  deleteStoreProduct,
  getAdminProducts,
  getProductDetails,
  createIndividualProductReview,
  updateProductAdmin,
  getIndividualProductReviews,
  deleteIndividualReview,
  createBusinessProductReview,
  getBusinessProductReviews,
  deleteBusinessReview,
  createIndividualProductCustomer,
  getIndividualProductCustomers,
  deleteIndividualProductCustomer,
  createBusinessProductCustomer,
  getBusinessProductCustomers,
  deleteBusinessCustomer,
  createIndividualProductOrder,
  getIndividualProductOrders,
  deleteIndividualProductOrder,
  createBusinessProductOrder,
  getBusinessProductOrder,
  deleteBusinessOrder,
} = require("../controllers/storeProductController");
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
  .delete(protect, deleteStoreProduct);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductAdmin)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteStoreProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
