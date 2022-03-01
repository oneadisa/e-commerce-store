const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
const ApiFeatures = require("../utils/apiFeatures");

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
    twitter,
    faceBook,
    whatsApp,
    isAdmin,
    role,
    meansOfID,
    IDpic,
    regNum,
    natureOfBusiness,
    personalEmail,
    businessAddress,
    cacCertificate,
    formCO7,
    bankCode,
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
    reviews,
    businessReviews,
    numberOfBusinessReviews,
    totalNumberOfReviews,
    businessOrders,
    numberOFBusinessOrders,
    orders,
    numberOfIndividualOrders,
    totalNumberOfOrders,
    individualCustomers,
    numberOfIndividualCustomers,
    businessCustomers,
    numberOfBusinessCustomers,
    totalNumberOfCustomers,
    campaignReviews,
    numberOfCampaignsReviwed,
    newnewProductReview,
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
    twitter,
    faceBook,
    whatsApp,
    meansOfID,
    IDpic,
    regNum,
    natureOfBusiness,
    personalEmail,
    businessAddress,
    cacCertificate,
    formCO7,
    bankCode,
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
    reviews,
    totalNumberOfReviews,
    businessReviews,
    numberOfBusinessReviews,

    businessOrders,
    numberOFBusinessOrders,
    orders,
    numberOfIndividualOrders,
    totalNumberOfOrders,
    individualCustomers,
    numberOfIndividualCustomers,
    businessCustomers,
    numberOfBusinessCustomers,
    totalNumberOfCustomers,
    campaignReviews,
    numberOfCampaignsReviwed,
    newnewProductReview,
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
      twitter: user.twitter,
      faceBook: user.faceBook,
      whatsApp: user.whatsApp,
      natureOfBusiness: user.natureOfBusiness,
      personalEmail: user.personalEmail,
      businessAddress: user.businessAddress,
      cacCertificate: user.cacCertificate,
      formCO7: user.formCO7,
      bankCode: user.bankCode,
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
      reviews: user.reviews,
      totalNumberOfReviews: user.totalNumberOfReviews,
      businessReviews: user.businessReviews,
      numberOfBusinessReviews: user.numberOfBusinessReviews,

      businessOrders: user.businessOrders,
      numberOFBusinessOrders: user.numberOFBusinessOrders,
      orders: user.orders,
      numberOfIndividualOrders: user.numberOfIndividualOrders,
      totalNumberOfOrders: user.totalNumberOfOrders,
      individualCustomers: user.individualCustomers,
      numberOfIndividualCustomers: user.numberofIndividualCustomers,
      businessCustomers: user.businessCustomers,
      numberOfBusinessCustomers: user.numberOfBusinessCustomers,
      totalNumberOfCustomers: user.totalNumberOfCustomers,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      newnewProductReview: user.newnewProductReview,
      numberOfProductsReviewed: user.numberOfnewProductReviews,
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
      twitter: user.twitter,
      faceBook: user.faceBook,
      whatsApp: user.whatsApp,
      token: generateToken(user._id),
      meansOfID: user.meansOfID,
      IDpic: user.IDpic,
      regNum: user.regNum,
      natureOfBusiness: user.natureOfBusiness,
      personalEmail: user.personalEmail,
      businessAddress: user.businessAddress,
      cacCertificate: user.cacCertificate,
      formCO7: user.formCO7,
      bankCode: user.bankCode,
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
      reviews: user.reviews,
      totalNumberOfReviews: user.totalNumberOfReviews,
      businessReviews: user.businessReviews,
      numberOfBusinessReviews: user.numberOfBusinessReviews,
      businessOrders: user.businessOrders,
      numberOFBusinessOrders: user.numberOFBusinessOrders,
      orders: user.orders,
      numberOfIndividualOrders: user.numberOfIndividualOrders,
      totalNumberOfOrders: user.totalNumberOfOrders,
      individualCustomers: user.individualCustomers,
      numberOfIndividualCustomers: user.numberofIndividualCustomers,
      businessCustomers: user.businessCustomers,
      numberOfBusinessCustomers: user.numberOfBusinessCustomers,
      totalNumberOfCustomers: user.totalNumberOfCustomers,
      campaignReviews: user.campaignReviews,
      numberOfCampaignsReviwed: user.numberOfCampaignsReviwed,
      newnewProductReview: user.newnewProductReview,
      numberOfProductsReviewed: user.numberOfnewProductReviews,
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
    user.personalEmail = req.body.personalEmail || user.personalEmail;
    user.businessAddress = req.body.businessAddress || user.businessAddress;
    user.cacCertificate = req.body.cacCertificate || user.cacCertificate;
    user.formCO7 = req.body.formCO7 || user.formCO7;
    user.bankCode = req.body.bankCode || user.bankCode;
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
    user.reviews = req.body.reviews || user.reviews;
    user.totalNumberOfReviews =
      req.body.totalNumberOfReviews || user.totalNumberOfReviews;
    user.businessReviews = req.body.businessReviews || user.businessReviews;
    user.numberOfBusinessReviews =
      req.body.numberOfBusinessReviews || user.numberOfBusinessReviews;
    user.totalNumberOfReviews =
      req.body.totalNumberOfReviews || user.totalNumberOfReviews;
    user.businessOrder = req.body.businessOrder || user.businessOrder;
    user.numberOFBusinessOrders =
      req.body.numberOFBusinessOrders || user.numberOFBusinessOrders;
    user.orders = req.body.orders || user.orders;
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
    user.newnewProductReview =
      req.body.newnewProductReview || user.newProductReviewnewProductReviews;
    user.numberOfProductsReviewed =
      req.body.numberOfProductsReviewed || user.numberOfnewProductReviews;
    user.totallNumberOfInteractions =
      req.body.totallNumberOfInteractions || user.totalNumberOfInteractions;
    user.paymentMethod = req.body.paymentMethod || user.paymentMethod;
    user.twitter = req.body.twitter || user.twitter;
    user.faceBook = req.body.faceBook || user.faceBook;
    user.whatsApp = req.body.whatsApp || user.whatsApp;

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
      personalEmail: updatedBusiness.personalEmail,
      businessAddress: updatedBusiness.businessAddress,
      cacCertificate: updatedBusiness.cacCertificate,
      formCO7: updatedBusiness.formCO7,
      bankCode: updatedBusiness.bankCode,
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
      reviews: updatedBusiness.reviews,
      totalNumberOfReviews: updatedBusiness.totalNumberOfReviews,
      businessReviews: updatedBusiness.businessReviews,
      numberOfBusinessReviews: updatedBusiness.numberOfBusinessReviews,
      businessOrders: updatedBusiness.businessOrders,
      numberOFBusinessOrders: updatedBusiness.numberOFBusinessOrders,
      orders: updatedBusiness.orders,
      numberOfIndividualOrders: updatedBusiness.numberOfIndividualOrders,
      totalNumberOfOrders: updatedBusiness.totalNumberOfOrders,
      individualCustomers: updatedBusiness.individualCustomers,
      numberOfIndividualCustomers: updatedBusiness.numberofIndividualCustomers,
      businessCustomers: updatedBusiness.businessCustomers,
      numberOfBusinessCustomers: updatedBusiness.numberOfBusinessCustomers,
      totalNumberOfCustomers: updatedBusiness.totalNumberOfCustomers,
      campaignReviews: updatedBusiness.campaignReviews,
      numberOfCampaignsReviwed: updatedBusiness.numberOfCampaignsReviwed,
      newnewProductReview: updatedBusiness.newnewProductReview,
      numberOfProductsReviewed: updatedBusiness.numberOfnewProductReviews,
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
  const business = await signedUpBusiness.findById(req.user.id);

  res.status(200).json({
    success: true,
    business,
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
  // const users = await signedUpBusiness.find();

  // res.status(200).json({
  // success: true,
  // users,
  // });

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

  // let campaigns = businesses.map((e) => {
  // return e.listOfCampaignsStarted;
  // });

  // let realCampaigns = campaigns.map((e) => {return });

  // var campaigns = businesses.map((nested) => nested.map((element) => element));

  var campaigns = businesses.map(function (nested) {
    return nested.listOfCampaignsStarted.map(function (element) {
      return element;
    });
  });

  res.status(200).json({
    success: true,

    campaigns,
    businesses,
    businessCount,
    resultPerPage,
    filteredBusinessCount,
  });
});

