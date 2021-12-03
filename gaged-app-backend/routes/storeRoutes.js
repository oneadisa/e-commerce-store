const express = require("express");

const router = express.Router();
router.route("/").get();
router.route("/create/store").post();
router.route("/:id").get().put().delete();

module.exports = router;
