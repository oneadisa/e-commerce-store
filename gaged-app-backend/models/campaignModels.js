const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    natureOfBusiness: {
      type: String,
      required: true,
    },
    campaignCategory: {
      type: String,
      required: true,
    },
    business_address_country: {
      type: String,
      required: true,
    },
    business_address_city: {
      type: String,
      required: true,
    },
    business_address_office: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    investorBrief: {
      type: String,
      required: true,
    },
    campaignVideo: {
      type: String,
      required: true,
      default: "https://icon-library.com/icon/icon-image-file-29.html.html",
    },
    pitchDeck: {
      type: String,
      required: true,
    },
    ideal_target_audience_age: {
      type: String,
      required: true,
    },
    ideal_target_audience_health_issues_or_disabilities: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fundingType: {
      type: String,
      required: true,
    },
    categoryFunding: {
      type: String,
      required: true,
    },
    amountBeingRaised: {
      type: Number,
      required: true,
    },
    pledged_profit_to_lenders: {
      type: Number,
      required: true,
    },
    duration_pledged_profit: {
      type: String,
      required: true,
    },
    repayment_schedule_pledged_profit: {
      type: String,
      required: true,
    },
    equity_offering_percentage: {
      type: Number,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    bank_account_name: {
      type: String,
      required: true,
    },
    bank_account_number: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    go_live_schedule: {
      type: Date,
      required: false,
    },
    campaignLiveStatus: {
      type: Boolean,
      required: false,
      default: false,
    },
    individualCampaignReviews: [
      {
        individualUser: {
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
    BusinessCampaignReviews: [
      {
        businessUser: {
          type: mongoose.Schema.ObjectId,
          ref: "mySignedUpBusinessTable",
          required: false,
        },
        businessName: {
          type: String,
          required: true,
        },
        commentedAt: {
          type: Date,
          default: Date.now,
        },
        comment: {
          type: String,
          required: true,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
      },
    ],
    numberOfBusinessReviews: {
      type: Number,
      default: 0,
    },
    totalNumberOfCampaignReviews: {
      type: Number,
      default: 0,
    },

    businessCampaignDonors: [
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
        amount: {
          type: Number,
          default: 0,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
      },
    ],
    numberOfBusinessCampaignDonors: {
      type: Number,
      default: 0,
    },

    individualCampaignDonors: [
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
        amount: {
          type: Number,
          default: 0,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        pic: {
          type: String,
          required: false,
          default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
      },
    ],
    numberOfIndividualCampaignDonors: {
      type: Number,
      default: 0,
    },
    totalNumberOfCampaignDonors: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "mySignedUpBusinessTable",
    },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
