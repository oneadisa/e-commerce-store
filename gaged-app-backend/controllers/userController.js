const bcrypt = require("bcrypt");
const signedUpUser = require("../models/signUpModels");
const signedUpBusiness = require("../models/signUpBusinessModels");
const StoreProduct = require("../models/storeProductModels");
const Campaign = require("../models/campaignModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/signUpModels");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

const registerUser = asyncHandler(async (req, res) => {
  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  // folder: "avatars",
  // width: 150,
  // crop: "scale",
  // });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    pic,
    isAdmin,
    role,
    meansOfID,
    IDpic,
    bank,
    bankAccountName,
    bankAccountNumber,
    walletBalance,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    totalNumberOfCampaignsInvested,
    listOfCampaignsInvested,
    campaignReviews,
    numberOfCampaignsReviwed,
    productReviews,
    numberOfProductsReviewed,
    totallNumberOfInteractions,
    paymentMethod,
  } = req.body;

  const userExists = await signedUpUser.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists. Please Log In.");
  }
  const user = await signedUpUser.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    isAdmin,
    pic,
    role,
    meansOfID,
    IDpic,
    bank,
    bankAccountName,
    bankAccountNumber,
    walletBalance,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    totalNumberOfCampaignsInvested,
    listOfCampaignsInvested,
    campaignReviews,
    numberOfCampaignsReviwed,
    productReviews,
    numberOfProductsReviewed,
    totallNumberOfInteractions,
    paymentMethod,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
      pic: user.pic,
      avatar: user.avatar,
      role: user.role,
      meansOfID: user.meansOfID,
      IDpic: user.IDpic,
      bank: user.bank,
      bankAccountName: user.bankAccountName,
      bankAccountNumber: user.bankAccountNumber,
      walletBalance: user.walletBalance,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
      totalNumberOfCampaignsInvested: user.totalNumberOfCampaignsInvested,
      listOfCampaignsInvested: user.listOfCampaignsInvested,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      productReviews: user.productReviews,
      numberOfProductsReviewed: user.numberOfProductReviews,
      totallNumberOfInteractions: user.totalNumberOfInteractions,
      paymentMethod: user.paymentMethod,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }

  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await signedUpUser.findOne({ email }).select("+password");
  if (user && (await user.matchPassword(password))) {
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      isAdmin: user.isAdmin,
      pic: user.pic,
      avatar: user.avatar,
      role: user.role,
      meansOfID: user.meansOfID,
      IDpic: user.IDpic,
      bank: user.bank,
      bankAccountName: user.bankAccountName,
      bankAccountNumber: user.bankAccountNumber,
      walletBalance: user.walletBalance,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
      totalNumberOfCampaignsInvested: user.totalNumberOfCampaignsInvested,
      listOfCampaignsInvested: user.listOfCampaignsInvested,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      productReviews: user.productReviews,
      numberOfProductsReviewed: user.numberOfProductReviews,
      totallNumberOfInteractions: user.totalNumberOfInteractions,
      paymentMethod: user.paymentMethod,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await signedUpUser.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.pic = req.body.pic || user.pic;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.role = req.body.role || user.role;
    user.meansOfID = req.body.meansOfID || user.meansOfID;
    user.IDpic = req.body.IDpic || user.IDpic;
    user.bank = req.body.bank || user.bank;
    user.bankAccountName = req.body.bankAccountName || user.bankAccountName;
    user.bankAccountNumber =
      req.body.bankAccountNumber || user.bankAccountNumber;
    user.totalNumberOfCampaignsInvested =
      req.body.totalNumberOfCampaignsInvested ||
      user.totalNumberOfCampaignsInvested;
    user.listOfCampaignsInvested =
      req.body.listOfCampaignsInvested || user.listOfCampaignsInvested;
    user.walletBalance = req.body.walletBalance || user.walletBalance;
    user.businessOrderedFrom =
      req.body.businessOrderedFrom || user.businessOrderedFrom;
    user.numberOfOrderRequests =
      req.body.numberOfOrderRequests || user.numberOfOrderRequests;
    user.quantityOfOrders = req.body.quantityOfOrders || user.quantityOfOrders;
    user.paymentMethod = req.body.paymentMethod || user.paymentMethod;
    user.campaignReviews = req.body.campaignReviews || user.campaignReviews;
    user.numberOfCampaignsReviwed =
      req.body.numberOfCampaignsReviwed || user.numberOfCampaignsReviwed;
    user.productReviews =
      req.body.productReviews || user.productReviewproductReviews;
    user.numberOfProductsReviewed =
      req.body.numberOfProductsReviewed || user.numberOfProductReviews;
    user.totallNumberOfInteractions =
      req.body.totallNumberOfInteractions || user.totalNumberOfInteractions;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      password: updatedUser.password,
      isAdmin: updatedUser.isAdmin,
      pic: updatedUser.pic,
      avatar: updatedUser.avatar,
      role: updatedUser.role,
      meansOfID: updatedUser.meansOfID,
      IDpic: updatedUser.IDpic,
      bank: updatedUser.bank,
      bankAccountName: updatedUser.bankAccountName,
      bankAccountNumber: updatedUser.bankAccountNumber,
      walletBalance: updatedUser.walletBalance,
      businessOrderedFrom: updatedUser.businessOrderedFrom,
      numberOfOrderRequests: updatedUser.numberOfOrderRequests,
      quantityOfOrders: updatedUser.quantityOfOrders,
      totalNumberOfCampaignsInvested:
        updatedUser.totalNumberOfCampaignsInvested,
      listOfCampaignsInvested: updatedUser.listOfCampaignsInvested,
      paymentMethod: updatedUser.paymentMethod,
      campaignReviews: updatedUser.campaignReviews,
      numberOfCampaignsReviwed: updatedUser.numberOfCampaignsReviwed,
      productReviews: updatedUser.productReviews,
      numberOfProductsReviewed: updatedUser.numberOfProductReviews,
      totallNumberOfInteractions: updatedUser.totalNumberOfInteractions,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// Logout User
const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User Logged Out",
  });
});

