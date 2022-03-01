const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    campaignName: {
      type: String,
      required: [true, "Please Enter a name for your Campaign"],
    },
    natureOfBusiness: {
      type: String,
      required: [true, "Please Fill In A Nature Of Business."],
    },
    campaignCategory: {
      type: String,
      required: [
        true,
        "Please provide at least one category for your campaign",
      ],
    },
    business_address_country: {
      type: String,
      required: [
        true,
        "Please Fill in your Business's Main coutry of Operation",
      ],
    },
    ownerLogo: {
      type: String,
      required: false,
    },
    ownerName: {
      type: String,
      required: false,
    },
    business_address_city: {
      type: String,
      required: [true, "Please Enter a City for your Business."],
    },
    business_address_office: {
      type: String,
      required: [true, "Please Enter a chosen Address for your Business."],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please Enter your Phone Number"],
    },
    investorBrief: {
      type: String,
      required: [true, "Please Provide an Investor Brief for your Campaign."],
    },
    campaignVideo: {
      type: String,
      required: false,
      default:
        "https://www.seekpng.com/png/full/332-3320905_shadow-768x364-light-gray-gradient-background.png",
    },
    pitchDeck: {
      type: String,
      required: [true, "Please Enter A pitch Deck for your business."],
    },
    ideal_target_audience_age: {
      type: String,
      required: [true, "Please Select your ideal target audience's age."],
    },
    ideal_target_audience_health_issues_or_disabilities: {
      type: String,
      required: [
        true,
        "Please Indicate whether this campaign is directed towards people with special needs.",
      ],
    },
    gender: {
      type: String,
      required: [true, "Please Select a Gender."],
    },
    fundingType: {
      type: String,
      required: [true, "Please Select a Funding Type."],
    },
    categoryFunding: {
      type: String,
      required: [true, "Please Enter a Funding Category."],
    },
    amountBeingRaised: {
      type: Number,
      required: [true, "Please Indicate the amount being raised."],
    },
    amountAlreadyRaised: {
      type: Number,
      required: false,
      default: 0,
    },
    amountRepaid: {
      type: Number,
      required: false,
      default: 0,
    },
    amountToBeRepaid: {
      type: Number,
      required: false,
      default: 0,
    },
    amountToBeRepaidPerPayout: {
      type: Number,
      required: false,
      default: 0,
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
    endDatePledgedProfit: {
      type: Number,
      required: false,
    },
    endDatePledgedProfitString: {
      type: String,
      required: false,
    },
    timePerPayment: {
      type: Number,
      required: false,
      default: 0,
    },

    equity_offering_percentage: {
      type: Number,
      required: false,
      default: 0,
    },
    bankCode: {
      type: String,
      required: [true, "Please Enter Your Bank Name."],
    },
    bank_account_name: {
      type: String,
      required: [true, "Please Enter Your Bank Account Name."],
    },
    bank_account_number: {
      type: String,
      required: [true, "Please Enter Your BAnk Account Name."],
    },
    duration: {
      type: Number,
      required: [true, "Please Enter the Duration of your Campaign."],
    },
    go_live_schedule: {
      type: String,
      required: false,
    },
    campaignLiveStatus: {
      type: String,
      required: false,
      default: "false",
    },
    familiarWithCrowdFunding: {
      type: String,
      required: false,
    },
    storeOnGaged: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
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
    campaignReviews: [
      {
        // user: {
        // type: mongoose.Schema.ObjectId,
        // ref: "mySignedUpUserTable",
        // required: false,
        // },
        name: {
          type: String,
          required: true,
        },
        // lastName: {
        // type: String,
        // required: true,
        // },
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
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    // businessCampaignReviews: [
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
    // commentedAt: {
    // type: Date,
    // default: Date.now,
    // },
    // comment: {
    // type: String,
    // required: true,
    // },
    // pic: {
    // type: String,
    // required: false,
    // default:
    // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    // },
    // },
    // ],
    // numberOfBusinessReviews: {
    // type: Number,
    // default: 0,
    // },
    totalNumberOfCampaignReviews: {
      type: Number,
      default: 0,
    },

    donors: [
      {
        // user: {
        // type: mongoose.Schema.ObjectId,
        // ref: "mySignedUpBusinessTable",
        // required: false,
        // },
        name: {
          type: String,
          required: false,
        },
        amount: {
          type: Number,
          default: 0,
        },
        date: {
          type: Date,
          default: Date.now,
          required: false,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        typeOfDonation: {
          type: String,
          required: false,
        },
        amountToBeRepaid: {
          type: Number,
          default: 0,
        },
        amountToBeRepaidPerTime: {
          type: Number,
          default: 0,
        },
        firstPaymentDateDonor: {
          type: String,
          required: false,
        },
        lastPaymentDate: {
          type: String,
          required: false,
        },
        amountAlreadyRepaid: {
          type: Number,
          default: 0,
        },
      },
    ],
    // numberOfdonors: {
    // type: Number,
    // default: 0,
    // },

    // individualCampaignDonors: [
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
    // amount: {
    // type: Number,
    // default: 0,
    // },
    // date: {
    // type: Date,
    // default: Date.now,
    // required: false,
    // },
    // pic: {
    // type: String,
    // required: false,
    // default:
    // "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    // },
    // typeOfDonation: {
    // type: String,
    // required: false,
    // },
    // amountToBeRepaid: {
    // type: Number,
    // default: 0,
    // },
    // amountToBeRepaidPerTime: {
    // type: Number,
    // default: 0,
    // },
    // firstPaymentDateDonor: {
    // type: String,
    // required: false,
    // },
    // lastPaymentDate: {
    // type: String,
    // required: false,
    // },
    // amountAlreadyRepaid: {
    // type: Number,
    // default: 0,
    // },
    // },
    // ],
    // numberOfIndividualCampaignDonors: {
    // type: Number,
    // default: 0,
    // },
    totalNumberOfCampaignDonors: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: false,
      ref: "mySignedUpBusinessTable",
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
