// Get All Business
const getAllProductsBusiness = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 20;
  const businessCount = await signedUpBusiness.countDocuments();

  const apiFeature = new ApiFeatures(signedUpBusiness.find(), req.query)
    .search()
    .filter();

  let businesses = await apiFeature.query;

  let filteredProductsCount = businesses.length;

  apiFeature.pagination(resultPerPage);

  businesses = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    businesses,
    businessCount,
    resultPerPage,
    filteredProductsCount,
  });

  // const businesses = await signedUpBusiness.find();
  // res.status(200).json({
  // success: true,
  // businesses,
  // });
});

const CreateStoreProductBusiness = asyncHandler(async (req, res) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "businesses",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;



    const createdBusiness = await signedUpBusiness.save();
    const business = await signedUpBusiness.create(req.body);

    res.status(201).json({
      success: true,
      createdBusiness,
      business,
    });
  }
});

const getStoreProductByIdBusiness = asyncHandler(async (req, res) => {
  const business = await signedUpBusiness.findById(req.params.id);

  if (business) {
    res.json(business);
  } else {
    res.status(404).json({ message: "Business not found" });
  }

  res.json(business);
});

const UpdateStoreProductBusiness = asyncHandler(async (req, res, next) => {

let business = await signedUpBusiness.findById(req.params.id);
if (!business) {
  return next(new ErrorHandler("Business not found", 404));
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
  for (let i = 0; i < business.images.length; i++) {
    await cloudinary.v2.uploader.destroy(business.images[i].public_id);
  }
  const imagesLinks = [];
  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "businesses",
    });
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  req.body.images = imagesLinks;
}
business = await signedUpBusiness.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators: true,
  useFindAndModify: false,
});
res.status(200).json({
  success: true, 
  business,
});


});

const deleteStoreProductBusiness = asyncHandler(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.params.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < business.images.length; i++) {
    await cloudinary.v2.uploader.destroy(business.images[i].public_id);
  }

  if (business.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (business) {
    await business.remove();
    res.json({ message: "Business Removed" });
  } else {
    res.status(404);
    throw new Error("Business not Found");
  }
});

const deleteStoreProductAdminBusiness = asyncHandler(async (req, res) => {
  const business = await signedUpBusiness.findById(req.params.id);

  if (business) {
    await business.remove();
    res.json({ message: "Business Removed" });
  } else {
    res.status(404);
    throw new Error("Business not Found");
  }
});

// Create signedUpBusiness -- Admin
const createProductAdminBusiness = catchAsyncErrors(async (req, res, next) => {
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
    const business = new signedUpBusiness({
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

    const createdBusiness = await business.save();

    res.status(201).json(createdBusiness);
  }

  const business = await signedUpBusiness.create(req.body);

  res.status(201).json({
    success: true,
    business,
  });
});

// Get All signedUpBusiness (Admin)
const getAdminProductsBusiness = catchAsyncErrors(async (req, res, next) => {
  const businesses = await signedUpBusiness.find();

  res.status(200).json({
    success: true,
    businesses,
  });
});

// Get Business Products Details
const getProductDetailsBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.params.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    business,
  });
});

// Update signedUpBusiness -- Admin

const updateProductAdminBusiness = catchAsyncErrors(async (req, res, next) => {
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

  const business = await signedUpBusiness.findById(req.params.id);

  if (business.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (business) {
    business.productTitle = productTitle;
    business.shortDescription = shortDescription;
    business.productDetails = productDetails;
    business.standardPrice = standardPrice;
    business.discountedPrice = discountedPrice;
    business.price = price;
    business.productStockCount = productStockCount;
    business.productUnitCount = productUnitCount;
    business.productSKU = productSKU;
    business.productImageOne = productImageOne;
    business.productImageTwo = productImageTwo;
    business.productImageThree = productImageThree;
    business.category = category;

    const updatedStoreProduct = await business.save();
    res.status(200).json({
      success: true,
      updatedStoreProduct,
    });
  } else {
    res.status(404);
    throw new Error("Business not found");
  }
});

// Update Business -- Admin

const updateProductBusiness = catchAsyncErrors(async (req, res, next) => {
  let business = await signedUpBusiness.findById(req.params.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
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
    for (let i = 0; i < business.images.length; i++) {
      await cloudinary.v2.uploader.destroy(business.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "businesses",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  business = await signedUpBusiness.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    business,
  });
});

// Create New Individual Review or Update an Individual review
const createIndividualnewProductReviewBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.firstName + "" + req.user.lastName,
      pic: req.body.pic,
      rating: Number(rating),
      comment,
    };

    const business = await signedUpBusiness.findById(productId);

    const isReviewed = business.individualnewProductReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      business.individualnewProductReviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      business.individualnewProductReviews.push(review);
      business.numberOfIndividualReviews =
        business.individualnewProductReviews.length;
      business.totalNumberOfReviews =
        business.individualnewProductReviews.length +
        business.BusinessnewProductReviews.length;
    }

    let avg = 0;

    business.individualnewProductReviews.forEach((rev) => {
      avg += rev.rating;
    });

    business.ratings =
      avg /
      (business.individualnewProductReviews.length +
        business.BusinessnewProductReviews.length);

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualnewProductReviews: business.individualnewProductReviews,
    });
  }
);

