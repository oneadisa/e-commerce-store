// Create New Campaign Invested BusinessProfile or Update a Campaign Invested BusinessProfile
const createCampaignInvested = catchAsyncErrors(async (req, res, next) => {
  const {
    businessId,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  } = req.body;

  const campaignStarted = {
    user: req.user._id,
    name: req.user.businessName,
    pic: req.user.pic,
    natureOfBusiness,
    campaignCategory,
    investorBrief,
    duration,
    campaignLiveStatus,
    amountRaised,
  };

  const business = await signedUpBusiness.findById(businessId);

  const isStarted = business.listOfCampaignsInvested.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isStarted) {
  } else {
    business.listOfCampaignsInvested.push(campaignStarted);
    business.totalNumberOfCampaignsInvested =
      business.listOfCampaignsInvested.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});

// Get Campaigns Invested BusinessProfile
const getListOfCampaignsInvested = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});

// Delete Campaign Invested BusinessProfile
const deleteCampaignInvested = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const listOfCampaignsInvested = business.listOfCampaignsInvested.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const totalNumberOfCampaignsInvested = listOfCampaignsInvested.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      listOfCampaignsInvested,
      totalNumberOfCampaignsInvested,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    listOfCampaignsInvested: business.listOfCampaignsInvested,
  });
});
