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
    required: false,
    default: "false",
  },
  role: {
    type: String,
    default: "user",
    required: false,
  },
  twitter: {
    type: String,
    required: false,
    default: "https://www.twitter.com",
  },
  facebook: {
    type: String,
    required: false,
    default: "https://www.facebook.com",
  },

  whatsApp: {
    type: String,
    required: Number,
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
    default:
      "https://images.unsplash.com/photo-1615799998603-7c6270a45196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80",
  },
  formCO7: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1615799998603-7c6270a45196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80",
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
  category: {
    type: String,
    required: false,
  },
  storeLogo: {
    type: String,
    required: false,
    default:
      "https://images.unsplash.com/photo-1615799998603-7c6270a45196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80",
  },
  storeBackground: {
    type: String,
    required: false,
    default:
      "https://www.seekpng.com/png/full/332-3320905_shadow-768x364-light-gray-gradient-background.png",
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
        default: "https://icon-library.com/icon/icon-image-file-29.html",
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
      campaignName: {
        type: String,
        required: false,
      },
      pitchDeck: {
        type: String,
        required: false,
      },
      fundingType: {
        type: String,
        required: false,
      },
      amountBeingRaised: {
        type: String,
        required: false,
      },
      campaignCategory: {
        type: String,
        required: false,
      },
      investorBrief: {
        type: String,
        required: false,
      },
      duration: {
        type: String,
        required: false,
      },
      campaignLiveStatus: {
        type: Boolean,
        required: false,
        default: true,
      },
      pledged_profit_to_lenders: {
        type: Number,
        required: [
          true,
          "Please Indicate the percentage of your raised funds to give back in addition.",
        ],
      },
      duration_pledged_profit: {
        type: Number,
        required: [true, "Please Indicate the duration you plan to repay."],
      },
      repayment_schedule_pledged_profit: {
        type: Number,
        required: [true, "Please Select a schedule for your repayment."],
      },
      amountRaised: {
        type: Number,
        required: false,
        default: 0,
      },
      amountToBeRepaid: {
        type: String,
        required: false,
      },
      firstPaymentDate: {
        type: Number,
        required: false,
      },
      firstPaymentDateString: {
        type: String,
        required: false,
      },
      endDate: {
        type: Number,
        required: false,
      },
      endDateString: {
        type: String,
        required: false,
      },
      endDatePledgedProfit: {
        type: Number,
        required: false,
      },
      endDatePledgedProfitString: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  listOfCampaignsInvested: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      campaignName: {
        type: String,
        required: false,
      },
      campaignCategory: {
        type: String,
        required: false,
      },
      investorBrief: {
        type: String,
        required: false,
      },
      pitchDeck: {
        type: String,
        required: false,
      },
      fundingType: {
        type: String,
        required: false,
      },
      amountBeingRaised: {
        type: String,
        required: false,
      },
      duration: {
        type: String,
        required: false,
      },
      campaignLiveStatus: {
        type: Boolean,
        required: false,
      },
      organiser: {
        type: String,
        required: false,
      },
      amountInvested: {
        type: Number,
        required: false,
      },
      amountToBeRepaid: {
        type: String,
        required: false,
      },
      endDateString: {
        type: String,
        required: false,
      },
      firstPaymentDateString: {
        type: String,
        required: false,
      },
      endDatePledgedProfitString: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  totalNumberOfCampaignPayouts: {
    type: Number,
    required: false,
    default: 0,
  },

  listOfCampaignPayouts: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      campaignName: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
      amountRepayed: {
        type: Number,
        required: false,
        default: 0,
      },
      endDateString: {
        type: String,
        required: false,
      },
      firstPaymentDateString: {
        type: String,
        required: false,
      },
      endDatePledgedProfitString: {
        type: String,
        required: false,
      },
      duration: {
        type: String,
        required: false,
      },
      pledged_profit_to_lenders: {
        type: Number,
        required: [
          true,
          "Please Indicate the percentage of your raised funds to give back in addition.",
        ],
      },
      duration_pledged_profit: {
        type: Number,
        required: [true, "Please Indicate the duration you plan to repay."],
      },
      repayment_schedule_pledged_profit: {
        type: Number,
        required: [true, "Please Select a schedule for your repayment."],
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
      user: {
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
        type: String,
        required: [false, "All investors must have at least one fundraiser."],
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
      amountToBeRepaid: {
        type: String,
        required: false,
      },
      endDateString: {
        type: String,
        required: false,
      },
      firstPaymentDateString: {
        type: String,
        required: false,
      },
      endDatePledgedProfitString: {
        type: String,
        required: false,
      },
    },
  ],
  numberOfIndividualInvestors: {
    type: Number,
    default: 0,
  },
  listOfIndividualInvestors: [
    {
      user: {
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
        type: String,
        required: [false, "All investors must have at least one fundraiser."],
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
      amountToBeRepaid: {
        type: String,
        required: false,
      },
      endDateString: {
        type: String,
        required: false,
      },
      firstPaymentDateString: {
        type: String,
        required: false,
      },
      endDatePledgedProfitString: {
        type: String,
        required: false,
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
      user: {
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
      productDescription: { type: String, required: false },
      price: { type: String, required: false },
      category: { type: String, required: false },
      quantity: {
        type: Number,
        required: false,
      },
      totalPrice: {
        type: Number,
        required: false,
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
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      product: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      comment: {
        type: String,
        required: true,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  numberOfIndividualReviews: {
    type: Number,
    default: 0,
  },
  businessReviews: [
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
      rating: {
        type: Number,
        default: 0,
      },
      product: {
        type: String,
        required: true,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      comment: {
        type: String,
        required: true,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
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
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      productOrdered: {
        type: String,
        required: false,
      },
      businessName: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      email: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  numberOfBusinessOrders: {
    type: Number,
    default: 0,
  },
  individualOrders: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      productOrdered: {
        type: String,
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      email: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
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
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
      productBought: {
        type: String,
        required: false,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      email: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  numberOfIndividualCustomers: {
    type: Number,
    default: 0,
  },
  businessCustomers: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      businessName: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      email: {
        type: String,
        required: true,
      },
      productBought: {
        type: String,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
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
  campaignReviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
        required: false,
      },
      businessName: {
        type: String,
        required: true,
      },
      campaignName: {
        type: String,
        required: true,
      },
      pitchDeck: {
        type: String,
        required: false,
      },
      fundingType: {
        type: String,
        required: false,
      },
      amountBeingRaised: {
        type: String,
        required: false,
      },
      campaignCategory: {
        type: String,
        required: false,
      },
      investorBrief: {
        type: String,
        required: false,
      },
      duration: {
        type: String,
        required: false,
      },
      campaignLiveStatus: {
        type: Boolean,
        required: false,
        default: true,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      organiser: {
        type: String,
        required: false,
      },
      comment: {
        type: String,
        required: true,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  numberOfCampaignsReviewed: { type: Number, required: false, default: 0 },
  productReviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpBusinessTable",
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
        default: "https://icon-library.com/icon/icon-image-file-29.html",
      },
      ratings: {
        type: Number,
        default: 0,
      },
      costPrice: {
        type: Number,
        required: false,
      },
      pic: {
        type: String,
        required: false,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      comment: {
        type: String,
        required: true,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  numberOfProductsReviewed: { type: Number, required: false, default: 0 },
  totalNumberOfInteractions: {
    type: Number,
    required: false,
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
