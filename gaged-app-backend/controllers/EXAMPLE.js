// // Create New Campaign Invested BusinessProfile or Update a Campaign Invested BusinessProfile
// const createIndividualCampaignInveste = catchAsyncErrors(
//   async (req, res, next) => {
//     const { campaignId, amountInvested } = req.body;

//     const campaign = Campaign.findBy(campaignId);

//     const campaignInvested = {
//       campaignName: campaign.campaignName,
//       campaignCategory: campaign.campaignCategory,
//       investorBrief: campaign.investorBrief,
//       pitchDeck: campaign.pitchDeck,
//       fundingType: campaign.fundingType,
//       amountBeingRaised: campaign.amountBeingRaised,
//       duration: campaign.duration,
//       campaignLiveStatus: campaign.campaignLiveStatus,
//       amountInvested,
//     };

//     const individual = await signedUpUser.findById(req.user._id);

//     const isInvested = individual.listOfCampaignsInvested.find(
//       (rev) => rev.user.toString() === req.user._id.toString()
//     );

//     if (isInvested) {
//     } else {
//       individual.listOfCampaignsInvested.push(campaignInvested);
//       individual.totalNumberOfCampaignsInvested =
//         individual.listOfCampaignsInvested.length;
//     }

//     await individual.save({ validateBeforeSave: false });

//     res.status(200).json({
//       success: true,
//       listOfCampaignsInvested: individual.listOfCampaignsInvested,
//     });
//   }
// );

// // Get Campaigns Invested BusinessProfile
// const getListOfIndividualCampaignsInveste = catchAsyncErrors(
//   async (req, res, next) => {
//     const individual = await signedUpUser.findById(req.query.id);

//     if (!individual) {
//       return next(new ErrorHandler("User not found", 404));
//     }

//     res.status(200).json({
//       success: true,
//       listOfCampaignsInvested: individual.listOfCampaignsInvested,
//     });
//   }
// );

// // Delete Campaign Invested BusinessProfile
// const deleteIndividualCampaignInveste = catchAsyncErrors(
//   async (req, res, next) => {
//     const individual = await signedUpUser.findById(req.query.userId);

//     if (!individual) {
//       return next(new ErrorHandler("User not found", 404));
//     }

//     const listOfCampaignsInvested = individual.listOfCampaignsInvested.filter(
//       (rev) => rev._id.toString() !== req.query.id.toString()
//     );

//     const totalNumberOfCampaignsInvested = listOfCampaignsInvested.length;

//     await signedUpUser.findByIdAndUpdate(
//       req.query.businessId,
//       {
//         listOfCampaignsInvested,
//         totalNumberOfCampaignsInvested,
//       },
//       {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       }
//     );

//     res.status(200).json({
//       success: true,
//       listOfCampaignsInvested: individual.listOfCampaignsInvested,
//     });
//   }
// );

// getListOfCampaignsStarted;
// deleteCampaignStarted;
//  createCampaignInvested;
// getListOfCampaignsInvested;
// deleteCampaignInvested;
// createBusinessInvestor;
// getBusinessInvestors;
// deleteBusinessInvestor;
// createIndividualInvestor;
// getIndividualInvestors;
// deleteIndividualInvestor;
// createBusinessOrderedFrom;
// getBusinessOrderedFrom;
// deleteBusinessOrderedFrom;
// createIndividualReview;
// getIndividualReviews;
// deleteIndividualReview;
// createBusinessReview;
// getBusinessReviews;
// deleteBusinessReview;
// createBusinessOrder;
// getBusinessOrders;
// deleteBusinessOrder;
// createBusinessCustomer;
// getBusinessCustomers;
// deleteBusinessCustomer;
// createindividualCustomer;
// getindividualCustomers;
// deleteindividualCustomer;
// createindividualOrder;
// getindividualOrders;
// deleteindividualOrder;

// individualCreateBusinessOrderedFrom;
// getIndividualBusinessOrderedFrom;
// deleteIndividualBusinessOrderedFrom;
// createIndividualCampaignInvested;
// getListOfIndividualCampaignsInvested;
//  deleteIndividualCampaignInvested;

// Create New Individual Review or Update an Individual review
const createIndividualCampaignRevie = catchAsyncErrors(
  async (req, res, next) => {
    const { comment, CampaignId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.firstName + "" + req.user.lastName,
      pic: req.body.pic,

      comment,
    };

    const campaign = await Campaign.findById(CampaignId);

    const isReviewed = Campaign.individualCampaignReviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      // Campaign.individualCampaignReviews.forEach((rev) => {
      // if (rev.user.toString() === req.user._id.toString())
      // (rev.rating = rating), (rev.comment = comment);
      // });
    } else {
      Campaign.individualCampaignReviews.push(review);
      Campaign.numberOfIndividualReviews =
        Campaign.individualCampaignReviews.length;
      Campaign.totalNumberOfReviews =
        Campaign.individualCampaignReviews.length +
        Campaign.BusinessCampaignReviews.length;
    }

    let avg = 0;

    Campaign.individualCampaignReviews.forEach((rev) => {
      avg += rev.rating;
    });

    Campaign.ratings =
      avg /
      (Campaign.individualCampaignReviews.length +
        Campaign.BusinessCampaignReviews.length);

    await Campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualCampaignReviews: Campaign.individualCampaignReviews,
    });
  }
);

// Get Individual Reviews of a Campaign
const getIndividualCampaignReview = catchAsyncErrors(async (req, res, next) => {
  const campaign = await Campaign.findById(req.query.id);

  if (!Campaign) {
    return next(new ErrorHandler("Campaign not found", 404));
  }

  res.status(200).json({
    success: true,
    individualCampaignReviews: Campaign.individualCampaignReviews,
  });
});

// Delete Individual Review
const deleteIndividualCampaignRevie = catchAsyncErrors(
  async (req, res, next) => {
    const campaign = await Campaign.findById(req.query.CampaignId);

    if (!Campaign) {
      return next(new ErrorHandler("Campaign not found", 404));
    }

    const individualCampaignReviews = Campaign.individualCampaignReviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    individualCampaignReviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (individualCampaignReviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / individualCampaignReviews.length;
    }

    const numberOfIndividualReviews = individualCampaignReviews.length;

    await Campaign.findByIdAndUpdate(
      req.query.CampaignId,
      {
        individualCampaignReviews,
        ratings,
        numberOfIndividualReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
      individualCampaignReviews: Campaign.individualCampaignReviews,
    });
  }
);
