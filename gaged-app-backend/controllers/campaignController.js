const Campaign = require("../models/campaignModels");
const signedUpBusiness = require("../models/signUpBusinessModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const getMyCampaigns = asyncHandler(async (req, res, next) => {
  // const { userId } = req.body;

  // const campaigns = await Campaign.find({
  // user: userId,
  // });

  // if (!campaigns) {
  // return next(new ErrorHandler("Campaign not found", 404));
  // } else {
  // res.status(200).json({
  // campaigns,
  // success: true,
  // count: campaigns.length,
  // });
  // }

  //const campaigns = await Campaign.find({ user: req.user });
  const resultPerPage = 20;
  const campaignsCount = await Campaign.countDocuments();
  const apiFeature = new ApiFeatures(
    Campaign.find({ user: req.user._id }),
    req.query
  )
    .search()
    .filter();
  let campaigns = await apiFeature.query;
  let filteredCampaignsCount = campaigns.length;
  apiFeature.pagination(resultPerPage);
  campaigns = await apiFeature.query.clone();

  if (!campaigns) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }
  res.status(200).json({
    success: true,
    campaigns,
    campaignsCount,
    resultPerPage,
    filteredCampaignsCount,
  });
});

// Get All Campaign
const getAllCampaigns = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 20;
  const campaignsCount = await Campaign.countDocuments();
  const apiFeature = new ApiFeatures(Campaign.find(), req.query)
    .search()
    .filter();
  let campaigns = await apiFeature.query;
  let filteredCampaignsCount = campaigns.length;
  apiFeature.pagination(resultPerPage);
  campaigns = await apiFeature.query.clone();
  res.status(200).json({
    success: true,
    campaigns,
    campaignsCount,
    resultPerPage,
    filteredCampaignsCount,
  });
});

