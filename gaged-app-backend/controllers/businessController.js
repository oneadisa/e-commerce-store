const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const StoreProduct = require("../models/storeProductModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const Campaign = require("../models/campaignModels");
const signedUpBusiness = require("../models/signUpBusinessModels");

const registerBusiness = asyncHandler(async (req, res) => {
  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  // folder: "avatars",
  // width: 150,
  // crop: "scale",
  // });

  const {
    businessName,
    accountHolderName,
    email,
    phoneNumber,
    password,
    pic,
    isAdmin,
    role,
    meansOfID,
    IDpic,
    regNum,
    natureOfBusiness,
    businessEmail,
    businessAddress,
    cacCertificate,
    formCO7,
    bank,
    bankAccountName,
    bankAccountNumber,
    storeName,
    storeTagline,
    storeDescription,
    storeLink,
    category,
    storeLogo,
    storeBackground,
    totalNumberOfCampaignsStarted,
    totalNumberOfCampaignsInvested,
    listOfCampaignsStarted,
    listOfCampaignsInvested,
    totalAmountRaised,
    averageRaised,
    numberOfBusinessInvestors,
    listOfBusinessInvestors,
    numberOfIndividualInvestors,
    listOfIndividualInvestors,
    totalNumberOfInvestors,
    walletBalance,
    totalSales,
    storeProducts,
    numberOfStoreProducts,
    deliveryCharge,
    totalRevenue,
    totalProductNumber,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    individualReviews,
    numberOfIndividualReviews,
    businessReviews,
    numberOfBusinessReviews,
    totalNumberOfReviews,
    businessOrders,
    numberOFBusinessOrders,
    individualOrders,
    numberOfIndividualOrders,
    totalNumberOfOrders,
    individualCustomers,
    numberOfIndividualCustomers,
    businessCustomers,
    numberOfBusinessCustomers,
    totalNumberOfCustomers,
    campaignReviews,
    numberOfCampaignsReviwed,
    productReviews,
    numberOfProductsReviewed,
    totallNumberOfInteractions,
    paymentMethod,
  } = req.body;

  const userExists = await signedUpBusiness.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Business Already Exists. Please Log In.");
  }
  const user = await signedUpBusiness.create({
    // avatar: {
    // public_id: myCloud.public_id,
    // url: myCloud.secure_url,
    // },
    businessName,
    accountHolderName,
    email,
    phoneNumber,
    password,
    isAdmin,
    role,
    pic,
    meansOfID,
    IDpic,
    regNum,
    natureOfBusiness,
    businessEmail,
    businessAddress,
    cacCertificate,
    formCO7,
    bank,
    bankAccountName,
    bankAccountNumber,
    storeName,
    storeTagline,
    storeDescription,
    storeLink,
    category,
    storeLogo,
    storeBackground,
    totalNumberOfCampaignsStarted,
    totalNumberOfCampaignsInvested,
    listOfCampaignsStarted,
    listOfCampaignsInvested,
    totalAmountRaised,
    averageRaised,
    numberOfBusinessInvestors,
    listOfBusinessInvestors,
    numberOfIndividualInvestors,
    listOfIndividualInvestors,
    totalNumberOfInvestors,
    walletBalance,
    totalSales,
    storeProducts,
    numberOfStoreProducts,
    deliveryCharge,
    totalRevenue,
    totalProductNumber,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    individualReviews,
    numberOfIndividualReviews,
    businessReviews,
    numberOfBusinessReviews,
    totalNumberOfReviews,
    businessOrders,
    numberOFBusinessOrders,
    individualOrders,
    numberOfIndividualOrders,
    totalNumberOfOrders,
    individualCustomers,
    numberOfIndividualCustomers,
    businessCustomers,
    numberOfBusinessCustomers,
    totalNumberOfCustomers,
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
      businessName: user.businessName,
      accountHolderName: user.accountHolderName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      isAdmin: user.isAdmin,
      role: user.role,
      pic: user.pic,
      token: generateToken(user._id),
      meansOfID: user.meansOfID,
      IDpic: user.IDpic,
      regNum: user.regNum,
      natureOfBusiness: user.natureOfBusiness,
      businessEmail: user.businessEmail,
      businessAddress: user.businessAddress,
      cacCertificate: user.cacCertificate,
      formCO7: user.formCO7,
      bank: user.bank,
      bankAccountName: user.bankAccountName,
      bankAccountNumber: user.bankAccountNumber,
      storeName: user.storeName,
      storeTagline: user.storeTagline,
      storeDescription: user.storeDescription,
      storeLink: user.storeLink,
      category: user.category,
      storeLogo: user.storeLogo,
      storeBackground: user.storeBackground,
      storeProducts: user.storeProducts,
      numberOfStoreProducts: user.numberOfStoreProducts,
      deliveryCharge: user.deliveryCharge,
      totalNumberOfCampaignsStarted: user.totalNumberOfCampaignsStarted,
      totalNumberOdCampaignsInvested: user.totalNumberOdCampaignsInvested,
      listOfCampaignsStarted: user.listOfCampaignsStarted,
      listOfCampaignsInvested: user.listOfCampaignsInvested,
      totalAmountRaised: user.totalAmountRaised,
      averageRaised: user.averageRaised,
      numberOfIndividualInvestors: user.numberOfIndividualInvestors,
      numberOfBusinessInvestors: user.numberOfBusinessInvestors,
      listOfIndividualInvestors: user.listOfIndividualInvestors,
      listOfBusinessInvestors: user.listOfBusinessInvestors,
      totalNumberOfInvestors: user.totalNumberOfInvestors,
      walletBalance: user.walletBalance,
      totalSales: user.totalSales,
      totalRevenue: user.totalRevenue,
      totalProductNumber: user.totalProductNumber,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
      individualReviews: user.individualReviews,
      numberOfIndividualReviews: user.numberOfIndividualReviews,
      businessReviews: user.businessReviews,
      numberOfBusinessReviews: user.numberOfBusinessReviews,
      totalNumberOfReviews: user.totalNumberOfReviews,
      businessOrders: user.businessOrders,
      numberOFBusinessOrders: user.numberOFBusinessOrders,
      individualOrders: user.individualOrders,
      numberOfIndividualOrders: user.numberOfIndividualOrders,
      totalNumberOfOrders: user.totalNumberOfOrders,
      individualCustomers: user.individualCustomers,
      numberOfIndividualCustomers: user.numberofIndividualCustomers,
      businessCustomers: user.businessCustomers,
      numberOfBusinessCustomers: user.numberOfBusinessCustomers,
      totalNumberOfCustomers: user.totalNumberOfCustomers,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      productReviews: user.productReviews,
      numberOfProductsReviewed: user.numberOfProductReviews,
      totallNumberOfInteractions: user.totalNumberOfInteractions,
      paymentMethod: user.paymentMethod,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }

  signedUpBusiness
    .save()
    .then((data) => {
      res.json.stingify(data);
    })
    .catch((error) => {
      res.json.stringify(error);
    });
  sendToken(user, 201, res);
});

// Logout signedUpBusiness
const logoutBusiness = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Business Logged Out",
  });
});