// Get Individual Reviews of a business
const getIndividualnewProductReviewsBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    individualnewProductReviews: business.individualnewProductReviews,
  });
});

// Delete Individual Review
const deleteIndividualnewProductReviewBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.productId);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const individualnewProductReviews = business.individualnewProductReviews.filter(
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

    await signedUpBusiness.findByIdAndUpdate(
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
      individualnewProductReviews: business.individualnewProductReviews,
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessnewProductReviewBusiness = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    rating: Number(rating),
    comment,
  };

  const business = await signedUpBusiness.findById(productId);

  const isReviewed = business.BusinessnewProductReviews.find(
    (rev) => rev.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    business.BusinessnewProductReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    business.BusinessnewProductReviews.push(review);
    business.numberOfBusinessReviews = business.BusinessnewProductReviews.length;
    business.totalNumberOfReviews =
      business.individualnewProductReviews.length +
      business.BusinessnewProductReviews.length;
  }

  let avg = 0;

  business.BusinessnewProductReviews.forEach((rev) => {
    avg += rev.rating;
  });

  business.ratings =
    avg /
    (business.individualnewProductReviews.length +
      business.BusinessnewProductReviews.length);

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Business Reviews of a business
const getBusinessnewProductReviewsBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    BusinessnewProductReviews: business.BusinessnewProductReviews,
  });
});

// Delete Business Review
const deleteBusinessnewProductReviewBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.productId);

  if (!business) {
    return next(new ErrorHandler("Review not found", 404));
  }

  const BusinessnewProductReviews = business.BusinessnewProductReviews.filter(
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

  await signedUpBusiness.findByIdAndUpdate(
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
const createIndividualProductCustomerBusiness = catchAsyncErrors(
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

    const business = await signedUpBusiness.findById(productId);

    const isBought = business.individualCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isBought) {
      //   business.individualCustomers.forEach((rev) => {
      // business.individualCustomers.push(customer);
      // business.numberOfIndividualCustomers =
      //   business.individualCustomers.length;
      // business.totalNumberOfCustomers =
      //   business.individualCustomers.length +
      //   business.businessCustomers.length;
      //   });
    } else {
      business.individualCustomers.push(customer);
      business.numberOfIndividualCustomers = business.individualCustomers.length;
      business.totalNumberOfCustomers =
        business.individualCustomers.length + business.businessCustomers.length;
    }

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      customers: business.individualCustomers,
    });
  }
);

// Get Individual Customers of a business
const getIndividualProductCustomersBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.id);

    if (!business) {
      return next(new ErrorHandler("Customer not found", 404));
    }

    res.status(200).json({
      success: true,
      customers: business.individualCustomers,
    });
  }
);

// Delete Individual Customer
const deleteIndividualProductCustomerBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.productId);

    if (!business) {
      return next(new ErrorHandler("Customer not found", 404));
    }

    const individualCustomers = business.individualCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfIndividualCustomers = individualCustomers.length;

    await signedUpBusiness.findByIdAndUpdate(
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
      customers: business.individualCustomers,
    });
  }
);

// Create New Business Customer or Update the Business customer
const createBusinessProductCustomerBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const business = await signedUpBusiness.findById(productId);

    const customer = {
      user: req.user._id,
      businessName: req.user.businessName,
      phoneNumber: req.user.phoneNumber,
      pic: req.user.pic,
      email: req.user.email,
      productBought: business.productTitle,
    };

    const isBought = business.businessCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBought) {
      // business.businessCustomers.forEach((rev) => {
      //   if (rev.user.toString() === req.user._id.toString())
      // (rev.rating = rating), (rev.comment = comment);
      // });
      business.businessCustomers.push(customer);
      business.numberOfBusinessCustomers = business.businessCustomers.length;
      business.totalNumberOfCustomers =
        business.individualCustomers.length + business.businessCustomers.length;
    } else {
    }

    //   let avg = 0;

    //   business.businessCustomers.forEach((rev) => {
    // avg += rev.rating;
    //   });

    //   business.ratings =
    // avg /
    // (business.individualCustomers.length +
    //   business.businessCustomers.length);

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCustomers: business.businessCustomers,
    });
  }
);

// Get All Business Customers of a business
const getBusinessProductCustomersBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business Customer not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCustomers: business.businessCustomers,
  });
});

