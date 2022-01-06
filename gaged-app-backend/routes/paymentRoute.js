const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const {
  isAuthenticatedUser,
  isAuthenticatedBusiness,
  protect,
} = require("../middleware/authMiddleware");

router
  .route("/payment/process/individual")
  .post(isAuthenticatedUser, processPayment);
router
  .route("/payment/process/business")
  .post(isAuthenticatedBusiness, processPayment);

router
  .route("/stripeapikey/individual")
  .get(isAuthenticatedUser, sendStripeApiKey);
router
  .route("/stripeapikey/business")
  .get(isAuthenticatedBusiness, sendStripeApiKey);

module.exports = router;