const CreateCampaign = asyncHandler(async (req, res) => {
  const {
    campaignName,
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
    amountAlreadyRaised,
    amountRepaid,
    amountToBeRepaid,
    amountToBeRepaidPerPayout,
    pledged_profit_to_lenders,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
    endDatePledgedProfit,
    endDatePledgedProfitString,
    timePerPayment,
    equity_offering_percentage,
    bank,
    bank_account_name,
    bank_account_number,
    duration,
    go_live_schedule,
    campaignLiveStatus,
    paymentStartDate,
    endDate,
    firstPaymentDate,
    firstPaymentDateString,
    endDateString,
  } = req.body;

  if (
    !campaignName ||
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
    !bank ||
    !bank_account_name ||
    !bank_account_number ||
    !duration ||
    !go_live_schedule
  ) {
    res.status(400);
    throw new Error("Please fill all required feilds");
    return;
  } else {
    const campaign = new Campaign({
      user: req.user._id,
      campaignName,
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
      amountAlreadyRaised,
      amountRepaid,
      amountToBeRepaid,
      amountToBeRepaidPerPayout,
      pledged_profit_to_lenders,
      duration_pledged_profit,
      repayment_schedule_pledged_profit,
      endDatePledgedProfit,
      endDatePledgedProfitString,
      timePerPayment,
      equity_offering_percentage,
      bank,
      bank_account_name,
      bank_account_number,
      duration,
      go_live_schedule,
      campaignLiveStatus,
      paymentStartDate,
      endDate,
      firstPaymentDate,
      firstPaymentDateString,
      endDateString,
    });

    // let amountRaised = 0;
    // campaign.individualCampaignDonors.forEach((rev) => {
    // amountRaised += rev.amount;
    // });
    // campaign.amountAlreadyRaised = amountRaised;

    campaign.amountToBeRepaid =
      campaign.amountAlreadyRaised +
      campaign.amountAlreadyRaised * campaign.pledged_profit_to_lenders;
    // campaign.amountToBePaidPerPayout =
    // (campaign.amountToBeRepaid / campaign.duration_pledged_profit) *
    // campaign.repayment_schedule_pledged_profit;

    let numWeeks = campaign.duration;
    var now = new Date().getTime();

    campaign.endDate = now + numWeeks * 7 * 1000 * 60 * 60 * 24;
    campaign.endDateString = new Date(campaign.endDate);
    // new Date(now + numWeeks * 7 * 1000 * 60 * 60 * 24);

    campaign.endDatePledgedProfit =
      now +
      campaign.duration * (7 * 1000 * 60 * 60 * 24) +
      campaign.duration_pledged_profit * (30 * 1000 * 60 * 60 * 24);

    campaign.endDatePledgedProfitString = new Date(
      campaign.endDatePledgedProfit
    );

    campaign.numberOfPaymentsToBeMade =
      campaign.duration_pledged_profit /
      campaign.repayment_schedule_pledged_profit;

    const repaymentTime = Math.abs(
      campaign.endDatePledgedProfit - campaign.endDate
    );
    campaign.timePerPayment =
      repaymentTime /
      (campaign.duration_pledged_profit /
        campaign.repayment_schedule_pledged_profit);

    campaign.firstPaymentDate = campaign.endDate + campaign.timePerPayment;
    campaign.firstPaymentDateString = new Date(campaign.firstPaymentDate);

    let n =
      campaign.duration_pledged_profit /
      campaign.repayment_schedule_pledged_profit;

    for (let i = 0; i < n; i++) {}

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
    campaignName,
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
    amountAlreadyRaised,
    amountRepaid,
    amountToBeRepaid,
    amountToBeRepaidPerPayout,
    pledged_profit_to_lenders,
    duration_pledged_profit,
    repayment_schedule_pledged_profit,
    endDatePledgedProfit,
    endDatePledgedProfitString,
    timePerPayment,
    equity_offering_percentage,
    bank,
    bank_account_name,
    bank_account_number,
    duration,
    go_live_schedule,
    campaignLiveStatus,
    endDate,
    firstPaymentDate,
    firstPaymentDateString,
    endDateString,
    paymentStartDate,
  } = req.body;

  const campaign = await Campaign.findById(req.params.id);

  if (campaign.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (campaign) {
    campaign.campaignName = campaignName;
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
    campaign.amountAlreadyRaised = amountAlreadyRaised;
    campaign.amountRepaid = amountRepaid;
    campaign.amountToBeRepaid = amountToBeRepaid;
    campaign.amountToBeRepaidPerPayout = amountToBeRepaidPerPayout;
    campaign.pledged_profit_to_lenders = pledged_profit_to_lenders;
    campaign.duration_pledged_profit = duration_pledged_profit;
    campaign.repayment_schedule_pledged_profit =
      repayment_schedule_pledged_profit;
    campaign.endDatePledgedProfit = endDatePledgedProfit;
    campaign.endDatePledgedProfitString = endDatePledgedProfitString;
    campaign.timePerPayment = timePerPayment;
    campaign.equity_offering_percentage = equity_offering_percentage;
    campaign.bank = bank;
    campaign.bank_account_name = bank_account_name;
    campaign.bank_account_number = bank_account_number;
    campaign.duration = duration;
    campaign.go_live_schedule = go_live_schedule;
    campaign.campaignLiveStatus = campaignLiveStatus;
    campaign.paymentStartDate = paymentStartDate;
    campaign.endDate = endDate;
    campaign.endDateString = endDateString;
    campaign.firstPaymentDate = firstPaymentDate;
    campaign.firstPaymentDateString = firstPaymentDateString;

    // campaign.amountToBeRepaid =
    // campaign.amountBeingRaised + campaign.pledged_profit_to_lenders;
    // campaign.amountToBePaidPerPayout =
    // (campaign.amountToBeRepaid / campaign.duration_pledged_profit) *
    // campaign.repayment_schedule_pledged_profit;

    const updatedCampaign = await campaign.save();
    res.json(updatedCampaign);
  } else {
    res.status(404);
    throw new Error("Campaign not found");
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

// Create New Individual Review or Update an Individual review
const createIndividualCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      pic: req.user.pic,
      comment,
    };

    const campaign = await Campaign.findById(campaignId);

    const isReviewed = campaign.individualCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
    } else {
      campaign.individualCampaignReviews.push(review);
      campaign.numberOfIndividualCampaignReviews =
        campaign.individualCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.individualCampaignReviews.length +
        campaign.businessCampaignReviiews.length;
    }

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualCampaignReviews: campaign.individualCampaignReviews,
    });
  }
);

