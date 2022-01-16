const StoreProduct = require("../models/storeProductModels");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

const getMyProducts = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  const products = await StoreProduct.find({
    user: userId,
  });

  if (!products) {
    return next(new ErrorHandler("Product not found", 404));
  } else {
    res.status(200).json({
      success: true,
      products,
      count: products.length,
    });
  }
});

// Get All Product
const getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 20;
  const productsCount = await StoreProduct.countDocuments();

  const apiFeature = new ApiFeatures(StoreProduct.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  products = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });

  // const products = await StoreProduct.find();
  // res.status(200).json({
  // success: true,
  // products,
  // });
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

const deleteStoreProduct = asyncHandler(async (req, res) => {
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

const deleteStoreProductAdmin = asyncHandler(async (req, res) => {
  const storeProduct = await StoreProduct.findById(req.params.id);

  if (storeProduct) {
    await storeProduct.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// Create StoreProduct -- Admin
const createProductAdmin = catchAsyncErrors(async (req, res, next) => {
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

  const product = await StoreProduct.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Get All StoreProduct (Admin)
const getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await StoreProduct.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// Get StoreProduct Details
const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update StoreProduct -- Admin

const updateProductAdmin = catchAsyncErrors(async (req, res, next) => {
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
    res.status(200).json({
      success: true,
      updatedStoreProduct,
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// Create New Individual Review or Update an Individual review
const createIndividualProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.firstName + "" + req.user.lastName,
      pic: req.body.pic,
      rating: Number(rating),
      comment,
    };

    const product = await StoreProduct.findById(productId);

    const isReviewed = product.individualProductReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.individualProductReviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.individualProductReviews.push(review);
      product.numberOfIndividualReviews =
        product.individualProductReviews.length;
      product.totalNumberOfReviews =
        product.individualProductReviews.length +
        product.BusinessProductReviews.length;
    }

    let avg = 0;

    product.individualProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings =
      avg /
      (product.individualProductReviews.length +
        product.BusinessProductReviews.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualProductReviews: product.individualProductReviews,
    });
  }
);

// Get Individual Reviews of a product
const getIndividualProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    individualProductReviews: product.individualProductReviews,
  });
});

// Delete Individual Review
const deleteIndividualProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    const individualProductReviews = product.individualProductReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    individualProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (individualProductReviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / individualProductReviews.length;
    }

    const numberOfIndividualReviews = individualProductReviews.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        individualProductReviews,
        ratings,
        numberOfIndividualReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      individualProductReviews: product.individualProductReviews,
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    rating: Number(rating),
    comment,
  };

  const product = await StoreProduct.findById(productId);

  const isReviewed = product.BusinessProductReviews.find(
    (rev) => rev.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.BusinessProductReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.BusinessProductReviews.push(review);
    product.numberOfBusinessReviews = product.BusinessProductReviews.length;
    product.totalNumberOfReviews =
      product.individualProductReviews.length +
      product.BusinessProductReviews.length;
  }

  let avg = 0;

  product.BusinessProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings =
    avg /
    (product.individualProductReviews.length +
      product.BusinessProductReviews.length);

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Business Reviews of a product
const getBusinessProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    BusinessProductReviews: product.BusinessProductReviews,
  });
});

