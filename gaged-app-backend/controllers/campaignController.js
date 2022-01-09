const Campaign = require("../models/campaignModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");
const getMyCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find({
    user: req.user._id,
  });
  res.json(campaigns);
});

// Get All Campaign
const getAllCampaigns = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 20;
  const campaignsCount = await Campaign.countDocuments();

  const apiFeature = new ApiFeatures(Campaign.find(), req.query)
    .search()
    .filter();

  let campaigns = await apiFeature.query;

  let filteredCampaignsCount = campaigns.length;

  apiFeature.pagination(resultPerPage);

  campaigns = await apiFeature.query;

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
    !go_live_schedule
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
      comment,
    };

    const campaign = await Campaign.findById(campaignId);

    const isReviewed = campaign.individualCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      // campaign.individualCampaignDonors.forEach((rev) => {
      // if (rev.user.toString() === req.user._id.toString())
      // (rev.amount =amount), (rev.comment = comment);
      // });
    } else {
      campaign.individualCampaignReviews.push(review);
      campaign.numberOfIndividualCampaignReviews =
        campaign.individualCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.individualCampaignReviews.length +
        campaign.businessCampaignReviiews.length;
    }

    // let avg = 0;

    // campaign.individualCampaignReviews.forEach((rev) => {
    // avg += rev.amount;
    // });

    // campaign.ratings =
    // avg /
    // (campaign.individualCampaignDonors.length +
    // campaign.businessCampaignDonors.length);

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
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

    // let avg = 0;

    // individualCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // letamounts = 0;

    // if (individualCampaignDonors.length === 0) {
    //  amounts = 0;
    // } else {
    //  amounts = avg / individualCampaignDonors.length;
    // }

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
      comment,
    };

    const campaign = await Campaign.findById(campaignId);

    const isReviewed = campaign.businessCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      // campaign.businessCampaignDonors.forEach((rev) => {
      // if (rev.user.toString() === req.user._id.toString())
      // (rev.amount =amount), (rev.comment = comment);
      // });
    } else {
      campaign.businessCampaignReviews.push(review);
      campaign.numberOfBusinessReviews =
        campaign.businessCampaignReviews.length;
      campaign.totalNumberOfCampaignReviews =
        campaign.individualCampaignReviews.length +
        campaign.businessCampaignReviews.length;
    }

    // let avg = 0;

    // campaign.businessCampaignReviews.forEach((rev) => {
    // avg += rev.amount;
    // });

    // campaign.ratings =
    // avg /
    // (campaign.individualCampaignDonors.length +
    // campaign.businessCampaignDonors.length);

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
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

    // let avg = 0;

    // businessCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // letamounts = 0;

    // if (businessCampaignDonors.length === 0) {
    //  amounts = 0;
    // } else {
    //  amounts = avg / businessCampaignDonors.length;
    // }

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
    });
  }
);

// Create New Individual Review or Update an Individual review
const createIndividualCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      amount: Number(amount),
    };

    const campaign = await Campaign.findById(campaignId);

    const isDonated = campaign.individualCampaignDonors.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isDonated) {
    } else {
      campaign.individualCampaignDonors.push(review);
      campaign.numberOfIndividualCampaignDonors =
        campaign.individualCampaignDonors.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length +
        campaign.businessCampaignDonors.length;
    }

    // let avg = 0;

    // campaign.individualCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // campaign.ratings =
    // avg /
    // (campaign.individualCampaignDonors.length +
    // campaign.businessCampaignDonors.length);

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get Individual Reviews of a campaign
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

// Delete Individual Review
const deleteIndividualCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const individualCampaignDonors = campaign.individualCampaignDonors.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    // let avg = 0;

    // individualCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // let amounts = 0;

    // if (individualCampaignDonors.length === 0) {
    //  amounts = 0;
    // } else {
    //  amounts = avg / individualCampaignDonors.length;
    // }

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
    });
  }
);

// Create New Business Review or Update the Business review
const createBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      amount: Number(amount),
    };

    const campaign = await Campaign.findById(campaignId);

    const isDonated = campaign.businessCampaignDonors.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isDonated) {
    } else {
      campaign.businessCampaignDonors.push(review);
      campaign.numberOfBusinessReviews = campaign.businessCampaignDonors.length;
      campaign.totalNumberOfCampaignDonors =
        campaign.individualCampaignDonors.length +
        campaign.businessCampaignDonors.length;
    }

    // let avg = 0;

    // campaign.businessCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // campaign.ratings =
    // avg /
    // (campaign.individualCampaignDonors.length +
    // campaign.businessCampaignDonors.length);

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  }
);

// Get All Business Reviews of a campaign
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

// Delete Business Review
const deleteBusinessCampaignDonation = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.campaignId);

    if (!campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const businessCampaignDonors = campaign.businessCampaignDonors.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    // let avg = 0;

    // businessCampaignDonors.forEach((rev) => {
    // avg += rev.amount;
    // });

    // letamounts = 0;

    // if (businessCampaignDonors.length === 0) {
    //  amounts = 0;
    // } else {
    //  amounts = avg / businessCampaignDonors.length;
    // }

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
    });
  }
);

// Create Campaign -- Admin
const createCampaignAdmin = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "Campaigns",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
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

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < campaign.images.length; i++) {
      await cloudinary.v2.uploader.destroy(campaign.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "Campaigns",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
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