const authBusiness = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await signedUpBusiness.findOne({ email }).select("+password");
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      businessName: user.businessName,
      accountHolderName: user.accountHolderName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      isAdmin: user.isAdmin,
      role: user.role,
      pic: user.pic,
      token: generateToken(user._id),
      meansOfID: user.meansOfID,
      IDpic: user.IDpic,
      regNum: user.regNum,
      natureOfBusiness: user.natureOfBusiness,
      businessEmail: user.businessEmail,
      businessAddress: user.businessAddress,
      cacCertificate: user.cacCertificate,
      formCO7: user.formCO7,
      bank: user.bank,
      bankAccountName: user.bankAccountName,
      bankAccountNumber: user.bankAccountNumber,
      storeName: user.storeName,
      storeTagline: user.storeTagline,
      storeDescription: user.storeDescription,
      storeLink: user.storeLink,
      category: user.category,
      storeLogo: user.storeLogo,
      storeBackground: user.storeBackground,
      totalNumberOfCampaignsStarted: user.totalNumberOfCampaignsStarted,
      totalNumberOdCampaignsInvested: user.totalNumberOdCampaignsInvested,
      listOfCampaignsStarted: user.listOfCampaignsStarted,
      listOfCampaignsInvested: user.listOfCampaignsInvested,
      totalAmountRaised: user.totalAmountRaised,
      averageRaised: user.averageRaised,
      numberOfIndividualInvestors: user.numberOfIndividualInvestors,
      numberOfBusinessInvestors: user.numberOfBusinessInvestors,
      listOfIndividualInvestors: user.listOfIndividualInvestors,
      listOfBusinessInvestors: user.listOfBusinessInvestors,
      totalNumberOfInvestors: user.totalNumberOfInvestors,
      walletBalance: user.walletBalance,
      totalSales: user.totalSales,
      totalRevenue: user.totalRevenue,
      storeProducts: user.storeProducts,
      numberOfStoreProducts: user.numberOfStoreProducts,
      deliveryCharge: user.deliveryCharge,
      totalProductNumber: user.totalProductNumber,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
      individualReviews: user.individualReviews,
      numberOfIndividualReviews: user.numberOfIndividualReviews,
      businessReviews: user.businessReviews,
      numberOfBusinessReviews: user.numberOfBusinessReviews,
      totalNumberOfReviews: user.totalNumberOfReviews,
      businessOrders: user.businessOrders,
      numberOFBusinessOrders: user.numberOFBusinessOrders,
      individualOrders: user.individualOrders,
      numberOfIndividualOrders: user.numberOfIndividualOrders,
      totalNumberOfOrders: user.totalNumberOfOrders,
      individualCustomers: user.individualCustomers,
      numberOfIndividualCustomers: user.numberofIndividualCustomers,
      businessCustomers: user.businessCustomers,
      numberOfBusinessCustomers: user.numberOfBusinessCustomers,
      totalNumberOfCustomers: user.totalNumberOfCustomers,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      productReviews: user.productReviews,
      numberOfProductsReviewed: user.numberOfProductReviews,
      totallNumberOfInteractions: user.totalNumberOfInteractions,
      paymentMethod: user.paymentMethod,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
  sendToken(user, 200, res);
});

