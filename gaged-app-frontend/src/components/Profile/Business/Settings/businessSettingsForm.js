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
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const BusinessSettingsForm = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    let navigate = useNavigate();

    const [message, setMessage] = useState(null);

    const { error, isUpdated } = useSelector(
        (state: RootStateOrAny) => state.businessProfile
    );

    const { businessInfo } = useSelector(
        (state: RootStateOrAny) => state.business
    );

    
        const [businessName, setbusinessName] = useState("");
        const [accountHolderName, setaccountHolderName] = useState("");
        const [email, setemail] = useState("");
        const [phoneNumber, setphoneNumber] = useState("");
        const [password, setpassword] = useState("");
        const [pic, setpic] = useState("");
        const [twitter, settwitter] = useState("");
        const [faceBook, setfaceBook] = useState("");
        const [whatsApp, setwhatsApp] = useState("");
        const [isAdmin, setisAdmin] = useState("");
        const [role, setrole] = useState("");
        const [meansOfID, setmeansOfID] = useState("");
        const [IDpic, setIDpic] = useState("");
        const [regNum, setregNum] = useState("");
        const [natureOfBusiness, setnatureOfBusiness] = useState("");
        const [personalEmail, setpersonalEmail] = useState("");
        const [businessAddress, setbusinessAddress] = useState("");
        const [cacCertificate, setcacCertificate] = useState("");
        const [formCO7, setformCO7] = useState("");
        const [bankCode, setbankCode] = useState("");
        const [bankAccountName, setbankAccountName] = useState("");
        const [bankAccountNumber, setbankAccountNumber] = useState("");
        const [storeName, setstoreName] = useState("");
        const [storeTagline, setstoreTagline] = useState("");
        const [storeDescription, setstoreDescription] = useState("");
        const [storeLink, setstoreLink] = useState("");
        const [category, setcategory] = useState("");
        const [storeLogo, setstoreLogo] = useState("");
        const [storeBackground, setstoreBackground] = useState("");
        const [totalNumberOfCampaignsStarted, settotalNumberOfCampaignsStarted] = useState("");
        const [totalNumberOfCampaignsInvested, settotalNumberOfCampaignsInvested] = useState("");
        const [listOfCampaignsStarted, setlistOfCampaignsStarted] = useState("");
        const [listOfCampaignsInvested, setlistOfCampaignsInvested] = useState("");
        const [totalAmountRaised, settotalAmountRaised] = useState("");
        const [averageRaised, setaverageRaised] = useState("");
        const [numberOfBusinessInvestors, setnumberOfBusinessInvestors] = useState("");
        const [listOfBusinessInvestors, setlistOfBusinessInvestors] = useState("");
        const [numberOfIndividualInvestors, setnumberOfIndividualInvestors] = useState("");
        const [listOfIndividualInvestors, setlistOfIndividualInvestors] = useState("");
        const [totalNumberOfInvestors, settotalNumberOfInvestors] = useState("");
        const [walletBalance, setwalletBalance] = useState("");
        const [totalSales, settotalSales] = useState("");
        const [storeProducts, setstoreProducts] = useState("");
        const [numberOfStoreProducts, setnumberOfStoreProducts] = useState("");
        const [deliveryCharge, setdeliveryCharge] = useState("");
        const [totalRevenue, settotalRevenue] = useState("");
        const [totalProductNumber, settotalProductNumber] = useState("");
        const [businessOrderedFrom, setbusinessOrderedFrom] = useState("");
        const [numberOfOrderRequests, setnumberOfOrderRequests] = useState("");
        const [quantityOfOrders, setquantityOfOrders] = useState("");
        const [individualReviews, setindividualReviews] = useState("");
        const [numberOfIndividualReviews, setnumberOfIndividualReviews] = useState("");
        const [businessReviews, setbusinessReviews] = useState("");
        const [numberOfBusinessReviews, setnumberOfBusinessReviews] = useState("");
        const [totalNumberOfReviews, settotalNumberOfReviews] = useState("");
        const [businessOrders, setbusinessOrders] = useState("");
        const [numberOFBusinessOrders, setnumberOFBusinessOrders] = useState("");
        const [individualOrders, setindividualOrders] = useState("");
        const [numberOfIndividualOrders, setnumberOfIndividualOrders] = useState("");
        const [totalNumberOfOrders, settotalNumberOfOrders] = useState("");
        const [individualCustomers, setindividualCustomers] = useState("");
        const [numberOfIndividualCustomers, setnumberOfIndividualCustomers] = useState("");
        const [businessCustomers, setbusinessCustomers] = useState("");
        const [numberOfBusinessCustomers, setnumberOfBusinessCustomers] = useState("");
        const [totalNumberOfCustomers, settotalNumberOfCustomers] = useState("");
        const [campaignReviews, setcampaignReviews] = useState("");
        const [numberOfCampaignsReviwed, setnumberOfCampaignsReviwed] = useState("");
        const [newnewProductReview, setnewnewProductReview] = useState("");
        const [numberOfProductsReviewed, setnumberOfProductsReviewed] = useState("");
        const [totallNumberOfInteractions, settotallNumberOfInteractions] = useState("");
        const [paymentMethod, setpaymentMethod] = useState("");
        const [shippingCost, setshippingCost] = useState("");
        const [confirmPassword, setconfirmPassword] = useState("");
    
    useEffect(() => {
        if (businessInfo) {
            setbusinessName(businessInfo.businessName);
            setaccountHolderName(businessInfo.accountHolderName);
            setemail(businessInfo.email);
            setphoneNumber(businessInfo.phoneNumber);
            setpassword(businessInfo.password);
            setpic(businessInfo.pic);
            settwitter(businessInfo.twitter);
            setfaceBook(businessInfo.faceBook);
            setwhatsApp(businessInfo.whatsApp);
            setisAdmin(businessInfo.isAdmin);
            setrole(businessInfo.role);
            setmeansOfID(businessInfo.meansOfID);
            setIDpic(businessInfo.IDpic);
            setregNum(businessInfo.regNum);
            setnatureOfBusiness(businessInfo.natureOfBusiness);
            setpersonalEmail(businessInfo.personalEmail);
            setbusinessAddress(businessInfo.businessAddress);
            setcacCertificate(businessInfo.cacCertificate);
            setformCO7(businessInfo.formCO7);
            setbankCode(businessInfo.bankCode);
            setbankAccountName(businessInfo.bankAccountName);
            setbankAccountNumber(businessInfo.bankAccountNumber);
            setstoreName(businessInfo.storeName);
            setstoreTagline(businessInfo.storeTagline);
            setstoreDescription(businessInfo.storeDescription);
            setstoreLink(businessInfo.storeLink);
            setcategory(businessInfo.category);
            setstoreLogo(businessInfo.storeLogo);
            setstoreBackground(businessInfo.storeBackground);
            settotalNumberOfCampaignsStarted(
                businessInfo.totalNumberOfCampaignsStarted
            );
            settotalNumberOfCampaignsInvested(
                businessInfo.totalNumberOfCampaignsInvested
            );
            setlistOfCampaignsStarted(
                businessInfo.listOfCampaignsStarted
            );
            setlistOfCampaignsInvested(
                businessInfo.listOfCampaignsInvested
            );
            settotalAmountRaised(businessInfo.totalAmountRaised);
            setaverageRaised(businessInfo.averageRaised);
            setnumberOfBusinessInvestors(
                businessInfo.numberOfBusinessInvestors
            );
            setlistOfBusinessInvestors(
                businessInfo.listOfBusinessInvestors
            );
            setnumberOfIndividualInvestors(
                businessInfo.numberOfIndividualInvestors
            );
            setlistOfIndividualInvestors(
                businessInfo.listOfIndividualInvestors
            );
            settotalNumberOfInvestors(
                businessInfo.totalNumberOfInvestors
            );
            setwalletBalance(businessInfo.walletBalance);
            settotalSales(businessInfo.totalSales);
            setstoreProducts(businessInfo.storeProducts);
            setnumberOfStoreProducts(
                businessInfo.numberOfStoreProducts
            );
            setdeliveryCharge(businessInfo.deliveryCharge);
            settotalRevenue(businessInfo.totalRevenue);
            settotalProductNumber(
                businessInfo.totalProductNumber
            );
            setbusinessOrderedFrom(
                businessInfo.businessOrderedFrom
            );
            setnumberOfOrderRequests(
                businessInfo.numberOfOrderRequests
            );
            setquantityOfOrders(businessInfo.quantityOfOrders);
            setindividualReviews(businessInfo.individualReviews);
            setnumberOfIndividualReviews(
                businessInfo.numberOfIndividualReviews
            );
            setbusinessReviews(businessInfo.businessReviews);
            setnumberOfBusinessReviews(
                businessInfo.numberOfBusinessReviews
            );
            settotalNumberOfReviews(
                businessInfo.totalNumberOfReviews
            );
            setbusinessOrders(businessInfo.businessOrders);
            setnumberOFBusinessOrders(
                businessInfo.numberOFBusinessOrders
            );
            setindividualOrders(businessInfo.individualOrders);
            setnumberOfIndividualOrders(
                businessInfo.numberOfIndividualOrders
            );
            settotalNumberOfOrders(
                businessInfo.totalNumberOfOrders
            );
            setindividualCustomers(
                businessInfo.individualCustomers
            );
            setnumberOfIndividualCustomers(
                businessInfo.numberOfIndividualCustomers
            );
            setbusinessCustomers(businessInfo.businessCustomers);
            setnumberOfBusinessCustomers(
                businessInfo.numberOfBusinessCustomers
            );
            settotalNumberOfCustomers(
                businessInfo.totalNumberOfCustomers
            );
            setcampaignReviews(businessInfo.campaignReviews);
            setnumberOfCampaignsReviwed(
                businessInfo.numberOfCampaignsReviwed
            );
            setnewnewProductReview(
                businessInfo.newnewProductReview
            );
            setnumberOfProductsReviewed(
                businessInfo.numberOfProductsReviewed
            );
            settotallNumberOfInteractions(
                businessInfo.totallNumberOfInteractions
            );
            setpaymentMethod(businessInfo.paymentMethod);
            setshippingCost(businessInfo.shippingCost);
        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success("Profile Updated Successfully");
            dispatch(loadBusiness());
            navigate("/settings/individual/general");
            dispatch({
                type: UPDATE_BUSINESS_PROFILE_RESET,
            });
        }
    }, [dispatch, error, alert, navigate, businessInfo, isUpdated]);

    const [step, setStep] = useState(1);

    // const [picMessage, setPicMessage] = useState(null);

    const updateProfileSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("businessName", businessName);
        myForm.set("accountHolderName", accountHolderName);
        myForm.set("email", email);
        myForm.set("phoneNumber", phoneNumber);
        myForm.set("password", password);
        myForm.set("pic", pic);
        myForm.set("twitter", twitter);
        myForm.set("faceBook", faceBook);
        myForm.set("whatsApp", whatsApp);
        myForm.set("isAdmin", isAdmin);
        myForm.set("role", role);
        myForm.set("meansOfID", meansOfID);
        myForm.set("IDpic", IDpic);
        myForm.set("regNum", regNum);
        myForm.set("natureOfBusiness", natureOfBusiness);
        myForm.set("personalEmail", personalEmail);
        myForm.set("businessAddress", businessAddress);
        myForm.set("cacCertificate", cacCertificate);
        myForm.set("formCO7", formCO7);
        myForm.set("bankCode", bankCode);
        myForm.set("bankAccountName", bankAccountName);
        myForm.set("bankAccountNumber", bankAccountNumber);
        myForm.set("storeName", storeName);
        myForm.set("storeTagline", storeTagline);
        myForm.set("storeDescription", storeDescription);
        myForm.set("storeLink", storeLink);
        myForm.set("category", category);
        myForm.set("storeLogo", storeLogo);
        myForm.set("storeBackground", storeBackground);
        myForm.set(
            "totalNumberOfCampaignsStarted",
            totalNumberOfCampaignsStarted
        );
        myForm.set(
            "totalNumberOfCampaignsInvested",
            totalNumberOfCampaignsInvested
        );
        myForm.set(
            "listOfCampaignsStarted",
            listOfCampaignsStarted
        );
        myForm.set(
            "listOfCampaignsInvested",
            listOfCampaignsInvested
        );
        myForm.set("totalAmountRaised", totalAmountRaised);
        myForm.set("averageRaised", averageRaised);
        myForm.set(
            "numberOfBusinessInvestors",
            numberOfBusinessInvestors
        );
        myForm.set(
            "listOfBusinessInvestors",
            listOfBusinessInvestors
        );
        myForm.set(
            "numberOfIndividualInvestors",
            numberOfIndividualInvestors
        );
        myForm.set(
            "listOfIndividualInvestors",
            listOfIndividualInvestors
        );
        myForm.set(
            "totalNumberOfInvestors",
            totalNumberOfInvestors
        );
        myForm.set("walletBalance", walletBalance);
        myForm.set("totalSales", totalSales);
        myForm.set("storeProducts", storeProducts);
        myForm.set(
            "numberOfStoreProducts",
            numberOfStoreProducts
        );
        myForm.set("deliveryCharge", deliveryCharge);
        myForm.set("totalRevenue", totalRevenue);
        myForm.set("totalProductNumber", totalProductNumber);
        myForm.set("businessOrderedFrom", businessOrderedFrom);
        myForm.set(
            "numberOfOrderRequests",
            numberOfOrderRequests
        );
        myForm.set("quantityOfOrders", quantityOfOrders);
        myForm.set("individualReviews", individualReviews);
        myForm.set(
            "numberOfIndividualReviews",
            numberOfIndividualReviews
        );
        myForm.set("businessReviews", businessReviews);
        myForm.set(
            "numberOfBusinessReviews",
            numberOfBusinessReviews
        );
        myForm.set(
            "totalNumberOfReviews",
            totalNumberOfReviews
        );
        myForm.set("businessOrders", businessOrders);
        myForm.set(
            "numberOFBusinessOrders",
            numberOFBusinessOrders
        );
        myForm.set("individualOrders", individualOrders);
        myForm.set(
            "numberOfIndividualOrders",
            numberOfIndividualOrders
        );
        myForm.set("totalNumberOfOrders", totalNumberOfOrders);
        myForm.set("individualCustomers", individualCustomers);
        myForm.set(
            "numberOfIndividualCustomers",
            numberOfIndividualCustomers
        );
        myForm.set("businessCustomers", businessCustomers);
        myForm.set(
            "numberOfBusinessCustomers",
            numberOfBusinessCustomers
        );
        myForm.set(
            "totalNumberOfCustomers",
            totalNumberOfCustomers
        );
        myForm.set("campaignReviews", campaignReviews);
        myForm.set(
            "numberOfCampaignsReviwed",
            numberOfCampaignsReviwed
        );
        myForm.set("newnewProductReview", newnewProductReview);
        myForm.set(
            "numberOfProductsReviewed",
            numberOfProductsReviewed
        );
        myForm.set(
            "totallNumberOfInteractions",
            totallNumberOfInteractions
        );
        myForm.set("paymentMethod", paymentMethod);
        myForm.set("shippingCost", shippingCost);
        if (password !== confirmPassword) {
            setMessage("Oops, Passwords do not match. Please try again.");
        } else dispatch(updateProfile(myForm));
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

    // function postDetails(pics) {
    // if (
    // pics.type === "image/jpeg" ||
    // pics.type === "image/png" ||
    // pics.type === "image/jpg"
    // ) {
    // const data = new FormData();
    // data.append("file", pics);
    // data.append("upload_preset", "gagedio");
    // data.append("cloud_name", "gaged");
    // fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
    // method: "post",
    // body: data,
    // })
    // .then((res) => res.json())
    // .then((data) => {
    // console.log(data);
    // setIDPic(data.url.toString());
    // })
    // .catch((err) => {
    // console.log(err);
    // });
    // } else {
    //return setPicMessage("Please select at least one image.");
    // }
    // }

    function postLogoPic(pics) {
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/jpg"
        ) {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "gagedio");
            data.append("cloud_name", "gaged");
            fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
                    method: "post",
                    body: data,
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setstoreLogo(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // return setPicMessage("Please select at least one image.");
        }
    }

    function postIDpic(pics) {
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/jpg"
        ) {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "gagedio");
            data.append("cloud_name", "gaged");
            fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
                    method: "post",
                    body: data,
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIDpic(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // return setPicMessage("Please select at least one image.");
        }
    }

    function postCacCertificate(pics) {
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/jpg"
        ) {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "gagedio");
            data.append("cloud_name", "gaged");
            fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
                    method: "post",
                    body: data,
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setcacCertificate(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // return setPicMessage("Please select at least one image.");
        }
    }

    function postFormCO7(pics) {
        if (
            pics.type === "image/jpeg" ||
            pics.type === "image/png" ||
            pics.type === "image/jpg"
        ) {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "gagedio");
            data.append("cloud_name", "gaged");
            fetch("https://api.cloudinary.com/v1_1/gaged/image/upload", {
                    method: "post",
                    body: data,
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setformCO7(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // return setPicMessage("Please select at least one image.");
        }
    }

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
        // setBusinessCredentials((prevValue) => {
            // return {
                // ...prevValue,
                // [name]: value,
            // };
        // });
    }

    switch (step) {
        case 1:
            return ( <
                SettingsGeneral 
                handleChange = { handleChange }
                firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                
                updateProfileSubmitHandler = { updateProfileSubmitHandler }
                postIDpic = { postIDpic }
                postCacCertificate = { postCacCertificate }
                postFormCO7 = { postFormCO7 }
                message = { message }
                error = { error }
                />
            );
        case 2:
            return ( <
                SettingsBank firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                handleChange = { handleChange }
                
                updateProfileSubmitHandler = { updateProfileSubmitHandler }
                />
            );
        case 3:
            return ( <
                SettingsStore firstStep = { firstStep }
                secondStep = { secondStep }
                thirdStep = { thirdStep }
                handleChange = { handleChange }
                
                updateProfileSubmitHandler = { updateProfileSubmitHandler }
                postLogoPic = { postLogoPic }
                />
            );
        default:
            console.log("This is a multi-step form built with React for Gaged LLC.");
    }
};

export default BusinessSettingsForm;