// Get Individual Reviews of a campaign
const getIndividualCampaignReviews = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.id);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    res.status(200).json({
      success: true,
      individualCampaignReviews: campaign.individualCampaignReviews,
    });
  }
);

// Delete Individual Review
const deleteIndividualCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const individualCampaignReviews = campaign.individualCampaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfIndividualCampaignReviews = individualCampaignReviews.length;

    await Campaign.findByIdAndUpdate(
      req.query.campaignId,
      {
        individualCampaignReviews,
        numberOfIndividualCampaignReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      individualCampaignReviews: campaign.individualCampaignReviews,
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, campaignId } = req.body;

    const review = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.user.pic,
      comment,
    };

    const campaign = await Campaign.findById(campaignId);

    const isReviewed = campaign.businessCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      campaign.businessCampaignReviews.push(review);
      campaign.numberOfBusinessReviews =
        campaign.businessCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.individualCampaignReviews.length +
        campaign.businessCampaignReviews.length;
    } else {
      campaign.businessCampaignReviews.push(review);
      campaign.numberOfBusinessReviews =
        campaign.businessCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.individualCampaignReviews.length +
        campaign.businessCampaignReviews.length;
    }

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCampaignReviews: campaign.businessCampaignReviews,
    });
  }
);

// Get All Business Reviews of a campaign
const getBusinessCampaignReviews = catchAsyncErrors(async (req, res, next) => {
  const campaign = await Campaign.findById(req.query.id);

  if (!campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  res.status(200).json({
    success: true,
    businessCampaignReviews: campaign.businessCampaignReviews,
  });
});

// Delete Business Review
const deleteBusinessCampaignReview = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const businessCampaignReviews = campaign.businessCampaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessCampaignReviews = businessCampaignReviews.length;

    await Campaign.findByIdAndUpdate(
      req.query.campaignId,
      {
        businessCampaignReviews,
        numberOfBusinessCampaignReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      businessCampaignReviews: campaign.businessCampaignReviews,
    });
  }
);

// Create New Individual Donation or Update an Individual Donation
const createIndividualCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const campaign = await Campaign.findById(campaignId);
    const organiser = signedUpBusiness.findById(campaign.user);

    const repaymentTime = Math.abs(
      campaign.endDatePledgedProfit - campaign.endDate
    );
    var numberOfRepayments = repaymentTime / campaign.timePerPayment;
    var numberOfTimesPaidAlready =
      repaymentTime / campaign.timePerPayment - numberOfRepayments;
    setTimeout(function () {
      if (numberOfRepayments > 0) {
        organiser.walletBalance -=
          (Number(amount) +
            campaign.pledged_profit_to_lenders * Number(amount)) /
          (campaign.duration_pledged_profit /
            campaign.repayment_schedule_pledged_profit);
        req.user.walletBalance +=
          (Number(amount) +
            campaign.pledged_profit_to_lenders * Number(amount)) /
          (campaign.duration_pledged_profit /
            campaign.repayment_schedule_pledged_profit);
        numberOfRepayments -= 1;
      }
    }, campaign.timePerPayment);

    const amountRepay =
      Number(amount) +
      (campaign.pledged_profit_to_lenders / 100) * Number(amount);
    const amountAlreadyRaise =
      (numberOfTimesPaidAlready *
        ((campaign.pledged_profit_to_lenders / 100) * Number(amount))) /
      (repaymentTime / campaign.timePerPayment);

    const amountPerTime =
      amountRepay / (repaymentTime / campaign.timePerPayment);

    var now = new Date().getTime();
    var firstPayment = campaign.firstPaymentDate;
    var firstPaymentDateHere = new Date(firstPayment);
    var lastPayment = campaign.endDatePledgedProfit;
    var lastPaymentDate = new Date(lastPayment);

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      pic: req.user.pic,
      amount: Number(amount),
      typeOfDonation: campaign.fundingType,
      amountToBeRepaid: amountRepay,
      amountToBeRepaidPerTime: amountPerTime,
      firstPaymentDateDonor: campaign.firstPaymentDateString,
      lastPaymentDate: campaign.endDatePledgedProfitString,
      amountAlreadyRepaid: amountAlreadyRaise,
    };

    const isDonated = campaign.individualCampaignDonors.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (!isDonated) {
    } else {
      campaign.individualCampaignDonors.push(review);
      campaign.numberOfIndividualCampaignDonors =
        campaign.individualCampaignDonors.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length +
        campaign.businessCampaignDonors.length;
    }

    let amountRaised = 0;
    campaign.individualCampaignDonors.forEach((rev) => {
      amountRaised += rev.amount;
    });

    campaign.amountAlreadyRaised = amountRaised;

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualCampaignDonors: campaign.individualCampaignDonors,
    });
  }
);