// Delete Business Review
const deleteBusinessProductReview = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Review not found", 404));
  }

  const BusinessProductReviews = product.BusinessProductReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  BusinessProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (BusinessProductReviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / BusinessProductReviews.length;
  }

  const numberOfBusinessReviews = BusinessProductReviews.length;

  await StoreProduct.findByIdAndUpdate(
    req.query.productId,
    {
      BusinessProductReviews,
      ratings,
      numberOfBusinessReviews,
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

// Create New Individual Customer or Update an Individual Customer
const createIndividualProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const customer = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      pic: req.user.pic,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
      productBought: req.body.productBought,
    };

    const product = await StoreProduct.findById(productId);

    const isBought = product.individualCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isBought) {
      //   product.individualCustomers.forEach((rev) => {
      // product.individualCustomers.push(customer);
      // product.numberOfIndividualCustomers =
      //   product.individualCustomers.length;
      // product.totalNumberOfCustomers =
      //   product.individualCustomers.length +
      //   product.businessCustomers.length;
      //   });
    } else {
      product.individualCustomers.push(customer);
      product.numberOfIndividualCustomers = product.individualCustomers.length;
      product.totalNumberOfCustomers =
        product.individualCustomers.length + product.businessCustomers.length;
    }

    // let avg = 0;

    // product.individualCustomers.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // product.ratings =
    //   avg /
    //   (product.individualCustomers.length +
    // product.businessCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      customers: product.individualCustomers,
    });
  }
);

// Get Individual Customers of a product
const getIndividualProductCustomers = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.id);

    if (!product) {
      return next(new ErrorHandler("Customer not found", 404));
    }

    res.status(200).json({
      success: true,
      customers: product.individualCustomers,
    });
  }
);

// Delete Individual Customer
const deleteIndividualProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHandler("Customer not found", 404));
    }

    const individualCustomers = product.individualCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    // let avg = 0;

    // individualCustomers.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // let ratings = 0;

    // if (individualCustomers.length === 0) {
    //   ratings = 0;
    // } else {
    //   ratings = avg / individualCustomers.length;
    // }

    const numberOfIndividualCustomers = individualCustomers.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        numberOfIndividualCustomers,
        individualCustomers,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      customers: product.individualCustomers,
    });
  }
);

// Create New Business Customer or Update the Business customer
const createBusinessProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const product = await StoreProduct.findById(productId);

    const customer = {
      user: req.user._id,
      businessName: req.user.businessName,
      phoneNumber: req.user.phoneNumber,
      pic: req.user.pic,
      email: req.user.email,
      productBought: product.productTitle,
    };

    const isBought = product.businessCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBought) {
      // product.businessCustomers.forEach((rev) => {
      //   if (rev.user.toString() === req.user._id.toString())
      // (rev.rating = rating), (rev.comment = comment);
      // });
      product.businessCustomers.push(customer);
      product.numberOfBusinessCustomers = product.businessCustomers.length;
      product.totalNumberOfCustomers =
        product.individualCustomers.length + product.businessCustomers.length;
    } else {
    }

    //   let avg = 0;

    //   product.businessCustomers.forEach((rev) => {
    // avg += rev.rating;
    //   });

    //   product.ratings =
    // avg /
    // (product.individualCustomers.length +
    //   product.businessCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCustomers: product.businessCustomers,
    });
  }
);

// Get All Business Customers of a product
const getBusinessProductCustomers = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Business Customer not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCustomers: product.businessCustomers,
  });
});

// Delete Business Customer
const deleteBusinessProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHandler("Business Customer not found", 404));
    }

    const businessCustomers = product.businessCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    // const individualCustomers = product.individualCustomers.filter(
    // (rev) => rev._id.toString() !== req.query.id.toString()
    // );

    //   let avg = 0;

    //   businessCustomers.forEach((rev) => {
    // avg += rev.rating;
    //   });

    //   let ratings = 0;

    //   if (businessCustomers.length === 0) {
    // ratings = 0;
    //   } else {
    // ratings = avg / businessCustomers.length;
    //   }

    const numberOfBusinessCustomers = businessCustomers.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        businessCustomers,
        numberOfBusinessCustomers,
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
  }
);

