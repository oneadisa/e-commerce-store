const ProductOrder = require("../models/ProductOrderModels");
const asyncHandler = require("express-async-handler");
const getProductOrders = asyncHandler(async (req, res) => {
  const productOrders = await ProductOrder.find({
    user: req.user._id,
  });
  res.json(productOrders);
});

const CreateProductOrders = asyncHandler(async (req, res) => {
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
    const storeProduct = new ProductOrder({
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
  const storeProduct = await ProductOrder.findById(req.params.id);

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

  const storeProduct = await ProductOrder.findById(req.params.id);

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
  const storeProduct = await ProductOrder.findById(req.params.id);

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
  getProductOrders,
  CreateProductOrders,
  getStoreProductById,
  UpdateStoreProduct,
  DeleteStoreProduct,
};
