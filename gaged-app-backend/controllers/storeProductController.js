const StoreProduct = require("../models/storeProductModels");
const asyncHandler = require("express-async-handler");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const getStoreProducts = asyncHandler(async (req, res) => {
  const storeProducts = await StoreProduct.find({
    user: req.user._id,
  });
  res.json(storeProducts);
});

const CreateStoreProduct = asyncHandler(async (req, res) => {
  const {
    productTitle,
    shortDescription,
    productDetails,
    standardPrice,
    discountedPrice,
    costPrice,
    productStockCount,
    productUnitCount,
    productSKU,
    productImageOne,
    productImageTwo,
    productImageThree,
    category,
  } = req.body;

  if (
    !productTitle ||
    !shortDescription ||
    !category ||
    !productDetails ||
    !costPrice ||
    !standardPrice ||
    !discountedPrice ||
    !productStockCount ||
    !productUnitCount
    // || !productImageOne
  ) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const storeProduct = new StoreProduct({
      user: req.user._id,
      productTitle,
      shortDescription,
      productDetails,
      standardPrice,
      discountedPrice,
      costPrice,
      productStockCount,
      productUnitCount,
      productSKU,
      productImageOne,
      productImageTwo,
      productImageThree,
      category,
    });

    const createdStoreProduct = await storeProduct.save();

    res.status(201).json(createdStoreProduct);
  }
});

const getStoreProductById = asyncHandler(async (req, res) => {
  const storeProduct = await StoreProduct.findById(req.params.id);

  if (storeProduct) {
    res.json(storeProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(storeProduct);
});

const UpdateStoreProduct = asyncHandler(async (req, res) => {
  const {
    productTitle,
    shortDescription,
    productDetails,
    standardPrice,
    discountedPrice,
    costPrice,
    productStockCount,
    productUnitCount,
    productSKU,
    productImageOne,
    productImageTwo,
    productImageThree,
    category,
  } = req.body;

  const storeProduct = await StoreProduct.findById(req.params.id);

  if (storeProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (storeProduct) {
    storeProduct.productTitle = productTitle;
    storeProduct.shortDescription = shortDescription;
    storeProduct.productDetails = productDetails;
    storeProduct.standardPrice = standardPrice;
    storeProduct.discountedPrice = discountedPrice;
    storeProduct.costPrice = costPrice;
    storeProduct.productStockCount = productStockCount;
    storeProduct.productUnitCount = productUnitCount;
    storeProduct.productSKU = productSKU;
    storeProduct.productImageOne = productImageOne;
    storeProduct.productImageTwo = productImageTwo;
    storeProduct.productImageThree = productImageThree;
    storeProduct.category = category;

    const updatedStoreProduct = await storeProduct.save();
    res.json(updatedStoreProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const DeleteStoreProduct = asyncHandler(async (req, res) => {
  const storeProduct = await StoreProduct.findById(req.params.id);

  if (storeProduct.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (storeProduct) {
    await storeProduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

module.exports = {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  DeleteStoreProduct,
};
