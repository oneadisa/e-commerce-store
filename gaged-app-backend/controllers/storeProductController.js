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

// Create Product -- Admin
const createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All Product (Admin)
const getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Get Product Details
const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product -- Admin

const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await StoreProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Review or Update the review
const createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await StoreProduct.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// Create New Review or Update the review
const createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await StoreProduct.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

module.exports = {
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  DeleteStoreProduct,
};