const updateBusinessProfile = asyncHandler(async (req, res) => {
  const user = await signedUpBusiness.findById(req.user._id);

  if (user) {
    user.businessName = req.body.businessName || user.businessName;
    user.accountHolderName =
      req.body.accountHolderName || user.accountHolderName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.pic = req.body.pic || user.pic;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.role = req.body.role || user.role;
    user.meansOfID = req.body.meansOfID || user.meansOfID;
    user.IDpic = req.body.IDpic || user.IDpic;
    user.regNum = req.body.regNum || user.regNum;
    user.natureOfBusiness = req.body.natureOfBusiness || user.natureOfBusiness;
    user.businessEmail = req.body.businessEmail || user.businessEmail;
    user.businessAddress = req.body.businessAddress || user.businessAddress;
    user.cacCertificate = req.body.cacCertificate || user.cacCertificate;
    user.formCO7 = req.body.formCO7 || user.formCO7;
    user.bank = req.body.bank || user.bank;
    user.bankAccountName = req.body.bankAccountName || user.bankAccountName;
    user.bankAccountNumber =
      req.body.bankAccountNumber || user.bankAccountNumber;
    user.storeName = req.body.storeName || user.storeName;
    user.storeTagline = req.body.storeTagline || user.storeTagline;
    user.storeDescription = req.body.storeDescription || user.storeDescription;
    user.storeLink = req.body.storeLink || user.storeLink;
    user.category = req.body.category || user.category;
    user.storeLogo = req.body.storeLogo || user.storeLogo;
    user.storeBackground = req.body.storeBackground || user.storeBackground;
    user.storeProducts = req.body.storeProducts || user.storeProducts;
    user.numberOfStoreProducts =
      req.body.numberOfStoreProducts || user.numberOfStoreProducts;
    user.deliveryCharge = req.body.deliveryCharge || user.deliveryCharge;
    user.totalNumberOfCampaignsStarted =
      req.body.totalNumberOfCampaignsStarted ||
      user.totalNumberOfCampaignsStarted;
    user.totalNumberOfCampaignsInvested =
      req.body.totalNumberOfCampaignsInvested ||
      user.totalNumberOfCampaignsInvested;
    user.listOfCampaignsStarted =
      req.body.listOfCampaignsStarted || user.listOfCampaignsStarted;
    user.listOfCampaignsInvested =
      req.body.listOfCampaignsInvested || user.listOfCampaignsInvested;
    user.totalAmountRaised =
      req.body.totalAmountRaised || user.totalAmountRaised;
    user.averageRaised = req.body.averageRaised || user.averageRaised;
    user.numberOfIndividualInvestors =
      req.body.numberOfIndividualInvestors || user.numberOfIndividualInvestors;
    user.numberOfBusinessInvestors =
      req.body.numberOfBusinessInvestors || user.numberOfBusinessInvestors;
    user.totalNumberOfInvestors =
      req.body.totalNumberOfInvestors || user.totalNumberOfInvestors;
    user.listOfBusinessInvestors =
      req.body.listOfBusinessInvestors || user.listOfBusinessInvestors;
    user.listOfIndividualInvestors =
      req.body.listOfIndiviualInvestors || user.listOfIndividualInvestors;
    user.walletBalance = req.body.walletBalance || user.walletBalance;
    user.totalSales = req.body.totalSales || user.totalSales;
    user.totalRevenue = req.body.totalRevenue || user.totalRevenue;
    user.totalProductNumber =
      req.body.totalProductNumber || user.totalProductNumber;
    user.businessOrderedFrom =
      req.body.businessOrderedFrom || user.businessOrderedFrom;
    user.numberOfOrderRequests =
      req.body.numberOfOrderRequests || user.numberOfOrderRequests;
    user.quantityOfOrders = req.body.quantityOfOrders || user.quantityOfOrders;
    user.individualReviews =
      req.body.individualReviews || user.individualReviews;
    user.numberOfIndividualReviews =
      req.body.numberOfIndividualReviews || user.numberOfIndividualReviews;
    user.businessReviews = req.body.businessReviews || user.businessReviews;
    user.numberOfBusinessReviews =
      req.body.numberOfBusinessReviews || user.numberOfBusinessReviews;
    user.totalNumberOfReviews =
      req.body.totalNumberOfReviews || user.totalNumberOfReviews;
    user.businessOrder = req.body.businessOrder || user.businessOrder;
    user.numberOFBusinessOrders =
      req.body.numberOFBusinessOrders || user.numberOFBusinessOrders;
    user.individualOrders = req.body.individualOrders || user.individualOrders;
    user.numberOfIndividualOrders =
      req.body.numberOfIndividualOrders || user.numberOfIndividualOrders;
    user.totalNumberOfOrders =
      req.body.totalNumberOfOrders || user.totalNumberOfOrders;
    user.individualCustomers =
      req.body.individualCustomers || user.individualCustomers;
    user.numberOfIndividualCustomers =
      req.body.numberOfIndividualCustomers || user.numberofIndividualCustomers;
    user.businessCustomers =
      req.body.businessCustomers || user.businessCustomers;
    user.numberOfBusinessCustomers =
      req.body.numberOfBusinessCustomers || user.numberOfBusinessCustomers;
    user.totalNumberOfCustomers =
      req.body.totalNumberOfCustomers || user.totalNumberOfCustomers;
    user.campaignReviews = req.body.campaignReviews || user.campaignReviews;
    user.numberOfCampaignsReviwed =
      req.body.numberOfCampaignsReviwed || user.numberOfCampaignsReviwed;
    user.productReviews =
      req.body.productReviews || user.productReviewproductReviews;
    user.numberOfProductsReviewed =
      req.body.numberOfProductsReviewed || user.numberOfProductReviews;
    user.totallNumberOfInteractions =
      req.body.totallNumberOfInteractions || user.totalNumberOfInteractions;
    user.paymentMethod = req.body.paymentMethod || user.paymentMethod;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedBusiness = await user.save();

    res.json({
      _id: updatedBusiness._id,
      businessName: updatedBusiness.businessName,
      accountHolderName: updatedBusiness.accountHolderName,
      email: updatedBusiness.email,
      phoneNumber: updatedBusiness.phoneNumber,
      isAdmin: updatedBusiness.isAdmin,
      role: updatedBusiness.role,
      pic: updatedBusiness.pic,
      token: generateToken(updatedBusiness._id),
      meansOfID: updatedBusiness.meansOfID,
      IDpic: updatedBusiness.IDpic,
      regNum: updatedBusiness.regNum,
      natureOfBusiness: updatedBusiness.natureOfBusiness,
      businessEmail: updatedBusiness.businessEmail,
      businessAddress: updatedBusiness.businessAddress,
      cacCertificate: updatedBusiness.cacCertificate,
      formCO7: updatedBusiness.formCO7,
      bank: updatedBusiness.bank,
      bankAccountName: updatedBusiness.bankAccountName,
      bankAccountNumber: updatedBusiness.bankAccountNumber,
      storeName: updatedBusiness.storeName,
      storeTagline: updatedBusiness.storeTagline,
      storeDescription: updatedBusiness.storeDescription,
      storeLink: updatedBusiness.storeLink,
      category: updatedBusiness.category,
      storeLogo: updatedBusiness.storeLogo,
      storeBackground: updatedBusiness.storeBackground,
      storeProducts: updatedBusiness.storeProducts,
      numberOfStoreProducts: updatedBusiness.numberOfStoreProducts,
      deliveryCharge: updatedBusiness.deliveryCharge,
      totalNumberOfCampaignsStarted:
        updatedBusiness.totalNumberOfCampaignsStarted,
      totalNumberOdCampaignsInvested:
        updatedBusiness.totalNumberOdCampaignsInvested,
      listOfCampaignsStarted: updatedBusiness.listOfCampaignsStarted,
      listOfCampaignsInvested: updatedBusiness.listOfCampaignsInvested,
      totalAmountRaised: updatedBusiness.totalAmountRaised,
      averageRaised: updatedBusiness.averageRaised,
      numberOfIndividualInvestors: updatedBusiness.numberOfIndividualInvestors,
      numberOfBusinessInvestors: updatedBusiness.numberOfBusinessInvestors,
      listOfIndividualInvestors: updatedBusiness.listOfIndividualInvestors,
      listOfBusinessInvestors: updatedBusiness.listOfBusinessInvestors,
      totalNumberOfInvestors: updatedBusiness.totalNumberOfInvestors,
      walletBalance: updatedBusiness.walletBalance,
      totalSales: updatedBusiness.totalSales,
      totalRevenue: updatedBusiness.totalRevenue,
      totalProductNumber: updatedBusiness.totalProductNumber,
      businessOrderedFrom: updatedBusiness.businessOrderedFrom,
      numberOfOrderRequests: updatedBusiness.numberOfOrderRequests,
      quantityOfOrders: updatedBusiness.quantityOfOrders,
      individualReviews: updatedBusiness.individualReviews,
      numberOfIndividualReviews: updatedBusiness.numberOfIndividualReviews,
      businessReviews: updatedBusiness.businessReviews,
      numberOfBusinessReviews: updatedBusiness.numberOfBusinessReviews,
      totalNumberOfReviews: updatedBusiness.totalNumberOfReviews,
      businessOrders: updatedBusiness.businessOrders,
      numberOFBusinessOrders: updatedBusiness.numberOFBusinessOrders,
      individualOrders: updatedBusiness.individualOrders,
      numberOfIndividualOrders: updatedBusiness.numberOfIndividualOrders,
      totalNumberOfOrders: updatedBusiness.totalNumberOfOrders,
      individualCustomers: updatedBusiness.individualCustomers,
      numberOfIndividualCustomers: updatedBusiness.numberofIndividualCustomers,
      businessCustomers: updatedBusiness.businessCustomers,
      numberOfBusinessCustomers: updatedBusiness.numberOfBusinessCustomers,
      totalNumberOfCustomers: updatedBusiness.totalNumberOfCustomers,
      campaignReviews: updatedBusiness.campaignReviews,
      numberOfCampaignsReviwed: updatedBusiness.numberOfCampaignsReviwed,
      productReviews: updatedBusiness.productReviews,
      numberOfProductsReviewed: updatedBusiness.numberOfProductReviews,
      totallNumberOfInteractions: updatedBusiness.totalNumberOfInteractions,
      paymentMethod: updatedBusiness.paymentMethod,
    });
  } else {
    res.status(404);
    throw new Error("Business Not Found");
  }
});

