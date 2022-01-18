const express = require("express");
const {
  deleteBusinessOrder,
  updateBusinessOrder,
  getAllBusinessOrders,
  myBusinessOrders,
  getSingleBusinessOrder,
  newBusinessOrder,
  newIndividualOrder,
  getSingleIndividualOrder,
  myIndividualOrders,
  getAllIndividualOrders,
  updateIndividualOrder,
  deleteIndividualOrder,
} = require("../controllers/productOrdersController");
const router = express.Router();

const {
  protectBusiness,
  authorizeRoles,
  protectUser,
} = require("../middlewares/authMiddleware");

router.route("/order/individual/new").post(protectBusiness, newIndividualOrder);

router
  .route("/order/individual/id/:id")
  .get(protectBusiness, getSingleIndividualOrder)
  .put(protectBusiness, updateIndividualOrder)
  .delete(protectBusiness, deleteIndividualOrder);

router.route("/orders/individual/me").get(protectBusiness, myIndividualOrders);

router.route("/order/business/new").post(protectBusiness, newBusinessOrder);

router
  .route("/order/business/id/:id")
  .get(protectBusiness, getSingleBusinessOrder)
  .put(protectBusiness, updateBusinessOrder)
  .delete(protectBusiness, deleteBusinessOrder);

router.route("/orders/business/me").get(protectBusiness, myBusinessOrders);

router
  .route("/admin-individual/orders/business")
  .get(protectUser, authorizeRoles("admin"), getAllBusinessOrders);

router
  .route("/admin-individual/order/business/:id")
  .put(protectUser, authorizeRoles("admin"), updateBusinessOrder)
  .delete(protectUser, authorizeRoles("admin"), deleteBusinessOrder);

router
  .route("/admin-individual/orders/individual")
  .get(protectUser, authorizeRoles("admin"), getAllIndividualOrders);

router
  .route("/admin-individual/order/individual/:id")
  .put(protectUser, authorizeRoles("admin"), updateIndividualOrder)
  .delete(protectUser, authorizeRoles("admin"), deleteIndividualOrder);

router
  .route("/admin-business/orders/individual")
  .get(protectBusiness, authorizeRoles("admin"), getAllIndividualOrders);

router
  .route("/admin-business/order/individual/:id")
  .put(protectBusiness, authorizeRoles("admin"), updateIndividualOrder)
  .delete(protectBusiness, authorizeRoles("admin"), deleteIndividualOrder);

router
  .route("/admin-business/orders/business")
  .get(protectBusiness, authorizeRoles("admin"), getAllBusinessOrders);

router
  .route("/admin-business/order/business/:id")
  .put(protectBusiness, authorizeRoles("admin"), updateBusinessOrder)
  .delete(protectBusiness, authorizeRoles("admin"), deleteBusinessOrder);

module.exports = router;
