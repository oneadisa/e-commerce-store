import React, { useEffect, useState } from "react";
import Organisation from "./Organisation";
import Demographics from "./Demographics";
import Target from "./Target";
import Finance from "./Finance";
import SetSchedule from "./SetSchedule";
import Review from "./Review";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";
import {
  newCampaignStarted,
  clearErrors,
  getCampaignDetails,
} from "../../../../../actions/businessActions";
import { UPDATE_CAMPAIGN_RESET } from "../../../../../constants/businessConstants";

// import { useNavigate } from "react-router-dom";
function UpdateCampaignForm() {
  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();
  let params = useParams();
  const { campaign, error } = useSelector(
    (state: RootStateOrAny) => state.campaignDetails
  );

  const { businessInfo } = useSelector(
    (state: RootStateOrAny) => state.business
  );

  const [step, setStep] = useState(1);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state: RootStateOrAny) => state.campaign);

  const campaignId = params.id;
  useEffect(() => {
    if (campaign && campaign._id !== campaignId) {
      dispatch(getCampaignDetails(campaignId));
    } else {
      setcampaignName(campaign.campaignName);
      setnatureOfBusiness(campaign.natureOfBusiness);
      setcampaignCategory(campaign.campaignCategory);
      setbusiness_address_country(campaign.business_address_country);
      setbusiness_address_city(campaign.business_address_city);
      setbusiness_address_office(campaign.business_address_office);
      setphoneNumber(campaign.phoneNumber);
      setinvestorBrief(campaign.investorBrief);
      setcampaignVideo(campaign.campaignVideo);
      setpitchDeck(campaign.pitchDeck);
      setideal_target_audience_age(campaign.ideal_target_audience_age);
      setideal_target_audience_health_issues_or_disabilities(
        campaign.ideal_target_audience_health_issues_or_disabilities
      );
      setgender(campaign.gender);
      setfundingType(campaign.fundingType);
      setcategoryFunding(campaign.categoryFunding);
      setamountBeingRaised(campaign.amountBeingRaised);
      setamountAlreadyRaised(campaign.amountAlreadyRaised);
      setamountRepaid(campaign.amountRepaid);
      setamountToBeRepaid(campaign.amountToBeRepaid);
      setamountToBeRepaidPerPayout(campaign.amountToBeRepaidPerPayout);
      setpledged_profit_to_lenders(campaign.pledged_profit_to_lenders);
      setduration_pledged_profit(campaign.duration_pledged_profit);
      setrepayment_schedule_pledged_profit(
        campaign.repayment_schedule_pledged_profit
      );
      setendDatePledgedProfit(campaign.endDatePledgedProfit);
      setendDatePledgedProfitString(campaign.endDatePledgedProfitString);
      settimePerPayment(campaign.timePerPayment);
      setequity_offering_percentage(campaign.equity_offering_percentage);
      setbankCode(campaign.bankCode);
      setbank_account_name(campaign.bank_account_name);
      setbank_account_number(campaign.bank_account_number);
      setduration(campaign.duration);
      setgo_live_schedule(campaign.go_live_schedule);
      setcampaignLiveStatus(campaign.campaignLiveStatus);
      setfamiliarWithCrowdFunding(campaign.familiarWithCrowdFunding);
      setstoreOnGaged(campaign.storeOnGaged);
      setendDate(campaign.endDate);
      setfirstPaymentDate(campaign.firstPaymentDate);
      setfirstPaymentDateString(campaign.firstPaymentDateString);
      setendDateString(campaign.endDateString);
      setpaymentStartDate(campaign.paymentStartDate);
      settwitter(campaign.twitter);
      setfaceBook(campaign.faceBook);
      setwhatsApp(campaign.whatsApp);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Campaign Updated Successfully");
      navigate("/");
      dispatch({ type: UPDATE_CAMPAIGN_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    isUpdated,
    campaignId,
    campaign,
    updateError,
    navigate,
  ]);
  // const [picMessage, setPicMessage] = useState(null);

  const [campaignName, setcampaignName] = useState("");
  const [natureOfBusiness, setnatureOfBusiness] = useState("");
  const [campaignCategory, setcampaignCategory] = useState("");
  const [business_address_country, setbusiness_address_country] = useState("");
  const [business_address_city, setbusiness_address_city] = useState("");
  const [business_address_office, setbusiness_address_office] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [investorBrief, setinvestorBrief] = useState("");
  const [campaignVideo, setcampaignVideo] = useState("");
  const [pitchDeck, setpitchDeck] = useState("");
  const [ideal_target_audience_age, setideal_target_audience_age] =
    useState("");
  const [
    ideal_target_audience_health_issues_or_disabilities,
    setideal_target_audience_health_issues_or_disabilities,
  ] = useState("");
  const [gender, setgender] = useState("");
  const [fundingType, setfundingType] = useState("");
  const [categoryFunding, setcategoryFunding] = useState("");
  const [amountBeingRaised, setamountBeingRaised] = useState("");
  const [amountAlreadyRaised, setamountAlreadyRaised] = useState("");
  const [amountRepaid, setamountRepaid] = useState("");
  const [amountToBeRepaid, setamountToBeRepaid] = useState("");
  const [amountToBeRepaidPerPayout, setamountToBeRepaidPerPayout] =
    useState("");
  const [pledged_profit_to_lenders, setpledged_profit_to_lenders] =
    useState("");
  const [duration_pledged_profit, setduration_pledged_profit] = useState("");
  const [
    repayment_schedule_pledged_profit,
    setrepayment_schedule_pledged_profit,
  ] = useState("");
  const [endDatePledgedProfit, setendDatePledgedProfit] = useState("");
  const [endDatePledgedProfitString, setendDatePledgedProfitString] =
    useState("");
  const [timePerPayment, settimePerPayment] = useState("");
  const [equity_offering_percentage, setequity_offering_percentage] =
    useState("");
  const [bankCode, setbankCode] = useState("");
  const [bank_account_name, setbank_account_name] = useState("");
  const [bank_account_number, setbank_account_number] = useState("");
  const [duration, setduration] = useState("");
  const [go_live_schedule, setgo_live_schedule] = useState("");
  const [campaignLiveStatus, setcampaignLiveStatus] = useState("");
  const [familiarWithCrowdFunding, setfamiliarWithCrowdFunding] = useState("");
  const [storeOnGaged, setstoreOnGaged] = useState("");
  const [endDate, setendDate] = useState("");
  const [firstPaymentDate, setfirstPaymentDate] = useState("");
  const [firstPaymentDateString, setfirstPaymentDateString] = useState("");
  const [endDateString, setendDateString] = useState("");
  const [paymentStartDate, setpaymentStartDate] = useState("");
  const [twitter, settwitter] = useState("");
  const [faceBook, setfaceBook] = useState("");
  const [whatsApp, setwhatsApp] = useState("");

  const createCampaignSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("campaignName", campaignName);
    myForm.set("natureOfBusiness", natureOfBusiness);
    myForm.set("campaignCategory", campaignCategory);
    myForm.set("business_address_country", business_address_country);
    myForm.set("business_address_city", business_address_city);
    myForm.set("business_address_office", business_address_office);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("investorBrief", investorBrief);
    myForm.set("campaignVideo", campaignVideo);
    myForm.set("pitchDeck", pitchDeck);
    myForm.set("ideal_target_audience_age", ideal_target_audience_age);
    myForm.set(
      "ideal_target_audience_health_issues_or_disabilities",
      ideal_target_audience_health_issues_or_disabilities
    );
    myForm.set("gender", gender);
    myForm.set("fundingType", fundingType);
    myForm.set("categoryFunding", categoryFunding);
    myForm.set("amountBeingRaised", amountBeingRaised);
    myForm.set("amountAlreadyRaised", amountAlreadyRaised);
    myForm.set("amountRepaid", amountRepaid);
    myForm.set("amountToBeRepaid", amountToBeRepaid);
    myForm.set("amountToBeRepaidPerPayout", amountToBeRepaidPerPayout);
    myForm.set("pledged_profit_to_lenders", pledged_profit_to_lenders);
    myForm.set("duration_pledged_profit", duration_pledged_profit);
    myForm.set(
      "repayment_schedule_pledged_profit",
      repayment_schedule_pledged_profit
    );
    myForm.set("endDatePledgedProfit", endDatePledgedProfit);
    myForm.set("endDatePledgedProfitString", endDatePledgedProfitString);
    myForm.set("timePerPayment", timePerPayment);
    myForm.set("equity_offering_percentage", equity_offering_percentage);
    myForm.set("bankCode", bankCode);
    myForm.set("bank_account_name", bank_account_name);
    myForm.set("bank_account_number", bank_account_number);
    myForm.set("duration", duration);
    myForm.set("go_live_schedule", go_live_schedule);
    myForm.set("campaignLiveStatus", campaignLiveStatus);
    myForm.set("familiarWithCrowdFunding", familiarWithCrowdFunding);
    myForm.set("storeOnGaged", storeOnGaged);
    myForm.set("endDate", endDate);
    myForm.set("firstPaymentDate", firstPaymentDate);
    myForm.set("firstPaymentDateString", firstPaymentDateString);
    myForm.set("endDateString", endDateString);
    myForm.set("paymentStartDate", paymentStartDate);
    myForm.set("twitter", twitter);
    myForm.set("faceBook", faceBook);
    myForm.set("whatsApp", whatsApp);

    // dispatch(createCampaignAction(myForm));
    dispatch(newCampaignStarted(myForm));
  };

  useEffect(() => {
    if (businessInfo) {
      settwitter(businessInfo.twitter);
      setfaceBook(businessInfo.faceBook);
      setwhatsApp(businessInfo.whatsApp);
    } else {
      navigate("/");
    }
  }, [businessInfo, navigate]);
  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Go to first step from any page

  const firstStep = () => {
    setStep(1);
  };

  // Go to second step from any page

  const secondStep = () => {
    setStep(2);
  };

  // Go to third step from any page

  const thirdStep = () => {
    setStep(3);
  };

  // Go to fourth step from any page

  const fourthStep = () => {
    setStep(4);
  };

  // Go to fifth step from any page

  const fifthStep = () => {
    setStep(5);
  };

  const sixthStep = () => {
    setStep(6);
  };

  // const [payBack, setPayBack] = useState(1000);

  // const handlePayBackChange = (e) => {
  // const value = (e.value / 100 + 1) * 1000;
  // setPayBack(value);
  // };
  // Handle fields change
  // function handleChange(e) {
  // const { value, name } = e.currentTarget;
  // setCampaignCredentials((prevValue) => {
  // return {
  // ...prevValue,
  // [name]: value,
  // };
  // });
  // }

  // const clear = (e) => {
  // const { name } = e.currentTarget;
  // setCampaignCredentials((prevValue) => {
  // return {
  // ...prevValue,
  // [name]: "",
  // };
  // });
  // };

  switch (step) {
    case 1:
      return (
        <Organisation
          nextStep={nextStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          prevStep={prevStep}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );
    case 2:
      return (
        <Demographics
          nextStep={nextStep}
          prevStep={prevStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );
    case 3:
      return (
        <Target
          nextStep={nextStep}
          prevStep={prevStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );
    case 4:
      return (
        <Finance
          nextStep={nextStep}
          prevStep={prevStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );
    case 5:
      return (
        <SetSchedule
          nextStep={nextStep}
          prevStep={prevStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );
    case 6:
      return (
        <Review
          nextStep={nextStep}
          prevStep={prevStep}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          fourthStep={fourthStep}
          fifthStep={fifthStep}
          sixthStep={sixthStep}
          createCampaignSubmitHandler={createCampaignSubmitHandler}
          loading={loading}
          campaignName={campaignName}
          setcampaignName={setcampaignName}
          natureOfBusiness={natureOfBusiness}
          setnatureOfBUsiness={setnatureOfBusiness}
          campaignCategory={campaignCategory}
          setcampaignCategory={setcampaignCategory}
          business_address_country={business_address_country}
          setbusiness_address_country={setbusiness_address_country}
          business_address_city={business_address_city}
          setbusiness_address_city={setbusiness_address_city}
          business_address_office={business_address_office}
          setbusiness_address_office={setbusiness_address_office}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          investorBrief={investorBrief}
          setinvestorBrief={setinvestorBrief}
          campaignVideo={campaignVideo}
          setcampaignVideo={setcampaignVideo}
          pitchDeck={pitchDeck}
          setpitchDeck={setpitchDeck}
          ideal_target_audience_age={ideal_target_audience_age}
          setideal_target_audience_age={setideal_target_audience_age}
          ideal_target_audience_health_issues_or_disabilities={
            ideal_target_audience_health_issues_or_disabilities
          }
          setideal_target_audeince_health_issues_or_disabilities={
            setideal_target_audience_health_issues_or_disabilities
          }
          gender={gender}
          setgender={setgender}
          fundingType={fundingType}
          setfundingType={setfundingType}
          categoryFunding={categoryFunding}
          setcategoryFunding={setcategoryFunding}
          amountBeingRaised={amountBeingRaised}
          setamountBeingRaised={setamountBeingRaised}
          pledged_profit_to_lenders={pledged_profit_to_lenders}
          setpledged_profit_to_lenders={setpledged_profit_to_lenders}
          duration_pledged_profit={duration_pledged_profit}
          repayment_schedule_pledged_profit={repayment_schedule_pledged_profit}
          equity_offering_percentage={equity_offering_percentage}
          setequity_offering_percentage={setequity_offering_percentage}
          bankCode={bankCode}
          setbankCode={setbankCode}
          bank_account_name={bank_account_name}
          setbank_account_name={setbank_account_name}
          bank_account_number={bank_account_number}
          setbank_account_number={setbank_account_number}
          duration={duration}
          setduration={setduration}
          go_live_schedule={go_live_schedule}
          setgo_live_schedule={setgo_live_schedule}
          campaignLiveStatus={campaignLiveStatus}
          setcampaignLiveStatus={setcampaignLiveStatus}
          familiarWithCrowdFunding={familiarWithCrowdFunding}
          setfamiliarWithCrowdFunding={setfamiliarWithCrowdFunding}
          storeOnGaged={storeOnGaged}
          setstoreOnGaged={setstoreOnGaged}
        />
      );

    default:
      console.log("This is a multi-step form built with React for Gaged LLC.");
  }
}

export default UpdateCampaignForm;