// Forgot Password
const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("Business not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/app/business/password/reset/${resetToken}`;

  const message = `Hello esteemed customer, your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

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

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await signedUpBusiness.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler("Passwords do not match. Please try again.", 400)
    );
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get Business Detail
const getBusinessDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update signedUpBusiness password
const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update signedUpBusiness Profile
const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newBusinessData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await signedUpBusiness.findByIdAndUpdate(
    req.user.id,
    newBusinessData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    user,
  });
});

// Get all users(admin)
const getAllBusiness = catchAsyncErrors(async (req, res, next) => {
  const users = await signedUpBusiness.find();

  res.status(200).json({
    success: true,
    users,
  });

  const resultPerPage = 40;
  const businessCount = await signedUpBusiness.countDocuments();
  const apiFeature = new ApiFeatures(signedUpBusiness.find(), req.query)
    .search()
    .filter();
  let businesses = await apiFeature.query;
  let filteredBusinessCount = businesses.length;
  apiFeature.pagination(resultPerPage);
  businesses = await apiFeature.query.clone();
  if (!businesses) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }
  res.status(200).json({
    success: true,
    businesses,
    businessCount,
    resultPerPage,
    filteredBusinessCount,
  });
});

// Get single user (admin)
const getSingleBusiness = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`Business does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// update Business Role -- Admin
const updateBusinessRole = catchAsyncErrors(async (req, res, next) => {
  const newBusinessData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await signedUpBusiness.findByIdAndUpdate(req.params.id, newBusinessData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete signedUpBusiness --Admin
const deleteBusiness = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`Business does not exist with Id: ${req.params.id}`, 400)
    );
  }

  const imageId = user.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);

  await user.remove();

  res.status(200).json({
    success: true,
    message: "Business Deleted Successfully",
  });
});

//Get StoreProducts of a single Business Product

const findStoreProducts = catchAsyncErrors(async (req, res, next) => {
  const { businessId } = req.body;

  const products = StoreProduct.find({ user: businessId });

  if (!products) {
    return next(new ErrorHandler("No store products, yet.", 404));
  }
  res.status(200).json({
    success: true,
    products,
  });
});

// Create New CampaignStarted BusinessProfile or Update a CampaignStarted BusinessProfile
const createCampaignStarted = catchAsyncErrors(async (req, res, next) => {
  const {
    campaignName,
    pitchDeck,
    fundingType,
    amountBeingRaised,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
    pledged_profit_to_lenders,
    amountToBeRepaid,
    firstPaymentDate,
    endDate,
    endDatePledgedProfit,
    firstPaymentDateString,
    endDateString,
    endDatePledgedProfitString,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
  } = req.body;

  const campaignStarted = {
    campaignName,
    pitchDeck,
    fundingType,
    amountBeingRaised,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
    pledged_profit_to_lenders,
    amountToBeRepaid,
    firstPaymentDate,
    endDate,
    endDatePledgedProfit,
    firstPaymentDateString,
    endDateString,
    endDatePledgedProfitString,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
  };

  campaignStarted.amountToBeRepaid =
    campaignStarted.amountRaised +
    campaignStarted.amountRaised * campaignStarted.pledged_profit_to_lenders;
  let numWeeks = campaignStarted.duration;
  var now = new Date().getTime();
  campaignStarted.endDate = now + numWeeks * 7 * 1000 * 60 * 60 * 24;
  campaignStarted.endDateString = new Date(campaignStarted.endDate);
  // new Date(now + numWeeks * 7 * 1000 * 60 * 60 * 24);
  campaignStarted.endDatePledgedProfit =
    now +
    campaignStarted.duration * (7 * 1000 * 60 * 60 * 24) +
    campaignStarted.duration_pledged_profit * (30 * 1000 * 60 * 60 * 24);
  campaignStarted.endDatePledgedProfitString = new Date(
    campaignStarted.endDatePledgedProfit
  );
  const repaymentTime = Math.abs(
    campaignStarted.endDatePledgedProfit - campaignStarted.endDate
  );
  const timePerPayment =
    repaymentTime /
    (campaignStarted.duration_pledged_profit /
      campaignStarted.repayment_schedule_pledged_profit);
  campaignStarted.firstPaymentDate = campaignStarted.endDate + timePerPayment;
  campaignStarted.firstPaymentDateString = new Date(
    campaignStarted.firstPaymentDate
  );

  const business = await signedUpBusiness.findById(req.user._id);

  const isStarted = business.listOfCampaignsStarted.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isStarted) {
    business.listOfCampaignsStarted.push(campaignStarted);
    business.totalNumberOfCampaignsStarted =
      business.listOfCampaignsStarted.length;
  } else {
    business.listOfCampaignsStarted.push(campaignStarted);
    business.totalNumberOfCampaignsStarted =
      business.listOfCampaignsStarted.length;
  }

  let amount = 0;
  business.listOfCampaignsStarted.forEach((rev) => {
    amount += rev.amountRaised;
  });

  business.totalAmountRaised = amount;
  business.averageRaised = amount / business.listOfCampaignsStarted.length;

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfCampaignsStarted: business.listOfCampaignsStarted,
  });
});

