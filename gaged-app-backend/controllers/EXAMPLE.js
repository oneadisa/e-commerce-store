// // Create New Campaign Payout BusinessProfile or Update a Campaign Payout BusinessProfile
// const createCampaignPayout = catchAsyncErrors(async (req, res, next) => {
//   const { campaignId, amountPaid } = req.body;

//   const campaign = Campaign.findById(campaignId);
//   const organiser = signedUpBusiness.findById(campaign.user);

//   const campaignPayout = {
//     user: req.user._id,
//     campaignName: campaign.campaignName,
//     campaignCategory: campaign.campaignCategory,
//     investorBrief: campaign.investorBrief,
//     pitchDeck: campaign.pitchDeck,
//     fundingType: campaign.fundingType,
//     amountBeingRaised: campaign.amountBeingRaised,
//     duration: campaign.duration,
//     organiser: organiser.businessName,
//     campaignLiveStatus: campaign.campaignLiveStatus,
//     amountPaid,
//   };

//   const business = await signedUpBusiness.findById(req.user._id);

//   const isPaid = business.listOfCampaignPayouts.find(
//     (rev) => rev.user.toString() === req.user._id.toString()
//   );

//   if (!isPaid) {
//   } else {
//     business.listOfCampaignPayouts.push(campaignPayout);
//     business.totalNumberOfCampaignPayouts =
//       business.listOfCampaignsPayout.length;
//   }

//   await business.save({ validateBeforeSave: false });

//   res.status(200).json({
//     success: true,
//     listOfCampaignPayouts: business.listOfCampaignsPayouts,
//   });
// });

// // Get Campaigns Payout BusinessProfile
// const getListOfCampaignPayouts = catchAsyncErrors(async (req, res, next) => {
//   const business = await signedUpBusiness.findById(req.query.id);

//   if (!business) {
//     return next(new ErrorHandler("Record not found", 404));
//   }

//   res.status(200).json({
//     success: true,
//     listOfCampaignPayouts: business.listOfCampaignsPayouts,
//   });
// });

// // Delete Campaign Payout BusinessProfile
// const deleteCampaignPayout = catchAsyncErrors(async (req, res, next) => {
//   const business = await signedUpBusiness.findById(req.query.businessId);

//   if (!business) {
//     return next(new ErrorHandler("Record not found", 404));
//   }

//   const listOfCampaignPayouts = business.listOfCampaignPayouts.filter(
//     (rev) => rev._id.toString() !== req.query.id.toString()
//   );

//   const totalNumberOfCampaignPayouts = listOfCampaignPayouts.length;

//   await signedUpBusiness.findByIdAndUpdate(
//     req.query.businessId,
//     {
//       listOfCampaignPayouts,
//       totalNumberOfCampaignPayouts,
//     },
//     {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     }
//   );

//   res.status(200).json({
//     success: true,
//     listOfCampaignsPayout: business.listOfCampaignsPayout,
//   });
// });

// Create New Individual Donation or Update an Individual Donation
const createIndividualCampaignPayouts = catchAsyncErrors(
  async (req, res, next) => {
    const { amount, campaignId } = req.body;

    const campaign = await Campaign.findById(campaignId);

    const review = {
      user: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      pic: req.user.pic,
      amount: Number(amount),
      typeOfDonation: campaign.fundingType,
    };

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

    let amountRaised = 0;
    campaign.individualCampaignDonors.forEach((rev) => {
      amountRaised += rev.amount;
    });

    campaign.amountAlreadyRaised = amountRaised;

    let amountToBeRepaid = 0;
    campaign.individualCampaignDonors.forEach((rev) => {
      amountToBeRepaid -= rev.amountAlreadyPaid;
    });

    await campaign.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      individualCampaignDonors: campaign.individualCampaignDonors,
    });
  }
);

// Get Individual Donations of a campaign
const getIndividualCampaignDonationsb = catchAsyncErrors(
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
const getParticularIndividualCampaignDonationb = catchAsyncErrors(
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
const deleteIndividualCampaignDonationb = catchAsyncErrors(
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

// ALL THIS SHOULD BE DONE IN THE CAMPAIN DONOR CONTROLLER, BUSINESS CONTROLLER AND FUNDRAISER CONTROLLER.
// number of payments to be made = duration/number of months per payment
// amount per payment = (total amount/duration)*numberOfMonthsPerPayment
//get start date of payment
// if now is not the endDate, create a setInterval function with the time for account deposition being the number of months/weeks per payment

// else, do nothing
