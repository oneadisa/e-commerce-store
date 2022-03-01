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
  faceBook: {
    type: String,
    required: false,
    default: "https://www.faceBook.com",
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
  personalEmail: {
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
        required: [true, "Please Enter product Name"],
        trim: true,
      },
      shortDescription: {
        type: String,
        required: [true, "Please Enter product Description"],
      },
      productDetails: {
        type: String,
        required: [true, "Please Enter Product Details"],
      },
      discountedPrice: {
        type: Number,
        required: false,
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      productUnitCount: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      shippingCost: {
        type: Number,
        default: 0,
      },
      images: [
        {
          public_id: {
            type: String,
            required: false,
          },
          url: {
            type: String,
            required: false,
          },
        },
      ],
      ratings: {
        type: Number,
        default: 0,
      },
      category: {
        type: String,
        required: false,
      },
      reviews: [
        {
          user: {
            type: mongoose.Schema.ObjectId,
            ref: "mySignedUpBusinessTable",
            required: false,
          },
          // firstName: {
          // type: String,
          // required: false,
          // },
          name: {
            type: String,
            required: false,
          },
          rating: {
            type: Number,
            default: 0,
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
          comment: {
            type: String,
            required: false,
          },
          commentedAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      // numberOfReviews: {
      // type: Number,
      // default: 0,
      // },
      // BusinessnewProductReviews: [
      // {
      // name: {
      // type: String,
      // required: false,
      // },
      // rating: {
      // type: Number,
      // default: 0,
      // },
      // pic: {
      // type: String,
      // required: false,
      // default:
      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      // },
      // comment: {
      // type: String,
      // required: false,
      // },
      // commentedAt: {
      // type: Date,
      // default: Date.now,
      // },
      // },
      // ],
      // numberOfBusinessReviews: {
      // type: Number,
      // default: 0,
      // },
      totalNumberOfReviews: {
        type: Number,
        default: 0,
      },
      // businessOrders: [
      // {
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpBusinessTable",
      // required: false,
      // },
      // productOrdered: {
      // type: String,
      // required: false,
      // },
      // businessName: {
      // type: String,
      // required: false,
      // },
      // phoneNumber: {
      // type: Number,
      // required: false,
      // },
      // pic: {
      // type: String,
      // required: false,
      // default:
      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      // },
      // email: {
      // type: String,
      // required: false,
      // },
      // },
      // ],
      // numberOfBusinessOrders: {
      // type: Number,
      // default: 0,
      // },
      // individualOrders: [
      // {
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpUserTable",
      // required: false,
      // },
      // productOrdered: {
      // type: String,
      // required: false,
      // },
      // firstName: {
      // type: String,
      // required: false,
      // },
      // lastName: {
      // type: String,
      // required: false,
      // },
      // phoneNumber: {
      // type: Number,
      // required: false,
      // },
      // pic: {
      // type: String,
      // required: false,
      // default:
      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      // },
      // email: {
      // type: String,
      // required: false,
      // },
      // },
      // ],
      // numberOfIndividualOrders: {
      // type: Number,
      // default: 0,
      // },
      // totalNumberOfOrders: {
      // type: Number,
      // default: 0,
      // },
      // individualCustomers: [
      // {
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpUserTable",
      // required: false,
      // },
      // firstName: {
      // type: String,
      // required: false,
      // },
      // lastName: {
      // type: String,
      // required: false,
      // },
      // phoneNumber: {
      // type: Number,
      // required: false,
      // },
      // pic: {
      // type: String,
      // required: false,
      // default:
      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      // },
      // email: {
      // type: String,
      // required: false,
      // },
      // },
      // ],
      // numberOfIndividualCustomers: {
      // type: Number,
      // default: 0,
      // },
      // businessCustomers: [
      // {
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpBusinessTable",
      // required: false,
      // },
      // businessName: {
      // type: String,
      // required: false,
      // },
      // phoneNumber: {
      // type: Number,
      // required: false,
      // },
      // pic: {
      // type: String,
      // required: false,
      // default:
      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      // },
      // email: {
      // type: String,
      // required: false,
      // },
      // productBought: {
      // type: String,
      // required: false,
      // },
      // },
      // ],
      // numberOfBusinessCustomers: {
      // type: Number,
      // default: 0,
      // },
      // totalNumberOfCustomers: {
      // type: Number,
      // default: 0,
      // },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "mySignedUpBusinessTable",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
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
  //  listOfCampaignsStarted: [
  //    {
  //      campaignName: {
  //        type: String,
  //        required: [true, "Please Enter a name for your Campaign"],
  //      },
  //      natureOfBusiness: {
  //        type: String,
  //        required: [true, "Please Fill In A Nature Of Business."],
  //      },
  //      campaignCategory: {
  //        type: String,
  //        required: [
  //          true,
  //          "Please provide at least one category for your campaign",
  //        ],
  //      },
  //      business_address_country: {
  //        type: String,
  //        required: [
  //          true,
  //          "Please Fill in your Business's Main coutry of Operation",
  //        ],
  //      },
  //      ownerLogo: {
  //        type: String,
  //        required: false,
  //      },
  //      ownerName: {
  //        type: String,
  //        required: false,
  //      },
  //      business_address_city: {
  //        type: String,
  //        required: [true, "Please Enter a City for your Business."],
  //      },
  //      business_address_office: {
  //        type: String,
  //        required: [true, "Please Enter a chosen Address for your Business."],
  //      },
  //      phoneNumber: {
  //        type: Number,
  //        required: [true, "Please Enter your Phone Number"],
  //      },
  //      investorBrief: {
  //        type: String,
  //        required: [true, "Please Provide an Investor Brief for your Campaign."],
  //      },
  //      campaignVideo: {
  //        type: String,
  //        required: false,
  //        default:
  //          "https://www.seekpng.com/png/full/332-3320905_shadow-768x364-light-gray-gradient-background.png",
  //      },
  //      pitchDeck: {
  //        type: String,
  //        required: [true, "Please Enter A pitch Deck for your business."],
  //      },
  //      ideal_target_audience_age: {
  //        type: String,
  //        required: [true, "Please Select your ideal target audience's age."],
  //      },
  //      ideal_target_audience_health_issues_or_disabilities: {
  //        type: String,
  //        required: [
  //          true,
  //          "Please Indicate whether this campaign is directed towards people with special needs.",
  //        ],
  //      },
  //      twitter: {
  //        type: String,
  //        required: false,
  //        default: "https://www.twitter.com",
  //      },
  //      faceBook: {
  //        type: String,
  //        required: false,
  //        default: "https://www.faceBook.com",
  //      },
  //      whatsApp: {
  //        type: String,
  //        required: Number,
  //      },
  //      gender: {
  //        type: String,
  //        required: [true, "Please Select a Gender."],
  //      },
  //      fundingType: {
  //        type: String,
  //        required: [true, "Please Select a Funding Type."],
  //      },
  //      categoryFunding: {
  //        type: String,
  //        required: [true, "Please Enter a Funding Category."],
  //      },
  //      amountBeingRaised: {
  //        type: Number,
  //        required: [true, "Please Indicate the amount being raised."],
  //      },
  //      amountAlreadyRaised: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      amountRepaid: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      amountToBeRepaid: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      amountToBeRepaidPerPayout: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      pledged_profit_to_lenders: {
  //        type: Number,
  //        required: [
  //          true,
  //          "Please Indicate the percentage of your raised funds to give back in addition.",
  //        ],
  //      },
  //      duration_pledged_profit: {
  //        type: Number,
  //        required: [true, "Please Indicate the duration you plan to repay."],
  //      },
  //      repayment_schedule_pledged_profit: {
  //        type: Number,
  //        required: [true, "Please Select a schedule for your repayment."],
  //      },
  //      endDatePledgedProfit: {
  //        type: Number,
  //        required: false,
  //      },
  //      endDatePledgedProfitString: {
  //        type: String,
  //        required: false,
  //      },
  //      numberOfPaymentsToBeMade: {
  //        type: Number,
  //        required: false,
  //      },
  //      timePerPayment: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      equity_offering_percentage: {
  //        type: Number,
  //        required: false,
  //        default: 0,
  //      },
  //      bankCode: {
  //        type: String,
  //        required: [true, "Please Enter Your Bank Name."],
  //      },
  //      bank_account_name: {
  //        type: String,
  //        required: [true, "Please Enter Your Bank Account Name."],
  //      },
  //      bank_account_number: {
  //        type: String,
  //        required: [true, "Please Enter Your BAnk Account Name."],
  //      },
  //      duration: {
  //        type: Number,
  //        required: [true, "Please Enter the Duration of your Campaign."],
  //      },
  //      go_live_schedule: {
  //        type: String,
  //        required: false,
  //      },
  //      campaignLiveStatus: {
  //        type: String,
  //        required: false,
  //        default: "false",
  //      },
  //      familiarWithCrowdFunding: {
  //        type: String,
  //        required: false,
  //      },
  //      storeOnGaged: {
  //        type: String,
  //        required: false,
  //      },
  //      createdAt: {
  //        type: Date,
  //        default: Date.now,
  //      },
  //      firstPaymentDate: {
  //        type: Number,
  //        required: false,
  //      },
  //      firstPaymentDateString: {
  //        type: String,
  //        required: false,
  //      },
  //      endDate: {
  //        type: Number,
  //        required: false,
  //      },
  //      endDateString: {
  //        type: String,
  //        required: false,
  //      },
  //      reviews: [
  //        {
  //          // user: {
  //          // type: mongoose.Schema.ObjectId,
  //          // ref: "mySignedUpUserTable",
  //          // required: false,
  //          // },
  //          // firstName: {
  //          // type: String,
  //          // required: true,
  //          // },
  //          name: {
  //            type: String,
  //            required: true,
  //          },
  //          pic: {
  //            type: String,
  //            required: false,
  //            default:
  //              "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  //          },
  //          comment: {
  //            type: String,
  //            required: true,
  //          },
  //          commentedAt: {
  //            type: Date,
  //            default: Date.now,
  //          },
  //        },
  //      ],
  //      // numberOfIndividualReviews: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // businessCampaignReviews: [
  //      // {
  //      // user: {
  //      // type: mongoose.Schema.ObjectId,
  //      // ref: "mySignedUpBusinessTable",
  //      // required: false,
  //      // },
  //      // businessName: {
  //      // type: String,
  //      // required: true,
  //      // },
  //      // commentedAt: {
  //      // type: Date,
  //      // default: Date.now,
  //      // },
  //      // comment: {
  //      // type: String,
  //      // required: true,
  //      // },
  //      // pic: {
  //      // type: String,
  //      // required: false,
  //      // default:
  //      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  //      // },
  //      // },
  //      // ],
  //      // numberOfBusinessReviews: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      totalNumberOfCampaignReviews: {
  //        type: Number,
  //        default: 0,
  //      },
  //      donors: [
  //        {
  //          // user: {
  //          //   type: mongoose.Schema.ObjectId,
  //          //   ref: "mySignedUpBusinessTable",
  //          //   required: false,
  //          // },
  //          name: {
  //            type: String,
  //            required: false,
  //          },
  //          amount: {
  //            type: Number,
  //            default: 0,
  //          },
  //          date: {
  //            type: Date,
  //            default: Date.now,
  //            required: false,
  //          },
  //          pic: {
  //            type: String,
  //            required: false,
  //            default:
  //              "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  //          },
  //          typeOfDonation: {
  //            type: String,
  //            required: false,
  //          },
  //          amountToBeRepaid: {
  //            type: Number,
  //            default: 0,
  //          },
  //          amountToBeRepaidPerTime: {
  //            type: Number,
  //            default: 0,
  //          },
  //          firstPaymentDateDonor: {
  //            type: String,
  //            required: false,
  //          },
  //          lastPaymentDate: {
  //            type: String,
  //            required: false,
  //          },
  //          amountAlreadyRepaid: {
  //            type: Number,
  //            default: 0,
  //          },
  //        },
  //      ],
  //      // numberOfdonor: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // individualCampaignDonors: [
  //      // {
  //      // user: {
  //      // type: mongoose.Schema.ObjectId,
  //      // ref: "mySignedUpUserTable",
  //      // required: false,
  //      // },
  //      // firstName: {
  //      // type: String,
  //      // required: false,
  //      // },
  //      // lastName: {
  //      // type: String,
  //      // required: false,
  //      // },
  //      // amount: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // date: {
  //      // type: Date,
  //      // default: Date.now,
  //      // required: false,
  //      // },
  //      // pic: {
  //      // type: String,
  //      // required: false,
  //      // default:
  //      // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  //      // },
  //      // typeOfDonation: {
  //      // type: String,
  //      // required: false,
  //      // },
  //      // amountToBeRepaid: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // amountToBeRepaidPerTime: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // firstPaymentDateDonor: {
  //      // type: String,
  //      // required: false,
  //      // },
  //      // lastPaymentDate: {
  //      // type: String,
  //      // required: false,
  //      // },
  //      // amountAlreadyRepaid: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      // },
  //      // ],
  //      // numberOfIndividualCampaignDonors: {
  //      // type: Number,
  //      // default: 0,
  //      // },
  //      totalNumberOfCampaignDonors: {
  //        type: Number,
  //        default: 0,
  //      },
  //    },
  //    {
  //      timestamps: true,
  //    },
  //  ],
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
      campaignCategory: { type: String, required: false },
      investorBrief: { type: String, required: false },
      pitchDeck: { type: String, required: false },
      fundingType: { type: String, required: false },
      amountBeingRaised: { type: String, required: false },
      organiser: { type: String, required: false },
      campaignLiveStatus: { type: String, required: false },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      amountInvested: {
        type: Number,
        required: false,
        default: 0,
      },
      amountRepaid: {
        type: Number,
        required: false,
        default: 0,
      },
      amountRepaidPerTime: {
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
  listOfInvestors: [
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
  // numberOfIndividualInvestors: {
  // type: Number,
  // default: 0,
  // },
  // listOfIndividualInvestors: [
  // {
  // user: {
  // type: mongoose.Schema.ObjectId,
  // ref: "mySignedUpUserTable",
  // required: false,
  // },
  // name: {
  // type: String,
  // required: false,
  // },
  // phoneNumber: {
  // type: Number,
  // required: false,
  // },
  // email: {
  // type: Number,
  // required: false,
  // },
  // campaignInvested: {
  // type: String,
  // required: [false, "All investors must have at least one fundraiser."],
  // },
  // amountInvested: {
  // type: Number,
  // required: false,
  // default: 0,
  // },
  // amountToBeRepaid: {
  // type: String,
  // required: false,
  // },
  // endDateString: {
  // type: String,
  // required: false,
  // },
  // firstPaymentDateString: {
  // type: String,
  // required: false,
  // },
  // endDatePledgedProfitString: {
  // type: String,
  // required: false,
  // },
  // },
  // ],
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
  reviews: [
    {
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpUserTable",
      // required: false,
      // },
      // firstName: {
      // type: String,
      // required: true,
      // },
      name: {
        type: String,
        required: true,
      },
      productTitle: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      phoneNumber: {
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
  // numberOfIndividualReviews: {
  // type: Number,
  // default: 0,
  // },
  // businessReviews: [
  // {
  // user: {
  // type: mongoose.Schema.ObjectId,
  // ref: "mySignedUpBusinessTable",
  // required: false,
  // },
  // name: {
  // type: String,
  // required: true,
  // },
  // rating: {
  // type: Number,
  // default: 0,
  // },
  // productTitle: {
  // type: String,
  // required: true,
  // },
  // phoneNumber: {
  // type: String,
  // required: false,
  // },
  // comment: {
  // type: String,
  // required: true,
  // },
  // commentedAt: {
  // type: Date,
  // default: Date.now,
  // },
  // },
  // ],
  // numberOfBusinessReviews: {
  // type: Number,
  // default: 0,
  // },
  totalNumberOfReviews: {
    type: Number,
    default: 0,
  },
  orders: [
    {
      shippingInfo: {
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        pinCode: {
          type: Number,
          required: true,
        },
        phoneNo: {
          type: Number,
          required: true,
        },
      },
      userInfo: {
        name: {
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
      },

      orderItem: {
        productTitle: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        // product: {
        // type: mongoose.Schema.ObjectId,
        // ref: "StoreProduct",
        // required: true,
        // },
      },
      // user: {
      // type: mongoose.Schema.ObjectId,
      // ref: "mySignedUpBusinessTable",
      // required: false,
      // },
      paymentInfo: {
        id: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
      },
      paidAt: {
        type: Date,
        required: true,
      },
      itemPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      orderStatus: {
        type: String,
        required: true,
        default: "Processing",
      },
      deliveredAt: Date,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  // numberOfBusinessOrders: {
  // type: Number,
  // default: 0,
  // },
  // individualOrders: [
  // {
  // shippingInfo: {
  // address: {
  // type: String,
  // required: true,
  // },
  // city: {
  // type: String,
  // required: true,
  // },
  // state: {
  // type: String,
  // required: true,
  // },
  // country: {
  // type: String,
  // required: true,
  // },
  // pinCode: {
  // type: Number,
  // required: true,
  // },
  // phoneNo: {
  // type: Number,
  // required: true,
  // },
  // },
  // orderItems: [
  // {
  // productTitle: {
  // type: String,
  // required: true,
  // },
  // price: {
  // type: Number,
  // required: true,
  // },
  // quantity: {
  // type: Number,
  // required: true,
  // },
  // images: {
  // type: String,
  // required: true,
  // },
  // product: {
  // type: mongoose.Schema.ObjectId,
  // ref: "StoreProduct",
  // required: true,
  // },
  // },
  // ],
  // user: {
  // type: mongoose.Schema.ObjectId,
  // ref: "mySignedUpUserTable",
  // required: false,
  // },
  // paymentInfo: {
  // id: {
  // type: String,
  // required: true,
  // },
  // status: {
  // type: String,
  // required: true,
  // },
  // },
  // paidAt: {
  // type: Date,
  // required: true,
  // },
  // itemsPrice: {
  // type: Number,
  // required: true,
  // default: 0,
  // },
  // taxPrice: {
  // type: Number,
  // required: true,
  // default: 0,
  // },
  // shippingPrice: {
  // type: Number,
  // required: true,
  // default: 0,
  // },
  // totalPrice: {
  // type: Number,
  // required: true,
  // default: 0,
  // },
  // orderStatus: {
  // type: String,
  // required: true,
  // default: "Processing",
  // },
  // deliveredAt: Date,
  // createdAt: {
  // type: Date,
  // default: Date.now,
  // },
  // },
  // ],
  // numberOfIndividualOrders: {
  // type: Number,
  // default: 0,
  //},
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
      productTitle: {
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
      productTitle: {
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
  newnewProductReview: [
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
      price: {
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "mySignedUpBusinessTable",
    required: false,
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
