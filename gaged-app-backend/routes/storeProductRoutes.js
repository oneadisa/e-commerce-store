const express = require("express");
const {
  getMyProducts,
  getAllProducts,
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
  protectUser,
  authorizeRoles,
  protectBusiness,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/all").get(getAllProducts);

router.route("/me").get(getMyProducts);
router.route("/create").post(protectBusiness, CreateStoreProduct);
router
  .route("/product/:id")
  .get(getStoreProductById)
  .put(protectBusiness, UpdateStoreProduct)
  .delete(protectBusiness, deleteStoreProduct);

router
  .route("/admin-individual/products")
  .get(protectUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin-individual/product/new")
  .post(protectUser, authorizeRoles("admin"), createProductAdmin);

router
  .route("/admin-individual/product/:id")
  .put(protectUser, authorizeRoles("admin"), updateProductAdmin)
  .delete(protectUser, authorizeRoles("admin"), deleteStoreProductAdmin);

router
  .route("/admin-business/products")
  .get(protectBusiness, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin-business/product/new")
  .post(protectBusiness, authorizeRoles("admin"), createProductAdmin);

router
  .route("/admin-business/product/:id")
  .put(protectBusiness, authorizeRoles("admin"), updateProductAdmin)
  .delete(protectBusiness, authorizeRoles("admin"), deleteStoreProductAdmin);

router.route("/product/:id").get(getProductDetails);

router
  .route("/create-review/business")
  .put(protectBusiness, createBusinessProductReview);

router
  .route("/reviews/business")
  .get(getBusinessProductReviews)
  .delete(protectBusiness, deleteBusinessProductReview);

router
  .route("admin-individual/reviews/business")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteBusinessProductReview
  );

router
  .route("admin-business/reviews/business")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteBusinessProductReview
  );

router
  .route("/create-review/individual")
  .put(protectUser, createIndividualProductReview);

router
  .route("/reviews/individual")
  .get(getIndividualProductReviews)
  .delete(protectUser, deleteIndividualProductReview);

router
  .route("admin-individual/reviews/individual")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteIndividualProductReview
  );

router
  .route("admin-business/reviews/individual")
  .delete(
    protectBusiness,
    authorizeRoles("admin"),
    deleteIndividualProductReview
  );

router
  .route("/create-customer/business")
  .put(protectBusiness, createBusinessProductCustomer);

router
  .route("/customers/business")
  .get(getBusinessProductCustomers)
  .delete(protectBusiness, deleteBusinessProductCustomer);

router
  .route("/create-customer/individual")
  .put(protectUser, createIndividualProductCustomer);

router
  .route("/customers/individual")
  .get(getIndividualProductCustomers)
  .delete(protectUser, deleteIndividualProductCustomer);

router
  .route("/create-order/business")
  .put(protectBusiness, createBusinessProductOrder);

router
  .route("/orders/business")
  .get(getBusinessProductOrder)
  .delete(protectBusiness, deleteBusinessProductOrder);

router
  .route("/create-order/individual")
  .put(protectUser, createIndividualProductOrder);

router
  .route("/orders/individual")
  .get(getIndividualProductOrders)
  .delete(protectUser, deleteIndividualProductOrder);

module.exports = router;
