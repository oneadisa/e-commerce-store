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
    res.status(404).json({ message: "StoreProduct not found" });
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
    throw new Error("StoreProduct not found");
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
    res.json({ message: "StoreProduct Removed" });
  } else {
    res.status(404);
    throw new Error("StoreProduct not Found");
  }
});

// Create StoreProduct -- Admin
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
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update StoreProduct -- Admin

const updateProductAdmin = catchAsyncErrors(async (req, res, next) => {
  let product = await StoreProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
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

  product = await StoreProduct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Individual Review or Update an Individual review
const createIndividualProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.name,
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
        product.businessProductReviews.length;
    }

    let avg = 0;

    product.individualProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings =
      avg /
      (product.individualProductReviews.length +
        product.businessProductReviews.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get Individual Reviews of a product
const getIndividualProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
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
      return next(new ErrorHander("StoreProduct not found", 404));
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
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await StoreProduct.findById(productId);

  const isReviewed = product.businessProductReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.businessProductReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.businessProductReviews.push(review);
    product.numberOfBusinessReviews = product.businessProductReviews.length;
    product.totalNumberOfReviews =
      product.individualProductReviews.length +
      product.businessProductReviews.length;
  }

  let avg = 0;

  product.businessProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings =
    avg /
    (product.individualProductReviews.length +
      product.businessProductReviews.length);

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Business Reviews of a product
const getBusinessProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    businessProductReviews: product.businessProductReviews,
  });
});

// Delete Business Review
const deleteBusinessProductReview = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  const businessProductReviews = product.businessProductReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  businessProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (businessProductReviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / businessProductReviews.length;
  }

  const numberOfBusinessReviews = businessProductReviews.length;

  await StoreProduct.findByIdAndUpdate(
    req.query.productId,
    {
      businessProductReviews,
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
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
    };

    const product = await StoreProduct.findById(productId);

    const isBought = product.individualProductCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBought) {
      //   product.individualProductCustomers.forEach((rev) => {
      // product.individualProductCustomers.push(customer);
      // product.numberOfIndividualCustomers =
      //   product.individualProductCustomers.length;
      // product.totalNumberOfCustomers =
      //   product.individualProductCustomers.length +
      //   product.businessProductCustomers.length;
      //   });
    } else {
      product.individualProductCustomers.push(customer);
      product.numberOfIndividualCustomers =
        product.individualProductCustomers.length;
      product.totalNumberOfCustomers =
        product.individualProductCustomers.length +
        product.businessProductCustomers.length;
    }

    // let avg = 0;

    // product.individualProductCustomers.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // product.ratings =
    //   avg /
    //   (product.individualProductCustomers.length +
    // product.businessProductCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get Individual Customers of a product
const getIndividualProductCustomers = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.id);

    if (!product) {
      return next(new ErrorHander("StoreProduct not found", 404));
    }

    res.status(200).json({
      success: true,
      customers: product.individualProductCustomers,
    });
  }
);

// Delete Individual Customer
const deleteIndividualProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHander("StoreProduct not found", 404));
    }

    const individualProductCustomers =
      product.individualProductCustomers.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
      );

    // let avg = 0;

    // individualProductCustomers.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // let ratings = 0;

    // if (individualProductCustomers.length === 0) {
    //   ratings = 0;
    // } else {
    //   ratings = avg / individualProductCustomers.length;
    // }

    const numberOfIndividualCustomers = individualProductCustomers.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        numberOfIndividualCustomers,
        individualProductCustomers,
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

// Create New Business Customer or Update the Business customer
const createBusinessProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const customer = {
      user: req.user._id,
      businessName: req.user.businessName,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
    };

    const product = await StoreProduct.findById(productId);

    const isBought = product.businessProductCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBought) {
      // product.businessProductCustomers.forEach((rev) => {
      //   if (rev.user.toString() === req.user._id.toString())
      // (rev.rating = rating), (rev.comment = comment);
      // });
    } else {
      product.businessProductCustomers.push(customer);
      product.numberOfBusinessCustomers =
        product.businessProductCustomers.length;
      product.totalNumberOfCustomers =
        product.individualProductCustomers.length +
        product.businessProductCustomers.length;
    }

    //   let avg = 0;

    //   product.businessProductCustomers.forEach((rev) => {
    // avg += rev.rating;
    //   });

    //   product.ratings =
    // avg /
    // (product.individualProductCustomers.length +
    //   product.businessProductCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get All Business Customers of a product
