const express = require("express");
const {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  deleteStoreProduct,
  getAdminProducts,
  getProductDetails,
  createProduct,
  createIndividualProductReview,
  updateProductAdmin,
  getIndividualProductReviews,
  deleteIndividualProductReview,
  createBusinessProductReview,
  getBusinessProductReviews,
  deleteBusinessProductReview,
  createIndividualProductCustomer,
  getIndividualProductCustomers,
  deleteIndividualProductCustomer,
  createBusinessProductCustomer,
  getBusinessProductCustomers,
  deleteBusinessProductCustomer,
  createIndividualProductOrder,
  getIndividualProductOrders,
  deleteIndividualProductOrder,
  createBusinessProductOrder,
  getBusinessProductOrder,
  deleteBusinessProductOrder,
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

router
  .route("/create-review/business")
  .put(isAuthenticatedUser, createBusinessProductReview);

router
  .route("/reviews/business")
  .get(getBusinessProductReviews)
  .delete(isAuthenticatedUser, deleteBusinessProductReview);

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualProductReview);

router
  .route("/reviews/individual")
  .get(getIndividualProductReviews)
  .delete(isAuthenticatedUser, deleteIndividualProductReview);

router
  .route("/create-customer/business")
  .put(isAuthenticatedUser, createBusinessProductCustomer);

router
  .route("/customers/business")
  .get(getBusinessProductCustomers)
  .delete(isAuthenticatedUser, deleteBusinessProductCustomer);

router
  .route("/create-customer/individual")
  .put(isAuthenticatedUser, createIndividualProductCustomer);

router
  .route("/customers/individual")
  .get(getIndividualProductCustomers)
  .delete(isAuthenticatedUser, deleteIndividualProductCustomer);

router
  .route("/create-order/business")
  .put(isAuthenticatedUser, createBusinessProductOrder);

router
  .route("/orders/business")
  .get(getBusinessProductOrder)
  .delete(isAuthenticatedUser, deleteBusinessProductOrder);

router
  .route("/create-order/individual")
  .put(isAuthenticatedUser, createIndividualProductOrder);

router
  .route("/orders/individual")
  .get(getIndividualProductOrders)
  .delete(isAuthenticatedUser, deleteIndividualProductOrder);

module.exports = router;