// Get CampaignsStarted BusinessProfile
const getListOfCampaignsStarted = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfCampaignsStarted: business.listOfCampaignsStarted,
  });
});

// Delete CampaignStarted BusinessProfile
const deleteCampaignStarted = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignsStarted = business.listOfCampaignsStarted.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let amount = 0;
  listOfCampaignsStarted.forEach((rev) => {
    amount += rev.amountRaised;
  });
  let averageRaised = 0;
  if (listOfCampaignsStarted.length === 0) {
    averageRaised = 0;
  } else {
    averageRaised = amount / listOfCampaignsStarted.length;
  }
  const totalNumberOfCampaignsStarted = listOfCampaignsStarted.length;
  const totalAmountRaised = amount;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfCampaignsStarted,
      totalAmountRaised,
      averageRaised,
      totalNumberOfCampaignsStarted,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfCampaignsStarted: business.listOfCampaignsStarted,
  });
});

const createCampaignPayout = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const campaign = Campaign.findById(campaignId);
  const organiser = signedUpBusiness.findById(campaign.user);

  const repaymentTime = Math.abs(
    campaign.endDatePledgedProfit - campaign.endDate
  );
  var numberOfRepayments = repaymentTime / campaign.timePerPayment;
  var numberOfTimesPaidAlready =
    repaymentTime / campaign.timePerPayment - numberOfRepayments;
  setTimeout(function () {}, campaign.timePerPayment);
  const amountRepay =
    Number(amountInvested) +
    (campaign.pledged_profit_to_lenders / 100) * Number(amountInvested);
  const amountAlreadyRaise =
    (numberOfTimesPaidAlready *
      ((campaign.pledged_profit_to_lenders / 100) * Number(amountInvested))) /
    (repaymentTime / campaign.timePerPayment);
  const amountPerTime = amountRepay / (repaymentTime / campaign.timePerPayment);

  const campaignInvested = {
    user: req.user._id,
    campaignId: campaignId,
    campaignName: campaign.campaignName,
    campaignCategory: campaign.campaignCategory,
    investorBrief: campaign.investorBrief,
    pitchDeck: campaign.pitchDeck,
    fundingType: campaign.fundingType,
    amountBeingRaised: campaign.amountBeingRaised,
    duration: campaign.duration,
    organiser: organiser.businessName,
    campaignLiveStatus: campaign.campaignLiveStatus,
    amountInvested,
    firstPaymentDateString: campaign.firstPaymentDateString,
    endDateString: campaign.endDateString,
    endDatePledgedProfitString: campaign.endDatePledgedProfitString,
    pledged_profit_to_lenders: campaign.pledged_profit_to_lenders,
    amountToBeRepaid: amountRepay,
    firstPaymentDate: campaign.firstPaymentDate,
    endDate: campaign.endDate,
    endDatePledgedProfit: campaign.endDatePledgedProfit,
    duration_pledged_profit: campaign.duration_pledged_profit,
    repayment_schedule_pledged_profit:
      campaign.repayment_schedule_pledged_profit,
  };

  const business = await signedUpBusiness.findById(req.user._id);

  const isStarted = business.listOfCampaignPayouts.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isStarted) {
    business.listOfCampaignPayouts.push(campaignInvested);
    business.totalNumberOfCampaignPayouts =
      business.listOfCampaignPayouts.length;
    if (numberOfRepayments > 0) {
      organiser.walletBalance -=
        (Number(amountInvested) +
          campaign.pledged_profit_to_lenders * Number(amountInvested)) /
        (campaign.duration_pledged_profit /
          campaign.repayment_schedule_pledged_profit);
      req.user.walletBalance +=
        (Number(amountInvested) +
          campaign.pledged_profit_to_lenders * Number(amountInvested)) /
        (campaign.duration_pledged_profit /
          campaign.repayment_schedule_pledged_profit);
      numberOfRepayments -= 1;
    }
  } else {
    business.listOfCampaignPayouts.push(campaignInvested);
    business.totalNumberOfCampaignPayouts =
      business.listOfCampaignPayouts.length;
    if (numberOfRepayments > 0) {
      organiser.walletBalance -=
        (Number(amountInvested) +
          campaign.pledged_profit_to_lenders * Number(amountInvested)) /
        (campaign.duration_pledged_profit /
          campaign.repayment_schedule_pledged_profit);
      req.user.walletBalance +=
        (Number(amountInvested) +
          campaign.pledged_profit_to_lenders * Number(amountInvested)) /
        (campaign.duration_pledged_profit /
          campaign.repayment_schedule_pledged_profit);
      numberOfRepayments -= 1;
    }
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfCampaignPayouts: business.listOfCampaignPayouts,
  });
});

// Get Campaigns Invested BusinessProfile
const getListOfCampaignsPayouts = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfCampaignPayouts: business.listOfCampaignPayouts,
  });
});

// Get One Campaign Invested BusinessProfile
const getParticularCampaignPayouts = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.user._id);
    const campaign = await Campaign.findById(req.params.id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    business.listOfCampaignPayouts.find({
      campaignName: campaign.campaignName,
    });

    res.status(200).json({
      success: true,
      listOfCampaignPayouts: business.listOfCampaignPayouts,
    });
  }
);

// Delete Campaign Invested BusinessProfile
const deleteCampaignPayout = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignPayouts = business.listOfCampaignPayouts.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfCampaignPayouts = listOfCampaignPayouts.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfCampaignPayouts,
      totalNumberOfCampaignPayouts,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfCampaignPayouts: business.listOfCampaignPayouts,
  });
});