// Get all users(admin)
// const getAllCampaigns = catchAsyncErrors(async (req, res, next) => {
// const users = await signedUpBusiness.find();

// res.status(200).json({
// success: true,
// users,
// });

// const resultPerPage = 40;
// const businessCount = await signedUpBusiness.countDocuments();
// const apiFeature = new ApiFeatures(signedUpBusiness.find(), req.query)
// .search()
// .filter();
// let businesses = await apiFeature.query;
// let filteredBusinessCount = businesses.length;
// apiFeature.pagination(resultPerPage);
// businesses = await apiFeature.query.clone();
// if (!businesses) {
// return next(new ErrorHandler("Order not found with this Id", 404));
// }

// let campaigns = businesses.map((e) => {
// return e.listOfCampaignsStarted;
// });
// res.status(200).json({
// success: true,
//campaigns,
// businesses,
// businessCount,
// resultPerPage,
// filteredBusinessCount,
// });
// });

// Get single Business
const getSingleBusiness = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.params.id);

  if (!business) {
    return next(
      new ErrorHandler(`Business does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    business,
  });
});

// Get single product
const getSingleCampaign = catchAsyncErrors(async (req, res, next) => {
  // const campaign = await signedUpBusiness.find({
  // "listOfCampaignsStarted._id": req.params.id,
  // });

  const a = await signedUpBusiness.find({
    "listOfCampaignsStarted._id": req.params.id,
  });
  const array = a[0].listOfCampaignsStarted.filter(
    (rev) => rev._id.toString() === req.params.id.toString()
  );
  const campaign = array[0];

  if (!campaign) {
    return next(
      new ErrorHandler(`Campaign does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    campaign,
  });
});

