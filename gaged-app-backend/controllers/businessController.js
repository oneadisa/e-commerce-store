const bcrypt = require("bcrypt");
const signedUpBusiness = require("../models/signUpBusinessModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

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
    storeLogo,
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
    storeLogo,
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
      storeLogo: user.storeLogo,
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
      storeLogo: user.storeLogo,
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
    user.storeLogo = req.body.storeLogo || user.storeLogo;
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
      storeLogo: updatedBusiness.storeLogo,
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
    return next(new ErrorHander("Business not found", 404));
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

    return next(new ErrorHander(error.message, 500));
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
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
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

  if (req.body.avatar !== "") {
    const user = await signedUpBusiness.findById(req.user.id);

    const imageId = user.avatar.public_id;

    await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    newBusinessData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

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
  });
});

// Get all users(admin)
const getAllBusiness = catchAsyncErrors(async (req, res, next) => {
  const users = await signedUpBusiness.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)
const getSingleBusiness = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`Business does not exist with Id: ${req.params.id}`)
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
      new ErrorHander(`Business does not exist with Id: ${req.params.id}`, 400)
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

// Create New CampaignStarted BusinessProfile or Update a CampaignStarted BusinessProfile
const createCampaignStarted = catchAsyncErrors(async (req, res, next) => {
  const {
    businessId,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  } = req.body;

  const campaignStarted = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  };

  const business = await signedUpBusiness.findById(businessId);

  const isStarted = business.listOfCampaignsStarted.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isStarted) {
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

// Create New Campaign Invested BusinessProfile or Update a Campaign Invested BusinessProfile
const createCampaignInvested = catchAsyncErrors(async (req, res, next) => {
  const {
    businessId,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  } = req.body;

  const campaignStarted = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  };

  const business = await signedUpBusiness.findById(businessId);

  const isStarted = business.listOfCampaignsInvested.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isStarted) {
  } else {
    business.listOfCampaignsInvested.push(campaignStarted);
    business.totalNumberOfCampaignsInvested =
      business.listOfCampaignsInvested.length;
  }

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
};