// Create New Campaign Invested BusinessProfile or Update a Campaign Invested BusinessProfile
const createCampaignInvested = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const campaign = Campaign.findById(campaignId);
  const organiser = signedUpBusiness.findById(campaign.user);

  const campaignInvested = {
    user: req.user._id,
    campaignId: campaignId,
    campaignName: campaign.campaignName,
    campaignCategory: campaign.campaignCategory,
    investorBrief: campaign.investorBrief,
    pitchDeck: campaign.pitchDeck,
    fundingType: campaign.fundingType,
    amountBeingRaised: campaign.amountBeingRaised,
    duration: campaign.duration,
    organiser: organiser.businessName,
    campaignLiveStatus: campaign.campaignLiveStatus,
    amountInvested,
    firstPaymentDateString: campaign.firstPaymentDateString,
    endDateString: campaign.endDateString,
    endDatePledgedProfitString: campaign.endDatePledgedProfitString,
  };

  const business = await signedUpBusiness.findById(req.user._id);

  business.listOfCampaignsInvested.push(campaignInvested);
  business.totalNumberOfCampaignsInvested =
    business.listOfCampaignsInvested.length;

  // const isStarted = business.listOfCampaignsInvested.find(
  // (rev) => rev.user.toString() === req.user._id.toString()
  // );

  // if (isStarted) {
  // business.listOfCampaignsInvested.push(campaignInvested);
  // business.totalNumberOfCampaignsInvested =
  // business.listOfCampaignsInvested.length;
  // } else {
  // business.listOfCampaignsInvested.push(campaignInvested);
  // business.totalNumberOfCampaignsInvested =
  // business.listOfCampaignsInvested.length;
  // }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});

// Get Campaigns Invested BusinessProfile
const getListOfCampaignsInvested = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});

// Get One Campaign Invested BusinessProfile
const getParticularCampaignsInvested = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.user._id);
    const campaign = await Campaign.findById(req.params.id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    business.listOfCampaignsInvested.find({
      campaignName: campaign.campaignName,
    });

    res.status(200).json({
      success: true,
      listOfCampaignsInvested: business.listOfCampaignsInvested,
    });
  }
);

// Delete Campaign Invested BusinessProfile
const deleteCampaignInvested = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignsInvested = business.listOfCampaignsInvested.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfCampaignsInvested = listOfCampaignsInvested.length;

  await signedUpBusiness.findByIdAndUpdate(
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
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});

// Create New Business Investor BusinessProfile or Update a Business Investor BusinessProfile

const createBusinessInvestor = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const campaign = await Campaign.findById(campaignId);
  const businessInvested = campaign.user;

  const businessInvestor = {
    user: req.user._id,
    name: req.user.businessName,
    phoneNumber: req.user.phoneNumber,
    email: req.user.email,
    campaignInvested: campaign.campaignName,
    amountInvested,
    firstPaymentDateString: campaign.firstPaymentDateString,
    endDateString: campaign.endDateString,
    endDatePledgedProfitString: campaign.endDatePledgedProfitString,
  };

  const business = await signedUpBusiness.findById(businessInvested);

  const isbusinessInvested = business.listOfBusinessInvestors.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isbusinessInvested) {
    business.listOfBusinessInvestors.push(businessInvestor);
    business.numberOfBusinessInvestors =
      business.listOfBusinessInvestors.length;
    business.totalNumberOfInvestors =
      business.listOfIndividualInvestors.length +
      business.listOfBusinessInvestors.length;
  } else {
    business.listOfBusinessInvestors.push(businessInvestor);
    business.numberOfBusinessInvestors =
      business.listOfBusinessInvestors.length;
    business.totalNumberOfInvestors =
      business.listOfIndividualInvestors.length +
      business.listOfBusinessInvestors.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfBusinessInvestors: business.listOfBusinessInvestors,
  });
});

// Get Business Invested BusinessProfile
const getBusinessInvestors = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfBusinessInvestors: business.listOfBusinessInvestors,
  });
});

// Delete Business Invested BusinessProfile
const deleteBusinessInvestor = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfBusinessInvestors = business.listOfBusinessInvestors.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfBusinessInvestors = listOfBusinessInvestors.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfBusinessInvestors,
      numberOfBusinessInvestors,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfBusinessInvestors: business.listOfBusinessInvestors,
  });
});

// Create New Individual Invested IndividualProfile or Update a Individual Invested IndividualProfile

const createIndividualInvestor = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const campaign = await Campaign.findById(campaignId);
  const businessInvested = campaign.user;

  const individualInvestor = {
    user: req.user._id,
    name: req.user.firstName + "" + req.user.lastName,
    phoneNumber: req.user.phoneNumber,
    email: req.user.email,
    campaignInvested: campaign.campaignName,
    amountInvested,
    firstPaymentDateString: campaign.firstPaymentDateString,
    endDateString: campaign.endDateString,
    endDatePledgedProfitString: campaign.endDatePledgedProfitString,
  };

  const business = await signedUpBusiness.findById(businessInvested);

  const isIndividualInvested = business.listOfIndividualInvestors.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isIndividualInvested) {
    business.listOfIndividualInvestors.push(individualInvestor);
    business.numberOfIndividualInvestors =
      business.listOfIndividualInvestors.length;
    business.totalNumberOfInvestors =
      business.listOfBusinessInvestors.length +
      business.listOfIndividualInvestors.length;
  } else {
    business.listOfIndividualInvestors.push(individualInvestor);
    business.numberOfIndividualInvestors =
      business.listOfIndividualInvestors.length;
    business.totalNumberOfInvestors =
      business.listOfBusinessInvestors.length +
      business.listOfIndividualInvestors.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfIndividualInvestors: business.listOfIndividualInvestors,
  });
});

// Get Individual Invested IndividualProfile
const getIndividualInvestors = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Individual not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfIndividualInvestors: business.listOfIndividualInvestors,
  });
});

// Delete Individual Invested IndividualProfile
const deleteIndividualInvestor = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Individual not found", 404));
  }

  const listOfIndividualInvestors = business.listOfIndividualInvestors.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfIndividualInvestors = listOfIndividualInvestors.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfIndividualInvestors,
      numberOfIndividualInvestors,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfIndividualInvestors: business.listOfIndividualInvestors,
  });
});

// Create New Order  BusinessProfile or Update a Order  BusinessProfile

const createBusinessOrderedFrom = catchAsyncErrors(async (req, res, next) => {
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

  const business = await signedUpBusiness.findById(req.user._id);

  const isBusinessOrdered = business.businessOrderedFrom.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isBusinessOrdered) {
  } else {
    business.businessOrderedFrom.push(businessOrdered);
    business.numberOfOrderRequests = business.businessOrderedFrom.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessOrderedFrom: business.businessOrderedFrom,
  });
});

