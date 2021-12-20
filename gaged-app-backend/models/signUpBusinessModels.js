const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const signUpBusinessTemplate = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "Please Enter Your Business Name"],
    maxLength: [40, "Name cannot exceed 40 characters"],
    minLength: [2, "Name should have more than 2 characters"],
  },
  accountHolderName: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [40, "Name cannot exceed 40 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please Enter a valid Phone Number"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: "false",
  },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  meansOfID: {
    type: String,
    required: false,
  },
  IDpic: {
    type: String,
    required: false,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  regNum: {
    type: String,
    required: false,
  },
  natureOfBusiness: {
    type: String,
    required: false,
  },
  businessEmail: {
    type: String,
    required: false,
  },
  businessAddress: {
    type: String,
    required: false,
  },
  cacCertificate: {
    type: String,
    required: false,
    default: "https://icon-library.com/icon/icon-image-file-18.html.html",
  },
  formCO7: {
    type: String,
    required: false,
    default: "https://icon-library.com/icon/icon-image-file-18.html.html",
  },
  bank: {
    type: String,
    required: false,
  },
  bankAccountName: {
    type: String,
    required: false,
  },
  bankAccountNumber: {
    type: String,
    required: false,
  },
  storeName: {
    type: String,
    required: false,
  },
  storeTagline: {
    type: String,
    required: false,
  },
  storeDescription: {
    type: String,
    required: false,
  },
  storeLink: {
    type: String,
    required: false,
  },
  storeLogo: {
    type: String,
    required: false,
    default: "https://icon-library.com/icon/icon-image-file-18.html.html",
  },
  totalNumberOfCampaigns: {
    type: Number,
    required: false,
  },
  listOfCampaigns: {
    type: Array,
    required: false,
  },

  totalAmountRaised: {
    type: Number,
    required: false,
  },
  averageRaised: {
    type: Number,
    required: false,
  },
  numberOfInvestors: {
    type: Number,
    default: 0,
  },
  listOfInvestors: [
    {
      IndividualUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      BusinessUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
      email: {
        type: Number,
        required: false,
      },
      fundraiserInvested: {
        type: Number,
        required: [false, "All investors must have at least one fundraiser."],
      },
    },
  ],
  walletBalance: {
    type: Number,
    required: false,
  },
  totalSales: {
    type: Number,
    required: false,
  },
  totalRevenue: {
    type: Number,
    required: false,
  },
  totalProductNumber: {
    type: Number,
    required: false,
  },
  businessOrderedFrom: [
    {
      BusinessUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      businessName: {
        type: String,
        required: false,
      },
      productName: {
        type: String,
        required: false,
      },
      quantity: {
        type: Number,
        required: false,
      },
      totalPrice: {
        type: Number,
        required: [false, "All orders must have a total price"],
      },
    },
  ],
  numberOfOrderRequests: {
    type: Number,
    required: false,
  },
  quantityOfOrders: {
    type: Number,
    required: false,
  },
  paymentMethod: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

signUpBusinessTemplate.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

signUpBusinessTemplate.methods.matchPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Password Reset Token
signUpBusinessTemplate.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to signUpBusinessTemplate
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const signedUpBusiness = mongoose.model(
  "mySignedUpBusinessTable",
  signUpBusinessTemplate
);

module.exports = signedUpBusiness;

//  avatar: {
// public_id: {
// type: String,
// required: true,
// },
// url: {
// type: String,
// required: true,
// },
// },