const getBusinessProductCustomers = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    individualProductCustomers: product.businessProductCustomers,
  });
});

// Delete Business Customer
const deleteBusinessProductCustomer = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHander("StoreProduct not found", 404));
    }

    const businessProductCustomers = product.businessProductCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    //   let avg = 0;

    //   businessProductCustomers.forEach((rev) => {
    // avg += rev.rating;
    //   });

    //   let ratings = 0;

    //   if (businessProductCustomers.length === 0) {
    // ratings = 0;
    //   } else {
    // ratings = avg / businessProductCustomers.length;
    //   }

    const numberOfBusinessCustomers = businessProductCustomers.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        businessProductCustomers,
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

    const isBought = product.individualOrders.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBought) {
      //   product.individualOrders.forEach((rev) => {
      // product.individualOrders.push(order);
      // product.numberOfIndividualOrders =
      //   product.individualOrders.length;
      // product.totalNumberOfOrders =
      //   product.individualOrders.length +
      //   product.businessProductCustomers.length;
      //   });
    } else {
      product.individualOrders.push(order);
      product.numberOfIndividualOrders = product.individualOrders.length;
      product.totalNumberOfOrders =
        product.individualOrders.length +
        product.businessProductCustomers.length;
    }

    // let avg = 0;

    // product.individualOrders.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // product.ratings =
    //   avg /
    //   (product.individualOrders.length +
    // product.businessProductCustomers.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get Individual Orders of a product
const getIndividualProductOrders = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    orders: product.individualOrders,
  });
});

// Delete Individual Order
const deleteIndividualProductOrder = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHander("StoreProduct not found", 404));
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
    });
  }
);

// Create New Business Order or Update the Business order
const createBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;

  const order = {
    user: req.user._id,
    businessName: req.user.businessName,
    email: req.user.email,
    phoneNumber: req.user.phoneNumber,
  };

  const product = await StoreProduct.findById(productId);

  const isBought = product.businessProductCustomers.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isBought) {
    // product.businessProductCustomers.forEach((rev) => {
    //   if (rev.user.toString() === req.user._id.toString())
    // (rev.rating = rating), (rev.comment = comment);
    // });
  } else {
    product.businessProductCustomers.push(order);
    product.numberOfBusinessOrders = product.businessProductCustomers.length;
    product.totalNumberOfOrders =
      product.individualOrders.length + product.businessProductCustomers.length;
  }

  //   let avg = 0;

  //   product.businessProductCustomers.forEach((rev) => {
  // avg += rev.rating;
  //   });

  //   product.ratings =
  // avg /
  // (product.individualOrders.length +
  //   product.businessProductCustomers.length);

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Business Orders of a product
const getBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  res.status(200).json({
    success: true,
    individualOrders: product.businessProductCustomers,
  });
});

// Delete Business Order
const deleteBusinessProductOrder = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("StoreProduct not found", 404));
  }

  const businessProductCustomers = product.businessProductCustomers.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  //   let avg = 0;

  //   businessProductCustomers.forEach((rev) => {
  // avg += rev.rating;
  //   });

  //   let ratings = 0;

  //   if (businessProductCustomers.length === 0) {
  // ratings = 0;
  //   } else {
  // ratings = avg / businessProductCustomers.length;
  //   }

  const numberOfBusinessOrders = businessProductCustomers.length;

  await StoreProduct.findByIdAndUpdate(
    req.query.productId,
    {
      businessProductCustomers,
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
  getStoreProducts,
  CreateStoreProduct,
  getStoreProductById,
  UpdateStoreProduct,
  deleteStoreProduct,
  createProduct,
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