// Get Order  BusinessProfile
const getBusinessOrderedFrom = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Order not found", 404));
  }

  res.status(200).json({
    success: true,
    businessOrderedFrom: business.businessOrderedFrom,
  });
});

// Delete Order  BusinessProfile
const deleteBusinessOrderedFrom = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.req.user._id);

  if (!business) {
    return next(new ErrorHandler("Order not found", 404));
  }

  const businessOrderedFrom = business.businessOrderedFrom.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfOrderRequests = businessOrderedFrom.length;

  await signedUpBusiness.findByIdAndUpdate(
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
    businessOrderedFrom: business.businessOrderedFrom,
  });
});

// Create New Individual Review BusinessProfile or Update an Individual review BusinessProfile
const createIndividualReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const product = await StoreProduct.findById(productId);

  const review = {
    user: req.user._id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    pic: req.body.pic,
    rating: Number(rating),
    product: {
      productId: product._id,
      productName: product.productTitle,
    },
    comment,
  };

  const business = await signedUpBusiness.findById(product.user);

  const isReviewed = business.individualReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    business.individualReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    business.individualReviews.push(review);
    business.numberOfIndividualReviews = business.individualReviews.length;
    business.totalNumberOfReviews =
      business.individualReviews.length + business.businessReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    individualReviews: business.individualReviews,
  });
});

// Get Individual Reviews of a business BusinessProfile
const getIndividualReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    individualReviews: business.individualReviews,
  });
});

// Delete Individual Review
const deleteIndividualReview = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const individualReviews = business.individualReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfIndividualReviews = individualReviews.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      individualReviews,
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
    individualReviews: business.individualReviews,
  });
});

// Create New Business Review BusinessProfile or Update an Business review BusinessProfile
const createBusinessReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const product = await StoreProduct.findById(productId);

  const review = {
    user: req.user._id,
    businessName: req.user.businessNameName,
    pic: req.body.pic,
    rating: Number(rating),
    product: {
      productId: product._id,
      productName: product.productTitle,
    },
    comment,
  };

  const business = await signedUpBusiness.findById(product.user);

  const isReviewed = business.businessReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    business.businessReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    business.businessReviews.push(review);
    business.numberOfBusinessReviews = business.businessReviews.length;
    business.totalNumberOfReviews =
      business.individualReviews.length + business.businessReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    BusinessReviews: business.businessReviews,
  });
});

// Get Business Reviews of a business BusinessProfile
const getBusinessReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessReviews: business.businessReviews,
  });
});

// Delete Business Review
const deleteBusinessReview = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const businessReviews = business.businessReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfBusinessReviews = businessReviews.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      businessReviews,
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
    businessReviews: business.businessReviews,
  });
});

// Create New Business Order BusinessProfile or Update an Business Order BusinessProfile
const createBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;

  const product = await StoreProduct.find(productId);

  const order = {
    user: req.user._id,
    businessName: req.user.businessName,
    pic: req.body.pic,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    productOrdered: {
      productId: product._id,
      productName: product.productTitle,
    },
  };

  const business = await signedUpBusiness.findById(product.user);

  const isOrdered = business.businessOrders.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isOrdered) {
  } else {
    business.businessOrders.push(order);
    business.numberOfBusinessOrders = business.businessOrders.length;
    business.totalNumberOfOrders =
      business.individualOrders.length + business.businessOrders.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessOrders: business.businessOrders,
  });
});

// Get Business Orders of a business BusinessProfile
const getBusinessOrders = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessOrders: business.businessOrders,
  });
});

// Delete Business Order
const deleteBusinessOrder = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const businessOrders = business.businessOrders.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfBusinessOrders = businessOrders.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
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
    businessOrders: business.businessOrders,
  });
});

// Create New Business Customer BusinessProfile or Update an Business Customer BusinessProfile
const createBusinessCustomer = catchAsyncErrors(async (req, res, next) => {
  const { businessId, productId } = req.body;

  const product = await StoreProduct.find(productId);

  const customer = {
    user: req.user._id,
    businessName: req.user.businessName,
    pic: req.body.pic,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    productBought: {
      productId: product._id,
      productName: product.productTitle,
    },
  };

  const business = await signedUpBusiness.findById(businessId);

  const isBought = business.businessCustomers.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isBought) {
  } else {
    business.businessCustomers.push(customer);
    business.numberOfBusinessCustomers = business.businessCustomers.length;
    business.totalNumberOfCustomers =
      business.individualCustomers.length + business.businessCustomers.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessCustomers: business.businessCustomers,
  });
});

// Get Business Customers of a business BusinessProfile
const getBusinessCustomers = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCustomers: business.businessCustomers,
  });
});

// Delete Business Customer
const deleteBusinessCustomer = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const businessCustomers = business.businessCustomers.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfBusinessCustomers = businessCustomers.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
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
    businessCustomers: business.businessCustomers,
  });
});

// Create New individual Customer individualProfile or Update an individual Customer individualProfile
const createindividualCustomer = catchAsyncErrors(async (req, res, next) => {
  const { businessId, productId } = req.body;

  const product = await StoreProduct.find(productId);

  const customer = {
    user: req.user._id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    pic: req.body.pic,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    productBought: {
      productId: product._id,
      productName: product.productTitle,
    },
  };

  const business = await signedUpBusiness.findById(businessId);

  const isBought = business.individualCustomers.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isBought) {
  } else {
    business.individualCustomers.push(customer);
    business.numberOfindividualCustomers = business.individualCustomers.length;
    business.totalNumberOfCustomers =
      business.businessCustomers.length + business.individualCustomers.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    individualCustomers: business.individualCustomers,
  });
});

// Get individual Customers of a individual individualProfile
const getIndividualCustomers = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    individualCustomers: business.individualCustomers,
  });
});

// Delete individual Customer
const deleteindividualCustomer = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const individualCustomers = business.individualCustomers.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfindividualCustomers = individualCustomers.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      individualCustomers,
      numberOfindividualCustomers,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    individualCustomers: business.individualCustomers,
  });
});