// Create New Individual Order or Update an Individual Order
const createIndividualProductOrder = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const order = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
    };

    const product = await StoreProduct.findById(productId);

    const isOrdered = product.individualOrders.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isOrdered) {
      //   product.individualOrders.forEach((rev) => {
      // product.individualOrders.push(order);
      // product.numberOfIndividualOrders =
      //   product.individualOrders.length;
      // product.totalNumberOfOrders =
      //   product.individualOrders.length +
      //   product.businessCustomers.length;
      //   });
      product.individualOrders.push(order);
      product.numberOfIndividualOrders = product.individualOrders.length;
      product.totalNumberOfOrders =
        product.individualOrders.length + product.businessOrders.length;
    } else {
    }

    // let avg = 0;

    // product.individualOrders.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // product.ratings =
    //   avg /
    //   (product.individualOrders.length +
    // product.businessCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualOrders: product.individualOrders,
    });
  }
);

// Get Individual Orders of a product
const getIndividualProductOrders = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    individualOrders: product.individualOrders,
  });
});

// Delete Individual Order
const deleteIndividualProductOrder = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHandler("StoreProduct not found", 404));
    }

    const individualOrders = product.individualOrders.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    // let avg = 0;

    // individualOrders.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // let ratings = 0;

    // if (individualOrders.length === 0) {
    //   ratings = 0;
    // } else {
    //   ratings = avg / individualOrders.length;
    // }

    const numberOfIndividualOrders = individualOrders.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        numberOfIndividualOrders,
        individualOrders,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      individualOrders: product.individualOrders,
    });
  }
);

// Create New Business Order or Update the Business order
const createBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;

  const order = {
    user: req.user._id,
    productOrdered: productId.productTitle,
    businessName: req.user.businessName,
    email: req.user.email,
    phoneNumber: req.user.phoneNumber,
    pic: req.user.pic,
  };

  const product = await StoreProduct.findById(productId);

  const isOrdered = product.businessOrders.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isOrdered) {
    // product.businessCustomers.forEach((rev) => {
    //   if (rev.user.toString() === req.user._id.toString())
    // (rev.rating = rating), (rev.comment = comment);
    // });
    product.businessOrders.push(order);
    product.numberOfBusinessOrders = product.businessOrders.length;
    product.totalNumberOfOrders =
      product.individualOrders.length + product.businessOrders.length;
  } else {
  }

  //   let avg = 0;

  //   product.businessCustomers.forEach((rev) => {
  // avg += rev.rating;
  //   });

  //   product.ratings =
  // avg /
  // (product.individualOrders.length +
  //   product.businessCustomers.length);

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessOrders: product.businessOrders,
  });
});

// Get All Business Orders of a product
const getBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    businessOrders: product.businessOrders,
  });
});

// Delete Business Order
const deleteBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("StoreProduct not found", 404));
  }

  const businessOrders = product.businessOrders.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  //   let avg = 0;

  //   businessCustomers.forEach((rev) => {
  // avg += rev.rating;
  //   });

  //   let ratings = 0;

  //   if (businessCustomers.length === 0) {
  // ratings = 0;
  //   } else {
  // ratings = avg / businessCustomers.length;
  //   }

  const numberOfBusinessOrders = businessOrders.length;

  await StoreProduct.findByIdAndUpdate(
    req.query.productId,
    {
      businessOrders,
      numberOfBusinessOrders,
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
  getMyProducts,
  getAllProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  deleteStoreProduct,
  deleteStoreProductAdmin,
  createProductAdmin,
  getAdminProducts,
  getProductDetails,
  createIndividualProductReview,
  updateProductAdmin,
  getIndividualProductReviews,
  deleteIndividualProductReview,
  createBusinessProductReview,
  getBusinessProductReviews,
  deleteBusinessProductReview,
  createIndividualProductCustomer,
  getIndividualProductCustomers,
  deleteIndividualProductCustomer,
  createBusinessProductCustomer,
  getBusinessProductCustomers,
  deleteBusinessProductCustomer,
  createIndividualProductOrder,
  getIndividualProductOrders,
  deleteIndividualProductOrder,
  createBusinessProductOrder,
  getBusinessProductOrder,
  deleteBusinessProductOrder,
};