// Get Individual Donations of a campaign
const getIndividualCampaignDonations = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.id);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    res.status(200).json({
      success: true,
      individualCampaignDonors: campaign.individualCampaignDonors,
    });
  }
);

// Get particular Individual Donations of a campaign
const getParticularIndividualCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    async (req, res, next) => {
      const campaign = await Campaign.findById(req.query.id);
      if (!campaign) {
        return next(new ErrorHandler("Campaign not found", 404));
      }
      const myCampaignDonations = await campaign.individualCampaignDonors.find({
        user: req.user,
      });

      res.status(200).json({
        success: true,
        myCampaignDonations,
      });
    };
  }
);

// Delete Individual Donation
const deleteIndividualCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const individualCampaignDonors = campaign.individualCampaignDonors.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfIndividualCampaignDonors = individualCampaignDonors.length;

    await Campaign.findByIdAndUpdate(
      req.query.campaignId,
      {
        individualCampaignDonors,

        numberOfIndividualCampaignDonors,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      individualCampaignDonors: campaign.individualCampaignDonors,
    });
  }
);

// Create New Business Donation or Update the Business Donation
const createBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const campaign = await Campaign.findById(campaignId);
    const organiser = signedUpBusiness.findById(campaign.user);

    const repaymentTime = Math.abs(
      campaign.endDatePledgedProfit - campaign.endDate
    );
    var numberOfRepayments = repaymentTime / campaign.timePerPayment;
    var numberOfTimesPaidAlready =
      repaymentTime / campaign.timePerPayment - numberOfRepayments;
    setTimeout(function () {
      if (numberOfRepayments > 0) {
        organiser.walletBalance -=
          (Number(amount) +
            campaign.pledged_profit_to_lenders * Number(amount)) /
          (campaign.duration_pledged_profit /
            campaign.repayment_schedule_pledged_profit);
        req.user.walletBalance +=
          (Number(amount) +
            campaign.pledged_profit_to_lenders * Number(amount)) /
          (campaign.duration_pledged_profit /
            campaign.repayment_schedule_pledged_profit);
        numberOfRepayments -= 1;
      }
    }, campaign.timePerPayment);

    const amountRepay =
      Number(amount) +
      (campaign.pledged_profit_to_lenders / 100) * Number(amount);
    const amountAlreadyRaise =
      (numberOfTimesPaidAlready *
        ((campaign.pledged_profit_to_lenders / 100) * Number(amount))) /
      (repaymentTime / campaign.timePerPayment);

    const amountPerTime =
      amountRepay / (repaymentTime / campaign.timePerPayment);

    var firstPayment = campaign.firstPaymentDate;
    var firstPaymentDateHere = new Date(firstPayment);
    var lastPayment = campaign.endDatePledgedProfit;
    var lastPaymentDate = new Date(lastPayment);

    const review = {
      user: req.user._id,
      businessName: req.user.businessName,
      pic: req.user.pic,
      amount: Number(amount),
      typeOfDonation: campaign.fundingType,
      amountToBeRepaid: amountRepay,
      amountToBeRepaidPerTime: amountPerTime,
      firstPaymentDateDonor: campaign.firstPaymentDateString,
      lastPaymentDate: campaign.endDatePledgedProfitString,
      amountAlreadyRepaid: amountAlreadyRaise,
    };

    const isDonated = campaign.businessCampaignDonors.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isDonated) {
      campaign.businessCampaignDonors.push(review);
      campaign.numberOfBusinessReviews = campaign.businessCampaignDonors.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length +
        campaign.businessCampaignDonors.length;
    } else {
      campaign.businessCampaignDonors.push(review);
      campaign.numberOfBusinessReviews = campaign.businessCampaignDonors.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length +
        campaign.businessCampaignDonors.length;
    }

    let amountRaised = 0;
    campaign.businessCampaignDonors.forEach((rev) => {
      amountRaised += rev.amount;
    });
    campaign.amountAlreadyRaised = amountRaised;
    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      businessCampaignDonors: campaign.businessCampaignDonors,
    });
  }
);

