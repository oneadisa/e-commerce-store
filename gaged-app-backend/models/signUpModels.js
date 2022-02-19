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
      required: false,
    },
    url: {
      type: String,
      required: false,
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
  twitter: {
    type: String,
    required: false,
    default: "https://www.twitter.com",
  },
  faceBook: {
    type: String,
    required: false,
    default: "https://www.faceBook.com",
  },
  whatsApp: {
    type: String,
    required: Number,
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
  bankCode: {
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
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
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
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "mySignedUpUserTable",
        required: false,
      },
      CampaignName: {
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
        default: true,
      },
      organiser: {
        type: String,
        required: false,
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
        ref: "mySignedUpUserTable",
        required: false,
      },
      CampaignName: {
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
    },
  ],

  campaignReviews: [
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
      comment: {
        type: String,
        required: false,
      },
      organiser: {
        type: String,
        required: false,
      },
      campaignId: {
        type: String,
        required: false,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  numberOfCampaignsReviewed: { type: Number, required: false, default: 0 },
  newnewProductReview: [
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
      price: {
        type: Number,
        required: false,
      },
      rating: {
        type: Number,
        default: 0,
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

signUpTemplate.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// JWT TOKEN
signUpTemplate.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password
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
