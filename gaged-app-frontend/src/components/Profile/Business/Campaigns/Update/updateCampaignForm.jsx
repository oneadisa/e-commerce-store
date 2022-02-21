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
            setCampaignCredentials.campaignName(campaign.campaignName);
            setCampaignCredentials.natureOfBusiness(campaign.natureOfBusiness);
            setCampaignCredentials.campaignCategory(campaign.campaignCategory);
            setCampaignCredentials.business_address_country(
                campaign.business_address_country
            );
            setCampaignCredentials.business_address_city(
                campaign.business_address_city
            );
            setCampaignCredentials.business_address_office(
                campaign.business_address_office
            );
            setCampaignCredentials.phoneNumber(campaign.phoneNumber);
            setCampaignCredentials.investorBrief(campaign.investorBrief);
            setCampaignCredentials.campaignVideo(campaign.campaignVideo);
            setCampaignCredentials.pitchDeck(campaign.pitchDeck);
            setCampaignCredentials.ideal_target_audience_age(
                campaign.ideal_target_audience_age
            );
            setCampaignCredentials.ideal_target_audience_health_issues_or_disabilities(
                campaign.ideal_target_audience_health_issues_or_disabilities
            );
            setCampaignCredentials.gender(campaign.gender);
            setCampaignCredentials.fundingType(campaign.fundingType);
            setCampaignCredentials.categoryFunding(campaign.categoryFunding);
            setCampaignCredentials.amountBeingRaised(campaign.amountBeingRaised);
            setCampaignCredentials.amountAlreadyRaised(campaign.amountAlreadyRaised);
            setCampaignCredentials.amountRepaid(campaign.amountRepaid);
            setCampaignCredentials.amountToBeRepaid(campaign.amountToBeRepaid);
            setCampaignCredentials.amountToBeRepaidPerPayout(
                campaign.amountToBeRepaidPerPayout
            );
            setCampaignCredentials.pledged_profit_to_lenders(
                campaign.pledged_profit_to_lenders
            );
            setCampaignCredentials.duration_pledged_profit(
                campaign.duration_pledged_profit
            );
            setCampaignCredentials.repayment_schedule_pledged_profit(
                campaign.repayment_schedule_pledged_profit
            );
            setCampaignCredentials.endDatePledgedProfit(
                campaign.endDatePledgedProfit
            );
            setCampaignCredentials.endDatePledgedProfitString(
                campaign.endDatePledgedProfitString
            );
            setCampaignCredentials.timePerPayment(campaign.timePerPayment);
            setCampaignCredentials.equity_offering_percentage(
                campaign.equity_offering_percentage
            );
            setCampaignCredentials.bankCode(campaign.bankCode);
            setCampaignCredentials.bank_account_name(campaign.bank_account_name);
            setCampaignCredentials.bank_account_number(campaign.bank_account_number);
            setCampaignCredentials.duration(campaign.duration);
            setCampaignCredentials.go_live_schedule(campaign.go_live_schedule);
            setCampaignCredentials.campaignLiveStatus(campaign.campaignLiveStatus);
            setCampaignCredentials.familiarWithCrowdFunding(
                campaign.familiarWithCrowdFunding
            );
            setCampaignCredentials.storeOnGaged(campaign.storeOnGaged);
            setCampaignCredentials.endDate(campaign.endDate);
            setCampaignCredentials.firstPaymentDate(campaign.firstPaymentDate);
            setCampaignCredentials.firstPaymentDateString(
                campaign.firstPaymentDateString
            );
            setCampaignCredentials.endDateString(campaign.endDateString);
            setCampaignCredentials.paymentStartDate(campaign.paymentStartDate);
            setCampaignCredentials.twitter(campaign.twitter);
            setCampaignCredentials.faceBook(campaign.faceBook);
            setCampaignCredentials.whatsApp(campaign.whatsApp);
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

    const [campaignCredentials, setCampaignCredentials] = useState({
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
        twitter: "",
        faceBook: "",
        whatsApp: "",
    });

    const createCampaignSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("campaignName", campaignCredentials.campaignName);
        myForm.set("natureOfBusiness", campaignCredentials.natureOfBusiness);
        myForm.set("campaignCategory", campaignCredentials.campaignCategory);
        myForm.set(
            "business_address_country",
            campaignCredentials.business_address_country
        );
        myForm.set(
            "business_address_city",
            campaignCredentials.business_address_city
        );
        myForm.set(
            "business_address_office",
            campaignCredentials.business_address_office
        );
        myForm.set("phoneNumber", campaignCredentials.phoneNumber);
        myForm.set("investorBrief", campaignCredentials.investorBrief);
        myForm.set("campaignVideo", campaignCredentials.campaignVideo);
        myForm.set("pitchDeck", campaignCredentials.pitchDeck);
        myForm.set(
            "ideal_target_audience_age",
            campaignCredentials.ideal_target_audience_age
        );
        myForm.set(
            "ideal_target_audience_health_issues_or_disabilities",
            campaignCredentials.ideal_target_audience_health_issues_or_disabilities
        );
        myForm.set("gender", campaignCredentials.gender);
        myForm.set("fundingType", campaignCredentials.fundingType);
        myForm.set("categoryFunding", campaignCredentials.categoryFunding);
        myForm.set("amountBeingRaised", campaignCredentials.amountBeingRaised);
        myForm.set("amountAlreadyRaised", campaignCredentials.amountAlreadyRaised);
        myForm.set("amountRepaid", campaignCredentials.amountRepaid);
        myForm.set("amountToBeRepaid", campaignCredentials.amountToBeRepaid);
        myForm.set(
            "amountToBeRepaidPerPayout",
            campaignCredentials.amountToBeRepaidPerPayout
        );
        myForm.set(
            "pledged_profit_to_lenders",
            campaignCredentials.pledged_profit_to_lenders
        );
        myForm.set(
            "duration_pledged_profit",
            campaignCredentials.duration_pledged_profit
        );
        myForm.set(
            "repayment_schedule_pledged_profit",
            campaignCredentials.repayment_schedule_pledged_profit
        );
        myForm.set(
            "endDatePledgedProfit",
            campaignCredentials.endDatePledgedProfit
        );
        myForm.set(
            "endDatePledgedProfitString",
            campaignCredentials.endDatePledgedProfitString
        );
        myForm.set("timePerPayment", campaignCredentials.timePerPayment);
        myForm.set(
            "equity_offering_percentage",
            campaignCredentials.equity_offering_percentage
        );
        myForm.set("bankCode", campaignCredentials.bankCode);
        myForm.set("bank_account_name", campaignCredentials.bank_account_name);
        myForm.set("bank_account_number", campaignCredentials.bank_account_number);
        myForm.set("duration", campaignCredentials.duration);
        myForm.set("go_live_schedule", campaignCredentials.go_live_schedule);
        myForm.set("campaignLiveStatus", campaignCredentials.campaignLiveStatus);
        myForm.set(
            "familiarWithCrowdFunding",
            campaignCredentials.familiarWithCrowdFunding
        );
        myForm.set("storeOnGaged", campaignCredentials.storeOnGaged);
        myForm.set("endDate", campaignCredentials.endDate);
        myForm.set("firstPaymentDate", campaignCredentials.firstPaymentDate);
        myForm.set(
            "firstPaymentDateString",
            campaignCredentials.firstPaymentDateString
        );
        myForm.set("endDateString", campaignCredentials.endDateString);
        myForm.set("paymentStartDate", campaignCredentials.paymentStartDate);

        // dispatch(createCampaignAction(myForm));
        dispatch(newCampaignStarted(myForm));
    };

    useEffect(() => {
        if (businessInfo) {
            setCampaignCredentials.twitter(businessInfo.twitter);
            setCampaignCredentials.faceBook(businessInfo.faceBook);
            setCampaignCredentials.whatsApp(businessInfo.whatsApp);
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
    function handleChange(e) {
        const { value, name } = e.currentTarget;
        setCampaignCredentials((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    const clear = (e) => {
        const { name } = e.currentTarget;
        setCampaignCredentials((prevValue) => {
            return {
                ...prevValue,
                [name]: "",
            };
        });
    };

    switch (step) {
        case 1:
            return ( <
                Organisation nextStep = { nextStep }
                handleChange = { handleChange }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                campaignCredentials = { campaignCredentials }
                prevStep = { prevStep }
                />
            );
        case 2:
            return ( <
                Demographics nextStep = { nextStep }
                prevStep = { prevStep }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                handleChange = { handleChange }
                campaignCredentials = { campaignCredentials }
                />
            );
        case 3:
            return ( <
                Target nextStep = { nextStep }
                prevStep = { prevStep }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                handleChange = { handleChange }
                campaignCredentials = { campaignCredentials }
                />
            );
        case 4:
            return ( <
                Finance nextStep = { nextStep }
                prevStep = { prevStep }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                handleChange = { handleChange }
                campaignCredentials = { campaignCredentials }
                clear = { clear }
                />
            );
        case 5:
            return ( <
                SetSchedule nextStep = { nextStep }
                prevStep = { prevStep }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                handleChange = { handleChange }
                campaignCredentials = { campaignCredentials }
                />
            );
        case 6:
            return ( <
                Review nextStep = { nextStep }
                prevStep = { prevStep }
                campaignCredentials = { campaignCredentials }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                fourthStep = { fourthStep }
                fifthStep = { fifthStep }
                sixthStep = { sixthStep }
                handleChange = { handleChange }
                createCampaignSubmitHandler = { createCampaignSubmitHandler }
                loading = { loading }
                />
            );

        default:
            console.log("This is a multi-step form built with React for Gaged LLC.");
    }
}

export default UpdateCampaignForm;