// Forgot Password
const forgotUserPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}app/individual/password/reset/${resetToken}`;

  const message = `Dear esteemed customer, your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Gaged Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

// Reset Password
const resetUserPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHander("Passwords do not match. Please try again.", 400)
    );
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get User Detail
const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update User password
const updateUserPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update User Profile
const updateUserProfileAdmin = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.body.avatar !== "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Get all users(admin)
const getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)
const getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update User Role -- Admin
const updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete User --Admin
const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  const imageId = user.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

// Create New Order  IndividualProfile or Update a Order  IndividualProfile

const individualCreateBusinessOrderedFrom = catchAsyncErrors(
  async (req, res, next) => {
    const { productId, quantity } = req.body;

    const product = await StoreProduct.findById(productId);
    const businessOrderedFrom = await signedUpBusiness.findById(product.user);

    const businessOrdered = {
      user: req.user._id,
      businessName: businessOrderedFrom.businessName,
      productName: product.productTitle,
      productDescription: product.shortDescription,
      price: product.costPrice,
      category: product.category,
      quantity,
      totalPrice: product.costPrice * quantity,
    };

    const individual = await signedUpUser.findById(req.user._id);

    const isBusinessOrdered = individual.businessOrderedFrom.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isBusinessOrdered) {
    } else {
      individual.businessOrderedFrom.push(businessOrdered);
      individual.businessOrderednumberOfOrderRequests =
        individual.businessOrderedFrom.length;
    }

    await individual.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessOrderedFrom: individual.businessOrderedFrom,
    });
  }
);

// Get Order  IndividualProfile
const getIndividualBusinessOrderedFrom = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.id);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      businessOrderedFrom: individual.businessOrderedFrom,
    });
  }
);

// Delete Order  IndividualProfile
const deleteIndividualBusinessOrderedFrom = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.req.user._id);

    if (!individual) {
      return next(new ErrorHandler("Order not found", 404));
    }

    const businessOrderedFrom = individual.businessOrderedFrom.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfOrderRequests = businessOrderedFrom.length;

    await signedUpUser.findByIdAndUpdate(
      req.query.req.user._id,
      {
        businessOrderedFrom,
        numberOfOrderRequests,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      businessOrderedFrom: individual.businessOrderedFrom,
    });
  }
);

// Create New Campaign Invested BusinessProfile or Update a Campaign Invested BusinessProfile
const createIndividualCampaignInvested = catchAsyncErrors(
  async (req, res, next) => {
    const { campaignId, amountInvested } = req.body;

    const campaign = Campaign.findById(campaignId);
    const organiser = signedUpBusiness.findById(campaign.user);

    const campaignInvested = {
      campaignName: campaign.campaignName,
      campaignCategory: campaign.campaignCategory,
      investorBrief: campaign.investorBrief,
      pitchDeck: campaign.pitchDeck,
      fundingType: campaign.fundingType,
      amountBeingRaised: campaign.amountBeingRaised,
      duration: campaign.duration,
      organiser: organiser,
      campaignLiveStatus: campaign.campaignLiveStatus,
      amountInvested,
    };

    const individual = await signedUpUser.findById(req.user._id);

    const isInvested = individual.listOfCampaignsInvested.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isInvested) {
    } else {
      individual.listOfCampaignsInvested.push(campaignInvested);
      individual.totalNumberOfCampaignsInvested =
        individual.listOfCampaignsInvested.length;
    }

    await individual.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      listOfCampaignsInvested: individual.listOfCampaignsInvested,
    });
  }
);