// Get All Business Donors of a campaign
const getBusinessCampaignDonations = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.id);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    res.status(200).json({
      success: true,
      businessCampaignDonors: campaign.businessCampaignDonors,
    });
  }
);

// Get particular business Donations of a campaign
const getParticularBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    async (req, res, next) => {
      const campaign = await Campaign.findById(req.query.id);
      if (!campaign) {
        return next(new ErrorHandler("Campaign not found", 404));
      }
      const myCampaignDonations = await campaign.businessCampaignDonors.find({
        user: req.user,
      });

      res.status(200).json({
        success: true,
        myCampaignDonations,
      });
    };
  }
);

// Delete Business Donation
const deleteBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const businessCampaignDonors = campaign.businessCampaignDonors.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    const numberOfBusinessReviews = businessCampaignDonors.length;

    await Campaign.findByIdAndUpdate(
      req.query.campaignId,
      {
        businessCampaignDonors,

        numberOfBusinessReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      businessCampaignDonors: campaign.businessCampaignDonors,
    });
  }
);

// Create Campaign -- Admin
const createCampaignAdmin = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const campaign = await Campaign.create(req.body);

  res.status(201).json({
    success: true,
    campaign,
  });
});

// Get All Campaign (Admin)
const getAdminCampaigns = catchAsyncErrors(async (req, res, next) => {
  const campaigns = await Campaign.find();

  res.status(200).json({
    success: true,
    campaigns,
  });
});

// Get Campaign Details
const getCampaignDetailsAdmin = catchAsyncErrors(async (req, res, next) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  res.status(200).json({
    success: true,
    campaign,
  });
});

// Update Campaign -- Admin

const updateCampaignAdmin = catchAsyncErrors(async (req, res, next) => {
  let campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    campaign,
  });
});

// Get Campaign Details
const getCampaignDetails = catchAsyncErrors(async (req, res, next) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  res.status(200).json({
    success: true,
    campaign,
  });
});

module.exports = {
  getMyCampaigns,
  getAllCampaigns,
  CreateCampaign,
  getCampaignById,
  UpdateCampaign,
  DeleteCampaign,
  getCampaignDetails,
  createIndividualCampaignReview,
  getIndividualCampaignReviews,
  deleteIndividualCampaignReview,
  createBusinessCampaignReview,
  getBusinessCampaignReviews,
  deleteBusinessCampaignReview,
  createIndividualCampaignDonation,
  getIndividualCampaignDonations,
  deleteIndividualCampaignDonation,
  createBusinessCampaignDonation,
  getBusinessCampaignDonations,
  deleteBusinessCampaignDonation,
  createCampaignAdmin,
  getAdminCampaigns,
  getCampaignDetailsAdmin,
  updateCampaignAdmin,
};
