// const createIndividualCampaignPayout = catchAsyncErrors(async (req, res, next) => {
//   const { campaignId, amountInvested } = req.body;

//   const campaign = Campaign.findById(campaignId);
//   const organiser = signedUpBusiness.findById(campaign.user);

//   const repaymentTime = Math.abs(
//     campaign.endDatePledgedProfit - campaign.endDate
//   );
//   var numberOfRepayments = repaymentTime / campaign.timePerPayment;
//   var numberOfTimesPaidAlready =
//     repaymentTime / campaign.timePerPayment - numberOfRepayments;
//   setTimeout(function () {
//   }, campaign.timePerPayment);
//   const amountRepay =
//     Number(amountInvested) +
//     (campaign.pledged_profit_to_lenders / 100) * Number(amountInvested);
//   const amountAlreadyRaise =
//     (numberOfTimesPaidAlready *
//       ((campaign.pledged_profit_to_lenders / 100) * Number(amountInvested))) /
//     (repaymentTime / campaign.timePerPayment);
//   const amountPerTime = amountRepay / (repaymentTime / campaign.timePerPayment);

//   const campaignInvested = {
//     user: req.user._id,
//     campaignId: campaignId,
//     campaignName: campaign.campaignName,
//     campaignCategory: campaign.campaignCategory,
//     investorBrief: campaign.investorBrief,
//     pitchDeck: campaign.pitchDeck,
//     fundingType: campaign.fundingType,
//     amountBeingRaised: campaign.amountBeingRaised,
//     duration: campaign.duration,
//     organiser: organiser.businessName,
//     campaignLiveStatus: campaign.campaignLiveStatus,
//     amountInvested,
//     firstPaymentDateString: campaign.firstPaymentDateString,
//     endDateString: campaign.endDateString,
//     endDatePledgedProfitString: campaign.endDatePledgedProfitString,
//     pledged_profit_to_lenders: campaign.pledged_profit_to_lenders,
//     amountToBeRepaid: amountRepay,
//     firstPaymentDate: campaign.firstPaymentDate,
//     endDate: campaign.endDate,
//     endDatePledgedProfit: campaign.endDatePledgedProfit,
//     duration_pledged_profit: campaign.duration_pledged_profit,
//     repayment_schedule_pledged_profit: campaign.repayment_schedule_pledged_profit,
//   };

//   const business = await signedUpBusiness.findById(req.user._id);

//   const isStarted = business.listOfCampaignPayouts.find(
//     (rev) => rev.user.toString() === req.user._id.toString()
//   );

//   if (isStarted) {
//     business.listOfCampaignPayouts.push(campaignInvested);
//     business.totalNumberOfCampaignPayouts =
//       business.listOfCampaignPayouts.length;
//        if (numberOfRepayments > 0) {
//          organiser.walletBalance -=
//            (Number(amountInvested) +
//              campaign.pledged_profit_to_lenders * Number(amountInvested)) /
//            (campaign.duration_pledged_profit /
//              campaign.repayment_schedule_pledged_profit);
//          req.user.walletBalance +=
//            (Number(amountInvested) +
//              campaign.pledged_profit_to_lenders * Number(amountInvested)) /
//            (campaign.duration_pledged_profit /
//              campaign.repayment_schedule_pledged_profit);
//          numberOfRepayments -= 1;
//        }
//   } else {
//     business.listOfCampaignPayouts.push(campaignInvested);
//     business.totalNumberOfCampaignPayouts =
//       business.listOfCampaignPayouts.length;
//        if (numberOfRepayments > 0) {
//          organiser.walletBalance -=
//            (Number(amountInvested) +
//              campaign.pledged_profit_to_lenders * Number(amountInvested)) /
//            (campaign.duration_pledged_profit /
//              campaign.repayment_schedule_pledged_profit);
//          req.user.walletBalance +=
//            (Number(amountInvested) +
//              campaign.pledged_profit_to_lenders * Number(amountInvested)) /
//            (campaign.duration_pledged_profit /
//              campaign.repayment_schedule_pledged_profit);
//          numberOfRepayments -= 1;
//        }
//   }

//   await business.save({ validateBeforeSave: false });
// z
//   res.status(200).json({
//     success: true,
//     listOfCampaignPayouts: business.listOfCampaignPayouts,
//   });
// });

// // Get Campaigns Invested BusinessProfile
// const getListOfIndividualCampaignsPayouts = catchAsyncErrors(async (req, res, next) => {
//   const business = await signedUpBusiness.findById(req.query.id);

//   if (!business) {
//     return next(new ErrorHandler("Business not found", 404));
//   }

//   res.status(200).json({
//     success: true,
//     listOfCampaignPayouts: business.listOfCampaignPayouts,
//   });
// });

// // Get One Campaign Invested BusinessProfile
// const getParticularIndividualCampaignPayouts = catchAsyncErrors(
//   async (req, res, next) => {
//     const business = await signedUpBusiness.findById(req.query.id);
//     const campaign = await Campaign.findById(req.params.id);

//     if (!business) {
//       return next(new ErrorHandler("Business not found", 404));
//     }

//     business.listOfCampaignPayouts.find({ campaignName: campaign.campaignName });

//     res.status(200).json({
//       success: true,
//       listOfCampaignPayouts: business.listOfCampaignPayouts,
//     });
//   }
// );

// // Delete Campaign Invested BusinessProfile
// const deleteIndividualCampaignPayout = catchAsyncErrors(async (req, res, next) => {
//   const business = await signedUpBusiness.findById(req.query.businessId);

//   if (!business) {
//     return next(new ErrorHandler("Business not found", 404));
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
//     listOfCampaignPayouts: business.listOfCampaignPayouts,
//   });
// });
