const StoreProduct = require("../models/storeProductModels");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

const getMyProducts = asyncHandler(async (req, res, next) => {
  // const { userId } = req.body;

  // const products = await StoreProduct.find({
  // user: userId,
  // });

  // if (!products) {
  // return next(new ErrorHandler("Product not found", 404));
  // } else {
  // res.status(200).json({
  // success: true,
  // products,
  // count: products.length,
  // });
  // }
  const resultPerPage = 20;
  const productsCount = await StoreProduct.countDocuments();
  const apiFeature = new ApiFeatures(
    StoreProduct.find({ user: req.user }),
    req.query
  )
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

  const createdStoreProduct = await StoreProduct.save();
  const product = await StoreProduct.create(req.body);

  res.status(201).json({
    success: true,
    createdStoreProduct,
    product,
  });
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

// const UpdateStoreProduct = asyncHandler(async (req, res, next) => {
//
// let product = await StoreProduct.findById(req.params.id);
// if (!product) {
// return next(new ErrorHandler("Product not found", 404));
// }
//Images Start Here
// let images = [];
// if (typeof req.body.images === "string") {
// images.push(req.body.images);
// } else {
// images = req.body.images;
// }
// if (images !== undefined) {
//Deleting Images From Cloudinary
// for (let i = 0; i < product.images.length; i++) {
// await cloudinary.v2.uploader.destroy(product.images[i].public_id);
// }
// const imagesLinks = [];
// for (let i = 0; i < images.length; i++) {
// const result = await cloudinary.v2.uploader.upload(images[i], {
// folder: "products",
// });
// imagesLinks.push({
// public_id: result.public_id,
// url: result.secure_url,
// });
// }
// req.body.images = imagesLinks;
// }
// product = await StoreProduct.findByIdAndUpdate(req.params.id, req.body, {
// new: true,
// runValidators: true,
// useFindAndModify: false,
// });
// res.status(200).json({
// success: true,
// product,
// });
//
//
// });
//
// const deleteStoreProduct = asyncHandler(async (req, res, next) => {
// const storeProduct = await StoreProduct.findById(req.params.id);
//
// if (!storeProduct) {
// return next(new ErrorHandler("Product not found", 404));
// }
//
//Deleting Images From Cloudinary
// for (let i = 0; i < storeProduct.images.length; i++) {
// await cloudinary.v2.uploader.destroy(storeProduct.images[i].public_id);
// }
//
// if (storeProduct.user.toString() !== req.user._id.toString()) {
// res.status(401);
// throw new Error("You can't perform this action");
// }
//
// if (storeProduct) {
// await storeProduct.remove();
// res.json({ message: "Product Removed" });
// } else {
// res.status(404);
// throw new Error("Product not Found");
// }
// });
//
// const deleteStoreProductAdmin = asyncHandler(async (req, res) => {
// const storeProduct = await StoreProduct.findById(req.params.id);
//
// if (storeProduct) {
// await storeProduct.remove();
// res.json({ message: "Product Removed" });
// } else {
// res.status(404);
// throw new Error("Product not Found");
// }
// });
//
// Create StoreProduct -- Admin
const createProductAdmin = catchAsyncErrors(async (req, res, next) => {
  const {
    productTitle,
    shortDescription,
    productDetails,
    standardPrice,
    discountedPrice,
    price,
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
    !price ||
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
      price,
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
// const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  // const product = await StoreProduct.findById(req.params.id);
// 
  // if (!product) {
    // return next(new ErrorHandler("Product not found", 404));
  // }
// 
  // res.status(200).json({
    // success: true,
    // product,
  // });
});

// Update StoreProduct -- Admin

const updateProductAdmin = catchAsyncErrors(async (req, res, next) => {
  const {
    productTitle,
    shortDescription,
    productDetails,
    standardPrice,
    discountedPrice,
    price,
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
    storeProduct.price = price;
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

// Update Product -- Admin

const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await StoreProduct.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
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
const createIndividualnewProductReview = catchAsyncErrors(
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

    const isReviewed = product.individualnewProductReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.individualnewProductReviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.individualnewProductReviews.push(review);
      product.numberOfIndividualReviews =
        product.individualnewProductReviews.length;
      product.totalNumberOfReviews =
        product.individualnewProductReviews.length +
        product.BusinessnewProductReviews.length;
    }

    let avg = 0;

    product.individualnewProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings =
      avg /
      (product.individualnewProductReviews.length +
        product.BusinessnewProductReviews.length);

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualnewProductReviews: product.individualnewProductReviews,
    });
  }
);

// Get Individual Reviews of a product
const getIndividualnewProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    individualnewProductReviews: product.individualnewProductReviews,
  });
});

// Delete Individual Review
const deleteIndividualnewProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const product = await StoreProduct.findById(req.query.productId);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    const individualnewProductReviews = product.individualnewProductReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    individualnewProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (individualnewProductReviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / individualnewProductReviews.length;
    }

    const numberOfIndividualReviews = individualnewProductReviews.length;

    await StoreProduct.findByIdAndUpdate(
      req.query.productId,
      {
        individualnewProductReviews,
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
      individualnewProductReviews: product.individualnewProductReviews,
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessnewProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    rating: Number(rating),
    comment,
  };

  const product = await StoreProduct.findById(productId);

  const isReviewed = product.BusinessnewProductReviews.find(
    (rev) => rev.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.BusinessnewProductReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.BusinessnewProductReviews.push(review);
    product.numberOfBusinessReviews = product.BusinessnewProductReviews.length;
    product.totalNumberOfReviews =
      product.individualnewProductReviews.length +
      product.BusinessnewProductReviews.length;
  }

  let avg = 0;

  product.BusinessnewProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings =
    avg /
    (product.individualnewProductReviews.length +
      product.BusinessnewProductReviews.length);

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Business Reviews of a product
const getBusinessnewProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    BusinessnewProductReviews: product.BusinessnewProductReviews,
  });
});

// Delete Business Review
const deleteBusinessnewProductReview = catchAsyncErrors(async (req, res, next) => {
  const product = await StoreProduct.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Review not found", 404));
  }

  const BusinessnewProductReviews = product.BusinessnewProductReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  BusinessnewProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (BusinessnewProductReviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / BusinessnewProductReviews.length;
  }

  const numberOfBusinessReviews = BusinessnewProductReviews.length;

  await StoreProduct.findByIdAndUpdate(
    req.query.productId,
    {
      BusinessnewProductReviews,
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
    return next(new ErrorHandler("Product not found", 404));
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
  // UpdateStoreProduct,
  // deleteStoreProduct,
  // deleteStoreProductAdmin,
  createProductAdmin,
  getAdminProducts,
  // getProductDetails,
  createIndividualnewProductReview,
  updateProductAdmin,
  getIndividualnewProductReviews,
  deleteIndividualnewProductReview,
  createBusinessnewProductReview,
  getBusinessnewProductReviews,
  deleteBusinessnewProductReview,
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
