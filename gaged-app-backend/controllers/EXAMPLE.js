// Create New Personal Review BusinessProfile or Update a Personal review BusinessProfile
const createPersonalCampaignReviw = catchAsyncErrors(async (req, res, next) => {
  const { comment, campaignId } = req.body;

  const campaign = await Campaign.find(campaignId);

  const organiser = await signedUpBusiness.findById(campaign.user);

  const review = {
    user: req.user._id,
    businessName: req.user.businessName,
    pic: req.body.pic,
    campaign: {
      campaignId: campaign._id,
      campaignName: campaign.campaignName,
      organiser: organiser.businessName,
    },
    comment,
  };

  const business = await signedUpBusiness.findById(req.user._id);

  const isReviewed = business.campaignReviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
  } else {
    business.campaignReviews.push(review);
    business.numberOfCampaignsReviewed = business.campaignReviews.length;
    business.totalNumberOfInteractions =
      business.campaignReviews.length + business.productReviews.length;
  }

  await business.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    campaignReviews: business.campaignReviews,
  });
});

// Get Personal Reviews of a business BusinessProfile
const getPersonalCampaignReviws = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.id);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  res.status(200).json({
    success: true,
    campaignReviews: business.campaignReviews,
  });
});

// Delete Personal Review
const deletePersonalCampaignRevew = catchAsyncErrors(async (req, res, next) => {
  const business = await signedUpBusiness.findById(req.query.businessId);

  if (!business) {
    return next(new ErrorHandler("Business not found", 404));
  }

  const campaignReviews = business.campaignReviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  const numberOfCampaignsReviewed = campaignReviews.length;

  await signedUpBusiness.findByIdAndUpdate(
    req.query.businessId,
    {
      campaignReviews,
      numberOfCampaignsReviewed,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    campaignReviews: business.campaignReviews,
  });
});
