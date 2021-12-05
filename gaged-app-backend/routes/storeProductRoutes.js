const express = require("express");
const { getStoreProducts } = require("../controllers/storeProductController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getStoreProducts);
//  router.route("/create").post();
//  router.route("/:id").get().put().delete();

module.exports = router;