// Get single product
const getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const a = await signedUpBusiness.find(
    // "storeProducts._id": req.params.id,
    { storeProducts: { $elemMatch: { _id: req.params.id } } }
  );

  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === req.params.id.toString()
  );

  const product = array[0];

  if (!product) {
    return next(
      new ErrorHandler(`Product does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    product,
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

// Get All Campaign
// const getAllCampaigns = catchAsyncErrors(async (req, res) => {
// const resultPerPage = 20;
//
// const business = await signedUpBusiness.find();
// const campaignsCount = await signedUpBusiness.countDocuments();
// const apiFeature = new ApiFeatures(signedUpBusiness.find(), req.query)
// .search()
// .filter();
// let campaigns = await apiFeature.query;
// let filteredCampaignsCount = campaigns.length;
// apiFeature.pagination(resultPerPage);
// campaigns = await apiFeature.query.clone();
// res.status(200).json({
// success: true,
// campaigns,
// campaignsCount,
// resultPerPage,
// filteredCampaignsCount,
// });
// });
//
// Create New CampaignStarted BusinessProfile or Update a CampaignStarted BusinessProfile
// const createCampaignStarted = catchAsyncErrors(async (req, res, next) => {
// const {
// campaignName,
// natureOfBusiness,
// campaignCategory,
// business_address_country,
// business_address_city,
// business_address_office,
// phoneNumber,
// investorBrief,
// campaignVideo,
// pitchDeck,
// ideal_target_audience_age,
// ideal_target_audience_health_issues_or_disabilities,
// gender,
// ownerLogo,
// ownerName,
// fundingType,
// categoryFunding,
// amountBeingRaised,
// amountAlreadyRaised,
// amountRepaid,
// amountToBeRepaid,
// amountToBeRepaidPerPayout,
// pledged_profit_to_lenders,
// duration_pledged_profit,
// repayment_schedule_pledged_profit,
// endDatePledgedProfit,
// endDatePledgedProfitString,
// timePerPayment,
// equity_offering_percentage,
// bankCode,
// bank_account_name,
// bank_account_number,
// duration,
// go_live_schedule,
// campaignLiveStatus,
// familiarWithCrowdFunding,
// storeOnGaged,
// paymentStartDate,
// endDate,
// firstPaymentDate,
// firstPaymentDateString,
// endDateString,
// numberOfPaymentsToBeMade,
// twitter,
// faceBook,
// whatsApp,
// } = req.body;
//
// const campaign = {
// user: req.user._id,
// campaignName,
// natureOfBusiness,
// campaignCategory,
// business_address_country,
// business_address_city,
// business_address_office,
// phoneNumber,
// investorBrief,
// campaignVideo,
// pitchDeck,
// ownerLogo,
// ownerName,
// ideal_target_audience_age,
// ideal_target_audience_health_issues_or_disabilities,
// gender,
// fundingType,
// categoryFunding,
// amountBeingRaised: Number(amountBeingRaised),
// amountAlreadyRaised: Number(amountAlreadyRaised),
// amountRepaid,
// amountToBeRepaid,
// amountToBeRepaidPerPayout,
// pledged_profit_to_lenders: Number(pledged_profit_to_lenders),
// duration_pledged_profit: Number(duration_pledged_profit),
// repayment_schedule_pledged_profit: Number(
// repayment_schedule_pledged_profit
// ),
// endDatePledgedProfit,
// endDatePledgedProfitString,
// timePerPayment,
// equity_offering_percentage: Number(equity_offering_percentage),
// bankCode,
// bank_account_name,
// bank_account_number,
// duration: duration,
// go_live_schedule,
// campaignLiveStatus,
// familiarWithCrowdFunding,
// storeOnGaged,
// paymentStartDate,
// endDate,
// firstPaymentDate,
// firstPaymentDateString,
// endDateString,
// numberOfPaymentsToBeMade,
// twitter,
// faceBook,
// whatsApp,
// };
//
// (campaign.ownerLogo = req.user.storeLogo),
// (campaign.ownerName = req.user.businessName),
// (campaign.amountToBeRepaid =
// campaign.amountAlreadyRaised +
// campaign.amountAlreadyRaised * campaign.pledged_profit_to_lenders);
// campaign.amountToBePaidPerPayout =
// (campaign.amountToBeRepaid / campaign.duration_pledged_profit) *
// campaign.repayment_schedule_pledged_profit;
// let numWeeks = campaign.duration;
// var now = new Date().getTime();
// var goLive =
// new Date(campaign.go_live_schedule).getTime() - new Date().getTime();
// campaign.go_ = Math.abs(now);
// campaign.endDate = goLive + now + numWeeks * 7 * 1000 * 60 * 60 * 24;
// campaign.endDateString = new Date(campaign.endDate);
// new Date(now + numWeeks * 7 * 1000 * 60 * 60 * 24);
// campaign.endDatePledgedProfit =
// goLive +
// now +
// campaign.duration * (7 * 1000 * 60 * 60 * 24) +
// campaign.duration_pledged_profit * (30 * 1000 * 60 * 60 * 24);
// campaign.endDatePledgedProfitString = new Date(campaign.endDatePledgedProfit);
// campaign.numberOfPaymentsToBeMade =
// campaign.duration_pledged_profit /
// campaign.repayment_schedule_pledged_profit;
// const repaymentTime = Math.abs(
// campaign.endDatePledgedProfit - campaign.endDate
// );
// campaign.timePerPayment =
// repaymentTime /
// (campaign.duration_pledged_profit /
// campaign.repayment_schedule_pledged_profit);
// campaign.firstPaymentDate = campaign.endDate + campaign.timePerPayment;
// campaign.firstPaymentDateString = new Date(campaign.firstPaymentDate);
//
// const business = await signedUpBusiness.findById(req.user._id);
//
// const isStarted = business.listOfCampaignsStarted.find(
// (rev) => rev.user.toString() === req.user._id.toString()
// );
//
// if (!isStarted) {
// business.listOfCampaignsStarted.push(campaign);
// business.totalNumberOfCampaignsStarted =
// business.listOfCampaignsStarted.length;
// } else {
// business.listOfCampaignsStarted.push(campaign);
// business.totalNumberOfCampaignsStarted =
// business.listOfCampaignsStarted.length;
// }
//
// let amount = 0;
// business.listOfCampaignsStarted.forEach((rev) => {
// amount += rev.amountRaised;
// });
//
// business.totalAmountRaised = amount;
// business.averageRaised = amount / business.listOfCampaignsStarted.length;
//
// await business.save({ validateBeforeSave: false });
//
// res.status(200).json({
// success: true,
// listOfCampaignsStarted: business.listOfCampaignsStarted,
// });
// });

// const UpdateCampaign = asyncHandler(async (req, res) => {
// const {
// campaignName,
// natureOfBusiness,
// campaignCategory,
// business_address_country,
// business_address_city,
// business_address_office,
// phoneNumber,
// investorBrief,
// campaignVideo,
// pitchDeck,
// ideal_target_audience_age,
// ideal_target_audience_health_issues_or_disabilities,
// gender,
// fundingType,
// categoryFunding,
// amountBeingRaised,
// amountAlreadyRaised,
// amountRepaid,
// amountToBeRepaid,
// amountToBeRepaidPerPayout,
// pledged_profit_to_lenders,
// duration_pledged_profit,
// repayment_schedule_pledged_profit,
// endDatePledgedProfit,
// endDatePledgedProfitString,
// timePerPayment,
// equity_offering_percentage,
// bankCode,
// bank_account_name,
// bank_account_number,
// duration,
// go_live_schedule,
// campaignLiveStatus,
// familiarWithCrowdFunding,
// storeOnGaged,
// endDate,
// firstPaymentDate,
// firstPaymentDateString,
// endDateString,
// paymentStartDate,
// twitter,
// faceBook,
// whatsApp,
// } = req.body;
//
// const campaign = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.params.id,
// });
//
// if (campaign.user.toString() !== req.user._id.toString()) {
// res.status(401);
// throw new Error("You can't perform this action");
// }
//
// if (campaign) {
// campaign.campaignName = campaignName;
// campaign.natureOfBusiness = natureOfBusiness;
// campaign.campaignCategory = campaignCategory;
// campaign.business_address_country = business_address_country;
// campaign.business_address_city = business_address_city;
// campaign.business_address_office = business_address_office;
// campaign.phoneNumber = phoneNumber;
// campaign.investorBrief = investorBrief;
// campaign.campaignVideo = campaignVideo;
// campaign.pitchDeck = pitchDeck;
// campaign.ideal_target_audience_age = ideal_target_audience_age;
// campaign.ideal_target_audience_health_issues_or_disabilities =
// ideal_target_audience_health_issues_or_disabilities;
// campaign.gender = gender;
// campaign.fundingType = fundingType;
// campaign.categoryFunding = categoryFunding;
// campaign.amountBeingRaised = Number(amountBeingRaised);
// campaign.amountAlreadyRaised = Number(amountAlreadyRaised);
// campaign.amountRepaid = amountRepaid;
// campaign.amountToBeRepaid = amountToBeRepaid;
// campaign.amountToBeRepaidPerPayout = amountToBeRepaidPerPayout;
// campaign.pledged_profit_to_lenders = Number(pledged_profit_to_lenders);
// campaign.duration_pledged_profit = duration_pledged_profit;
// campaign.repayment_schedule_pledged_profit = Number(
// repayment_schedule_pledged_profit
// );
// campaign.endDatePledgedProfit = endDatePledgedProfit;
// campaign.endDatePledgedProfitString = endDatePledgedProfitString;
// campaign.timePerPayment = timePerPayment;
// campaign.equity_offering_percentage = Number(equity_offering_percentage);
// campaign.bankCode = bankCode;
// campaign.bank_account_name = bank_account_name;
// campaign.bank_account_number = bank_account_number;
// campaign.duration = duration;
// campaign.faceBook = faceBook;
// campaign.whatsApp = whatsApp;
// campaign.twitter = twitter;
// campaign.go_live_schedule = go_live_schedule;
// campaign.campaignLiveStatus = campaignLiveStatus;
// campaign.familiarWithCrowdFunding = familiarWithCrowdFunding;
// campaign.storeOnGaged = storeOnGaged;
// campaign.paymentStartDate = paymentStartDate;
// campaign.endDate = endDate;
// campaign.endDateString = endDateString;
// campaign.firstPaymentDate = firstPaymentDate;
// campaign.firstPaymentDateString = firstPaymentDateString;
//
// let numWeeks = campaign.duration;
// var now = new Date().getTime();
// var goLive =
// new Date(campaign.go_live_schedule).getTime() - new Date().getTime();
// campaign.go_ = Math.abs(now);
// campaign.endDate = goLive + now + numWeeks * 7 * 1000 * 60 * 60 * 24;
// campaign.endDateString = new Date(campaign.endDate);
// new Date(now + numWeeks * 7 * 1000 * 60 * 60 * 24);
// campaign.endDatePledgedProfit =
// goLive +
// now +
// campaign.duration * (7 * 1000 * 60 * 60 * 24) +
// campaign.duration_pledged_profit * (30 * 1000 * 60 * 60 * 24);
// campaign.endDatePledgedProfitString = new Date(
// campaign.endDatePledgedProfit
// );
// campaign.numberOfPaymentsToBeMade =
// campaign.duration_pledged_profit /
// campaign.repayment_schedule_pledged_profit;
// const repaymentTime = Math.abs(
// campaign.endDatePledgedProfit - campaign.endDate
// );
// campaign.timePerPayment =
// repaymentTime /
// (campaign.duration_pledged_profit /
// campaign.repayment_schedule_pledged_profit);
// campaign.firstPaymentDate = campaign.endDate + campaign.timePerPayment;
// campaign.firstPaymentDateString = new Date(campaign.firstPaymentDate);
// let n =
// campaign.duration_pledged_profit /
// campaign.repayment_schedule_pledged_profit;
// for (let i = 0; i < n; i++) {}
//
// const updatedCampaign = await campaign.save();
// res.json(updatedCampaign);
// } else {
// res.status(404);
// throw new Error("Campaign not found");
// }
// });

// const DeleteCampaign = asyncHandler(async (req, res) => {
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.params.id,
// });
// const array = a[0].storeProducts.filter(
// (rev) => rev._id.toString() === req.user._id.toString()
// );
// const campaign = array[0];
//
// if (campaign.user.toString() !== req.user._id.toString()) {
// res.status(401);
// throw new Error("You can't perform this action");
// }
//
// if (campaign) {
// await campaign.remove();
// res.json({ message: "Campaign Deleted" });
// } else {
// res.status(404);
// throw new Error("Campaign not Found");
// }
// });
//
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

// Get CampaignsStarted BusinessProfile
const getMyListOfCampaignsStarted = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user.id);

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
  const business = await signedUpBusiness.findById(req.user._id);

  // const business = await signedUpBusiness.find({
  // "storeProducts._id": req.user._id,
  // });
  // const array = a[0].storeProducts.filter(
  // (rev) => rev._id.toString() === req.user._id.toString()
  // );
  // const product = array[0];

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignsStarted = business.listOfCampaignsStarted.filter(
    (rev) => rev._id.toString() !== req.params.id.toString()
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
    req.user._id,
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

// Create New Individual Review or Update an Individual review
// const createCampaignReview = catchAsyncErrors(async (req, res, next) => {
// const { comment, campaignId } = req.body;
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": campaignId,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === campaignId.toString()
// );
// const campaign = array[0];
// const review = {
// user: req.user._id,
// firstName: req.user.firstName,
// name: req.user.businessName || req.user.firstName + " " + req.user.lastName,
// pic: req.user.pic,
//
// comment,
// };
//
// const isReviewed = campaign.reviews.find(
// (rev) => rev.user.toString() === req.user._id.toString()
// );
//
// if (isReviewed) {
// } else {
// campaign.reviews.push(review);
// campaign.numberOfcampaignReviews =
// campaign.campaignReviews.length;
// campaign.totalNumberOfCampaignReviews = campaign.reviews.length;
// +campaign.businessCampaignReviiews.length;
// }
//
// await campaign.save({ validateBeforeSave: false });
//
// res.status(200).json({
// success: true,
// reviews: campaign.reviews,
// });
// });
//
//Get Individual Reviews of a campaign
// const getCampaignReviews = catchAsyncErrors(async (req, res, next) => {
// const campaign = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.id,
// });
//
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.id,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === req.query.id.toString()
// );
// const campaign = array[0];
//
// if (!campaign) {
// return next(new ErrorHandler("Campaign not found", 404));
// }
//
// res.status(200).json({
// success: true,
// reviews: campaign.reviews,
// });
// });
//
//Delete Individual Review
// const deleteCampaignReview = catchAsyncErrors(async (req, res, next) => {
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.campaignId,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === req.query.campaignId.toString()
// );
// const campaign = array[0];
//
// if (!campaign) {
// return next(new ErrorHandler("Campaign not found", 404));
// }
//
// const reviews = campaign.reviews.filter(
// (rev) => rev._id.toString() !== req.query.id.toString()
// );
//
// const totalNumberOfCampaignReviews = reviews.length;
//
// await a[0].save(
// { "listOfCampaignsStarted._id": req.query.campaignId },
// {
// reviews,
// totalNumberOfCampaignReviews,
// },
// {
// new: true,
// runValidators: true,
// useFindAndModify: false,
// }
// );
//
// res.status(200).json({
// success: true,
// campaignReviews: campaign.campaignReviews,
// });
// });

// Create New Business Review or Update the Business review
const createBusinessCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const review = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.user.pic,
      comment,
    };

    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": campaignId,
    });

    const isReviewed = campaign.businessCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      campaign.businessCampaignReviews.push(review);
      campaign.numberOfBusinessReviews =
        campaign.businessCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.campaignReviews.length +
        campaign.businessCampaignReviews.length;
    } else {
      campaign.businessCampaignReviews.push(review);
      campaign.numberOfBusinessReviews =
        campaign.businessCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.campaignReviews.length +
        campaign.businessCampaignReviews.length;
    }

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCampaignReviews: campaign.businessCampaignReviews,
    });
  }
);

// Get All Business Reviews of a campaign
const getBusinessCampaignReviews = catchAsyncErrors(async (req, res, next) => {
  const campaign = await signedUpBusiness.find({
    "listOfCampaignsStarted._id": req.query.id,
  });

  if (!campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCampaignReviews: campaign.businessCampaignReviews,
  });
});

// Delete Business Review
const deleteBusinessCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": req.query.campaignId,
    });

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const businessCampaignReviews = campaign.businessCampaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessCampaignReviews = businessCampaignReviews.length;

    await signedUpBusiness.findOneAndUpdate(
      { "listOfCampaignsStarted._id": req.query.campaignId },
      {
        businessCampaignReviews,
        numberOfBusinessCampaignReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      businessCampaignReviews: campaign.businessCampaignReviews,
    });
  }
);

// Create New Individual Donation or Update an Individual Donation
// const createCampaignDonation = catchAsyncErrors(async (req, res, next) => {
// const { amount, campaignId } = req.body;
//
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": campaignId,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === campaignId.toString()
// );
// const campaign = array[0];
// const organiser = signedUpBusiness.findById(campaign.user);
//
// const repaymentTime = Math.abs(
// campaign.endDatePledgedProfit - campaign.endDate
// );
// var numberOfRepayments = repaymentTime / campaign.timePerPayment;
// var numberOfTimesPaidAlready =
// repaymentTime / campaign.timePerPayment - numberOfRepayments;
// setTimeout(function () {}, campaign.timePerPayment);
//
// const amountRepay =
// Number(amount) +
// (campaign.pledged_profit_to_lenders / 100) * Number(amount);
// const amountAlreadyRaise =
// (numberOfTimesPaidAlready *
// ((campaign.pledged_profit_to_lenders / 100) * Number(amount))) /
// (repaymentTime / campaign.timePerPayment);
//
// const amountPerTime = amountRepay / (repaymentTime / campaign.timePerPayment);
//
// var now = new Date().getTime();
// var firstPayment = campaign.firstPaymentDate;
// var firstPaymentDateHere = new Date(firstPayment);
// var lastPayment = campaign.endDatePledgedProfit;
// var lastPaymentDate = new Date(lastPayment);
//
// const review = {
// user: req.user._id,
// name: req.user.businessName || req.user.firstName + "" + req.user.lastName,
// pic: req.user.pic,
// amount: Number(amount),
// typeOfDonation: campaign.fundingType,
// amountToBeRepaid: amountRepay,
// amountToBeRepaidPerTime: amountPerTime,
// firstPaymentDateDonor: campaign.firstPaymentDateString,
// lastPaymentDate: campaign.endDatePledgedProfitString,
// amountAlreadyRepaid: amountAlreadyRaise,
// };
//
// const isDonated = campaign.individualCampaignDonors.find(
// (rev) => rev.user.toString() === req.user._id.toString()
// );
//
// if (!isDonated) {
// campaign.donors.push(review);
// campaign.numberOfIndividualCampaignDonors =
// campaign.individualCampaignDonors.length;
// campaign.totalNumberOfCampaignDonors = campaign.donors.length;
// +
// campaign.donor.length;
// } else {
// campaign.donors.push(review);
// campaign.numberOfIndividualCampaignDonors =
// campaign.individualCampaignDonors.length;
// campaign.totalNumberOfCampaignDonors = campaign.donors.length;
// +
// campaign.donor.length;
// }
//
// let amountRaised = 0;
// campaign.donors.forEach((rev) => {
// amountRaised += rev.amount;
// });
//
// campaign.amountAlreadyRaised = amountRaised;
//
// await campaign.save({ validateBeforeSave: false });
//
// res.status(200).json({
// success: true,
// donors: campaign.donors,
// });
// });
//
// Get Individual Donations of a campaign
// const getCampaignDonations = catchAsyncErrors(async (req, res, next) => {
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.id,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === req.query.toString()
// );
// const campaign = array[0];
// if (!campaign) {
// return next(new ErrorHandler("Campaign not found", 404));
// }
//
// res.status(200).json({
// success: true,
// donors: campaign.donors,
// });
// });
//
// Get particular Individual Donations of a campaign
// const getParticularCampaignDonation = catchAsyncErrors(
// async (req, res, next) => {
// async (req, res, next) => {
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.id,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === req.query.id.toString()
// );
// const campaign = array[0];
// if (!campaign) {
// return next(new ErrorHandler("Campaign not found", 404));
// }
// const myCampaignDonations = await campaign.donors.filter(
// (rev) => rev._id.toString() === req.user._id.toString()
// );
//
// res.status(200).json({
// success: true,
// myCampaignDonations,
// });
// };
// }
// );
//
// Delete Individual Donation
// const deleteCampaignDonation = catchAsyncErrors(async (req, res, next) => {
// const campaign = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.query.campaignId,
// });
// const a = await signedUpBusiness.find({
// "listOfCampaignsStarted._id": req.params.id,
// });
// const array = a[0].listOfCampaignsStarted.filter(
// (rev) => rev._id.toString() === req.params.id.toString()
// );
// const campaign = array[0];
//
// if (!campaign) {
// return next(new ErrorHandler("Campaign not found", 404));
// }
//
// const donors = campaign.donors.filter(
// (rev) => rev._id.toString() !== req.query.id.toString()
// );
//
// const totalNumberOfCampaignDonors = donors.length;
//
// await a[0].save(
// { "listOfCampaignsStarted._id": req.query.campaignId },
// {
// donors,

// totalNumberOfCampaignDonors,
// },
// {
// new: true,
// runValidators: true,
// useFindAndModify: false,
// }
// );

// res.status(200).json({
// success: true,
// dDonors: campaign.donors,
// });
// });

// Create New Business Donation or Update the Business Donation
const createBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": campaignId,
    });
    const organiser = signedUpBusiness.findById(campaign.user);

    const repaymentTime = Math.abs(
      campaign.endDatePledgedProfit - campaign.endDate
    );
    var numberOfRepayments = repaymentTime / campaign.timePerPayment;
    var numberOfTimesPaidAlready =
      repaymentTime / campaign.timePerPayment - numberOfRepayments;

    // setTimeout(function () {
    // if (numberOfRepayments > 0) {
    // organiser.walletBalance -=
    // (Number(amount) +
    // campaign.pledged_profit_to_lenders * Number(amount)) /
    // (campaign.duration_pledged_profit /
    // campaign.repayment_schedule_pledged_profit);
    // req.user.walletBalance +=
    // (Number(amount) +
    // campaign.pledged_profit_to_lenders * Number(amount)) /
    // (campaign.duration_pledged_profit /
    // campaign.repayment_schedule_pledged_profit);
    // numberOfRepayments -= 1;
    // }
    // }, campaign.timePerPayment);

    const amountRepay =
      Number(amount) +
      (campaign.pledged_profit_to_lenders / 100) * Number(amount);
    const amountAlreadyRaise =
      (numberOfTimesPaidAlready *
        ((campaign.pledged_profit_to_lenders / 100) * Number(amount))) /
      (repaymentTime / campaign.timePerPayment);

    const amountPerTime =
      amountRepay / (repaymentTime / campaign.timePerPayment);

    var firstPayment = campaign.firstPaymentDate;
    var firstPaymentDateHere = new Date(firstPayment);
    var lastPayment = campaign.endDatePledgedProfit;
    var lastPaymentDate = new Date(lastPayment);

    const review = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.user.pic,
      amount: Number(amount),
      typeOfDonation: campaign.fundingType,
      amountToBeRepaid: amountRepay,
      amountToBeRepaidPerTime: amountPerTime,
      firstPaymentDateDonor: campaign.firstPaymentDateString,
      lastPaymentDate: campaign.endDatePledgedProfitString,
      amountAlreadyRepaid: amountAlreadyRaise,
    };

    const isDonated = campaign.donor.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isDonated) {
      campaign.donor.push(review);
      campaign.numberOfBusinessReviews = campaign.donor.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length + campaign.donor.length;
    } else {
      campaign.donor.push(review);
      campaign.numberOfBusinessReviews = campaign.donor.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length + campaign.donor.length;
    }

    let amountRaised = 0;
    campaign.donor.forEach((rev) => {
      amountRaised += rev.amount;
    });
    campaign.amountAlreadyRaised = amountRaised;
    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      donor: campaign.donor,
    });
  }
);

// Get All Business Donors of a campaign
const getBusinessCampaignDonations = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": req.query.id,
    });

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    res.status(200).json({
      success: true,
      donor: campaign.donor,
    });
  }
);

// Get particular business Donations of a campaign
const getParticularBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    async (req, res, next) => {
      const campaign = await signedUpBusiness.find({
        "listOfCampaignsStarted._id": req.query.id,
      });
      if (!campaign) {
        return next(new ErrorHandler("Campaign not found", 404));
      }
      const myCampaignDonations = await campaign.donor.find({
        user: req.user,
      });

      res.status(200).json({
        success: true,
        myCampaignDonations,
      });
    };
  }
);

// Delete Business Donation
const deleteBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": req.query.campaignId,
    });

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const donor = campaign.donor.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessReviews = donor.length;

    await signedUpBusiness.findOneAndUpdate(
      { "listOfCampaignsStarted._id": req.query.campaignId },
      {
        donor,

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
      donor: campaign.donor,
    });
  }
);

const createCampaignPayout = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const campaign = signedUpBusiness.find({
    "listOfCampaignsStarted._id": campaignId,
  });
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
    amountToBeRepaidPerTime: amountPerTime,
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
const getMyListOfCampaignsPayouts = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

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
    const campaign = await signedUpBusiness.findById(req.params.id);

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

  const a = await signedUpBusiness.find({
    "listOfCampaignsStarted._id": campaignId,
  });
  const array = a[0].listOfCampaignsStarted.filter(
    (rev) => rev._id.toString() === campaignId.toString()
  );
  const campaign = array[0];
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
const getMyListOfCampaignsInvested = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.user._id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    res.status(200).json({
      success: true,
      listOfCampaignsInvested: business.listOfCampaignsInvested,
    });
  }
);

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
    const campaign = await signedUpBusiness.findById(req.params.id);

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

const createInvestor = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountInvested } = req.body;

  const a = await signedUpBusiness.find({
    "listOfCampaignsStarted._id": campaignId,
  });
  const array = a[0].listOfCampaignsStarted.filter(
    (rev) => rev._id.toString() === campaignId.toString()
  );
  const campaign = array[0];

  const businessInvested = campaign.user;

  const investor = {
    user: req.user._id,
    name: req.user.businessName || req.user.firstName + " " + req.user.lastName,
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
    business.listOfBusinessInvestors.push(investor);
    business.numberOfBusinessInvestors =
      business.listOfBusinessInvestors.length;
    business.totalNumberOfInvestors =
      business.listOfIndividualInvestors.length +
      business.listOfBusinessInvestors.length;
  } else {
    business.listOfBusinessInvestors.push(investor);
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
const getMyInvestors = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfBusinessInvestors: business.listOfBusinessInvestors,
  });
});

// Get Business Invested BusinessProfile
const getInvestors = catchAsyncErrors(async (req, res, next) => {
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
const deleteInvestor = catchAsyncErrors(async (req, res, next) => {
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

  const campaign = await signedUpBusiness.find({
    "listOfCampaignsStarted._id": campaignId,
  });
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
const getMyIndividualInvestors = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Individual not found", 404));
  }

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

  const product = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });
  const businessOrderedFrom = await signedUpBusiness.findById(product.user);

  const businessOrdered = {
    user: req.user._id,
    businessName: businessOrderedFrom.businessName,
    productName: product.productTitle,
    productDescription: product.shortDescription,
    price: product.price,
    category: product.category,
    quantity,
    totalPrice: product.price * quantity,
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
const getMyBusinessOrderedFrom = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Order not found", 404));
  }

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
const createReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const a = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === productId.toString()
  );
  const product = array[0];

  const review = {
    user: req.user._id,
    // firstName: req.user.firstName,
    // lastName: req.user.lastName,
    name: req.user.businessName || req.user.firstName + " " + req.user.lastName,
    phoneNumber: req.body.phoneNumber,
    rating: Number(rating),
    productTitle: product.productTitle,
    comment,
  };

  const business = await signedUpBusiness.findById(product.user);

  const isReviewed = business.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    business.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    business.reviews.push(review);
    // business.totalNumberOfReviews = business.reviews.length;
    business.totalNumberOfReviews = business.reviews.length;
    // + business.businessReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    review: business.reviews,
  });
});

// Get Individual Reviews of a business BusinessProfile
const getMyReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: business.reviews,
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
    reviews: business.reviews,
  });
});

// Delete Individual Review
const deleteReview = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const reviews = business.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfReviews = reviews.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.user._id,
    {
      reviews,
      totalNumberOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    reviews: business.reviews,
  });
});

// Create New Business Review BusinessProfile or Update an Business review BusinessProfile
const createBusinessReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const product = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });

  const review = {
    user: req.user._id,
    businessName: req.user.businessNameName,
    phoneNumber: req.body.phoneNumber,
    rating: Number(rating),
    productTitle: product.productTitle,
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
      business.reviews.length + business.businessReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    BusinessReviews: business.businessReviews,
  });
});

// Get Business Reviews of a business BusinessProfile
const getMyBusinessReviews = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessReviews: business.businessReviews,
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
const createOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    userInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  orderItems.forEach(async (e, req, res) => {
    // const business = orderItems.forEach((e) =>
    // signedUpBusiness.findById(e.user)
    // );
    // const product = orderItems.forEach((e) =>
    // business.find({
    // "storeProducts._id": e.product,
    // })
    // );

    const a = await signedUpBusiness.find({
      "storeProducts._id": e._id,
    });

    const business = a[0];

    const productArray = business.storeProducts.filter(
      (rev) => rev._id.toString() === e.productTitle.toString()
    );
    const product = productArray[0];

    const myShippingCost = a[0].shippingCost;
    const order = {
      shippingInfo,
      orderItem: e,
      paymentInfo,
      userInfo,
      itemPrice: e.price,
      myShippingCost,
      totalPrice: e.price + myShippingCost,
      paidAt: Date.now(),
    };

    business.walletBalance += order.totalPrice;
    business.totalSales += order.totalPrice;
    business.orders.push(order);
    // business.numberOfindividualOrders = business.orders.length;
    business.totalNumberOfOrders = business.orders.length;
    business.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      orders: business.orders,
    });
  });

  // signedUpBusiness.find({
  // "storeProducts._id": e.product,
  // });

  // const business = orderItems.forEach((e) =>signedUpBusiness.findById(e.user))
  //
  //  const product = orderItems.forEach((e) =>
  //  business.find({
  //  "storeProducts._id": e.product,
  //  }),
  //
  //  );

  // const order = {
  // shippingInfo,
  // orderItems,
  // paymentInfo,
  // itemsPrice,
  // taxPrice,
  // shippingPrice,
  // totalPrice,
  // paidAt: Date.now(),
  // user: req.user._id,
  // businessName: req.user.businessName,
  // pic: req.body.pic,
  // phoneNumber: req.body.phoneNumber,
  // email: req.body.email,
  // productOrdered: {
  // productId: product._id,
  // productName: product.productTitle,
  // },
  // };

  //

  // const isOrdered = business.businessOrders.find(
  // (rev) => rev.user.toString() === req.user._id.toString()
  // );

  // if (!isOrdered) {
  // business.businessOrders.push(order);
  // business.totalNumberOfOrders = business.businessOrders.length;
  // business.totalNumberOfOrders =
  // business.orders.length + business.businessOrders.length;
  // } else {
  // business.businessOrders.push(order);
  // business.totalNumberOfOrders = business.businessOrders.length;
  // business.totalNumberOfOrders =
  // business.orders.length + business.businessOrders.length;
  // }

  // await business.save({ validateBeforeSave: false });

  // res.status(200).json({
  // success: true,
  // businessOrders: business.businessOrders,
  // });
});

// update Business Order Status
const updateOrder = catchAsyncErrors(async (req, res, next) => {
  const a = await signedUpBusiness.find({
    "businessOrders._id": req.params.id,
  });

  const array = a[0].orders.filter(
    (rev) => rev._id.toString() === req.params.id.toString()
  );
  const order = array[0];

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.productTitle, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
// async function updateStock(id, quantity) {
// const product = await signedUpBusiness.find({
// "storeProducts._id": id,
// });
//
// product.productUnitCount -= quantity;
//
// await product.save({ validateBeforeSave: false });
// }

// Get Business Orders of a business BusinessProfile
const getMyOrders = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    orders: business.orders,
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
const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const orders = business.businessOrders.filter(
    (rev) => rev._id.toString() !== req.params.id.toString()
  );

  const totalNumberOfOrders = orders.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      orders,
      totalNumberOfOrders,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    orders: business.orders,
  });
});

// Create New Business Customer BusinessProfile or Update an Business Customer BusinessProfile
const createBusinessCustomer = catchAsyncErrors(async (req, res, next) => {
  const { businessId, productId } = req.body;

  const product = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });

  const customer = {
    user: req.user._id,
    businessName: req.user.businessName,
    pic: req.body.pic,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    productTitle: product.productTitle,
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
const getMyBusinessCustomers = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCustomers: business.businessCustomers,
  });
});

// Delete Business Customer

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

  const product = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });

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
const getMyIndividualCustomers = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

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
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  // const product = await signedUpBusiness.find({
  // "storeProducts._id": productId,
  // });

  orderItems.forEach((e, req, res) => {
    const business = orderItems.forEach((e) =>
      signedUpBusiness.findById(e.user)
    );
    const product = orderItems.forEach((e) =>
      business.find({
        "storeProducts._id": e.product,
      })
    );

    const myShippingCost = orderItems.forEach(
      (e) => e.price / shippingPrice / shippingPrice
    );

    const order = {
      shippingInfo,
      orderItem: e,
      paymentInfo,
      itemsPrice: e.price,
      myShippingCost,
      totalPrice: e.price,
      paidAt: Date.now(),
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
    business.orders.push(order);
    business.numberOfindividualOrders = business.orders.length;
    business.totalNumberOfOrders =
      business.businessOrders.length + business.orders.length;
    business.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      orders: business.orders,
    });
  });

  // const business = orderItems.forEach((e) => signedUpBusiness.findById(e.user));

  // const product = orderItems.forEach((e) =>
  // business.find({
  // "storeProducts._id": e.product,
  // })
  // );

  // const order = {
  // shippingInfo,
  // orderItems,
  // paymentInfo,
  // itemsPrice,
  // taxPrice,
  // shippingPrice,
  // totalPrice,
  // paidAt: Date.now(),
  // user: req.user._id,
  // firstName: req.user.firstName,
  // lastName: req.user.lastName,
  // pic: req.body.pic,
  // phoneNumber: req.body.phoneNumber,
  // email: req.body.email,
  // productOrdered: {
  // productId: product._id,
  // productName: product.productTitle,
  // },
  // };

  //  business.orders.push(order);
  //  business.numberOfindividualOrders = business.orders.length;
  //  business.totalNumberOfOrders =
  //  business.businessOrders.length + business.orders.length;

  // await business.save({ validateBeforeSave: false });

  // res.status(200).json({
  // success: true,
  // orders: business.orders,
  // });
});

// update Indivdual Order Status
const updateIndividualOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await signedUpBusiness.find({
    "orders._id": req.params.id,
  });

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// Get individual Orders of a individual individualProfile
const getMyIndividualOrders = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    orders: business.orders,
  });
});

// Get individual Orders of a individual individualProfile
const getIndividualOrders = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    orders: business.orders,
  });
});

// Delete individual Order
const deleteindividualOrder = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const orders = business.orders.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfindividualOrders = orders.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      orders,
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
    orders: business.orders,
  });
});

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createPersonalnewProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const product = await signedUpBusiness.find({
      "storeProducts._id": productId,
    });

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

    const isReviewed = business.newnewProductReview.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isReviewed) {
    } else {
      business.newnewProductReview.push(review);
      business.numberOfProductsReviewed = business.newnewProductReview.length;
      business.totalNumberOfInteractions =
        business.newnewProductReview.length + business.campaignReviews.length;
    }

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      newnewProductReview: business.newnewProductReview,
    });
  }
);

// Get Personal Reviews of a business BusinessProfile
const getMyPersonalnewProductReviews = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.user._id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    res.status(200).json({
      success: true,
      newnewProductReview: business.newnewProductReview,
    });
  }
);

// Get Personal Reviews of a business BusinessProfile
const getPersonalnewProductReviews = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    res.status(200).json({
      success: true,
      newnewProductReview: business.newnewProductReview,
    });
  }
);

// Delete Personal Review
const deletePersonalnewProductReview = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.query.businessId);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const newnewProductReview = business.newnewProductReview.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfProductsReviewed = newnewProductReview.length;

    await signedUpBusiness.findByIdAndUpdate(
      req.query.businessId,
      {
        newnewProductReview,
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
      newnewProductReview: business.newnewProductReview,
    });
  }
);

// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createPersonalCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const campaign = await signedUpBusiness.find({
      "listOfCampaignsStarted._id": campaignId,
    });

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
        business.campaignReviews.length + business.newnewProductReview.length;
    } else {
      business.campaignReviews.push(review);
      business.numberOfCampaignsReviewed = business.campaignReviews.length;
      business.totalNumberOfInteractions =
        business.campaignReviews.length + business.newnewProductReview.length;
    }

    await business.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      campaignReviews: business.campaignReviews,
    });
  }
);

// Get Personal Reviews of a business BusinessProfile
const getMyPersonalCampaignReviews = catchAsyncErrors(
  async (req, res, next) => {
    const business = await signedUpBusiness.findById(req.user._id);

    if (!business) {
      return next(new ErrorHandler("Business not found", 404));
    }

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

// Get Product Details
// const getProductDetails = catchAsyncErrors(async (req, res, next) => {
// const product = await signedUpBusiness.find({
// "storeProducts._id": req.params.id,
// });
//
// if (!product) {
// return next(new ErrorHandler("Product not found", 404));
// }
//
// res.status(200).json({
// success: true,
// product,
// });
// });
//
// Create New Store Product BusinessProfile or Update a Store Product BusinessProfile
const createStoreProduct = catchAsyncErrors(async (req, res, next) => {
  // let images = [];
  // if (typeof req.body.images === "string") {
  // images.push(req.body.images);
  // } else {
  // images = req.body.images;
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
  req.body.user = req.user.id;
  // const createdStoreProduct = await StoreProduct.save();

  const product = req.body;

  const business = await signedUpBusiness.findById(req.user._id);

  business.storeProducts.push(product);
  business.numberOfStoreProducts = business.storeProducts.length;

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    storeProducts: business.storeProducts,
  });
});

// Get Campaigns Invested BusinessProfile
const getMyListOfStoreProducts = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.user._id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

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
const deleteBusinessStoreProduct = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.find(req.user._id);

  const a = await signedUpBusiness.find({
    "storeProducts._id": req.params._id,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === req.params._id.toString()
  );
  const product = array[0];

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  const storeProducts = business.storeProducts.filter(
    (rev) => rev._id.toString() !== req.params.id.toString()
  );

  const numberOfStoreProducts = business.storeProducts.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.user._id,
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

const UpdateBusinessStoreProduct = asyncHandler(async (req, res, next) => {
  const a = await signedUpBusiness.find({
    "storeProducts._id": req.params._id,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === req.params._id.toString()
  );
  const product = array[0];
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

  await signedUpBusiness.findOneAndUpdate(
    {
      "storeProducts._id": req.params.id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    product,
  });
});

// Create New Review BusinessProfile or Update an Individual review BusinessProfile
const createReviewProduct = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const a = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });

  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === productId.toString()
  );

  const product = array[0];

  const review = {
    user: req.user._id,
    // firstName: req.user.firstName,
    name: req.user.businessName || req.user.firstName + " " + req.user.lastName,
    phoneNumber: req.user.phoneNumber,
    rating: Number(rating),
    productTitle: product.productTitle,
    comment,
  };

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
    // product.totalNumberOfReviews = product.reviews.length;
    product.totalNumberOfReviews = product.reviews.length;
    // + product.businessReviews.length;
  }

  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;

  // a.markModified("storeProducts.reviews");

  await a[0].save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Get  Reviews of a product BusinessProfile
const getReviewsProduct = catchAsyncErrors(async (req, res, next) => {
  const a = await signedUpBusiness.find({
    "storeProducts._id": req.query.id,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === req.query.id.toString()
  );
  const product = array[0];

  if (!product) {
    return next(new ErrorHandler("Review not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete  Review
const deleteReviewProduct = catchAsyncErrors(async (req, res, next) => {
  const a = await signedUpBusiness.find({
    "storeProducts._id": req.query.productId,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === req.query.productId.toString()
  );
  const product = array[0];

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
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

  const totalNumberOfReviews = reviews.length;

  await a[0].save(
    {
      reviews,
      ratings,
      totalNumberOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Create New Business Review BusinessProfile or Update an Business review BusinessProfile
const createBusinessReviewProduct = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const product = await signedUpBusiness.find({
    "storeProducts._id": productId,
  });

  const review = {
    user: req.user._id,
    businessName: req.user.businessNameName,
    phoneNumber: req.body.phoneNumber,
    rating: Number(rating),
    productTitle: product.productTitle,
    comment,
  };

  const isReviewed = product.businessReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.businessReviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.businessReviews.push(review);
    product.numberOfBusinessReviews = product.businessReviews.length;
    product.totalNumberOfReviews =
      product.reviews.length + product.businessReviews.length;
  }

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    BusinessReviews: product.businessReviews,
  });
});

// Get Business Reviews of a product BusinessProfile
const getBusinessReviewsProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.id,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessReviews: product.businessReviews,
  });
});

// Delete Business Review
const deleteBusinessReviewProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.businessId,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const businessReviews = product.businessReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfBusinessReviews = businessReviews.length;

  await signedUpBusiness.findOneAndUpdate(
    { "storeProducts._id": req.query.businessId },
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
    businessReviews: product.businessReviews,
  });
});

// Create New Business Order BusinessProfile or Update an Business Order BusinessProfile
const createBusinessOrderProduct = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  //  const product = orderItems.forEach((e) => signedUpBusiness.find({
  // "storeProducts._id": e.product,
  // }),
  // )

  const business = orderItems.forEach((e) => signedUpBusiness.findById(e.user));

  const product = orderItems.forEach((e) =>
    business.find({
      "storeProducts._id": e.product,
    })
  );

  const order = {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
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

  const isOrdered = product.businessOrders.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isOrdered) {
    product.businessOrders.push(order);
    product.totalNumberOfOrders = product.businessOrders.length;
    product.totalNumberOfOrders =
      product.orders.length + product.businessOrders.length;
  } else {
    product.businessOrders.push(order);
    product.totalNumberOfOrders = product.businessOrders.length;
    product.totalNumberOfOrders =
      product.orders.length + product.businessOrders.length;
  }

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    businessOrders: product.businessOrders,
  });
});

// update Business Order Status
const updateBusinessOrderProduct = catchAsyncErrors(async (req, res, next) => {
  const order = await signedUpBusiness.find({
    "businessOrders._id": req.params.id,
  });

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
async function updateStock(id, quantity) {
  // const product = await signedUpBusiness.find({ "storeProducts._id": id });
  const a = await signedUpBusiness.find({
    "storeProducts._id": id,
  });
  const array = a[0].storeProducts.filter(
    (rev) => rev._id.toString() === id.toString()
  );
  const product = array[0];

  product.productUnitCount -= quantity;

  await a[0].save({ validateBeforeSave: false });
}

// Get Business Orders of a product BusinessProfile
const getBusinessOrdersProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.businessId,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessOrders: product.businessOrders,
  });
});

// Delete Business Order
const deleteBusinessOrderProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.businessId,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const businessOrders = product.businessOrders.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfOrders = businessOrders.length;

  await signedUpBusiness.findOneAndUpdate(
    { "storeProducts._id": req.query.businessId },
    {
      businessOrders,
      totalNumberOfOrders,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    businessOrders: product.businessOrders,
  });
});

// Create New Business Customer BusinessProfile or Update an Business Customer BusinessProfile
const createBusinessCustomerProduct = catchAsyncErrors(
  async (req, res, next) => {
    const { businessId, productId } = req.body;

    const product = await signedUpBusiness.find({
      "storeProducts._id": productId,
    });

    const customer = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.body.pic,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      productTitle: product.productTitle,
    };

    const isBought = product.businessCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isBought) {
    } else {
      product.businessCustomers.push(customer);
      product.numberOfBusinessCustomers = product.businessCustomers.length;
      product.totalNumberOfCustomers =
        product.individualCustomers.length + product.businessCustomers.length;
    }

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCustomers: product.businessCustomers,
    });
  }
);

// Delete Business Customer

// Get Business Customers of a product BusinessProfile
const getBusinessCustomersProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.businessId,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCustomers: product.businessCustomers,
  });
});

// Delete Business Customer
const deleteBusinessCustomerProduct = catchAsyncErrors(
  async (req, res, next) => {
    const product = await signedUpBusiness.find({
      "storeProducts._id": req.query.businessId,
    });

    if (!product) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const businessCustomers = product.businessCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessCustomers = businessCustomers.length;

    await signedUpBusiness.findOneAndUpdate(
      { "storeProducts._id": req.query.businessId },
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
      businessCustomers: product.businessCustomers,
    });
  }
);

// Create New individual Customer individualProfile or Update an individual Customer individualProfile
const createindividualCustomerProduct = catchAsyncErrors(
  async (req, res, next) => {
    const { businessId, productId } = req.body;

    const product = await signedUpBusiness.find({
      "storeProducts._id": productId,
    });

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

    const isBought = product.individualCustomers.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isBought) {
    } else {
      product.individualCustomers.push(customer);
      product.numberOfindividualCustomers = product.individualCustomers.length;
      product.totalNumberOfCustomers =
        product.businessCustomers.length + product.individualCustomers.length;
    }

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualCustomers: product.individualCustomers,
    });
  }
);

// Get individual Customers of a individual individualProfile
const getIndividualCustomersProduct = catchAsyncErrors(
  async (req, res, next) => {
    const product = await signedUpBusiness.find({
      "storeProducts._id": req.query.businessId,
    });

    if (!product) {
      return next(new ErrorHandler("Business not found", 404));
    }

    res.status(200).json({
      success: true,
      individualCustomers: product.individualCustomers,
    });
  }
);

// Delete individual Customer
const deleteindividualCustomerProduct = catchAsyncErrors(
  async (req, res, next) => {
    const product = await signedUpBusiness.find({
      "storeProducts._id": req.query.businessId,
    });

    if (!product) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const individualCustomers = product.individualCustomers.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfindividualCustomers = individualCustomers.length;

    await signedUpBusiness.findOneAndUpdate(
      { "storeProducts._id": req.query.businessId },
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
      individualCustomers: product.individualCustomers,
    });
  }
);

// Create New individual Order individualProfile or Update an individual Order individualProfile
const createindividualOrderProduct = catchAsyncErrors(
  async (req, res, next) => {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    const product = await signedUpBusiness.find({
      "storeProducts._id": req.user.id,
    });
    orderItems.forEach((e) => {
      const business = () =>
        signedUpBusiness
          .findById(e.user)
          .find({ "storeProducts._id": e.product });
    });

    // const product = signedUpBusiness.find({"storeProducts._id": e.product,})

    const lender = signedUpBusiness.findById(req.user.id);

    lender.walletBalance -= totalPrice;

    const order = {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
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

    const isOrdered = product.orders.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isOrdered) {
      product.orders.push(order);
      product.numberOfindividualOrders = product.orders.length;
      product.totalNumberOfOrders =
        product.businessOrders.length + product.orders.length;
    } else {
      product.orders.push(order);
      product.numberOfindividualOrders = product.orders.length;
      product.totalNumberOfOrders =
        product.businessOrders.length + product.orders.length;
    }

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      orders: product.orders,
    });
  }
);

// update Indivdual Order Status
const updateIndividualOrderProduct = catchAsyncErrors(
  async (req, res, next) => {
    const order = await signedUpBusiness.find({
      "orders._id": req.params.id,
    });

    if (!order) {
      return next(new ErrorHandler("Order not found with this Id", 404));
    }

    if (order.orderStatus === "Delivered") {
      return next(
        new ErrorHandler("You have already delivered this order", 400)
      );
    }

    if (req.body.status === "Shipped") {
      order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity);
      });
    }
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
      order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
    });
  }
);

// Get individual Orders of a individual individualProfile
const getIndividualOrdersProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await signedUpBusiness.find({
    "storeProducts._id": req.query.id,
  });

  if (!product) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    orders: product.orders,
  });
});

// Delete individual Order
const deleteindividualOrderProduct = catchAsyncErrors(
  async (req, res, next) => {
    const product = await signedUpBusiness.find({
      "storeProducts._id": req.query.businessId,
    });

    if (!product) {
      return next(new ErrorHandler("Business not found", 404));
    }

    const orders = product.orders.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfindividualOrders = orders.length;

    await signedUpBusiness.findOneAndUpdate(
      { "storeProducts._id": req.query.businessId },
      {
        orders,
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
      orders: product.orders,
    });
  }
);

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

  // getAllCampaigns,
  // getSingleCampaign,
  // UpdateCampaign,
  // DeleteCampaign,
  // createCampaignStarted,
  getListOfCampaignsStarted,
  getMyListOfCampaignsStarted,
  deleteCampaignStarted,

  // createCampaignReview,
  // getCampaignReviews,
  // deleteCampaignReview,
  createBusinessCampaignReview,
  getBusinessCampaignReviews,
  deleteBusinessCampaignReview,
  // createCampaignDonation,
  // getCampaignDonations,
  // getParticularCampaignDonation,
  // deleteCampaignDonation,
  createBusinessCampaignDonation,
  getBusinessCampaignDonations,
  deleteBusinessCampaignDonation,

  createCampaignInvested,
  getListOfCampaignsInvested,
  getMyListOfCampaignsInvested,
  getParticularCampaignsInvested,
  deleteCampaignInvested,

  createInvestor,
  getMyInvestors,
  getInvestors,
  deleteInvestor,
  createIndividualInvestor,
  getMyIndividualInvestors,
  getIndividualInvestors,
  deleteIndividualInvestor,
  createBusinessOrderedFrom,
  getMyBusinessOrderedFrom,
  getBusinessOrderedFrom,
  deleteBusinessOrderedFrom,
  createReview,
  getMyReviews,
  getIndividualReviews,
  deleteReview,
  createBusinessReview,
  getMyBusinessReviews,
  getBusinessReviews,
  deleteBusinessReview,
  createOrder,
  getMyOrders,
  getBusinessOrders,
  updateOrder,
  deleteOrder,
  createBusinessCustomer,
  getMyBusinessCustomers,
  getBusinessCustomers,
  deleteBusinessCustomer,
  createindividualCustomer,
  getMyIndividualCustomers,
  getIndividualCustomers,
  deleteindividualCustomer,
  createindividualOrder,
  getMyIndividualOrders,
  getIndividualOrders,
  updateIndividualOrder,
  deleteindividualOrder,
  createPersonalnewProductReview,
  getMyPersonalnewProductReviews,
  getPersonalnewProductReviews,
  deletePersonalnewProductReview,
  createPersonalCampaignReview,
  getMyPersonalCampaignReviews,
  getPersonalCampaignReviews,
  deletePersonalCampaignReview,
  deleteCampaignPayout,
  getParticularCampaignPayouts,
  getMyListOfCampaignsPayouts,
  getListOfCampaignsPayouts,
  createCampaignPayout,

  createStoreProduct,
  getSingleProduct,
  getMyListOfStoreProducts,
  getListOfStoreProducts,
  deleteBusinessStoreProduct,
  UpdateBusinessStoreProduct,

  createReviewProduct,
  getReviewsProduct,
  deleteReviewProduct,

  createindividualCustomerProduct,
  getIndividualCustomersProduct,
  deleteindividualCustomerProduct,
  createindividualOrderProduct,
  updateIndividualOrderProduct,
  getIndividualOrdersProduct,
  deleteindividualOrderProduct,
  createBusinessReviewProduct,
  getBusinessReviewsProduct,
  deleteBusinessReviewProduct,
  createBusinessCustomerProduct,
  getBusinessCustomersProduct,
  deleteBusinessCustomerProduct,
  createBusinessOrderProduct,
  updateBusinessOrderProduct,
  getBusinessOrdersProduct,
  deleteBusinessOrderProduct,
};
