import React, { Component } from "react";
import Organisation from "./Organisation";
import Demographics from "./Demographics";
import Target from "./Target";
import Finance from "./Finance";
import SetSchedule from "./SetSchedule";
import Review from "./Review";
export class CampaignForm extends Component {
  state = {
    step: 1,
    campaignName: "",
    natureOfBusiness: "",
    campaignCategory: "",
    business_address_country: "",
    business_address_city: "",
    business_address_office: "",
    phoneNumber: "",
    investorBrief: "",
    campaignVideo: "",
    pitchDeck: "",
    ideal_target_audience_age: "",
    ideal_target_audience_health_issues_or_disabilities: "",
    gender: "",
    fundingType: "",
    categoryFunding: "",
    amountBeingRaised: "",
    amountAlreadyRaised: "",
    amountRepaid: "",
    amountToBeRepaid: "",
    amountToBeRepaidPerPayout: "",
    pledged_profit_to_lenders: "",
    duration_pledged_profit: "",
    repayment_schedule_pledged_profit: "",
    endDatePledgedProfit: "",
    endDatePledgedProfitString: "",
    timePerPayment: "",
    equity_offering_percentage: "",
    bankCode: "",
    bank_account_name: "",
    bank_account_number: "",
    duration: "",
    go_live_schedule: "",
    campaignLiveStatus: "",
    familiarWithCrowdFunding: "",
    storeOnGaged: "",
    endDate: "",
    firstPaymentDate: "",
    firstPaymentDateString: "",
    endDateString: "",
    paymentStartDate: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Go to first step from review page

  firstStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 5,
    });
  };

  // Go to second step from review page

  secondStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 4,
    });
  };

  // Go to third step from review page

  thirdStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 3,
    });
  };

  // Go to fourth step from review page

  fourthStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2,
    });
  };

  // Go to fifth step from review page

  fifthStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (name) => (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;
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
      bankCode,
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
    } = this.state;

    const values = {
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
      bankCode,
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
    };

    switch (step) {
      case 1:
        return (
          <Organisation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Demographics
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Target
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Finance
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <SetSchedule
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        console.log(
          "This is a multi-step form built with React for  Gaged LLC."
        );
    }
  }
}

export default CampaignForm;
