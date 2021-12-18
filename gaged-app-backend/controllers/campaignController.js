const Campaign = require("../models/campaignModels");
const asyncHandler = require("express-async-handler");
const getCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find({
    user: req.user._id,
  });
  res.json(campaigns);
});

const CreateCampaign = asyncHandler(async (req, res) => {
  const {
    businessName,
    natureOfBusiness,
    campaignCategory,
    business_address_country,
    business_address_city,
    business_address_office,
    phoneNumber,
    investorBrief,
    campaignVideo,
    pitchDeck,
    ideal_target_audience_age,
    ideal_target_audience_health_issues_or_disabilities,
    gender,
    fundingType,
    categoryFunding,
    amountBeingRaised,
    pledged_profit_to_lenders,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
    equity_offering_percentage,
    bank,
    bank_account_name,
    bank_account_number,
    duration,
    go_live_schedule,
    campaignLiveStatus,
  } = req.body;

  if (
    !businessName ||
    !natureOfBusiness ||
    !campaignCategory ||
    !business_address_country ||
    !business_address_city ||
    !business_address_office ||
    !phoneNumber ||
    !investorBrief ||
    !campaignVideo ||
    !pitchDeck ||
    !ideal_target_audience_age ||
    !ideal_target_audience_health_issues_or_disabilities ||
    !gender ||
    !fundingType ||
    !categoryFunding ||
    !amountBeingRaised ||
    !pledged_profit_to_lenders ||
    !duration_pledged_profit ||
    !repayment_schedule_pledged_profit ||
    !equity_offering_percentage ||
    !bank ||
    !bank_account_name ||
    !bank_account_number ||
    !duration ||
    !go_live_schedule ||
    !campaignLiveStatus
  ) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const campaign = new Campaign({
      user: req.user._id,
      businessName,
      natureOfBusiness,
      campaignCategory,
      business_address_country,
      business_address_city,
      business_address_office,
      phoneNumber,
      investorBrief,
      campaignVideo,
      pitchDeck,
      ideal_target_audience_age,
      ideal_target_audience_health_issues_or_disabilities,
      gender,
      fundingType,
      categoryFunding,
      amountBeingRaised,
      pledged_profit_to_lenders,
      duration_pledged_profit,
      repayment_schedule_pledged_profit,
      equity_offering_percentage,
      bank,
      bank_account_name,
      bank_account_number,
      duration,
      go_live_schedule,
      campaignLiveStatus,
    });

    const createdCampaign = await campaign.save();

    res.status(201).json(createdCampaign);
  }
});

const getCampaignById = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (campaign) {
    res.json(campaign);
  } else {
    res.status(404).json({ message: "Campaign not found" });
  }

  res.json(campaign);
});

const UpdateCampaign = asyncHandler(async (req, res) => {
  const {
    businessName,
    natureOfBusiness,
    campaignCategory,
    business_address_country,
    business_address_city,
    business_address_office,
    phoneNumber,
    investorBrief,
    campaignVideo,
    pitchDeck,
    ideal_target_audience_age,
    ideal_target_audience_health_issues_or_disabilities,
    gender,
    fundingType,
    categoryFunding,
    amountBeingRaised,
    pledged_profit_to_lenders,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
    equity_offering_percentage,
    bank,
    bank_account_name,
    bank_account_number,
    duration,
    go_live_schedule,
    campaignLiveStatus,
  } = req.body;

  const campaign = await Campaign.findById(req.params.id);

  if (campaign.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (campaign) {
    campaign.businessName = businessName;
    campaign.natureOfBusiness = natureOfBusiness;
    campaign.campaignCategory = campaignCategory;
    campaign.business_address_country = business_address_country;
    campaign.business_address_city = business_address_city;
    campaign.business_address_office = business_address_office;
    campaign.phoneNumber = phoneNumber;
    campaign.investorBrief = investorBrief;
    campaign.campaignVideo = campaignVideo;
    campaign.pitchDeck = pitchDeck;
    campaign.ideal_target_audience_age = ideal_target_audience_age;
    campaign.ideal_target_audience_health_issues_or_disabilities =
      ideal_target_audience_health_issues_or_disabilities;
    campaign.gender = gender;
    campaign.fundingType = fundingType;
    campaign.categoryFunding = categoryFunding;
    campaign.amountBeingRaised = amountBeingRaised;
    campaign.pledged_profit_to_lenders = pledged_profit_to_lenders;
    campaign.duration_pledged_profit = duration_pledged_profit;
    campaign.repayment_schedule_pledged_profit =
      repayment_schedule_pledged_profit;
    campaign.equity_offering_percentage = equity_offering_percentage;
    campaign.bank = bank;
    campaign.bank_account_name = bank_account_name;
    campaign.bank_account_number = bank_account_number;
    campaign.duration = duration;
    campaign.go_live_schedule = go_live_schedule;
    campaign.campaignLiveStatus = campaignLiveStatus;

    const updatedCampaign = await campaign.save();
    res.json(updatedCampaign);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const DeleteCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (campaign.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (campaign) {
    await campaign.remove();
    res.json({ message: "Campaign Deleted" });
  } else {
    res.status(404);
    throw new Error("Campaign not Found");
  }
});

module.exports = {
  getCampaigns,
  CreateCampaign,
  getCampaignById,
  UpdateCampaign,
  DeleteCampaign,
};
