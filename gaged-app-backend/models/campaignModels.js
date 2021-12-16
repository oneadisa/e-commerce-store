import mongoose from "mongoose";

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
    phoneNUmber: {
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
      default: "",
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
    funingType: {
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
      type: String,
      required: true,
    },
    campaignLiveStatus: {
      type: Boolean,
      required: true,
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
