const StoreProduct = require("../models/storeProductModels");
const asyncHandler = require("express-async-handler");
const getStoreProducts = asyncHandler(async (req, res) => {
  const storeProduct = await StoreProduct.find({ user: req.user._id });
  res.json(storeProduct);
});

module.exports = { getStoreProducts };