// Get Campaigns Invested BusinessProfile
const getListOfIndividualCampaignsInvested = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.id);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      listOfCampaignsInvested: individual.listOfCampaignsInvested,
    });
  }
);

// Delete Campaign Invested BusinessProfile
const deleteIndividualCampaignInvested = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.userId);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    const listOfCampaignsInvested = individual.listOfCampaignsInvested.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const totalNumberOfCampaignsInvested = listOfCampaignsInvested.length;

    await signedUpUser.findByIdAndUpdate(
      req.query.businessId,
      {
        listOfCampaignsInvested,
        totalNumberOfCampaignsInvested,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      listOfCampaignsInvested: individual.listOfCampaignsInvested,
    });
  }
);

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createIndividualPersonalProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const product = await StoreProduct.find(productId);

    const organiser = await signedUpBusiness.findById(product.user);

    const review = {
      user: req.user._id,
      name: req.user.firstName + " " + req.user.lastName,
      pic: req.body.pic,
      rating: Number(rating),
      productId: product._id,
      productTitle: product.productTitle,
      business: organiser.businessName,
      ratings: product.ratings,
      shortDescription: product.shortDescription,
      category: product.category,
      productImageOne: product.productImageOne,
      comment,
    };

    const individual = await signedUpUser.findById(req.user._id);

    const isReviewed = individual.productReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
    } else {
      individual.productReviews.push(review);
      individual.numberOfProductsReviewed = individual.productReviews.length;
      individual.totalNumberOfInteractions =
        individual.productReviews.length + individual.campaignReviews.length;
    }

    await individual.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      productReviews: individual.productReviews,
    });
  }
);

// Get Personal Reviews of a individual BusinessProfile
const getIndividualPersonalProductReviews = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.id);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      productReviews: individual.productReviews,
    });
  }
);

// Delete Personal Review
const deleteIndividualPersonalProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.businessId);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    const productReviews = individual.productReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfProductsReviewed = productReviews.length;

    await signedUpUser.findByIdAndUpdate(
      req.query.businessId,
      {
        productReviews,
        numberOfProductsReviewed,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      productReviews: individual.productReviews,
    });
  }
);

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createIndividualPersonalCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const campaign = await Campaign.find(campaignId);

    const organiser = await signedUpBusiness.findById(campaign.user);

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      pic: req.user.pic,
      campaignId: campaign._id,
      campaignName: campaign.campaignName,
      pitchDeck: campaign.pitchDeck,
      fundingType: campaign.fundingType,
      amountBeingraised: campaign.amountBeingraised,
      campaignCategory: campaign.campaignCategory,
      investorBrief: campaign.investorBrief,
      duration: campaign.duration,
      campaignLiveStatus: campaign.campaignLiveStatus,
      organiser: organiser.businessName,
      comment,
    };

    const individual = await signedUpUser.findById(req.user._id);

    const isReviewed = individual.campaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
    } else {
      individual.campaignReviews.push(review);
      individual.numberOfCampaignsReviewed = individual.campaignReviews.length;
      individual.totalNumberOfInteractions =
        individual.campaignReviews.length + individual.productReviews.length;
    }

    await individual.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      campaignReviews: individual.campaignReviews,
    });
  }
);

// Get Personal Reviews of a individual BusinessProfile
const getIndividualPersonalCampaignReviews = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.id);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      campaignReviews: individual.campaignReviews,
    });
  }
);

// Delete Personal Review
const deleteIndividualPersonalCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const individual = await signedUpUser.findById(req.query.businessId);

    if (!individual) {
      return next(new ErrorHandler("User not found", 404));
    }

    const campaignReviews = individual.campaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfCampaignsReviewed = campaignReviews.length;

    await signedUpUser.findByIdAndUpdate(
      req.query.businessId,
      {
        campaignReviews,
        numberOfCampaignsReviewed,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      campaignReviews: individual.campaignReviews,
    });
  }
);

module.exports = {
  registerUser,
  authUser,
  updateUserProfile,
  logoutUser,
  forgotUserPassword,
  resetUserPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfileAdmin,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  individualCreateBusinessOrderedFrom,
  getIndividualBusinessOrderedFrom,
  deleteIndividualBusinessOrderedFrom,
  createIndividualCampaignInvested,
  getListOfIndividualCampaignsInvested,
  deleteIndividualCampaignInvested,
  createIndividualPersonalProductReview,
  getIndividualPersonalProductReviews,
  deleteIndividualPersonalProductReview,
  createIndividualPersonalCampaignReview,
  getIndividualPersonalCampaignReviews,
  deleteIndividualPersonalCampaignReview,
};
