const bcrypt = require("bcrypt");
const signedUpBusiness = require("../models/signUpBusinessModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

const registerBusiness = asyncHandler(async (req, res) => {
  const {
    businessName,
    accountHolderName,
    email,
    phoneNumber,
    password,
    pic,
    isAdmin,
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
    totalNumberOfCampaigns,
    listOfCampaigns,
    totalAmountRaised,
    averageRaised,
    numberOfInvestors,
    listOfInvestors,
    walletBalance,
    totalSales,
    totalRevenue,
    totalProductNumber,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    paymentMethod,
  } = req.body;

  const userExists = await signedUpBusiness.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Business Already Exists. Please Log In.");
  }
  const user = await signedUpBusiness.create({
    businessName,
    accountHolderName,
    email,
    phoneNumber,
    password,
    isAdmin,
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
    totalNumberOfCampaigns,
    listOfCampaigns,
    totalAmountRaised,
    averageRaised,
    numberOfInvestors,
    listOfInvestors,
    walletBalance,
    totalSales,
    totalRevenue,
    totalProductNumber,
    businessOrderedFrom,
    numberOfOrderRequests,
    quantityOfOrders,
    paymentMethod,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      businessName: user.businessName,
      accountHolderName: user.accountHolderName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      isAdmin: user.isAdmin,
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
      totalNumberOfCampaigns: user.totalNumberOfCampaigns,
      listOfCampaigns: user.listOfCampaigns,
      totalAmountRaised: user.totalAmountRaised,
      averageRaised: user.averageRaised,
      numberOfInvestors: user.numberOfInvestors,
      listOfInvestors: user.listOfInvestors,
      walletBalance: user.walletBalance,
      totalSales: user.totalSales,
      totalRevenue: user.totalRevenue,
      totalProductNumber: user.totalProductNumber,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
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
});

// Logout signedUpBusiness
const logoutBusiness = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

const authBusiness = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await signedUpBusiness.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      businessName: user.businessName,
      accountHolderName: user.accountHolderName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      isAdmin: user.isAdmin,
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
      totalNumberOfCampaigns: user.totalNumberOfCampaigns,
      listOfCampaigns: user.listOfCampaigns,
      totalAmountRaised: user.totalAmountRaised,
      averageRaised: user.averageRaised,
      numberOfInvestors: user.numberOfInvestors,
      listOfInvestors: user.listOfInvestors,
      walletBalance: user.walletBalance,
      totalSales: user.totalSales,
      totalRevenue: user.totalRevenue,
      totalProductNumber: user.totalProductNumber,
      businessOrderedFrom: user.businessOrderedFrom,
      numberOfOrderRequests: user.numberOfOrderRequests,
      quantityOfOrders: user.quantityOfOrders,
      paymentMethod: user.paymentMethod,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
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
    user.totalNumberOfCampaigns =
      req.body.totalNumberOfCampaigns || user.totalNumberOfCampaigns;
    user.listOfCampaigns = req.body.listOfCampaigns || user.listOfCampaigns;
    user.totalAmountRaised =
      req.body.totalAmountRaised || user.totalAmountRaised;
    user.averageRaised = req.body.averageRaised || user.averageRaised;
    user.numberOfInvestors =
      req.body.numberOfInvestors || user.numberOfInvestors;
    user.listOfInvestors = req.body.listOfInvestors || user.listOfInvestors;
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
    user.paymentMethod = req.body.paymentMethod || user.paymentMethod;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedBusiness = await user.save();

    res.json({
      _id: updatedBusiness._id,
      businessName: updatedBusiness.businessName,
      accountHolderName: updatedBusiness.accountHolderName,
      phoneNumber: updatedBusiness.phoneNumber,
      email: updatedBusiness.email,
      pic: updatedBusiness.pic,
      isAdmin: updatedBusiness.isAdmin,
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
      totalNumberOfCampaigns: updatedBusiness.totalNumberOfCampaigns,
      listOfCampaigns: updatedBusiness.listOfCampaigns,
      totalAmountRaised: updatedBusiness.totalAmountRaised,
      averageRaised: updatedBusiness.averageRaised,
      numberOfInvestors: updatedBusiness.numberOfInvestors,
      listOfInvestors: updatedBusiness.listOfInvestors,
      walletBalance: updatedBusiness.walletBalance,
      totalSales: updatedBusiness.totalSales,
      totalRevenue: updatedBusiness.totalRevenue,
      totalProductNumber: updatedBusiness.totalProductNumber,
      businessOrderedFrom: updatedBusiness.businessOrderedFrom,
      numberOfOrderRequests: updatedBusiness.numberOfOrderRequests,
      quantityOfOrders: updatedBusiness.quantityOfOrders,
      paymentMethod: updatedBusiness.paymentMethod,
    });
  } else {
    res.status(404);
    throw new Error("signedUpBusiness Not Found");
  }
});

// Forgot Password
const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("signedUpBusiness not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

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
    return next(new ErrorHander("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Get signedUpBusiness Detail
const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await signedUpBusiness.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update signedUpBusiness password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
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
  const newUserData = {
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

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await signedUpBusiness.findByIdAndUpdate(
    req.user.id,
    newUserData,
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
const getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await signedUpBusiness.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get single user (admin)nst
const getSingleUser = catchAsyncErrors(async (req, res, next) => {
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

// update signedUpBusiness Role -- Admin
const updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await signedUpBusiness.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete signedUpBusiness --Admin
const deleteUser = catchAsyncErrors(async (req, res, next) => {
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

module.exports = {
  registerBusiness,
  authBusiness,
  updateBusinessProfile,
  logoutBusiness,
  forgotPassword,
};
