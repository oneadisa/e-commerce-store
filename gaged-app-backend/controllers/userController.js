const bcrypt = require("bcrypt");
const signedUpUser = require("../models/signUpModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/signUpModels");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

const registerUser = asyncHandler(async (req, res) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

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
    paymentMethod,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
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

  const user = await signedUpUser.findOne({ email });
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
  )}/password/reset/${resetToken}`;

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
};
