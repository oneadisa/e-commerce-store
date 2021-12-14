const bcrypt = require("bcrypt");
const signedUpBusiness = require("../models/signUpBusinessModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerBusiness = asyncHandler(async (req, res) => {
  // const saltPassword = await bcrypt.genSalt(10)
  // const securePassword = await bcrypt.hash(req.body.password, saltPassword)

  // const signedUpBusiness = new signUpTemplateCopy({
  // businessName: req.body.businessName,
  // accountHolderName: req.body.accountHolderName,
  // email: req.body.email,
  // phoneNumber: req.body.phoneNumber,
  // password: securePassword
  // })

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
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
});

module.exports = { registerBusiness, authBusiness };

const updateBusinessProfile = asyncHandler(async (req, res) => {
  const user = await signedUpBusiness.findById(req.user._id);

  if (user) {
    user.businessName = req.body.businessName || user.businessName;
    user.accountHolderName =
      req.body.accountHolderName || user.accountHolderName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.pic = req.body.pic || user.pic;
    user.meansOfID = req.body.meansOfID || user.meansOfID;
    user.IDpic = req.body.IDpic || user.IDpic;
    user.regNum = req.body.regNum || user.regNum;
    user.natureOfBusiness = req.body.natureOfBusiness || user.natureOfBusiness;
    user.businessEmail = req.body.businessEmail || user.businessEmail;
    user.businessAddress = req.body.businessAddress || user.businessAddress;
    user.cacCertificate = req.body.cacCertificate || user.cacCertificate;
    user.formCO7 = req.body.formCO7 || user.formCO7;
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
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

module.exports = { registerBusiness, authBusiness, updateBusinessProfile };
