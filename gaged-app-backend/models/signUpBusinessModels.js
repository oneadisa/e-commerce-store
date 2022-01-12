const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const signUpBusinessTemplate = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "Please Enter Your Business Name"],
    maxLength: [40, "Business Name cannot exceed 40 characters"],
    minLength: [1, "Name should have more than 1 character"],
  },
  accountHolderName: {
    type: String,
    required: [true, "Please Enter Your Account Holder Name"],
    maxLength: [30, "Account Holder Name cannot exceed 30 characters"],
    minLength: [4, "Account Holder Name should have more than 4 characters"],
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
  role: {
    type: String,
    default: "user",
    required: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
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
    maxLength: [11, "Bank Account Number cannot exceed 11 characters"],
    minLength: [8, "Bank Account Number should have more than 8 character"],
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
  storeProducts: [
    {
      productTitle: {
        type: String,
        required: false,
      },
      shortDescription: {
        type: String,
        required: false,
      },
      category: {
        type: String,
        required: false,
      },
      productImageOne: {
        type: String,
        required: false,
        default: "https://icon-library.com/icon/icon-image-file-29.html.html",
      },
      ratings: {
        type: Number,
        default: 0,
      },
      costPrice: {
        type: Number,
        required: false,
      },
    },
  ],

  numberOfStoreProducts: {
    type: Number,
    required: false,
    default: 0,
  },
  deliveryCharge: {
    type: Number,
    required: false,
    default: 0,
  },
  totalNumberOfCampaignsStarted: {
    type: Number,
    required: false,
    default: 0,
  },
  totalNumberOfCampaignsInvested: {
    type: Number,
    required: false,
    default: 0,
  },
  listOfCampaignsStarted: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      pic: {
        type: String,
        required: false,
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
      amountRaised: {
        type: Number,
        required: false,
        default: 0,
      },
    },
  ],
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
      amountRaised: {
        type: Number,
        required: false,
        default: 0,
      },
    },
  ],

  totalAmountRaised: {
    type: Number,
    required: false,
    default: 0,
  },
  averageRaised: {
    type: Number,
    required: false,
    default: 0,
  },
  numberOfBusinessInvestors: {
    type: Number,
    default: 0,
  },
  listOfBusinessInvestors: [
    {
      businessUser: {
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
      campaignInvested: {
        type: Number,
        required: [false, "All investors must have at least one fundraiser."],
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
    },
  ],
  numberOfIndividualInvestors: {
    type: Number,
    default: 0,
  },
  listOfIndividualInvestors: [
    {
      individualUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
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
      campaignInvested: {
        type: Number,
        required: [false, "All investors must have at least one fundraiser."],
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
    },
  ],
  totalNumberOfInvestors: {
    type: Number,
    default: 0,
  },
  walletBalance: {
    type: Number,
    required: true,
    default: 0,
  },
  totalSales: {
    type: Number,
    required: true,
    default: 0,
  },
  totalRevenue: {
    type: Number,
    required: true,
    default: 0,
  },
  totalProductNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  businessOrderedFrom: [
    {
      businessUser: {
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
    defailt: 0,
  },
  quantityOfOrders: {
    type: Number,
    required: true,
    default: 0,
  },
  individualReviews: [
    {
      individualUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  numberOfIndividualReviews: {
    type: Number,
    default: 0,
  },
  businessReviews: [
    {
      businessUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  numberOfBusinessReviews: {
    type: Number,
    default: 0,
  },
  totalNumberOfReviews: {
    type: Number,
    default: 0,
  },
  businessOrders: [
    {
      businessUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      productOrdered: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: false,
      },
    },
  ],
  numberOfBusinessOrders: {
    type: Number,
    default: 0,
  },
  individualOrders: [
    {
      individualUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      productOrdered: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
        required: false,
      },
    },
  ],
  numberOfIndividualOrders: {
    type: Number,
    default: 0,
  },
  totalNumberOfOrders: {
    type: Number,
    default: 0,
  },
  individualCustomers: [
    {
      individualUser: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
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
    },
  ],
  numberOfIndividualCustomers: {
    type: Number,
    default: 0,
  },
  businessCustomers: [
    {
      businessUser: {
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
    },
  ],
  numberOfBusinessCustomers: {
    type: Number,
    default: 0,
  },
  totalNumberOfCustomers: {
    type: Number,
    default: 0,
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

// JWT TOKEN
signUpBusinessTemplate.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

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
