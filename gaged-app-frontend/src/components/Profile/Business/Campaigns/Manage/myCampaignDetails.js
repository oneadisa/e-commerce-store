/* eslint-disable react-hooks/rules-of-hooks */

import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../Layout/Loader/Loader";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import faceBook from "../../../../../images/facebook.svg";
import tags from "../../../../../images/tags.svg";
import twitter from "../../../../../images/twitter.svg";
import whatsapp from "../../../../../images/whatsapp.svg";
import left from "../../../../../images/left.svg";
import { useAlert } from "react-alert";
import MetaData from "../../../../Layout/metaData";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
  clearErrors,
  getCampaignDetails,
  newCampaignReview,
} from "../../../../../actions/businessActions";
import { NEW_CAMPAIGN_REVIEW_RESET } from "../../../../../constants/businessConstants";
import CampaignReviewCard from "../../../../Campaigns/campaignReviewCard.js";
import LendersCard from "../../../../Campaigns/lendersCard";
import GeneralErrorMessage from "../../../../Layout/Errors/GeneralErrorMessage";

setInterval(
  function MyCampaignDetails() {},
  1000
  // Get today's date and time
  //  var now = () =>  new Date().getTime();
);
function MyCampaignDetails() {
  const dispatch = useDispatch();
  const alert = useAlert();
  let params = useParams();
  let navigate = useNavigate();
  const [openTab, setOpenTab] = React.useState(1);
  const [fundValue, setFundValue] = useState("");
  const [showFundModal, setShowFundModal] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const signedUpBusinessLogin = useSelector(
    (state: RootStateOrAny) => state.signedUpBusinessLogin
  );
  const { signedUpBusinessInfo } = signedUpBusinessLogin;

  const { signedUpUserInfo } = useSelector(
    (state: RootStateOrAny) => state.signedUpUserLogin
  );
  useEffect(() => {
    if (!signedUpBusinessInfo) {
    }
  }, [dispatch, navigate, signedUpBusinessInfo]);
  useEffect(() => {}, [signedUpBusinessInfo]);

  const { campaign, loading, error } = useSelector(
    (state: RootStateOrAny) => state.campaignDetails
  );

  const { success, error: reviewError } = useSelector(
    (state: RootStateOrAny) => state.newCampaignReview
  );

  //    const submitReviewToggle = () => {
  //  open ? setOpen(false) : setOpen(true)
  //    };

  var donor;
  if (campaign.fundingType === "Loan") {
    donor = "Lenders";
  } else if (campaign.fundingType === "Donation") {
    donor = "Donors";
  } else {
    donor = "Investors";
  }

  const InvestHandler = async (e) => {
    e.preventDefault();

    if (!signedUpUserInfo || signedUpBusinessInfo) {
      setMessage("Please Login or Sign Up to Invest in this campaign");
    } else {
      const config = {
        public_key: "FLWPUBK-c49999c8b3ae0a1fafe35a4bad31d166-X",
        tx_ref: Date.now(),
        amount: Number(fundValue) * 1.02651699,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd,banktransfer",
        customer: {
          email: signedUpBusinessInfo.email,
          phonenumber: signedUpBusinessInfo.phoneNumber,
          name: signedUpBusinessInfo.businessName,
        },
        customizations: {
          title: "Gaged",
          description: "Gaged Checkout",
          logo: "https://www.linkpicture.com/q/Gaged-Blue.svg",
        },
      };
      const handleFlutterPayment = useFlutterwave(config);
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
          if (response.status === "successful") {
            // order.paymentInfo = {
            //   id: response.transaction_id,
            //   status: response.status,
            // };
            // dispatch();
            navigate("/dashboard/business");
          } else {
            setMessage("There's some issue while processing payment ");
          }
        },
        onClose: () => {},
      });
    }
  };

  // const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("comment", comment);
    myForm.set("campaignId", params.id);

    dispatch(newCampaignReview(myForm));

    // setOpen(false);
  };

  var countDownDate = new Date(campaign.endDateString).getTime();
  // Update the count down every 1 second

  var p;

  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    weeks + "w" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance > 1000 * 60 * 60 * 24 * 7) {
    p = <p className="text-lg">{weeks} weeks left</p>;
  } else if (distance > 1000 * 60 * 60 * 24) {
    p = <p className="text-lg">{days} days left</p>;
  } else if (distance > 1000 * 60 * 60) {
    p = <p className="text-lg">{hours} hours left</p>;
  } else if (distance > 1000 * 60) {
    p = <p className="text-lg">{minutes} minutes left</p>;
  } else if (distance > 1000) {
    p = <p className="text-lg">{seconds} seconds left</p>;
  } else {
    p = <p className="text-lg">EXPIRED</p>;
  }

  // var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  const [showPitchDeckModal, setShowPitchDeckModal] = React.useState(false);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({
        type: NEW_CAMPAIGN_REVIEW_RESET,
        NEW_CAMPAIGN_REVIEW_RESET,
      });
    }
    dispatch(getCampaignDetails(params.id));
  }, [dispatch, params.id, error, alert, reviewError, success]);

  const progress =
    Math.floor(campaign.amountAlreadyRaised / campaign.amountBeingRaised) * 100;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${campaign.campaignName} -- GAGED`} />
          <div className="mx-auto">
            {message && <GeneralErrorMessage>{message}</GeneralErrorMessage>}
            {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}
            <div className="flex justify-between py-5 md:px-2">
              <h2 className="text-lg md:text-2xl font-semibold">
                {campaign.campaignName}
              </h2>
              <Link to={`/campaign/edit/${params.id}`}>
                <button className="h-8 w-20 text-base font-semibold bg-magenta-blue hover:bg-Dark-blue hover:text-magenta-blue ">
                  EDIT
                </button>
              </Link>
            </div>
            <div className="px-2">
              <div className="mt-8 mb-5">
                <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8">
                  <div className="flex flex-col gap-5 w-full">
                    <div>
                      {/* this image is suppose to be a video, for now we dnt have a video so i made it an image for fast work */}
                      {/* <img src={campaign.campaignVideo} alt="" /> */}
                      <iframe
                        title="C"
                        src={campaign.campaignVideo}
                        width="100px"
                        height="100px"
                      ></iframe>
                    </div>
                    <div className="flex md:flex-row md:gap-0 justify-between px-0 lg:px-5">
                      <div className="flex gap-1">
                        <a href={campaign.twitter}>
                          <img src={twitter} className="h-8 w-8" alt="" />
                        </a>
                        <a href={campaign.faceBook}>
                          <img src={faceBook} className="h-8 w-8" alt="" />
                        </a>
                        <a href={campaign.whatsApp}>
                          <img src={whatsapp} className="h-8 w-8" alt="" />
                        </a>
                      </div>
                      <div className="flex gap-1">
                        <img src={tags} alt="" />
                        <p className="text-base font-normal">
                          {campaign.campaignCategory}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-col border-2">
                      <div className="flex justify-between px-2 lg:px-14 pt-5 lg:pt-12 pb-5 lg:pb-9">
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium">
                            ₦{campaign.amountAlreadyRaised}
                          </h4>
                          <p className="text-sm font-normal">TOTAL RAISED</p>
                        </div>
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium" id="demo">
                            {weeks}:{days}:{minutes}:{seconds}
                          </h4>
                          <p className="text-sm font-normal">TIME LEFT</p>
                        </div>
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium">
                            {campaign.totalNumberOfCampaignDonors}
                          </h4>
                          <p className="text-sm font-normal">INVESTORS</p>
                        </div>
                      </div>
                      <div className="flex justify-between border-t px-2 lg:px-14 py-5 pb-5 lg:py-9">
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium">
                            {campaign.fundingType}
                          </h4>
                          <p className="text-sm font-normal">FUNDING TYPE</p>
                        </div>
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium">
                            ${campaign.pledged_profit_to_lenders}
                          </h4>
                          <p className="text-sm font-normal">
                            LENDERS
                            <br />
                            PROFIT
                          </p>
                        </div>
                        <div className="flex gap-4 lg:gap-8 flex-col text-center">
                          <h4 className="text-base font-medium">
                            {campaign.duration_pledged_profit} MONTHS
                          </h4>
                          <p className="text-sm font-normal">DURATION</p>
                        </div>
                      </div>
                    </div>
                    <div className="my-1">
                      <p className="text-lg font-medium mb-2">Progress</p>
                      <div className="py-2">
                        <div className="h-2 w-full bg-gray-200 rounded">
                          <div className="h-full w-1/2 bg-Dark-blue rounded" />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium text-base">
                          {progress}% raised
                        </p>
                        <p className="font-medium text-base">{p}</p>
                      </div>
                      <p>
                        This loan will be paid{" "}
                        {campaign.repayment_schedule_pledged_profit}{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mt-6 md:mt-4">
                      <button
                        className="border-2 border-Dark-blue text-Dark-blue font-medium bg-white w-36 lg:w-44 py-2 rounded hover:bg-Dark-blue hover:text-white ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowPitchDeckModal(true)}
                      >
                        View Pitchdeck
                      </button>
                      {showPitchDeckModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                  <h3 className="text-3xl font-semibold">
                                    {campaign.campaignName}
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowPitchDeckModal(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                  <h2 className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {campaign.pitchDeck}
                                  </h2>
                                  <img
                                    src={campaign.pitchDeck}
                                    alt={campaign.campaignName}
                                  />
                                </div>
                                {/*footer*/}
                                <div className="fleDeck}r-t border-solid border-blueGray-200 rounded-b">
                                  <button
                                    className="textDeck}-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowPitchDeckModal(false)}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowFundModal(false)}
                                  >
                                    Invest
                                  </button>
                                  {showFundModal ? (
                                    <>
                                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                          {/*content*/}
                                          <div className="mx-2 md:mx-0 bg-white rounded-md pt-10 pb-24 w-full md:w-4/5 lg:w-1/2 flex flex-col items-center gap-3 ">
                                            <h2 className="text-xl font-semibold">
                                              Invest in {campaign.campaignName}
                                            </h2>
                                            <div className="flex flex-col py-5 gap-4">
                                              <div className="flex flex-col gap-1">
                                                <h4 className="text-base font-medium">
                                                  Amount
                                                </h4>
                                                <input
                                                  className="h-12 border-2 border-gray-400 w-80 md:w-96 outline-none pl-5"
                                                  type="number"
                                                  onChange={(e) =>
                                                    setFundValue(e.target.value)
                                                  }
                                                />
                                              </div>
                                              {/* <div className='flex flex-col gap-1'> */}
                                              {/* <h4 className='text-base font-medium'>Payment method</h4> */}
                                              {/* <input className='h-12 border-2 w-80 md:w-96' /> */}
                                              {/* <div className="px-2 h-12 flex items-center w-80 md:w-96 border-2 border-gray-400"> */}
                                              {/*  */}
                                              {/* </div> */}
                                              {/* </div> */}
                                            </div>
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                              <button
                                                className="mt-3 border border-Dark-blue hover:bg-Dark-blue hover:text-white font-medium w-80 md:w-96 h-12 bg-white text-Dark-blue"
                                                type="button"
                                                onClick={() =>
                                                  setShowFundModal(false)
                                                }
                                              >
                                                Close
                                              </button>
                                              <button
                                                className="mt-3 border border-Dark-blue bg-Dark-blue text-white font-medium w-80 md:w-96 h-12 hover:bg-white hover:text-Dark-blue"
                                                type="button"
                                                onClick={(e) =>
                                                  InvestHandler(e)
                                                }
                                              >
                                                Invest
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                      <button
                        className="border-2 border-Dark-blue text-white font-medium bg-Dark-blue w-36 lg:w-44 py-2 rounded hover:bg-white hover:text-Dark-blue"
                        type="button"
                        onClick={(e) => InvestHandler(e)}
                      >
                        Invest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 mb-5 px-0 md:px-2 lg:px-4">
                <>
                  <div className="flex flex-wrap">
                    <div className="w-full flex gap-5 md:gap-10 border-b-2">
                      <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                      >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-lg font-semibold border-b-4  px-2 py-1 " +
                              (openTab === 1 ? "border-Dark-blue" : "")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-lg font-semibold border-b-4  px-2 py-1" +
                              (openTab === 2 ? "border-Dark-blue" : "")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            Comments
                          </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-lg font-semibold border-b-4  px-2 py-1" +
                              (openTab === 3 ? "border-Dark-blue" : "")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                          >
                            {donor}
                          </a>
                        </li>
                      </ul>
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <div className="pt-4">
                                <div className="lg:px-1">
                                  <div className="text-base text-gray-500 font-normal py-3 leading-6 md:w-3/4 lg:w-1/2">
                                    {campaign.investorBrief}
                                  </div>
                                  <div className="flex flex-col gap-4 mt-16 md:w-2/3 lg:w-5/12 ">
                                    <label className="text-base text-gray-600 font-medium">
                                      Share your thoughts about this campaign.
                                    </label>
                                    <textarea
                                      placeholder="This is an amazing business"
                                      className="border-2 border-gray-400 py-3 px-4 rounded-xl h-36 md:h-48 placeholder-gray-600 outline-none"
                                      onChange={(e) =>
                                        setComment(e.target.value)
                                      }
                                    />
                                    <div className="flex justify-between my-12 text-center">
                                      <button
                                        className="py-2 border-2 border-Dark-blue text-Dark-blue text-base font-medium rounded
                                         w-1/3 lg:w-1/4 hover:bg-Dark-blue hover:text-white flex gap-3 md:gap-6"
                                      >
                                        <img src={left} alt="" />
                                        <div>
                                          {" "}
                                          <Link to="">Back</Link>{" "}
                                        </div>
                                      </button>
                                      <button
                                        className="py-2 border-2 border-Dark-blue bg-Dark-blue text-white text-base font-medium rounded w-1/3 lg:w-1/4 hover:bg-white hover:text-Dark-blue"
                                        onClick={reviewSubmitHandler}
                                      >
                                        Comment
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={openTab === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              {campaign.reviews && campaign.reviews[0] ? (
                                <div>
                                  {campaign.reviews &&
                                    campaign.reviews.map((review) => (
                                      <CampaignReviewCard
                                        key={review._id}
                                        review={review}
                                      />
                                    ))}
                                </div>
                              ) : (
                                <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                  No Reviews Yet
                                </p>
                              )}
                            </div>
                            <div
                              className={openTab === 3 ? "block" : "hidden"}
                              id="link2"
                            >
                              {campaign.donors && campaign.donors[0] ? (
                                <div>
                                  {campaign.donors &&
                                    campaign.donors.map((loan) => (
                                      <LendersCard key={loan._id} loan={loan} />
                                    ))}
                                </div>
                              ) : (
                                <p className="text-center font-poppins text-bold text-xl h-screen p-20">
                                  No Reviews Yet
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default MyCampaignDetails;
