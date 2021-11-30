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
      businessName: user.businessName,
      accountHolderName: user.accountHolderName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
});

module.exports = { registerBusiness, authBusiness };
