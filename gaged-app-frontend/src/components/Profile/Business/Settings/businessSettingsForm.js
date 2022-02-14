import React, { useEffect, useState } from "react";
import SettingsGeneral from "./SettingsGeneral";
import SettingsStore from "./SettingsStore";
import SettingsBank from "./SettingsBank";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  updateProfile,
  loadBusiness,
} from "../../../../actions/businessActions";
import { UPDATE_BUSINESS_PROFILE_RESET } from "../../../../constants/businessConstants";

// import { useNavigate } from "react-router-dom";

const BusinessSettingsForm = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state: RootStateOrAny) => state.businessProfile
  );

  const { signedUpBusinessInfo } = useSelector(
    (state: RootStateOrAny) => state.signedUpBusinessLogin
  );


  const [businessCredentials, setBusinessCredentials] = useState({
  businessName: "",
  accountHolderName: "",
  email: "",
  phoneNumber: "",
  password: "",
  pic: "",
  twitter: "",
  facebook: "",
  whatsApp: "",
  isAdmin: "",
  role: "",
  meansOfID: "",
  IDpic: "",
  regNum:"",
  natureOfBusiness: "",
  personalEmail: "",
  businessAddress: "",
  cacCertificate: "",
  formCO7: "",
  bankCode: "",
  bankAccountName: "",
  bankAccountNumber: "",
  storeName: "",
  storeTagline: signedUpBusinessInfo.storeTagline,
  storeDescription: signedUpBusinessInfo.storeDescription,
  storeLink: signedUpBusinessInfo.storeLink,
  category: signedUpBusinessInfo.category,
  storeLogo: signedUpBusinessInfo.storeLogo,
  storeBackground: signedUpBusinessInfo.storeBackground,
  totalNumberOfCampaignsStarted:
    signedUpBusinessInfo.totalNumberOfCampaignsStarted,
  totalNumberOfCampaignsInvested:
    signedUpBusinessInfo.totalNumberOfCampaignsInvested,
  listOfCampaignsStarted: signedUpBusinessInfo.listOfCampaignsStarted,
  listOfCampaignsInvested: signedUpBusinessInfo.listOfCampaignsInvested,
  totalAmountRaised: signedUpBusinessInfo.totalAmountRaised,
  averageRaised: signedUpBusinessInfo.averageRaised,
  numberOfBusinessInvestors: signedUpBusinessInfo.numberOfBusinessInvestors,
  listOfBusinessInvestors: signedUpBusinessInfo.listOfBusinessInvestors,
  numberOfIndividualInvestors:
    signedUpBusinessInfo.numberOfIndividualInvestors,
  listOfIndividualInvestors: signedUpBusinessInfo.listOfIndividualInvestors,
  totalNumberOfInvestors: signedUpBusinessInfo.totalNumberOfInvestors,
  walletBalance: signedUpBusinessInfo.walletBalance,
  totalSales: signedUpBusinessInfo.totalSales,
  storeProducts: signedUpBusinessInfo.storeProducts,
  numberOfStoreProducts: signedUpBusinessInfo.numberOfStoreProducts,
  deliveryCharge: signedUpBusinessInfo.deliveryCharge,
  totalRevenue: signedUpBusinessInfo.totalRevenue,
  totalProductNumber: signedUpBusinessInfo.totalProductNumber,
  businessOrderedFrom: signedUpBusinessInfo.businessOrderedFrom,
  numberOfOrderRequests: signedUpBusinessInfo.numberOfOrderRequests,
  quantityOfOrders: signedUpBusinessInfo.quantityOfOrders,
  individualReviews: signedUpBusinessInfo.individualReviews,
  numberOfIndividualReviews: signedUpBusinessInfo.numberOfIndividualReviews,
  businessReviews: signedUpBusinessInfo.businessReviews,
  numberOfBusinessReviews: signedUpBusinessInfo.numberOfBusinessReviews,
  totalNumberOfReviews: signedUpBusinessInfo.totalNumberOfReviews,
  businessOrders: signedUpBusinessInfo.businessOrders,
  numberOFBusinessOrders: signedUpBusinessInfo.numberOFBusinessOrders,
  individualOrders: signedUpBusinessInfo.individualOrders,
  numberOfIndividualOrders: signedUpBusinessInfo.numberOfIndividualOrders,
  totalNumberOfOrders: signedUpBusinessInfo.totalNumberOfOrders,
  individualCustomers: signedUpBusinessInfo.individualCustomers,
  numberOfIndividualCustomers:
    signedUpBusinessInfo.numberOfIndividualCustomers,
  businessCustomers: signedUpBusinessInfo.businessCustomers,
  numberOfBusinessCustomers: signedUpBusinessInfo.numberOfBusinessCustomers,
  totalNumberOfCustomers: signedUpBusinessInfo.totalNumberOfCustomers,
  campaignReviews: signedUpBusinessInfo.campaignReviews,
  numberOfCampaignsReviwed: signedUpBusinessInfo.numberOfCampaignsReviwed,
  productReviews: signedUpBusinessInfo.productReviews,
  numberOfProductsReviewed: signedUpBusinessInfo.numberOfProductsReviewed,
  totallNumberOfInteractions: signedUpBusinessInfo.totallNumberOfInteractions,
  paymentMethod: signedUpBusinessInfo.paymentMethod,
  shippingCost: signedUpBusinessInfo.shippingCost,
});
  useEffect(()=>{
    if (signedUpBusinessInfo) {
setBusinessCredentials.businessName(signedUpBusinessInfo.businessName);
setBusinessCredentials.accountHolderName(signedUpBusinessInfo.accountHolderName);
setBusinessCredentials.email(signedUpBusinessInfo.email);
setBusinessCredentials.phoneNumber(signedUpBusinessInfo.phoneNumber);
setBusinessCredentials.password(signedUpBusinessInfo.password);
setBusinessCredentials.pic(signedUpBusinessInfo.pic);
setBusinessCredentials.twitter(signedUpBusinessInfo.twitter);
setBusinessCredentials.facebook(signedUpBusinessInfo.facebook);
setBusinessCredentials.whatsApp(signedUpBusinessInfo.whatsApp);
setBusinessCredentials.isAdmin(signedUpBusinessInfo.isAdmin);
setBusinessCredentials.role: signedUpBusinessInfo.role,
setBusinessCredentials.meansOfID: signedUpBusinessInfo.meansOfID,
setBusinessCredentials.IDpic: signedUpBusinessInfo.IDpic,
setBusinessCredentials.regNum: signedUpBusinessInfo.regNum,
setBusinessCredentials.natureOfBusiness: signedUpBusinessInfo.natureOfBusiness,
setBusinessCredentials.personalEmail: signedUpBusinessInfo.personalEmail,
setBusinessCredentials.businessAddress: signedUpBusinessInfo.businessAddress,
setBusinessCredentials.cacCertificate: signedUpBusinessInfo.cacCertificate,
setBusinessCredentials.formCO7: signedUpBusinessInfo.formCO7,
setBusinessCredentials.bankCode: signedUpBusinessInfo.bankCode,
setBusinessCredentials.bankAccountName: signedUpBusinessInfo.bankAccountName,
setBusinessCredentials.bankAccountNumber: signedUpBusinessInfo.bankAccountNumber,
setBusinessCredentials.storeName: signedUpBusinessInfo.storeName,
setBusinessCredentials.storeTagline: signedUpBusinessInfo.storeTagline,
setBusinessCredentials.storeDescription: signedUpBusinessInfo.storeDescription,
setBusinessCredentials.storeLink: signedUpBusinessInfo.storeLink,
setBusinessCredentials.category: signedUpBusinessInfo.category,
setBusinessCredentials.storeLogo: signedUpBusinessInfo.storeLogo,
setBusinessCredentials.storeBackground: signedUpBusinessInfo.storeBackground,
setBusinessCredentials.totalNumberOfCampaignsStarted:
setBusinessCredentials.  signedUpBusinessInfo.totalNumberOfCampaignsStarted,
setBusinessCredentials.totalNumberOfCampaignsInvested:
setBusinessCredentials.  signedUpBusinessInfo.totalNumberOfCampaignsInvested,
setBusinessCredentials.listOfCampaignsStarted: signedUpBusinessInfo.listOfCampaignsStarted,
setBusinessCredentials.listOfCampaignsInvested: signedUpBusinessInfo.listOfCampaignsInvested,
setBusinessCredentials.totalAmountRaised: signedUpBusinessInfo.totalAmountRaised,
setBusinessCredentials.averageRaised: signedUpBusinessInfo.averageRaised,
setBusinessCredentials.numberOfBusinessInvestors: signedUpBusinessInfo.numberOfBusinessInvestors,
setBusinessCredentials.listOfBusinessInvestors: signedUpBusinessInfo.listOfBusinessInvestors,
setBusinessCredentials.numberOfIndividualInvestors:
setBusinessCredentials.  signedUpBusinessInfo.numberOfIndividualInvestors,
setBusinessCredentials.listOfIndividualInvestors: signedUpBusinessInfo.listOfIndividualInvestors,
setBusinessCredentials.totalNumberOfInvestors: signedUpBusinessInfo.totalNumberOfInvestors,
setBusinessCredentials.walletBalance: signedUpBusinessInfo.walletBalance,
setBusinessCredentials.totalSales: signedUpBusinessInfo.totalSales,
setBusinessCredentials.storeProducts: signedUpBusinessInfo.storeProducts,
setBusinessCredentials.numberOfStoreProducts: signedUpBusinessInfo.numberOfStoreProducts,
setBusinessCredentials.deliveryCharge: signedUpBusinessInfo.deliveryCharge,
setBusinessCredentials.totalRevenue: signedUpBusinessInfo.totalRevenue,
setBusinessCredentials.totalProductNumber: signedUpBusinessInfo.totalProductNumber,
setBusinessCredentials.businessOrderedFrom: signedUpBusinessInfo.businessOrderedFrom,
setBusinessCredentials.numberOfOrderRequests: signedUpBusinessInfo.numberOfOrderRequests,
setBusinessCredentials.quantityOfOrders: signedUpBusinessInfo.quantityOfOrders,
setBusinessCredentials.individualReviews: signedUpBusinessInfo.individualReviews,
setBusinessCredentials.numberOfIndividualReviews: signedUpBusinessInfo.numberOfIndividualReviews,
setBusinessCredentials.businessReviews: signedUpBusinessInfo.businessReviews,
setBusinessCredentials.numberOfBusinessReviews: signedUpBusinessInfo.numberOfBusinessReviews,
setBusinessCredentials.totalNumberOfReviews: signedUpBusinessInfo.totalNumberOfReviews,
setBusinessCredentials.businessOrders: signedUpBusinessInfo.businessOrders,
setBusinessCredentials.numberOFBusinessOrders: signedUpBusinessInfo.numberOFBusinessOrders,
setBusinessCredentials.individualOrders: signedUpBusinessInfo.individualOrders,
setBusinessCredentials.numberOfIndividualOrders: signedUpBusinessInfo.numberOfIndividualOrders,
setBusinessCredentials.totalNumberOfOrders: signedUpBusinessInfo.totalNumberOfOrders,
setBusinessCredentials.individualCustomers: signedUpBusinessInfo.individualCustomers,
setBusinessCredentials.numberOfIndividualCustomers(signedUpBusinessInfo.numberOfIndividualCustomers);
setBusinessCredentials.businessCustomers(signedUpBusinessInfo.businessCustomers)
setBusinessCredentials.numberOfBusinessCustomers: signedUpBusinessInfo.numberOfBusinessCustomers,
setBusinessCredentials.totalNumberOfCustomers: signedUpBusinessInfo.totalNumberOfCustomers,
setBusinessCredentials.campaignReviews: signedUpBusinessInfo.campaignReviews,
setBusinessCredentials.numberOfCampaignsReviwed: signedUpBusinessInfo.numberOfCampaignsReviwed,
setBusinessCredentials.productReviews: signedUpBusinessInfo.productReviews,
setBusinessCredentials.numberOfProductsReviewed: signedUpBusinessInfo.numberOfProductsReviewed,
setBusinessCredentials.totallNumberOfInteractions: signedUpBusinessInfo.totallNumberOfInteractions,
setBusinessCredentials.paymentMethod: signedUpBusinessInfo.paymentMethod,
setBusinessCredentials.shippingCost(signedUpBusinessInfo.shippingCost);
    }
    if (error) {
  alert.error(error);
  dispatch(clearErrors());
}
if (isUpdated) {
  alert.success("Profile Updated Successfully");
  dispatch(loadUser());
  navigate("/settings/individual/general");
  dispatch({
    type: UPDATE_USER_PROFILE_RESET,
  });
}
  })

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Account Updated Successfully");
      // navigate("/admin/dashboard");
      dispatch({ type: UPDATE_BUSINESS_PROFILE_RESET });
    }
  }, [dispatch, alert, error, success]);
  const [step, setStep] = useState(1);


  const [picMessage, setPicMessage] = useState(null);

  const updateProfileSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("businessName", businessCredentials.businessName);
    myForm.set("accountHolderName", businessCredentials.accountHolderName);
    myForm.set("email", businessCredentials.email);
    myForm.set("phoneNumber", businessCredentials.phoneNumber);
    myForm.set("password", businessCredentials.password);
    myForm.set("pic", businessCredentials.pic);
    myForm.set("twitter", businessCredentials.twitter);
    myForm.set("facebook", businessCredentials.facebook);
    myForm.set("whatsApp", businessCredentials.whatsApp);
    myForm.set("isAdmin", businessCredentials.isAdmin);
    myForm.set("role", businessCredentials.role);
    myForm.set("meansOfID", businessCredentials.meansOfID);
    myForm.set("IDpic", businessCredentials.IDpic);
    myForm.set("regNum", businessCredentials.regNum);
    myForm.set("natureOfBusiness", businessCredentials.natureOfBusiness);
    myForm.set("personalEmail", businessCredentials.personalEmail);
    myForm.set("businessAddress", businessCredentials.businessAddress);
    myForm.set("cacCertificate", businessCredentials.cacCertificate);
    myForm.set("formCO7", businessCredentials.formCO7);
    myForm.set("bankCode", businessCredentials.bankCode);
    myForm.set("bankAccountName", businessCredentials.bankAccountName);
    myForm.set("bankAccountNumber", businessCredentials.bankAccountNumber);
    myForm.set("storeName", businessCredentials.storeName);
    myForm.set("storeTagline", businessCredentials.storeTagline);
    myForm.set("storeDescription", businessCredentials.storeDescription);
    myForm.set("storeLink", businessCredentials.storeLink);
    myForm.set("category", businessCredentials.category);
    myForm.set("storeLogo", businessCredentials.storeLogo);
    myForm.set("storeBackground", businessCredentials.storeBackground);
    myForm.set(
      "totalNumberOfCampaignsStarted",
      businessCredentials.totalNumberOfCampaignsStarted
    );
    myForm.set(
      "totalNumberOfCampaignsInvested",
      businessCredentials.totalNumberOfCampaignsInvested
    );
    myForm.set(
      "listOfCampaignsStarted",
      businessCredentials.listOfCampaignsStarted
    );
    myForm.set(
      "listOfCampaignsInvested",
      businessCredentials.listOfCampaignsInvested
    );
    myForm.set("totalAmountRaised", businessCredentials.totalAmountRaised);
    myForm.set("averageRaised", businessCredentials.averageRaised);
    myForm.set(
      "numberOfBusinessInvestors",
      businessCredentials.numberOfBusinessInvestors
    );
    myForm.set(
      "listOfBusinessInvestors",
      businessCredentials.listOfBusinessInvestors
    );
    myForm.set(
      "numberOfIndividualInvestors",
      businessCredentials.numberOfIndividualInvestors
    );
    myForm.set(
      "listOfIndividualInvestors",
      businessCredentials.listOfIndividualInvestors
    );
    myForm.set(
      "totalNumberOfInvestors",
      businessCredentials.totalNumberOfInvestors
    );
    myForm.set("walletBalance", businessCredentials.walletBalance);
    myForm.set("totalSales", businessCredentials.totalSales);
    myForm.set("storeProducts", businessCredentials.storeProducts);
    myForm.set(
      "numberOfStoreProducts",
      businessCredentials.numberOfStoreProducts
    );
    myForm.set("deliveryCharge", businessCredentials.deliveryCharge);
    myForm.set("totalRevenue", businessCredentials.totalRevenue);
    myForm.set("totalProductNumber", businessCredentials.totalProductNumber);
    myForm.set("businessOrderedFrom", businessCredentials.businessOrderedFrom);
    myForm.set(
      "numberOfOrderRequests",
      businessCredentials.numberOfOrderRequests
    );
    myForm.set("quantityOfOrders", businessCredentials.quantityOfOrders);
    myForm.set("individualReviews", businessCredentials.individualReviews);
    myForm.set(
      "numberOfIndividualReviews",
      businessCredentials.numberOfIndividualReviews
    );
    myForm.set("businessReviews", businessCredentials.businessReviews);
    myForm.set(
      "numberOfBusinessReviews",
      businessCredentials.numberOfBusinessReviews
    );
    myForm.set(
      "totalNumberOfReviews",
      businessCredentials.totalNumberOfReviews
    );
    myForm.set("businessOrders", businessCredentials.businessOrders);
    myForm.set(
      "numberOFBusinessOrders",
      businessCredentials.numberOFBusinessOrders
    );
    myForm.set("individualOrders", businessCredentials.individualOrders);
    myForm.set(
      "numberOfIndividualOrders",
      businessCredentials.numberOfIndividualOrders
    );
    myForm.set("totalNumberOfOrders", businessCredentials.totalNumberOfOrders);
    myForm.set("individualCustomers", businessCredentials.individualCustomers);
    myForm.set(
      "numberOfIndividualCustomers",
      businessCredentials.numberOfIndividualCustomers
    );
    myForm.set("businessCustomers", businessCredentials.businessCustomers);
    myForm.set(
      "numberOfBusinessCustomers",
      businessCredentials.numberOfBusinessCustomers
    );
    myForm.set(
      "totalNumberOfCustomers",
      businessCredentials.totalNumberOfCustomers
    );
    myForm.set("campaignReviews", businessCredentials.campaignReviews);
    myForm.set(
      "numberOfCampaignsReviwed",
      businessCredentials.numberOfCampaignsReviwed
    );
    myForm.set("productReviews", businessCredentials.productReviews);
    myForm.set(
      "numberOfProductsReviewed",
      businessCredentials.numberOfProductsReviewed
    );
    myForm.set(
      "totallNumberOfInteractions",
      businessCredentials.totallNumberOfInteractions
    );
    myForm.set("paymentMethod", businessCredentials.paymentMethod);
    myForm.set("shippingCost", businessCredentials.shippingCost);
    dispatch(updateProfile(myForm));
  };

  // const postDetails = (pics) => {
  // if (
  //   pics ===
  //   "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  // ) {
  //   return setPicMessage("Please Select an Image");
  // }
  // setPicMessage(null);
  // if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //   const data = new FormData();
  //   data.append("file", pics);
  //   data.append("upload_preset", "notezipper");
  //   data.append("cloud_name", "piyushproj");
  //   fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
  // method: "post",
  // body: data,
  //   })
  // .then((res) => res.json())
  // .then((data) => {
  //   setCredentials.pic(data.url.toString());
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // } else {
  //   return setPicMessage("Please Select an Image");
  // }
  // }

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

  function handleChange(e) {
    const { value, name } = e.currentTarget;
    setBusinessCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  switch (step) {
    case 1:
      return (
        <SettingsGeneral
          handleChange={handleChange}
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          businessCredentials={businessCredentials}
          updateProfileSubmitHandler={updateProfileSubmitHandler}
        />
      );
    case 2:
      return (
        <SettingsBank
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          handleChange={handleChange}
          businessCredentials={businessCredentials}
          updateProfileSubmitHandler={updateProfileSubmitHandler}
        />
      );
    case 3:
      return (
        <SettingsStore
          firstStep={firstStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          handleChange={handleChange}
          businessCredentials={businessCredentials}
          updateProfileSubmitHandler={updateProfileSubmitHandler}
        />
      );
    default:
      console.log("This is a multi-step form built with React for Gaged LLC.");
  }
};

export default BusinessSettingsForm;
