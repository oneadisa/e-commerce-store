const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/productOrdersController");
const router = express.Router();

const {
  isAuthenticatedUser,
  isAuthenticatedBusiness,
  authorizeRoles,
  protectUser,
  protectBusiness,
} = require("../middleware/authMiddleware");

router.route("/order/new/individual").post(isAuthenticatedUser, newOrder);

router.route("/order/:id/individual").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me/individual").get(isAuthenticatedUser, myOrders);

router.route("/order/new/business").post(isAuthenticatedBusiness, newOrder);

router
  .route("/order/:id/business")
  .get(isAuthenticatedBusiness, getSingleOrder);

router.route("/orders/me/business").get(isAuthenticatedBusiness, myOrders);

router
  .route("/admin-individual/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin-individual/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

router
  .route("/admin-business/orders")
  .get(isAuthenticatedBusiness, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin-business/order/:id")
  .put(isAuthenticatedBusiness, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedBusiness, authorizeRoles("admin"), deleteOrder);

module.exports = router;