// Create New individual Order individualProfile or Update an individual Order individualProfile
const createindividualOrder = catchAsyncErrors(async (req, res, next) => {
  const { businessId, productId } = req.body;

  const product = await StoreProduct.find(productId);

  const order = {
    user: req.user._id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    pic: req.body.pic,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    productOrdered: {
      productId: product._id,
      productName: product.productTitle,
    },
  };

  const business = await signedUpBusiness.findById(businessId);

  const isOrdered = business.individualOrders.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isOrdered) {
  } else {
    business.individualOrders.push(order);
    business.numberOfindividualOrders = business.individualOrders.length;
    business.totalNumberOfOrders =
      business.businessOrders.length + business.individualOrders.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    individualOrders: business.individualOrders,
  });
});

// Get individual Orders of a individual individualProfile
const getindividualOrders = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    individualOrders: business.individualOrders,
  });
});

// Delete individual Order
const deleteindividualOrder = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const individualOrders = business.individualOrders.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfindividualOrders = individualOrders.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      individualOrders,
      numberOfindividualOrders,
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
});

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createPersonalProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const product = await StoreProduct.find(productId);

  const organiser = await signedUpBusiness.findById(product.user);
  const review = {
    user: req.user._id,
    name: req.user.businessName,
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

  const business = await signedUpBusiness.findById(req.user._id);

  const isReviewed = business.productReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isReviewed) {
  } else {
    business.productReviews.push(review);
    business.numberOfProductsReviewed = business.productReviews.length;
    business.totalNumberOfInteractions =
      business.productReviews.length + business.campaignReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    productReviews: business.productReviews,
  });
});

// Get Personal Reviews of a business BusinessProfile
const getPersonalProductReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    productReviews: business.productReviews,
  });
});

// Delete Personal Review
const deletePersonalProductReview = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const productReviews = business.productReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfProductsReviewed = productReviews.length;

  await signedUpBusiness.findByIdAndUpdate(
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
    productReviews: business.productReviews,
  });
});

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createPersonalCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const campaign = await Campaign.findById(campaignId);

    const organiser = await signedUpBusiness.findById(campaign.user);

    const review = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.user.pic,
      campaignId: campaign._id,
      campaignName: campaign.campaignName,
      pitchDeck: campaign.pitchDeck,
      fundingType: campaign.fundingType,
      amountBeingRaised: campaign.amountBeingRaised,
      campaignCategory: campaign.campaignCategory,
      investorBrief: campaign.investorBrief,
      duration: campaign.duration,
      campaignLiveStatus: campaign.campaignLiveStatus,
      organiser: organiser.businessName,
      comment,
    };

    const business = await signedUpBusiness.findById(req.user._id);

    const isReviewed = business.campaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      business.campaignReviews.push(review);
      business.numberOfCampaignsReviewed = business.campaignReviews.length;
      business.totalNumberOfInteractions =
        business.campaignReviews.length + business.productReviews.length;
    } else {
      business.campaignReviews.push(review);
      business.numberOfCampaignsReviewed = business.campaignReviews.length;
      business.totalNumberOfInteractions =
        business.campaignReviews.length + business.productReviews.length;
    }

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      campaignReviews: business.campaignReviews,
    });
  }
);

// Get Personal Reviews of a business BusinessProfile
const getPersonalCampaignReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    campaignReviews: business.campaignReviews,
  });
});

// Delete Personal Review
const deletePersonalCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.businessId);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const campaignReviews = business.campaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfCampaignsReviewed = campaignReviews.length;

    await signedUpBusiness.findByIdAndUpdate(
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
      campaignReviews: business.campaignReviews,
    });
  }
);

// Create New Store Product BusinessProfile or Update a Store Product BusinessProfile
const createStoreProduct = catchAsyncErrors(async (req, res, next) => {
  const {
    productTitle,
    shortDescription,
    category,
    productImageOne,
    ratings,
    costPrice,
  } = req.body;

  const newProduct = {
    productTitle,
    shortDescription,
    category,
    productImageOne,
    ratings,
    costPrice,
  };

  const business = await signedUpBusiness.findById(req.user._id);

  business.storeProducts.push(newProduct);
  business.numberOfStoreProducts = business.storeProducts.length;

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    storeProducts: business.storeProducts,
  });
});

// Get Campaigns Invested BusinessProfile
const getListOfStoreProducts = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    storeProducts: business.storeProducts,
  });
});

// Delete Store Product BusinessProfile
const deleteStoreProduct = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const storeProducts = business.storeProducts.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfStoreProducts = storeProducts.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      storeProducts,
      numberOfStoreProducts,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    storeProducts: business.storeProducts,
  });
});

module.exports = {
  registerBusiness,
  authBusiness,
  updateBusinessProfile,
  logoutBusiness,
  forgotPassword,
  resetPassword,
  getBusinessDetails,
  updatePassword,
  updateProfile,
  getAllBusiness,
  getSingleBusiness,
  updateBusinessRole,
  deleteBusiness,
  createCampaignStarted,
  getListOfCampaignsStarted,
  deleteCampaignStarted,
  createCampaignInvested,
  getListOfCampaignsInvested,
  getParticularCampaignsInvested,
  deleteCampaignInvested,
  createBusinessInvestor,
  getBusinessInvestors,
  deleteBusinessInvestor,
  createIndividualInvestor,
  getIndividualInvestors,
  deleteIndividualInvestor,
  createBusinessOrderedFrom,
  getBusinessOrderedFrom,
  deleteBusinessOrderedFrom,
  createIndividualReview,
  getIndividualReviews,
  deleteIndividualReview,
  createBusinessReview,
  getBusinessReviews,
  deleteBusinessReview,
  createBusinessOrder,
  getBusinessOrders,
  deleteBusinessOrder,
  createBusinessCustomer,
  getBusinessCustomers,
  deleteBusinessCustomer,
  createindividualCustomer,
  getIndividualCustomers,
  deleteindividualCustomer,
  createindividualOrder,
  getindividualOrders,
  deleteindividualOrder,
  createPersonalProductReview,
  getPersonalProductReviews,
  deletePersonalProductReview,
  createPersonalCampaignReview,
  getPersonalCampaignReviews,
  deletePersonalCampaignReview,
  deleteCampaignPayout,
  getParticularCampaignPayouts,
  getListOfCampaignsPayouts,
  createCampaignPayout,
  createStoreProduct,
  getListOfStoreProducts,
  deleteStoreProduct,
};
