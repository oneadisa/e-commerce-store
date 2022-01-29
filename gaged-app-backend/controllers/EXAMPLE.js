campaignStarted.amountToBeRepaid =
  campaignStarted.amountAlreadyRaised +
  campaignStarted.amountAlreadyRaised *
    campaignStarted.pledged_profit_to_lenders;
let numWeeks = campaignStarted.duration;
var now = new Date().getTime();
campaignStarted.endDate = now + numWeeks * 7 * 1000 * 60 * 60 * 24;
campaignStarted.endDateString = new Date(campaignStarted.endDate);
// new Date(now + numWeeks * 7 * 1000 * 60 * 60 * 24);
campaignStarted.endDatePledgedProfit =
  now +
  campaignStarted.duration * (7 * 1000 * 60 * 60 * 24) +
  campaignStarted.duration_pledged_profit * (30 * 1000 * 60 * 60 * 24);
campaignStarted.endDatePledgedProfitString = new Date(
  campaignStarted.endDatePledgedProfit
);
const repaymentTime = Math.abs(
  campaignStarted.endDatePledgedProfit - campaignStarted.endDate
);
const timePerPayment =
  repaymentTime /
  (campaignStarted.duration_pledged_profit /
    campaignStarted.repayment_schedule_pledged_profit);
campaignStarted.firstPaymentDate = campaignStarted.endDate + timePerPayment;
campaignStarted.firstPaymentDateString = new Date(
  campaignStarted.firstPaymentDate
);
