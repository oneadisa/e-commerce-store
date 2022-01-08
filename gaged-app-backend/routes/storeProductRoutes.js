const express = require("express");
const {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  deleteStoreProduct,
  deleteStoreProductAdmin,
  getAdminProducts,
  getProductDetails,
  createProductAdmin,
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
  isAuthenticatedBusiness,
  authorizeRoles,
  protectBusiness,
  protectUser,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getStoreProducts);
router.route("/create").post(protectBusiness, CreateStoreProduct);
router
  .route("/:id")
  .get(getStoreProductById)
  .put(protectBusiness, UpdateStoreProduct)
  .delete(protectBusiness, deleteStoreProduct);

router
  .route("/admin-individual/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin-individual/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProductAdmin);

router
  .route("/admin-individual/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductAdmin)
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    deleteStoreProductAdmin
  );

router
  .route("/admin-business/products")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin-business/product/new")
  .post(isAuthenticatedBusiness, authorizeRoles("admin"), createProductAdmin);

router
  .route("/admin-business/product/:id")
  .put(isAuthenticatedBusiness, authorizeRoles("admin"), updateProductAdmin)
  .delete(
    isAuthenticatedBusiness,
    authorizeRoles("admin"),
    deleteStoreProductAdmin
  );

router.route("/product/:id").get(getProductDetails);

router
  .route("/create-review/business")
  .put(isAuthenticatedBusiness, createBusinessProductReview);

router
  .route("/reviews/business")
  .get(getBusinessProductReviews)
  .delete(isAuthenticatedBusiness, deleteBusinessProductReview);

router
  .route("admin-individual/reviews/business")
  .delete(
    isAuthenticatedBusiness,
    authorizeRoles("admin"),
    deleteBusinessProductReview
  );

router
  .route("admin-business/reviews/business")
  .delete(
    isAuthenticatedBusiness,
    authorizeRoles("admin"),
    deleteBusinessProductReview
  );

router
  .route("/create-review/individual")
  .put(isAuthenticatedUser, createIndividualProductReview);

router
  .route("/reviews/individual")
  .get(getIndividualProductReviews)
  .delete(isAuthenticatedUser, deleteIndividualProductReview);

router
  .route("admin-individual/reviews/individual")
  .delete(
    isAuthenticatedBusiness,
    authorizeRoles("admin"),
    deleteIndividualProductReview
  );

router
  .route("admin-business/reviews/individual")
  .delete(
    isAuthenticatedBusiness,
    authorizeRoles("admin"),
    deleteIndividualProductReview
  );

router
  .route("/create-customer/business")
  .put(isAuthenticatedBusiness, createBusinessProductCustomer);

router
  .route("/customers/business")
  .get(getBusinessProductCustomers)
  .delete(isAuthenticatedBusiness, deleteBusinessProductCustomer);

router
  .route("/create-customer/individual")
  .put(isAuthenticatedUser, createIndividualProductCustomer);

router
  .route("/customers/individual")
  .get(getIndividualProductCustomers)
  .delete(isAuthenticatedUser, deleteIndividualProductCustomer);

router
  .route("/create-order/business")
  .put(isAuthenticatedBusiness, createBusinessProductOrder);

router
  .route("/orders/business")
  .get(getBusinessProductOrder)
  .delete(isAuthenticatedBusiness, deleteBusinessProductOrder);

router
  .route("/create-order/individual")
  .put(isAuthenticatedUser, createIndividualProductOrder);

router
  .route("/orders/individual")
  .get(getIndividualProductOrders)
  .delete(isAuthenticatedUser, deleteIndividualProductOrder);

module.exports = router;
