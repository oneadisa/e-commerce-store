const express = require("express");
const router = express.Router();
const registerStore = require("../controllers/storeController");

router.route("/createStore").post(registerStore);
// router.route("/create/store").post();
// router.route("/:id").get().put().delete();

module.exports = router;
