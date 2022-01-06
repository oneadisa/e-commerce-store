const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your First Name"],
    maxLength: [20, "First Name cannot exceed 20 characters"],
    minLength: [1, " First Name should have more than 1 character"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Your Last Name"],
    maxLength: [20, "Last Name cannot exceed 20 characters"],
    minLength: [1, "Last Name should have more than 1 character"],
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
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: "false",
  },
  role: {
    type: String,
    default: "user",
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
    maxLength: [11, "Bank Account Number cannot exceed 11 characters"],
    minLength: [8, "Bank Account Number should have more than 8 character"],
  },
  walletBalance: {
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
  totalNumberOfCampaignsInvested: {
    type: Number,
    required: false,
    default: 0,
  },
  listOfCampaignsInvested: [
    {
      businessName: {
        type: String,
        required: [true, "Please Enter Your Business Name"],
      },
      natureOfBusiness: {
        type: String,
        required: [true, "Please Enter Your Nature Of Business"],
      },
      campaignCategory: {
        type: String,
        required: [true, "Please Enter Your Campaign Category"],
      },
      investorBrief: {
        type: String,
        required: [true, "Please Enter Your Investor's Brief."],
      },
      duration: {
        type: String,
        required: [true, "Please Enter Your Campaign's Duration"],
      },
      campaignLiveStatus: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  ],
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

signUpTemplate.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

signUpTemplate.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Password Reset Token
signUpTemplate.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to signUpTemplate
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const signedUpUser = mongoose.model("mySignedUpUserTable", signUpTemplate);

module.exports = signedUpUser;
//
// isAdmin: {
// just in case
// type: Boolean,
// required: true,
// default: false
// },
// pic: {
// type: String,
// required: true,
// default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
// },
