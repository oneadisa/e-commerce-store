const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signUpBusinessTemplate = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
    required: false,
  },
  listOfInvestors: {
    type: Array,
    required: false,
  },
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
  businessOrderedFrom: {
    type: Array,
    required: false,
  },
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
  date: {
    type: Date,
    default: Date.now,
  },
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

const signedUpBusiness = mongoose.model(
  "mySignedUpBusinessTable",
  signUpBusinessTemplate
);

module.exports = signedUpBusiness;