// Delete Business Customer
const deleteBusinessProductCustomerBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.productId);

    if (!business) {
      return next(new ErrorHandler("Business Customer not found", 404));
    }

    const businessCustomers = business.businessCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessCustomers = businessCustomers.length;

    await signedUpBusiness.findByIdAndUpdate(
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
const createIndividualProductOrderBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const { productId } = req.body;

    const order = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      phoneNumber: req.user.phoneNumber,
    };

    const business = await signedUpBusiness.findById(productId);

    const isOrdered = business.individualOrders.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isOrdered) {
      //   business.individualOrders.forEach((rev) => {
      // business.individualOrders.push(order);
      // business.numberOfIndividualOrders =
      //   business.individualOrders.length;
      // business.totalNumberOfOrders =
      //   business.individualOrders.length +
      //   business.businessCustomers.length;
      //   });
      business.individualOrders.push(order);
      business.numberOfIndividualOrders = business.individualOrders.length;
      business.totalNumberOfOrders =
        business.individualOrders.length + business.businessOrders.length;
    } else {
    }

    // let avg = 0;

    // business.individualOrders.forEach((rev) => {
    //   avg += rev.rating;
    // });

    // business.ratings =
    //   avg /
    //   (business.individualOrders.length +
    // business.businessCustomers.length);

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualOrders: business.individualOrders,
    });
  }
);

// Get Individual Orders of a business
const getIndividualProductOrdersBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    individualOrders: business.individualOrders,
  });
});

// Delete Individual Order
const deleteIndividualProductOrderBusiness = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.productId);

    if (!business) {
      return next(new ErrorHandler("signedUpBusiness not found", 404));
    }

    const individualOrders = business.individualOrders.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfIndividualOrders = individualOrders.length;

    await signedUpBusiness.findByIdAndUpdate(
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
      individualOrders: business.individualOrders,
    });
  }
);

// Create New Business Order or Update the Business order
const createBusinessProductOrderBusiness = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;

  const order = {
    user: req.user._id,
    productOrdered: productId.productTitle,
    businessName: req.user.businessName,
    email: req.user.email,
    phoneNumber: req.user.phoneNumber,
    pic: req.user.pic,
  };

  const business = await signedUpBusiness.findById(productId);

  const isOrdered = business.businessOrders.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isOrdered) {
    // business.businessCustomers.forEach((rev) => {
    //   if (rev.user.toString() === req.user._id.toString())
    // (rev.rating = rating), (rev.comment = comment);
    // });
    business.businessOrders.push(order);
    business.numberOfBusinessOrders = business.businessOrders.length;
    business.totalNumberOfOrders =
      business.individualOrders.length + business.businessOrders.length;
  } else {
  }

  //   let avg = 0;

  //   business.businessCustomers.forEach((rev) => {
  // avg += rev.rating;
  //   });

  //   business.ratings =
  // avg /
  // (business.individualOrders.length +
  //   business.businessCustomers.length);

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessOrders: business.businessOrders,
  });
});

// Get All Business Orders of a business
const getBusinessProductOrderBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("signedUpBusiness not found", 404));
  }

  res.status(200).json({
    success: true,
    businessOrders: business.businessOrders,
  });
});

// Delete Business Order
const deleteBusinessProductOrderBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.productId);

  if (!business) {
    return next(new ErrorHandler("signedUpBusiness not found", 404));
  }

  const businessOrders = business.businessOrders.filter(
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

  await signedUpBusiness.findByIdAndUpdate(
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
  getAllProductsBusiness,
  CreateStoreProductBusiness,
  getStoreProductByIdBusiness,
  UpdateStoreProductBusiness,
  deleteStoreProductBusiness,
  deleteStoreProductAdminBusiness,
  createProductAdminBusiness,
  getAdminProductsBusiness,
  getProductDetailsBusiness,
  createIndividualnewProductReviewBusiness,
  updateProductAdminBusiness,
  getIndividualnewProductReviewsBusiness,
  deleteIndividualnewProductReviewBusiness,
  createBusinessnewProductReviewBusiness,
  getBusinessnewProductReviewsBusiness,
  deleteBusinessnewProductReviewBusiness,
  createIndividualProductCustomerBusiness,
  getIndividualProductCustomersBusiness,
  deleteIndividualProductCustomerBusiness,
  createBusinessProductCustomerBusiness,
  getBusinessProductCustomersBusiness,
  deleteBusinessProductCustomerBusiness,
  createIndividualProductOrderBusiness,
  getIndividualProductOrdersBusiness,
  deleteIndividualProductOrderBusiness,
  createBusinessProductOrderBusiness,
  getBusinessProductOrderBusiness,
  deleteBusinessProductOrderBusiness,
};
