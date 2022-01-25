// Create New Campaign Payout BusinessProfile or Update a Campaign Payout BusinessProfile
const createCampaignPayout = catchAsyncErrors(async (req, res, next) => {
  const { campaignId, amountPaid } = req.body;

  const campaign = Campaign.findById(campaignId);
  const organiser = signedUpBusiness.findById(campaign.user);

  const campaignPayout = {
    user: req.user._id,
    campaignName: campaign.campaignName,
    campaignCategory: campaign.campaignCategory,
    investorBrief: campaign.investorBrief,
    pitchDeck: campaign.pitchDeck,
    fundingType: campaign.fundingType,
    amountBeingRaised: campaign.amountBeingRaised,
    duration: campaign.duration,
    organiser: organiser,
    campaignLiveStatus: campaign.campaignLiveStatus,
    amountPaid,
  };

  const business = await signedUpBusiness.findById(req.user._id);

  const isPaid = business.listOfCampaignPayouts.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (!isPaid) {
  } else {
    business.listOfCampaignPayouts.push(campaignPayout);
    business.totalNumberOfCampaignPayouts =
      business.listOfCampaignsPayout.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfCampaignPayouts: business.listOfCampaignsPayouts,
  });
});

// Get Campaigns Payout BusinessProfile
const getListOfCampaignPayouts = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfCampaignPayouts: business.listOfCampaignsPayouts,
  });
});

// Delete Campaign Payout BusinessProfile
const deleteCampaignPayout = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignPayouts = business.listOfCampaignPayouts.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfCampaignPayouts = listOfCampaignPayouts.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfCampaignPayouts,
      totalNumberOfCampaignPayouts,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfCampaignsPayout: business.listOfCampaignsPayout,
  });
});
